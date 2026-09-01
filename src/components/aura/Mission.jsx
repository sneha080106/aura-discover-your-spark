import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
const stats = [
  {
    value: "28",
    label: "States full of unheard voices",
  },
  {
    value: "100s",
    label: "Of cities beyond the metros",
  },
  {
    value: "1",
    label: "Stage the world is watching",
  },
];
export function Mission() {
  return (
    <section id="mission" aria-labelledby="mission-title" className="section-pad relative">
      <div className="aura-blob top-1/4 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 bg-primary opacity-20" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          id="mission-title"
          eyebrow="Why AURA exists"
          title="Talent Shouldn't Depend on Where You Come From."
          description="Extraordinary voices exist everywhere — in small towns, in hostel rooms, in local competitions nobody filmed. What isn't equally available is access: to networks, to studios, to mentors, to other artists who share the same ambition. AURA exists to close that gap."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass h-full rounded-3xl p-8 text-center">
                <p className="text-aura font-display text-4xl font-bold">{s.value}</p>
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <blockquote className="mx-auto mt-16 max-w-3xl text-center">
            <p className="font-display text-xl leading-relaxed text-balance italic md:text-2xl">
              “India is full of extraordinary talent. Some of it just hasn't been discovered yet.”
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
