# AURA — Where India's Hidden Talent Meets the World

A cinematic, dark-themed artist discovery experience for Indian singers and performers.

## Stack

- React 19 + TanStack Start (Vite 7) — file-based routing in `src/routes`
- Tailwind CSS v4 (CSS-first design system in `src/styles.css`)
- Motion (Framer Motion) for animation
- Three.js + React Three Fiber + drei for the hero 3D orb
- Lucide React icons

## Run locally

```bash
bun install     # or: npm install
bun run dev     # or: npm run dev   -> http://localhost:8080
bun run build   # production build
```

## Structure

```
src/
├── components/aura/
│   ├── Navbar.tsx        sticky nav + animated mobile menu
│   ├── Hero.tsx          full-screen hero, lazy-loads the 3D scene
│   ├── AuraScene.tsx     R3F orb + particle field (client-only)
│   ├── Mission.tsx       why AURA exists
│   ├── Journey.tsx       Discover → Connect → Match → Form → Develop → Debut
│   ├── ArtistCard.tsx    single artist card
│   ├── DiscoverTalent.tsx artist grid
│   ├── VibeMatch.tsx     creative-match animation
│   ├── WhyAura.tsx       benefits grid
│   ├── Vision.tsx        two-column vision story
│   ├── Future.tsx        Today → Tomorrow → Future
│   ├── JoinAura.tsx      validated application form
│   ├── Footer.tsx        links, socials, newsletter
│   ├── Reveal.tsx        reduced-motion aware scroll reveal
│   └── SectionHeading.tsx
├── data/artists.ts       mock artist data (typed `Artist[]`)
├── lib/applications.ts   application submission layer
├── routes/index.tsx      page composition + SEO head
└── styles.css            design tokens, utilities, animations
```

## Accessibility & performance

- Semantic landmarks, one `<h1>`, ordered heading levels, ARIA labels on icon-only controls
- Keyboard navigable, visible focus rings, `role="alert"` form errors with focus management
- `prefers-reduced-motion` disables the 3D scene, scroll reveals and CSS animations
- The 3D scene is lazy-loaded client-side and simplifies (lower DPR, fewer particles) on small or low-core devices

## Connecting a real backend later

- **Applications**: `src/lib/applications.ts` is the single seam. Swap the localStorage write in `submitApplication` for a TanStack `createServerFn` call or an API request — no component changes needed.
- **Database**: enable Lovable Cloud to get Postgres, then store applications in an `artist_applications` table with row-level security (public insert, admin read).
- **Auth**: add sign-up/login with Lovable Cloud auth, then gate artist profile editing behind an `_authenticated` route layout.
- **Real artist profiles**: replace `src/data/artists.ts` with a loader that fetches the same `Artist[]` shape; `ArtistCard` needs no changes.
- **File/video uploads**: use Cloud storage buckets for audio/video demos and store the returned URL on the artist row.
