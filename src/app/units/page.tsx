import type { Metadata } from "next";
import Units from "@/components/units";

export const metadata: Metadata = {
  title: "Units",
  description:
    "Browse Conflict of Nations: World War 3 unit stats, combat values, and terrain information in the CON: WW3 DB.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CON: WW3 DB",
    title: "Units | CON: WW3 DB",
    description:
      "Browse Conflict of Nations: World War 3 unit stats, combat values, and terrain information.",
  },
  twitter: {
    card: "summary",
    title: "Units | CON: WW3 DB",
    description:
      "Browse Conflict of Nations: World War 3 unit stats, combat values, and terrain information.",
  },
};

export default function UnitsPage() {
  return <Units />
}
