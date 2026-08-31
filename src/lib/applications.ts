/**
 * Application storage layer.
 *
 * Today this simulates a network call and persists to localStorage.
 * To connect a real backend later, replace `submitApplication` with a call to
 * a server function / API endpoint — the rest of the app only depends on this
 * signature.
 */

export type ArtistApplication = {
  fullName: string;
  stageName: string;
  age: string;
  city: string;
  email: string;
  primarySkill: string;
  musicStyle: string;
  languages: string;
  about: string;
  socialLink?: string;
};

const STORAGE_KEY = "aura.applications";

export async function submitApplication(application: ArtistApplication): Promise<void> {
  // Simulated latency so the loading state is real-feeling.
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (typeof window === "undefined") return;
  const existing = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
  existing.push({ ...application, submittedAt: new Date().toISOString() });
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}
