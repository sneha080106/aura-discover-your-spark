import { Reveal } from "./Reveal";
export function Vision() {
  return (
    <section id="vision" aria-labelledby="vision-title" className="section-pad relative">
      <div className="aura-blob bottom-0 left-0 h-[28rem] w-[28rem] bg-accent opacity-20" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-accent uppercase">
              Our vision
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="vision-title"
              className="text-3xl leading-[1.05] font-bold sm:text-4xl md:text-5xl"
            >
              WE'RE NOT LOOKING FOR PERFECT.
              <span className="text-aura mt-2 block">WE'RE LOOKING FOR POTENTIAL.</span>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <Reveal delay={0.1}>
            <p>
              AURA believes extraordinary talent can come from anywhere — a rehearsal room in
              Guwahati, a wedding stage in Indore, a phone recording made at midnight.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              We're at the beginning. Today AURA is a growing platform and a community, not a large
              entertainment company. What we're building toward is an Indian entertainment ecosystem
              that discovers, develops, and introduces exceptional artists to audiences around the
              world.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="font-display text-foreground">
              If you have something real, we want to hear it — polished or not.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
