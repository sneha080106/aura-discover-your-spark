import { Search, Handshake, Sparkles, Mic, Rocket, Globe } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
const steps = [
  {
    icon: Search,
    title: "DISCOVER",
    copy: "Show your talent to the world.",
  },
  {
    icon: Handshake,
    title: "CONNECT",
    copy: "Meet artists who share your ambition.",
  },
  {
    icon: Sparkles,
    title: "MATCH",
    copy: "Find artists whose style and creative energy complement yours.",
  },
  {
    icon: Mic,
    title: "FORM",
    copy: "Build something bigger together.",
  },
  {
    icon: Rocket,
    title: "DEVELOP",
    copy: "Grow through collaboration, learning, and future mentorship opportunities.",
  },
  {
    icon: Globe,
    title: "DEBUT",
    copy: "Prepare for the world stage.",
  },
];
export function Journey() {
  return (
    <section id="how-it-works" aria-labelledby="journey-title" className="section-pad relative">
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          id="journey-title"
          eyebrow="The AURA journey"
          title="How AURA Works"
          description="Six stages, one path — from the first upload to the moment the world hears you."
        />

        {/* Horizontal scroll timeline on mobile, grid on larger screens */}
        <ol className="mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {steps.map((s, i) => (
            <li key={s.title} className="w-[78%] shrink-0 snap-center md:w-auto">
              <Reveal delay={i * 0.06}>
                <div className="group glass relative h-full overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="absolute inset-x-0 -top-24 h-40 bg-primary/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-accent">
                      <s.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm text-muted-foreground/60">0{i + 1}</span>
                  </div>
                  <h3 className="relative mt-6 font-display text-lg font-bold tracking-[0.18em]">
                    {s.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.copy}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
