import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import FooterServiceAreas from "@/components/FooterServiceAreas";

export default function LawLocationTemplate({ 
  domain, 
  locationName, 
  content 
}: { 
  domain: string, 
  locationName: string,
  content: string 
}) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-red-500/30 overflow-x-hidden">
      <Header domain={domain} />
      
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-16 min-h-[90vh]">
        {/* Aggressive Red Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10">
          <div className="inline-block px-4 py-1.5 bg-red-950/40 text-red-500 text-sm font-bold uppercase tracking-widest rounded-full mb-8 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            Serving {locationName} Traffic
          </div>
          
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tighter leading-[1.05]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">{locationName}</span><br/> Personal Injury Lawyers
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-xl sm:text-2xl text-zinc-300 font-light leading-relaxed border-l-4 border-red-600 pl-6 py-2 bg-zinc-900/40 rounded-r-3xl shadow-inner">
              {content}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl hover:border-red-500/50 hover:bg-zinc-900 transition-all shadow-lg group">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 text-red-500 flex items-center justify-center mb-6 font-black text-xl group-hover:bg-red-500 group-hover:text-white transition-colors">01</div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-white">Car Accidents</h3>
              <p className="text-zinc-500 font-light">Dedicated, aggressive representation for victims of negligent or drunk drivers on {locationName} roads.</p>
            </div>
            <div className="p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl hover:border-red-500/50 hover:bg-zinc-900 transition-all shadow-lg group">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 text-red-500 flex items-center justify-center mb-6 font-black text-xl group-hover:bg-red-500 group-hover:text-white transition-colors">02</div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-white">Slips & Falls</h3>
              <p className="text-zinc-500 font-light">Holding commercial property owners strictly accountable for unsafe conditions to maximize your claim.</p>
            </div>
          </div>
        </div>
        
        {/* Sticky Lead Form specifically designed for high-stress urgency */}
        <div className="lg:sticky lg:top-32 h-fit relative z-20">
          <LeadForm domain={domain} locationName={locationName} />
        </div>
      </div>

      <footer id="service-areas" className="border-t border-zinc-900 bg-zinc-950 mt-12">
        <FooterServiceAreas domain={domain} />
        <div className="py-12 px-6 lg:px-12 text-center text-zinc-600 border-t border-white/5">
          <p>© {new Date().getFullYear()} Personal Injury Atlanta Lawyer. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
