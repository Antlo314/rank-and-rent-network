import { notFound } from "next/navigation";
import locations from "../../../../data/locations.json";

// This helps Next.js statically generate the pages at build time
export async function generateStaticParams() {
  return locations.map((loc) => ({
    domain: loc.domain,
    location: loc.slug,
  }));
}

export default async function LocationPage({ params }: { params: Promise<{ domain: string; location: string }> }) {
  const { domain, location } = await params;
  
  // Find the generated AI content for this specific domain and location
  const locationData = locations.find(loc => loc.domain === domain && loc.slug === location);
  
  if (!locationData) {
    return notFound();
  }

  const { name: formattedLocation, content: aiGeneratedContent } = locationData;

  if (domain === "atlantaroofingandsiding.net") {
    return (
      <main className="min-h-screen bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto p-12">
          <div className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-sm font-semibold rounded-full mb-6 border border-emerald-800/50">
            Now serving {formattedLocation}
          </div>
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Expert Roofing in <span className="text-emerald-400">{formattedLocation}</span></h1>
          <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mb-12 bg-zinc-900/40 p-6 rounded-xl border border-zinc-800/50 shadow-inner">
            {aiGeneratedContent}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Roof Replacement</h3>
              <p className="text-zinc-500">Full tear-offs and new installations using premium architectural shingles.</p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Storm Damage Repair</h3>
              <p className="text-zinc-500">Fast response to hail and wind damage. We work with your insurance.</p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Free Inspections</h3>
              <p className="text-zinc-500">Comprehensive local assessments in {formattedLocation} to catch issues early.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (domain === "personalinjuryatlantalawyer.com") {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto p-12">
          <div className="inline-block px-3 py-1 bg-red-900/50 text-red-400 text-sm font-semibold rounded-full mb-6 border border-red-800/50">
            Legal Representation in {formattedLocation}
          </div>
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Personal Injury Lawyer serving <span className="text-red-500">{formattedLocation}</span></h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-12 bg-slate-900/40 p-6 rounded-xl border border-slate-800/50 shadow-inner">
            {aiGeneratedContent}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Car Accidents</h3>
              <p className="text-slate-500">Dedicated representation for victims of negligent drivers on {formattedLocation} roads.</p>
            </div>
            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Slip & Falls</h3>
              <p className="text-slate-500">Holding property owners accountable for unsafe conditions.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return notFound();
}
