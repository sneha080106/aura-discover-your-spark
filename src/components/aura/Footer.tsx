import { useState, type FormEvent } from "react";
import { Instagram, Youtube, Twitter, Check } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Discover", href: "#discover" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Vision", href: "#vision" },
  { label: "Join AURA", href: "#join" },
];

const socials = [
  { label: "AURA on Instagram", href: "#", icon: Instagram },
  { label: "AURA on YouTube", href: "#", icon: Youtube },
  { label: "AURA on X", href: "#", icon: Twitter },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <footer className="relative border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.4fr]">
          <div>
            <p className="text-aura font-display text-2xl font-bold tracking-[0.3em]">AURA</p>
            <p className="mt-1 text-[0.6rem] tracking-[0.4em] text-muted-foreground">
              ENTERTAINMENT
            </p>
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              Where India's Hidden Talent Meets the World.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    <s.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-sm tracking-[0.25em] text-muted-foreground uppercase">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg leading-snug font-bold">
              STAY CLOSE TO THE NEXT GENERATION OF TALENT.
            </h2>
            {subscribed ? (
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-accent" role="status">
                <Check className="h-4 w-4" aria-hidden="true" />
                You're on the list. Welcome to AURA.
              </p>
            ) : (
              <form onSubmit={onSubscribe} noValidate className="mt-5">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    aria-invalid={!!error}
                    aria-describedby={error ? "newsletter-error" : undefined}
                    className="w-full rounded-full border border-input bg-secondary/60 px-5 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p id="newsletter-error" role="alert" className="mt-2 text-xs text-destructive">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <p className="mt-14 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AURA. Built for the artists who haven't been heard yet.
        </p>
      </div>
    </footer>
  );
}
