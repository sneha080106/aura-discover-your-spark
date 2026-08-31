import { Suspense, lazy, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

// The 3D scene is browser-only and heavy: never import it during SSR.
const AuraScene = lazy(() => import("./AuraScene"));

export function Hero() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [simplified, setSimplified] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simplify the scene on small screens / low-core devices.
    const small = window.matchMedia("(max-width: 768px)").matches;
    const lowPower = (navigator.hardwareConcurrency ?? 8) <= 4;
    setSimplified(small || lowPower);
  }, []);

  const show3d = mounted && !reduced;

  const line = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ambient lighting */}
      <div className="aura-blob animate-aura-pulse top-[-10%] left-[-10%] h-[42rem] w-[42rem] bg-primary" />
      <div className="aura-blob animate-aura-pulse right-[-15%] bottom-[-20%] h-[38rem] w-[38rem] bg-accent" />

      {/* 3D layer */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(70%_60%_at_70%_45%,black,transparent)]" aria-hidden="true">
        {show3d ? (
          <Suspense fallback={null}>
            <AuraScene simplified={simplified} />
          </Suspense>
        ) : (
          // Static, reduced-motion friendly fallback
          <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-3xl" />
        )}
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl"
        >
          <motion.p
            variants={line}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Artist discovery • India
          </motion.p>

          <h1 id="hero-title" className="mt-7 text-4xl leading-[0.95] font-bold sm:text-6xl lg:text-7xl">
            <motion.span
              variants={line}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              INDIA HAS TALENT.
            </motion.span>
            <motion.span
              variants={line}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-aura mt-2 block"
            >
              THE WORLD JUST HASN'T SEEN IT YET.
            </motion.span>
          </h1>

          <motion.p
            variants={line}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            AURA is building a new space for talented Indian singers and performers to be
            discovered, connect with other artists, form something extraordinary, and prepare for
            the global stage.
          </motion.p>

          <motion.div
            variants={line}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#join"
              className="glow-ring group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
            >
              Discover Your AURA
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#discover"
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Play className="h-4 w-4 text-accent" />
              Explore Talent
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
