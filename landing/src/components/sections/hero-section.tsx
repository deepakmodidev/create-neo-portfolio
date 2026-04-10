"use client";
import { ArrowUpRight, Code2, Package, Sparkles, Zap } from "lucide-react";
import CommandBlock from "../ui/command-block";
import { FadeInWrapper } from "../ui/fade-in-wrapper";

export default function Hero() {
  return (
    <section className="relative z-30 py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-2 text-center flex items-center -mb-20 sm:-mb-28 lg:-mb-35">
      <div className="container mx-auto max-w-6xl px-2">
        <FadeInWrapper delay={100}>
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border bg-black/40 border-white/20 text-white hover:bg-black/50 font-semibold cursor-pointer">
              <span className="font-medium">Launch in 120 Seconds</span>
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
              <a
                href="https://deepakmodidev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center xs:inline-flex hover:text-blue-300 transition-colors"
              >
                See It Live
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </FadeInWrapper>

        {/* Main Headline */}
        <FadeInWrapper delay={200}>
          <h1 className="mb-4 sm:mb-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight sm:leading-snug text-center px-2">
            <span className="block bg-gradient-to-r from-neutral-50 via-gray-300 to-gray-400 bg-clip-text text-transparent transition-all duration-300">
              npx and Done
            </span>
            <span
              className="bg-gradient-to-r from-white via-slate-400 to-gray-400 bg-clip-text text-transparent transition-all duration-300"
            >
              Your Portfolio is Live !
            </span>
          </h1>
        </FadeInWrapper>

        {/* Subtitle */}
        <FadeInWrapper delay={300}>
          <p className="mb-4 sm:mb-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-4">
            A CLI tool that instantly creates modern, responsive portfolio with
            Next.js, Tailwind CSS, and TypeScript - minimal setup, maximum
            impact.
          </p>
        </FadeInWrapper>

        <FadeInWrapper delay={400}>
          <div className="mb-4 sm:mb-4">
            <CommandBlock />
          </div>
        </FadeInWrapper>

        {/* Feature Highlights */}
        <FadeInWrapper delay={500}>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 p-2 max-w-5xl mx-auto">
            {[
              {
                icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />,
                label: "Easy Customization",
              },
              {
                icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />,
                label: "TypeScript Ready",
              },
              {
                icon: (
                  <Package className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                ),
                label: "One Command Setup",
              },
              {
                icon: (
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                ),
                label: "Zero config needed",
              },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-white/5 min-h-[44px] sm:min-h-[48px]"
              >
                {icon}
                <span className="font-medium text-gray-300 text-xs sm:text-sm lg:text-base whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </FadeInWrapper>

        {/* Prerequisites */}
        {/* <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-16 text-sm">
                    <div className="text-center flex-1 min-w-[160px] max-w-xs w-full sm:w-auto py-3 bg-gray-900/20 rounded-xl">
                        <div className="text-lg font-bold text-white">Node.js 16+</div>
                        <div className="text-gray-400">Required</div>
                    </div>
                    <div className="text-center flex-1 min-w-[160px] max-w-xs w-full sm:w-auto py-3 bg-gray-900/20 rounded-xl">
                        <div className="text-lg font-bold text-white">Next.js App Router</div>
                        <div className="text-gray-400">Recommended</div>
                    </div>
                    <div className="text-center flex-1 min-w-[160px] max-w-xs w-full sm:w-auto py-3 bg-gray-900/20 rounded-xl">
                        <div className="text-lg font-bold text-white">npm/yarn/pnpm</div>
                        <div className="text-gray-400">Auto-detected</div>
                    </div>
                </div> */}
      </div>
    </section>
  );
}
