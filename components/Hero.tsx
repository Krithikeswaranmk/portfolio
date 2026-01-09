"use client";

import { portfolioData } from "@/lib/data";

export default function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const nameParts = portfolioData.personal.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-tertiary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Top badge */}
        <div className="mb-12 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 backdrop-blur-sm">
          <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></span>
          <span className="text-xs md:text-sm text-accent-primary font-mono tracking-widest uppercase">
            Applied Data Scientist
          </span>
        </div>

        {/* Name with elegant typography */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-extralight tracking-tight leading-none mb-4">
            <span className="block">
              <span 
                className="inline-block bg-gradient-to-r from-accent-primary via-accent-primary to-accent-secondary bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00d9ff 0%, #00d9ff 40%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {firstName}
              </span>
            </span>
            <span className="block mt-2">
              <span 
                className="inline-block bg-gradient-to-r from-accent-secondary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #7c3aed 60%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {lastName}
              </span>
            </span>
          </h1>
        </div>

        {/* Professional titles */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
            <span className="text-xl md:text-2xl font-light text-foreground tracking-wide">
              Applied Data Scientist
            </span>
            <span className="w-1 h-1 bg-accent-primary rounded-full"></span>
            <span className="text-xl md:text-2xl font-light text-foreground tracking-wide">
              LLM Research Engineer
            </span>
          </div>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-primary"></div>
            <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-secondary"></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-foregroundMuted mb-16 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
          Building end-to-end ML and LLM pipelines with a focus on real-world
          applicability, interpretability, and deployment readiness.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-background font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Me
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3.5 border border-accent-primary/40 text-foreground font-medium rounded-full hover:border-accent-primary hover:bg-accent-primary/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-1.004-.013-1.845-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </span>
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3.5 border border-accent-secondary/40 text-foreground font-medium rounded-full hover:border-accent-secondary hover:bg-accent-secondary/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

