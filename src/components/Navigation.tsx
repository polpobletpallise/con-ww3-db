import Link from "next/link";

const navigationItems = [
  { label: "Units", href: "/units" },
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
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 transition-colors hover:text-red-500 focus-visible:text-red-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
