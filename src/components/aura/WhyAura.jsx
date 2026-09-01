import { Eye, Users, Layers, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
const reasons = [
  {
    icon: Eye,
    title: "Discover",
    copy: "Give your talent a place to be seen.",
  },
  {
    icon: Users,
    title: "Connect",
    copy: "Meet artists beyond your city and existing network.",
  },
  {
    icon: Layers,
    title: "Collaborate",
    copy: "Find people who can help bring your creative ideas to life.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    copy: "Become part of a future artist-development ecosystem.",
  },
];
export function WhyAura() {
  return (
    <section aria-labelledby="why-title" className="section-pad relative">
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading id="why-title" eyebrow="Why join" title="Why Join AURA" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <div className="group glass h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <r.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
