import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import FooterServiceAreas from "@/components/FooterServiceAreas";

export default function RoofingLocationTemplate({ 
  domain, 
  locationName, 
  content 
}: { 
  domain: string;
  locationName: string;
  content: string;
}) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30">
      <Header domain={domain} />
      
      <div className="relative pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-16 items-start">
        {/* Main Content Area */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 border border-zinc-800 text-emerald-400 text-sm font-bold uppercase tracking-widest rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Local {locationName} Roofers
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.05] bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Expert Roofing Services <br/>in <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">{locationName}</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-xl text-zinc-300 leading-relaxed border-l-4 border-emerald-500 pl-6 py-2 bg-gradient-to-r from-emerald-950/40 to-transparent rounded-r-2xl">
              {content}
            </p>
          </div>
          
          {/* Services Section */}
          <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:border-emerald-500/30 transition-all hover:-translate-y-1 shadow-lg group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 font-black text-xl group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">1</div>
              <h3 className="text-2xl font-bold mb-3">Roof Replacement</h3>
              <p className="text-zinc-500">Full tear-offs and installations using premium architectural shingles built for Georgia weather.</p>
            </div>
            <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:border-emerald-500/30 transition-all hover:-translate-y-1 shadow-lg group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 font-black text-xl group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">2</div>
              <h3 className="text-2xl font-bold mb-3">Storm Damage</h3>
              <p className="text-zinc-500">Emergency 24/7 response to hail and wind damage. We aggressively negotiate directly with your insurance.</p>
            </div>
          </div>
        </div>
        
        {/* Sticky Lead Form */}
        <div className="lg:sticky lg:top-32 h-fit z-20">
          <LeadForm domain={domain} locationName={locationName} />
        </div>
      </div>

      <footer id="service-areas" className="border-t border-zinc-900 bg-zinc-950 mt-12">
        <FooterServiceAreas domain={domain} />
        <div className="py-12 px-6 lg:px-12 text-center text-zinc-600 border-t border-white/5">
          <p>© {new Date().getFullYear()} Atlanta Roofing and Siding. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
