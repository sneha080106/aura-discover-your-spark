import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/aura/Navbar";
import { Hero } from "@/components/aura/Hero";
import { Mission } from "@/components/aura/Mission";
import { Journey } from "@/components/aura/Journey";
import { DiscoverTalent } from "@/components/aura/DiscoverTalent";
import { VibeMatch } from "@/components/aura/VibeMatch";
import { WhyAura } from "@/components/aura/WhyAura";
import { Vision } from "@/components/aura/Vision";
import { Future } from "@/components/aura/Future";
import { JoinAura } from "@/components/aura/JoinAura";
import { Footer } from "@/components/aura/Footer";
const title = "AURA — Where India's Hidden Talent Meets the World";
const description =
  "AURA helps talented Indian singers and performers get discovered, connect with artists, find creative matches, and prepare for the global stage.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title,
      },
      {
        name: "description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Journey />
        <DiscoverTalent />
        <VibeMatch />
        <WhyAura />
        <Vision />
        <Future />
        <JoinAura />
      </main>
      <Footer />
    </div>
  );
}
