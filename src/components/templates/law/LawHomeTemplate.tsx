import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import FooterServiceAreas from "@/components/FooterServiceAreas";
import { Gavel, Scale, ShieldAlert, Award } from "lucide-react";

export default function LawHomeTemplate({ domain }: { domain: string }) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-red-500/30 overflow-x-hidden">
      <Header domain={domain} />
      
      {/* Hero Section with Cinematic Background */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950 z-0" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-25 z-0 pointer-events-none mix-blend-screen"
          src="/personal_injury.mp4"
        />
        
        {/* Aggressive Red Background Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3 z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/3 z-0" />
        
        <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center min-h-[90vh]">
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/40 text-red-500 text-sm font-bold uppercase tracking-widest rounded-full mb-8 border border-red-500/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Available 24/7 For Emergencies
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 tracking-tighter leading-[1.05]">
            Injured? We Fight For <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Maximum</span> Compensation.
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
            Aggressive legal advocacy for Georgia injury victims. We handle the insurance companies, the medical bills, and the stress. <strong className="text-white font-semibold">We don&apos;t get paid until you win.</strong>
          </p>
          
          <div className="flex flex-wrap gap-8 sm:gap-12 border-t border-zinc-800 pt-8">
            <div>
              <div className="text-4xl font-black text-white mb-1">$50M+</div>
              <div className="text-sm text-zinc-500 font-medium tracking-wide uppercase">Recovered</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">99%</div>
              <div className="text-sm text-zinc-500 font-medium tracking-wide uppercase">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">24/7</div>
              <div className="text-sm text-zinc-500 font-medium tracking-wide uppercase">Support</div>
            </div>
          </div>
        </div>
        
        {/* Form Container */}
        <div className="relative z-20 xl:justify-self-end w-full max-w-[500px] mx-auto xl:mx-0">
          <LeadForm domain={domain} />
        </div>
        </section>
      </div>

      {/* Authority Banner */}
      <section id="verdicts" className="border-y border-zinc-900 bg-black/50 relative z-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-between items-center gap-8 text-center md:text-left">
           <div className="flex items-center gap-4 text-zinc-400">
             <Gavel className="w-10 h-10 text-red-500" />
             <div className="text-left">
               <div className="text-white font-bold text-lg">Trial Tested</div>
               <div className="text-sm uppercase tracking-wider">Aggressive Litigation</div>
             </div>
           </div>
           
           <div className="flex items-center gap-4 text-zinc-400">
             <Scale className="w-10 h-10 text-red-500" />
             <div className="text-left">
               <div className="text-white font-bold text-lg">Zero Upfront Fees</div>
               <div className="text-sm uppercase tracking-wider">You Pay Nothing</div>
             </div>
           </div>

           <div className="flex items-center gap-4 text-zinc-400">
             <ShieldAlert className="w-10 h-10 text-red-500" />
             <div className="text-left">
               <div className="text-white font-bold text-lg">Insurance Experts</div>
               <div className="text-sm uppercase tracking-wider">Maximum Payouts</div>
             </div>
           </div>

           <div className="flex items-center gap-4 text-zinc-400">
             <Award className="w-10 h-10 text-red-500" />
             <div className="text-left">
               <div className="text-white font-bold text-lg">Top 100 Lawyers</div>
               <div className="text-sm uppercase tracking-wider">National Recognition</div>
             </div>
           </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="services" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl md:leading-[1.1] font-black mb-4 tracking-tighter">Our Practice Areas</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg border-b border-red-500/20 pb-4 inline-block">We bring heavy legal firepower to every case.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Car Accidents", desc: "Devastating crashes on 285 or local roads requiring aggressive insurance negotiation." },
            { title: "Semi-Truck Collisions", desc: "Commercial vehicle accidents involving federal regulations and massive corporate policies." },
            { title: "Slip & Fall", desc: "Holding negligent property owners and commercial businesses instantly accountable." },
            { title: "Motorcycle Accidents", desc: "Protecting vulnerable riders from biased police reports and lowball settlement offers." },
            { title: "Workplace Injuries", desc: "Third-party liability and catastrophic injury claims extending beyond basic workers comp." },
            { title: "Wrongful Death", desc: "Pursuing absolute maximum compensation and justice for families facing tragic loss." }
          ].map((service, i) => (
            <div key={i} className="group p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl hover:bg-zinc-900 transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[30px] group-hover:bg-red-500/10 transition-colors" />
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 text-red-500 flex items-center justify-center mb-6 font-black text-xl group-hover:bg-red-500 group-hover:text-white transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-light">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Dynamic Location Placeholder Footer */}
      <footer id="service-areas" className="border-t border-zinc-900 bg-zinc-950">
        <FooterServiceAreas domain={domain} />
        <div className="py-12 px-6 lg:px-12 text-center text-zinc-600 border-t border-white/5">
          <p>© {new Date().getFullYear()} Personal Injury Atlanta Lawyer. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
