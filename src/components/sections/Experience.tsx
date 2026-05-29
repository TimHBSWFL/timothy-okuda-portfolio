import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-border bg-surface/40"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading index="02" title="Experience" />
        </Reveal>

        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <article className="rounded-lg border border-border bg-surface p-6 sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {job.role}{" "}
                    <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
