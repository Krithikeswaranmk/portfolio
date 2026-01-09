import { portfolioData } from "@/lib/data";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm text-accent-primary font-mono tracking-wider uppercase mb-4 block">
            Academic
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto"></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-backgroundSecondary/80 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-0">
                {education.degree}
              </h3>
              <span className="text-accent-primary font-mono text-sm">{education.period}</span>
            </div>
            <p className="text-xl text-accent-secondary mb-4 font-semibold">{education.institution}</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-lg">
              <span className="text-foreground font-bold">GPA:</span>
              <span className="text-accent-primary font-mono text-lg font-bold">{education.gpa}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

