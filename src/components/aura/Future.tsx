import { ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const stages = [
  { label: "TODAY", copy: "Artist discovery and connection." },
  { label: "TOMORROW", copy: "Artist collaboration and group formation." },
  {
    label: "FUTURE",
    copy: "Training, mentorship, production, artist development, and global debuts.",
  },
];

export function Future() {
  return (
    <section aria-labelledby="future-title" className="section-pad relative">
      <div className="aura-blob top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 bg-primary opacity-20" />
      <div className="relative mx-auto max-w-3xl px-5">
        <SectionHeading id="future-title" eyebrow="Where we're going" title="The Road Ahead" />

        <ol className="mt-16 space-y-4">
          {stages.map((s, i) => (
            <li key={s.label}>
              <Reveal delay={i * 0.12}>
                <div className="glass rounded-3xl p-8 text-center">
                  <p className="text-aura font-display text-2xl font-bold tracking-[0.3em]">
                    {s.label}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground md:text-base">{s.copy}</p>
                </div>
                {i < stages.length - 1 && (
                  <div className="flex justify-center py-4" aria-hidden="true">
                    <ArrowDown className="animate-aura-float h-5 w-5 text-accent" />
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
