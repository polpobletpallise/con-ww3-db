import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  applicationName: "CON: WW3 DB",
  title: {
    default: "CON: WW3 DB",
    template: "%s | CON: WW3 DB",
  },
  description:
    "Explore unit stats, combat values, and terrain data in the CON: WW3 DB, an unofficial community database for Conflict of Nations: World War 3.",
  keywords: [
    "CON WW3 DB",
    "Conflict of Nations database",
    "Conflict of Nations World War 3",
    "Conflict of Nations units",
    "unit stats",
    "combat stats",
    "terrain stats",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CON: WW3 DB",
    title: "CON: WW3 DB",
    description:
      "An unofficial community database for Conflict of Nations: World War 3. Explore unit stats, combat values, and terrain data.",
  },
  twitter: {
    card: "summary",
    title: "CON: WW3 DB",
    description:
      "An unofficial community database for Conflict of Nations: World War 3. Explore unit stats, combat values, and terrain data.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth antialiased", "font-sans", geist.variable)}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider defaultTheme="dark" attribute={'class'}>
          <Navigation />
          {children}
          <Footer />

          {/* VERCEL */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
