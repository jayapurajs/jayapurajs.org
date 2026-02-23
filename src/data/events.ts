// src/data/events.ts
import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/events/**/*.{jpeg,jpg,png,webp}",
  { eager: true }
);

function getImage(path: string): ImageMetadata {
  const fullPath = `../assets/images/events/${path}`;
  if (!images[fullPath]) {
    throw new Error(`Image not found: ${fullPath}`);
  }

  return images[fullPath].default;
}

export interface Speaker {
  name: string;
  topic: string;
  image: ImageMetadata;
  desc?: string;
  slidesUrl?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  sub: string;
}

export interface Event {
  slug: string;
  title: string;
  desc: string;
  category: string;
  date: string;
  time?: string;
  location: string;
  locationUrl?: string;
  image: ImageMetadata;
  attendees?: number | null;
  registrationUrl?: string;
  registrationStatus: boolean;
  recapUrl?: string;
  documentationUrl?: string;
  galleryImages?: ImageMetadata[];
  speakers?: Speaker[];
  agenda?: AgendaItem[];
}

export const events: Event[] = [
  {
    slug: "initial-community-meetup",
    title: "Initial Community Meetup",
    desc: "Join us for the very first JayapuraJS meetup! We'll kick off with two talks covering computational thinking fundamentals and getting started with JavaScript programming.",
    category: "Meetup",
    date: "2026-03-14",
    time: "15:00 - 17:00 WIT",
    location: "Cafe Socio Culture",
    locationUrl: "https://maps.google.com/?q=Cafe+Socio+Culture+Jayapura",
    image: getImage("1-initial-meetup.jpeg"),
    attendees: 20,
    registrationStatus: false,
    registrationUrl: "https://forms.gle/FrCgJvmP8HC6gpkY6",
    speakers: [
      {
        name: "Theis Andatu",
        topic: "Computational Thinking for Developers",
        image: getImage("speakers/theis-andatu.jpeg"),
        desc: "Learn the core principles of computational thinking and how to apply them in your daily development workflow.",
      },
      {
        name: "Fidel Silak",
        topic: "Getting Started the Journey of Programming with JavaScript",
        image: getImage("speakers/fidel-silak.jpeg"),
        desc: "A beginner-friendly introduction to JavaScript and tips for starting your programming journey.",
      },
    ],
    agenda: [
      { time: "15:00", title: "Registration", sub: "Check-in & networking" },
      { time: "15:20", title: "Opening", sub: "Welcome to JayapuraJS" },
      {
        time: "15:30",
        title: "Computational Thinking for Developers",
        sub: "Theis Andatu • Talk + Q&A",
      },
      {
        time: "16:15",
        title: "Getting Started the Journey of Programming with JavaScript",
        sub: "Fidel Silak • Talk + Q&A",
      },
      { time: "17:20", title: "Closing", sub: "Group photo & announcements" },
    ],
  },
];