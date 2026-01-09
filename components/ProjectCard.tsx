"use client";

import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const gradientVariants = [
  "from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20",
  "from-accent-secondary/20 via-accent-tertiary/20 to-accent-primary/20",
  "from-accent-tertiary/20 via-accent-primary/20 to-accent-secondary/20",
  "from-accent-primary/20 via-accent-tertiary/20 to-accent-secondary/20",
];

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const gradientIndex = project.id.charCodeAt(0) % gradientVariants.length;
  
  return (
    <div
      className="group relative cursor-pointer"
      onClick={() => onOpen(project)}
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradientVariants[gradientIndex]} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className="relative bg-backgroundSecondary/80 backdrop-blur-sm border border-border rounded-2xl p-6 h-full hover:border-accent-primary/50 transition-all duration-300 group-hover:scale-[1.02]">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:bg-gradient-to-r group-hover:from-accent-primary group-hover:to-accent-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all">
            {project.title}
          </h3>
          <p className="text-foregroundMuted mb-4 line-clamp-3 leading-relaxed">{project.problem}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-full text-foregroundMuted group-hover:border-accent-primary/50 group-hover:text-foreground transition-all"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1.5 text-xs text-foregroundMuted/60">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
        {project.status && (
          <span className="text-xs text-accent-tertiary italic mb-4 block">{project.status}</span>
        )}
        <div className="mt-6 flex items-center text-accent-primary text-sm font-semibold group-hover:text-accent-secondary transition-colors">
          <span>View Details</span>
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

