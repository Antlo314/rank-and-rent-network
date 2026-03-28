import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import FooterServiceAreas from "@/components/FooterServiceAreas";
import { ShieldCheck, Hammer, Wind } from "lucide-react";

export default function RoofingHomeTemplate({ domain }: { domain: string }) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30">
      <Header domain={domain} />
      
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950 z-0" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0 pointer-events-none mix-blend-luminosity"
          src="/roofing.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
        
        <section className="relative z-10 w-full px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[90vh] pt-28 pb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-950/40 text-emerald-400 text-sm font-bold uppercase tracking-widest rounded-full mb-8 border border-emerald-500/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Atlanta&apos;s #1 Rated Roofing Co.
            </div>
            <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter leading-[1.05] bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Roofs Built to Last a <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]">Lifetime.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed font-medium">
              Premium residential and commercial roofing services in the greater Atlanta area. We specialize in emergency tarping, storm damage repair, and lifetime architectural shingle installations.
            </p>
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md w-fit">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-2 border-zinc-950 relative z-10 object-cover" alt="Happy Customer" />
                ))}
              </div>
              <div>
                <div className="flex text-emerald-400 text-lg mb-1">
                  ★★★★★
                </div>
                <p className="text-zinc-400 text-sm font-medium">Trusted by <strong className="text-white">500+</strong> homeowners.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-lg mx-auto lg:ml-auto">
            <LeadForm domain={domain} />
          </div>
        </section>
      </div>

      {/* Trust Banner & Reviews Wrapper */}
      <section id="reviews" className="border-y border-white/5 bg-zinc-900/50 relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
           <div>
             <div className="text-4xl font-black text-white mb-1">15+</div>
             <div className="text-emerald-500 font-bold uppercase tracking-wider text-sm">Years Experience</div>
           </div>
           <div className="hidden md:block w-px h-12 bg-white/10"></div>
           <div>
             <div className="text-4xl font-black text-white mb-1">GAF</div>
             <div className="text-emerald-500 font-bold uppercase tracking-wider text-sm">Master Elite Certified</div>
           </div>
           <div className="hidden md:block w-px h-12 bg-white/10"></div>
           <div>
             <div className="text-4xl font-black text-white mb-1">Lifetime</div>
             <div className="text-emerald-500 font-bold uppercase tracking-wider text-sm">Transferable Warranty</div>
           </div>
           <div className="hidden md:block w-px h-12 bg-white/10"></div>
           <div>
             <div className="text-4xl font-black text-white mb-1">24/7</div>
             <div className="text-emerald-500 font-bold uppercase tracking-wider text-sm">Emergency Response</div>
           </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Our Premium Services</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">We use the highest quality materials backed by industry-leading warranties to ensure your home is fully protected.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group rounded-3xl bg-zinc-900/40 border border-white/5 p-8 transition-all hover:bg-zinc-800/60 hover:border-emerald-500/30">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Full Replacements</h3>
            <p className="text-zinc-500 leading-relaxed mb-6">Complete tear-offs and new installations featuring high-grade architectural shingles that endure harsh weather.</p>
          </div>
          
          <div className="group rounded-3xl bg-zinc-900/40 border border-white/5 p-8 transition-all hover:bg-zinc-800/60 hover:border-emerald-500/30">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Wind size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Storm & Hail Damage</h3>
            <p className="text-zinc-500 leading-relaxed mb-6">Rapid emergency tarping and comprehensive repair services. We thoroughly document damage and negotiate with insurance.</p>
          </div>

          <div className="group rounded-3xl bg-zinc-900/40 border border-white/5 p-8 transition-all hover:bg-zinc-800/60 hover:border-emerald-500/30">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Hammer size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Siding & Gutters</h3>
            <p className="text-zinc-500 leading-relaxed mb-6">Enhance curb appeal and protect your foundation with seamless gutters and premium siding installations.</p>
          </div>
        </div>
      </section>
      
      {/* Dynamic Location Placeholder Footer */}
      <footer id="service-areas" className="border-t border-zinc-900 bg-zinc-950">
        <FooterServiceAreas domain={domain} />
        <div className="py-12 px-6 lg:px-12 text-center text-zinc-600 border-t border-white/5">
          <p>© {new Date().getFullYear()} Atlanta Roofing and Siding. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
