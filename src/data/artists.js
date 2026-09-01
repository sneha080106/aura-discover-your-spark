import riya from "@/assets/artist-riya.jpg";
import arjun from "@/assets/artist-arjun.jpg";
import mira from "@/assets/artist-mira.jpg";
import dev from "@/assets/artist-dev.jpg";
/**
 * Mock artist data. When a backend is added, replace this module with a
 * fetch/server-function that returns the same `Artist[]` shape.
 */
export const artists = [
  {
    id: "riya",
    stageName: "RIYA",
    location: "Kolkata",
    skill: "Singer",
    style: "Indie Soul / Bangla Fusion",
    languages: ["Bengali", "Hindi", "English"],
    image: riya,
    imageAlt: "Portrait of RIYA, a singer from Kolkata, lit by neon stage light",
  },
  {
    id: "arjun",
    stageName: "ARJUN",
    location: "Mumbai",
    skill: "Vocalist & Performer",
    style: "R&B / Pop",
    languages: ["Hindi", "Marathi", "English"],
    image: arjun,
    imageAlt: "Portrait of ARJUN, a vocalist and performer from Mumbai, under stage lighting",
  },
  {
    id: "mira",
    stageName: "MIRA",
    location: "Bangalore",
    skill: "Singer",
    style: "Alt-Pop / Carnatic Influence",
    languages: ["Kannada", "Tamil", "English"],
    image: mira,
    imageAlt: "Portrait of MIRA, a singer from Bangalore, beside a neon light",
  },
  {
    id: "dev",
    stageName: "DEV",
    location: "Delhi",
    skill: "Singer & Dancer",
    style: "Hip-Hop / Dance Pop",
    languages: ["Hindi", "Punjabi", "English"],
    image: dev,
    imageAlt: "Portrait of DEV, a singer and dancer from Delhi, in violet stage light",
  },
];
