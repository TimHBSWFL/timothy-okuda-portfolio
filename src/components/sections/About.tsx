import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { profile, traits } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>
      <Reveal delay={80}>
        <p className="max-w-3xl text-base leading-relaxed text-muted">
          {profile.about}
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {traits.map((trait, i) => (
          <Reveal key={trait.title} delay={120 + i * 80}>
            <div className="h-full rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent/50">
              <div className="mb-2 h-1.5 w-8 rounded-full bg-accent" />
              <h3 className="text-base font-semibold text-foreground">
                {trait.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {trait.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
