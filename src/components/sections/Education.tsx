import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <section id="education" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading index="03" title="Education" />
        </Reveal>

        <div className="space-y-8">
          {education.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <article className="rounded-lg border border-border bg-surface p-6 sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.name}{" "}
                    <span className="text-accent">@ {item.provider}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.capstones.map((c) => (
                    <a
                      key={c.url}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-accent hover:text-accent-soft underline underline-offset-4"
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
