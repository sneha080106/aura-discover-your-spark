import { MapPin } from "lucide-react";
export function ArtistCard({ artist }) {
  return (
    <article className="group glass relative overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-2">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={artist.image}
          alt={artist.imageAlt}
          width={768}
          height={960}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-primary/20 blur-2xl" />
        </div>
      </div>

      <div className="relative -mt-14 p-6">
        <h3 className="font-display text-2xl font-bold tracking-[0.16em]">{artist.stageName}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          {artist.skill} • {artist.location}
        </p>
        <p className="mt-4 text-sm text-foreground/80">{artist.style}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {artist.languages.map((lang) => (
            <li
              key={lang}
              className="rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] tracking-wide text-muted-foreground"
            >
              {lang}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          View Profile
        </button>
      </div>
    </article>
  );
}
