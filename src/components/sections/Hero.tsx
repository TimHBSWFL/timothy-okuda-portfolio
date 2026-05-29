import Image from "next/image";
import photo from "../../../public/tim-okuda.jpg";
import { profile } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon, FileIcon } from "../icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
        aria-hidden
      />
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 py-28 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-4 font-mono text-sm text-accent">
            Hi, my name is
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-2xl font-semibold text-muted sm:text-3xl">
            {profile.tagline}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {profile.subTagline} Domain expertise in insurance, operations,
            and accounting — turning manual processes into reliable, scalable
            data pipelines.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <FileIcon className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted transition-colors hover:text-accent"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="relative mx-auto h-44 w-44 sm:h-56 sm:w-56">
            <div className="absolute -inset-2 rounded-full bg-accent/20 blur-2xl" />
            <Image
              src={photo}
              alt={`Portrait of ${profile.name}`}
              placeholder="blur"
              priority
              className="relative h-full w-full rounded-full object-cover ring-2 ring-accent/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
