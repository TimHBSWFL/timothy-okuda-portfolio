import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="04" title="Skills" />
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 80}>
            <div className="h-full rounded-lg border border-border bg-surface p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-accent">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
