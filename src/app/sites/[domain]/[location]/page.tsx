import { notFound } from "next/navigation";
import locations from "@/data/locations.json";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import RoofingLocationTemplate from "@/components/templates/roofing/RoofingLocationTemplate";

export async function generateStaticParams() {
  return locations.map((loc) => ({
    domain: loc.domain,
    location: loc.slug,
  }));
}

export default async function LocationPage({ params }: { params: Promise<{ domain: string; location: string }> }) {
  const { domain, location } = await params;
  
  const locationData = locations.find(loc => loc.domain === domain && loc.slug === location);
  
  if (!locationData) {
    return notFound();
  }

  const { name: formattedLocation, content: aiGeneratedContent } = locationData;

  if (domain === "atlantaroofingandsiding.net") {
    return (
      <RoofingLocationTemplate 
        domain={domain} 
        locationName={formattedLocation} 
        content={aiGeneratedContent} 
      />
    );
  }

  // Personal Injury Default Template
  if (domain === "personalinjuryatlantalawyer.com") {
    return (
      <main className="min-h-screen bg-slate-950 text-white selection:bg-red-500/30">
        <Header domain={domain} />
        
        <div className="relative pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-16">
          <div>
            <div className="inline-block px-4 py-1.5 bg-red-900/40 text-red-400 text-sm font-bold uppercase tracking-widest rounded-full mb-8 border border-red-500/20">
              Serving {formattedLocation}
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1]">
              Personal Injury Lawyer for <br/><span className="text-red-500">{formattedLocation}</span> Accidents
            </h1>
            <div className="prose prose-invert prose-lg max-w-none mb-12">
              <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-red-600 pl-6 py-2 bg-slate-900/40 rounded-r-2xl shadow-inner">
                {aiGeneratedContent}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-red-500/30 transition-colors shadow-lg">
                <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center mb-4 font-black">01</div>
                <h3 className="text-2xl font-bold mb-3">Car Accidents</h3>
                <p className="text-slate-500">Dedicated representation for victims of negligent and drunk drivers on {formattedLocation} roads.</p>
              </div>
              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-red-500/30 transition-colors shadow-lg">
                <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center mb-4 font-black">02</div>
                <h3 className="text-2xl font-bold mb-3">Slips & Falls</h3>
                <p className="text-slate-500">Holding commercial property owners strictly accountable for unsafe conditions to maximize your claim.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:sticky lg:top-32 h-fit">
            <LeadForm domain={domain} locationName={formattedLocation} />
          </div>
        </div>
      </main>
    );
  }

  return notFound();
}
