import Ranks from "@/components/ranks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ranks",
  description:
    "...",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CON: WW3 DB",
    title: "Ranks | CON: WW3 DB",
    description:
      "...",
  },
  twitter: {
    card: "summary",
    title: "Ranks | CON: WW3 DB",
    description:
      "...",
  },
};

export default function RanksPage() {
  return <Ranks />
}
