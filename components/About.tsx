import { portfolioData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-sm text-accent-primary font-mono tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Professional Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-backgroundSecondary/80 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-foregroundMuted leading-relaxed">
              {portfolioData.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

