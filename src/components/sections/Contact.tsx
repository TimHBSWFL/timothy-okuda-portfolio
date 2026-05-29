import Reveal from "../Reveal";
import { profile } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon, FileIcon } from "../icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-28 text-center"
    >
      <Reveal>
        <p className="font-mono text-sm text-accent">05. What&apos;s next</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
          I&apos;m open to Data Analyst and Analytics Engineering roles. If
          you think I&apos;d be a good fit for your team, my inbox is always
          open.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <FileIcon className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
