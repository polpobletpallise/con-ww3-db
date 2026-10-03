import BeginnerIntro from "@/components/beginner-intro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beginner Intro",
  description:
    "...",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CON: WW3 DB",
    title: "Beginner Intro | CON: WW3 DB",
    description:
      "...",
  },
  twitter: {
    card: "summary",
    title: "Beginner Intro | CON: WW3 DB",
    description:
      "...",
  },
};

export default function BeginnerIntroPage() {
  return <BeginnerIntro />
}
