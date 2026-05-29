import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { projects, profile } from "@/lib/content";
import { GitHubIcon } from "../icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-border bg-surface/40"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading index="05" title="Projects" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 90}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/60"
              >
                <div className="mb-4 flex items-center justify-between">
                  <GitHubIcon className="h-7 w-7 text-muted transition-colors group-hover:text-accent" />
                  <span
                    className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden
                  >
                    ↗
                  </span>
                </div>
                <h3 className="font-mono text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-xs text-accent-soft"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-10 text-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              See more on GitHub
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
