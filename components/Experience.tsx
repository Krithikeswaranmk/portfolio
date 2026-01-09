import { portfolioData } from "@/lib/data";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-sm text-accent-primary font-mono tracking-wider uppercase mb-4 block">
            Career
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"></div>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary"></div>
          <div className="relative pl-16">
            <div className="absolute left-[58px] top-0 w-6 h-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full border-4 border-background shadow-lg shadow-accent-primary/50"></div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-tertiary/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-backgroundSecondary/80 backdrop-blur-sm border border-border rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-0">
                    {experience.title}
                  </h3>
                  <span className="text-accent-primary font-mono text-sm">{experience.period}</span>
                </div>
                <p className="text-lg text-accent-secondary mb-6 font-semibold">
                  {experience.company} • {experience.location}
                </p>
                <ul className="space-y-4">
                  {experience.description.map((item, index) => (
                    <li
                      key={index}
                      className="text-foregroundMuted flex items-start group"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mr-4 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                      <span className="group-hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

