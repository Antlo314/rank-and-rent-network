import { notFound } from "next/navigation";

export default async function DomainHomePage({ params }: { params: Promise<{ domain: string }> }) {
  const { domain } = await params;

  if (domain === "atlantaroofingandsiding.net") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-8">
        <div className="absolute top-0 w-full h-96 bg-blue-900/20 blur-[100px] pointer-events-none" />
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm z-10 text-center">
          Atlanta Roofing & Siding
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl text-center mb-10 z-10">
          Premium residential and commercial roofing services in the greater Atlanta area. We build roofs that last a lifetime.
        </p>
        <button className="z-10 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 transition-colors text-zinc-950 font-bold rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          Get a Free Estimate
        </button>
      </main>
    );
  }

  if (domain === "personalinjuryatlantalawyer.com") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-8">
        <div className="absolute top-0 w-full h-96 bg-red-900/20 blur-[100px] pointer-events-none" />
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-sm z-10 text-center">
          Personal Injury Atlanta
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl text-center mb-10 z-10">
          Aggressive legal advocacy for injury victims in Georgia. We don&apos;t get paid until you win.
        </p>
        <button className="z-10 px-8 py-4 bg-red-600 hover:bg-red-500 transition-colors text-white font-bold rounded-full shadow-[0_0_30px_rgba(220,38,38,0.3)]">
          Free Case Evaluation
        </button>
      </main>
    );
  }

  return notFound();
}
