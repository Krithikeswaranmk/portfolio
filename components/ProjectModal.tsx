"use client";

import { Project } from "@/lib/data";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-2xl blur-xl"></div>
        <div className="relative bg-backgroundSecondary/95 backdrop-blur-xl border border-border rounded-2xl overflow-hidden">
          <div className="sticky top-0 bg-backgroundSecondary/95 backdrop-blur-xl border-b border-border px-8 py-6 flex items-center justify-between">
            <h2 id="project-title" className="text-3xl md:text-4xl font-bold gradient-text">{project.title}</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border text-foregroundMuted hover:text-foreground hover:border-accent-primary transition-all hover:scale-110"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-accent-primary to-accent-secondary rounded-full"></span>
                Problem
              </h3>
              <p className="text-foregroundMuted leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-accent-secondary to-accent-tertiary rounded-full"></span>
                Approach
              </h3>
              <p className="text-foregroundMuted leading-relaxed">{project.approach}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-accent-tertiary to-accent-primary rounded-full"></span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/30 rounded-full text-foreground text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-accent-primary to-accent-tertiary rounded-full"></span>
                Impact
              </h3>
              <p className="text-foregroundMuted leading-relaxed">{project.impact}</p>
            </div>
            {project.githubUrl && (
              <div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-background font-semibold rounded-lg hover:scale-105 transition-all"
                >
                  <span>View on GitHub</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

