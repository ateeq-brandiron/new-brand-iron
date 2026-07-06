import {
  BookOpen,
  Mic,
  PlayCircle,
  Presentation,
  type LucideIcon,
} from "lucide-react";

export type ResourceSubsection = {
  slug: string;
  title: string;
  description: string;
};

export type ResourceSection = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  subsections: ResourceSubsection[];
};

export const resourceSections: ResourceSection[] = [
  {
    slug: "videos",
    title: "Videos",
    icon: PlayCircle,
    summary: "Short-form videos on brand strategy, GTM, and AI visibility.",
    subsections: [],
  },
  {
    slug: "webinars",
    title: "Webinars",
    icon: Presentation,
    summary: "Live and recorded sessions on branding, GTM, and AI visibility.",
    subsections: [
      { slug: "upcoming-webinars", title: "Upcoming Webinars", description: "Register for live sessions before they fill up." },
      { slug: "on-demand-webinars", title: "On-Demand Webinars", description: "Watch past sessions any time." },
      { slug: "webinar-library", title: "Webinar Library", description: "The full archive of Brand Iron webinars." },
    ],
  },
  {
    slug: "podcast-appearances",
    title: "Podcast Appearances",
    icon: Mic,
    summary: "Brand Iron team members on industry podcasts.",
    subsections: [
      { slug: "featured-episodes", title: "Featured Episodes", description: "Our most-shared podcast appearances." },
      { slug: "guest-interviews", title: "Guest Interviews", description: "Interviews with our team as guests." },
      { slug: "leadership-conversations", title: "Leadership Conversations", description: "Conversations with Brand Iron leadership on brand and growth." },
    ],
  },
  {
    slug: "resource-library",
    title: "Resource Library",
    icon: BookOpen,
    summary: "Presentations, workshop recordings, and downloadable resources.",
    subsections: [
      { slug: "presentations", title: "Presentations", description: "Slide decks from talks and workshops." },
      { slug: "workshop-recordings", title: "Workshop Recordings", description: "Full recordings from past workshops." },
    ],
  },
];

export function getResourceSection(slug: string) {
  return resourceSections.find((section) => section.slug === slug);
}

export function getResourceSubsection(sectionSlug: string, subsectionSlug: string) {
  const section = getResourceSection(sectionSlug);
  const subsection = section?.subsections.find((s) => s.slug === subsectionSlug);
  return section && subsection ? { section, subsection } : null;
}
