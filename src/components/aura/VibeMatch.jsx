import { motion, useReducedMotion } from "motion/react";
import { Music2, Mic2, Sparkles, Languages, Star, Target } from "lucide-react";
import { artists } from "@/data/artists";
import { Reveal } from "./Reveal";
const factors = [
  {
    icon: Music2,
    label: "Musical style",
  },
  {
    icon: Mic2,
    label: "Vocal strengths",
  },
  {
    icon: Star,
    label: "Performance skills",
  },
  {
    icon: Sparkles,
    label: "Dance ability",
  },
  {
    icon: Languages,
    label: "Languages",
  },
  {
    icon: Target,
    label: "Artistic goals",
  },
];

/** Two artist cards drift toward each other and a glowing link forms. */
export function VibeMatch() {
  const reduced = useReducedMotion();
  const a = artists[0];
  const b = artists[3];
  const drift = (from) =>
    reduced
      ? {}
      : {
          initial: {
            x: from,
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
          viewport: {
            once: true,
            amount: 0.4,
          },
          transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          },
        };
  return (
    <section id="vibe-match" aria-labelledby="match-title" className="section-pad relative">
      <div className="aura-blob top-1/3 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 bg-primary opacity-25" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-accent uppercase">
              Vibe match
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="match-title"
              className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl"
            >
              FIND YOUR <span className="text-aura">CREATIVE MATCH.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Chemistry is what turns two good artists into one unforgettable act. AURA will help
              you find collaborators whose sound, energy and ambition line up with yours.
            </p>
          </Reveal>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {factors.map((f, i) => (
              <Reveal key={f.label} delay={0.1 + i * 0.05}>
                <li className="glass flex items-center gap-2.5 rounded-2xl px-4 py-3 text-sm">
                  <f.icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground/85">{f.label}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <a
              href="#join"
              className="glow-ring mt-9 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Find Your Vibe
            </a>
          </Reveal>
        </div>

        {/* Matching visual */}
        <div
          className="relative flex items-center justify-center gap-3 sm:gap-6"
          aria-hidden="true"
        >
          <motion.div {...drift(-40)} className="glass w-40 rounded-3xl p-3 sm:w-48">
            <img
              src={a.image}
              alt=""
              width={768}
              height={960}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <p className="mt-3 text-center font-display text-sm tracking-[0.18em]">{a.stageName}</p>
            <p className="text-center text-xs text-muted-foreground">{a.location}</p>
          </motion.div>

          <motion.div
            initial={
              reduced
                ? false
                : {
                    opacity: 0,
                    scale: 0.6,
                  }
            }
            whileInView={
              reduced
                ? {}
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="relative"
          >
            <span className="glow-ring flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xs font-bold tracking-widest text-primary-foreground">
              92%
            </span>
            <span className="absolute top-1/2 -left-6 h-px w-6 bg-gradient-to-l from-accent to-transparent" />
            <span className="absolute top-1/2 -right-6 h-px w-6 bg-gradient-to-r from-accent to-transparent" />
          </motion.div>

          <motion.div {...drift(40)} className="glass w-40 rounded-3xl p-3 sm:w-48">
            <img
              src={b.image}
              alt=""
              width={768}
              height={960}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <p className="mt-3 text-center font-display text-sm tracking-[0.18em]">{b.stageName}</p>
            <p className="text-center text-xs text-muted-foreground">{b.location}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
