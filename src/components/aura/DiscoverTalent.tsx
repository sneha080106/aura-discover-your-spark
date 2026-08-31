import { artists } from "@/data/artists";
import { ArtistCard } from "./ArtistCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function DiscoverTalent() {
  return (
    <section id="discover" aria-labelledby="discover-title" className="section-pad relative">
      <div className="aura-blob top-0 right-0 h-[26rem] w-[26rem] bg-accent opacity-20" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          id="discover-title"
          eyebrow="Discover talent"
          title="Voices Worth Hearing."
          description="A preview of the kind of artists AURA is built for. These profiles are illustrative — real artists are joining now."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist, i) => (
            <Reveal key={artist.id} delay={i * 0.08}>
              <ArtistCard artist={artist} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
