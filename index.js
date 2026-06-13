#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const readline = require('readline');

// Minimal progress bar (used for the file copy step)
function progress(current, total, title) {
    const percent = Math.round((current / total) * 100);
    const filled = Math.round((current / total) * 20);
    const bar = '█'.repeat(filled) + '░'.repeat(20 - filled);
    process.stdout.write(`\r${title}: [${bar}] ${percent}%`);
    if (current >= total) console.log();
}

// Recursive copy (renames gitignore.template -> .gitignore along the way)
function copyDir(src, dest, callback) {
    if (!fs.existsSync(src)) return;

    if (fs.statSync(src).isDirectory()) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(item => {
            const srcPath = path.join(src, item);
            const destPath = path.join(
                dest,
                item === 'gitignore.template' ? '.gitignore' : item
            );
            copyDir(srcPath, destPath, callback);
        });
    } else {
        fs.copyFileSync(src, dest);
        callback && callback();
    }
}

// Count files (so the copy progress bar knows the total)
function countFiles(dir) {
    if (!fs.existsSync(dir)) return 0;
    return fs.readdirSync(dir).reduce((count, item) => {
        const fullPath = path.join(dir, item);
        return count + (fs.statSync(fullPath).isDirectory() ? countFiles(fullPath) : 1);
    }, 0);
}

// Indeterminate spinner for long-running async tasks
function spin(msg) {
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let i = 0;
    const interval = setInterval(
        () => process.stdout.write(`\r${frames[i++ % frames.length]} ${msg}`),
        80
    );
    return (ok = true) => {
        clearInterval(interval);
        process.stdout.write(`\r${ok ? '✓' : '✗'} ${msg}\n`);
    };
}

// Run a shell command without blocking the event loop (keeps the spinner alive)
function run(cmd, cwd) {
    return new Promise((resolve, reject) => {
        exec(cmd, { cwd, maxBuffer: 10 * 1024 * 1024 }, error =>
            error ? reject(error) : resolve()
        );
    });
}

// Main
async function create(name) {
    const templateDir = path.join(__dirname, 'template');

    if (fs.existsSync(name)) {
        console.log(`❌ Directory '${name}' already exists!`);
        process.exit(1);
    }

    console.log(`\n📁 Creating ${name}...\n`);

    // Copy template files
    const total = countFiles(templateDir);
    let current = 0;
    copyDir(templateDir, name, () => progress(++current, total, '📄 Copying'));
    console.log('✓ Files copied!\n');

    // Install dependencies
    const stopInstall = spin('📦 Installing packages...');
    try {
        await run('npm install --silent', name);
        stopInstall();
    } catch (error) {
        stopInstall(false);
        console.log('❌ Install failed:', error.message);
        process.exit(1);
    }

    // Initialize a git repository (optional — never fatal)
    try {
        execSync('git init', { cwd: name, stdio: 'pipe' });
        execSync('git add .', { cwd: name, stdio: 'pipe' });
        execSync('git commit -m "Initial commit from neo-portfolio"', { cwd: name, stdio: 'pipe' });
        console.log('✓ Git repository initialized!');
    } catch {
        console.log('⚠️  Skipped git init (optional).');
    }

    console.log(`\n🎉 Done!\n\nNext steps:\n  cd ${name}\n  npm run dev\n`);
}

// Entry point — accept the name as an argument, or prompt for it
if (process.argv[2]) {
    create(process.argv[2]);
} else {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Project name [neo-portfolio]: ', answer => {
        rl.close();
        create(answer.trim() || 'neo-portfolio');
    });
}
