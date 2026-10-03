import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-5 py-20 sm:px-8">
      <section className="w-full max-w-xl text-center">
        <p className="font-mono text-sm font-bold tracking-[0.3em] text-red-500">
          ERROR 404
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-300">
          This page may have moved or does not exist. Head back to base and
          continue exploring the database.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-md bg-red-500 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
        >
          Return to homepage
        </Link>
      </section>
    </main>
  );
}
