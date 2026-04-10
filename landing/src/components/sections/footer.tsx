import { Github, GalleryHorizontalEnd } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-950/80 border-t backdrop-blur-md border-white/5 font-medium">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <GalleryHorizontalEnd className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">
                Neo Portfolio
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Create Modern Portfolio in One Command
            </p>
          </div>

          {/* Socials Section */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/deepakmodidev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deepakmodidev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Package Section */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Package</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.npmjs.com/package/create-neo-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  NPM Package
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-400">
            <span>Built by</span>
            <a
              href="https://github.com/deepakmodidev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-white font-semibold transition-colors"
            >
              deepakmodidev
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://github.com/deepakmodidev/create-neo-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-white flex items-center gap-1 font-semibold transition-colors"
            >
              <Github className="h-4 w-4" />
              Open Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
