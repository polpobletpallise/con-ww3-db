import Link from "next/link";

export default function Landing() {
  return (
    <main className="flex-1 overflow-hidden">
      <section className="relative border-white/10">
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-red-200">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-red-500"
              />
              Independent archive · Fan-made
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Know the battlefield.
              <span className="mt-2 block text-red-500">
                Dominate every front.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              A community database for Conflict of Nations: World War 3.
              Units, cities, research, and more, all in one place to help you
              plan your next match.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/units"
                className="inline-flex items-center gap-3 rounded-md bg-red-500 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
              >
                Browse units
                <span aria-hidden="true">↓</span>
              </Link>
              <Link
                href="/units"
                className="inline-flex items-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-white/35 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
              >
                View unit database
              </Link>
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-500">
              A fan-made project, not officially affiliated. Built for the community.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}