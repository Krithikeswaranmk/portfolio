import { portfolioData } from "@/lib/data";

const accentColors = [
  "from-accent-primary to-accent-secondary",
  "from-accent-secondary to-accent-tertiary",
  "from-accent-tertiary to-accent-primary",
  "from-accent-primary to-accent-tertiary",
  "from-accent-secondary to-accent-primary",
  "from-accent-tertiary to-accent-secondary",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm text-accent-primary font-mono tracking-wider uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((category, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 rounded-xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              ></div>
              <div className="relative bg-backgroundSecondary/80 backdrop-blur-sm border border-border rounded-xl p-6 h-full hover:border-accent-primary/50 transition-all duration-300 group-hover:scale-[1.02]">
                <div className={`inline-block mb-4 p-2 rounded-lg bg-gradient-to-r ${accentColors[index % accentColors.length]} opacity-20`}>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-foregroundMuted flex items-center group/item"
                    >
                      <span className={`w-2 h-2 bg-gradient-to-r ${accentColors[index % accentColors.length]} rounded-full mr-3 group-hover/item:scale-150 transition-transform`}></span>
                      <span className="group-hover/item:text-foreground transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

