import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";

const navigationItems = [
    {
    title: "Information and Help", links: [
      { label: "Beginner Intro", desc: "Learn the basics of starting and managing a match.", href: "/beginner-intro" },
      { label: "User Interface", desc: "Get familiar with the game screens and controls.", href: "/user-interface" },
      { label: "Nations Guide", desc: "Discover playable nations and their starting positions.", href: "/nations-guide" },
      { label: "Keyboard Shortcuts", desc: "Find shortcuts for common in-game actions.", href: "/keyboard-shortcuts" },
      { label: "Ranks", desc: "Learn how player ranks and progression work.", href: "/ranks" },
      { label: "FAQ", desc: "Get answers to frequently asked questions.", href: "/faq" }
    ]
  },
  {
    title: "Diplomacy", links: [
      { label: "News", desc: "Keep up with the latest game announcements and updates.", href: "/news" },
      { label: "Diplomatic Status", desc: "Understand relations and status between nations.", href: "/diplomatic-status" },
      { label: "Events Log", desc: "Review the events and actions recorded during a match.", href: "/events" },
      { label: "Messages", desc: "Learn about in-game communication and messages.", href: "/messages" },
      { label: "Coalition", desc: "Explore coalition membership and coordination.", href: "/coalition" },
      { label: "Alliances", desc: "Learn how alliances connect players and coalitions.", href: "/alliances" }
    ]
  },
  {
    title: "Warfare", links: [
      { label: "Research & Doctrine", desc: "Compare research paths and doctrine bonuses.", href: "/research" },
      { label: "Units", desc: "Browse unit stats, combat values, and terrain performance.", href: "/units" },
      { label: "Combat", desc: "Understand combat mechanics and unit engagements.", href: "/combat" },
      { label: "Field of View", desc: "Learn how visibility and scouting affect the battlefield.", href: "/field-of-view" },
      { label: "Insurgencies", desc: "Find out how insurgencies emerge and affect provinces.", href: "/insurgencies" }
    ]
  },
  {
    title: "Strategy", links: [
      { label: "Campaing Types", desc: "Compare match formats and their rules.", href: "/campaign-types" },
      { label: "Provinces", desc: "Explore province types, resources, and strategic value.", href: "/provinces" },
      { label: "Production", desc: "Learn how to produce units and manage resources.", href: "/production" },
      { label: "Victory", desc: "Review victory conditions and scoring.", href: "/victory" }
    ]
  },
  {
    title: "Security Council", links: [
      { label: "Membership", desc: "Learn about Security Council membership and benefits.", href: "/membership" },
      { label: "Seasons", desc: "Explore seasonal content and progression.", href: "/seasons" }
    ]
  },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link href="/" className="group flex w-fit items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg border border-red-500/40 bg-red-500/10 font-mono text-xs font-black tracking-tight text-red-500">
            WW3
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-[0.16em] text-white">
              CONFLICT OF NATIONS
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.25em] text-slate-400">
              FAN-MADE DATABASE
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navigation"
          className="flex max-w-full gap-5 overflow-x-auto pb-1 text-sm text-slate-300 sm:pb-0"
        >

          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.links.map((link) => (
                        <ListItem href={link.href} title={link.label}>
                          {link.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
}


function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
        <div className="leading-none font-medium">{title}</div>
        <div className="line-clamp-2 text-muted-foreground">{children}</div>
      </div></Link>} />
    </li>
  )
}
