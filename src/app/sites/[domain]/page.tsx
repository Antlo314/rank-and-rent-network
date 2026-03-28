import { notFound } from "next/navigation";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import RoofingHomeTemplate from "@/components/templates/roofing/RoofingHomeTemplate";

export default async function DomainHomePage({ params }: { params: Promise<{ domain: string }> }) {
  const { domain } = await params;

  if (domain === "atlantaroofingandsiding.net") {
    return <RoofingHomeTemplate domain={domain} />;
  }

  // Personal Injury Template logic will go here eventually
  if (domain === "personalinjuryatlantalawyer.com") {
    return (
      <main className="min-h-screen bg-slate-950 text-white selection:bg-red-500/30 relative">
        <Header domain={domain} />
        <div className="absolute top-0 w-full h-screen bg-[url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="absolute top-0 w-full h-screen bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950 pointer-events-none" />
        
        <div className="relative pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[90vh]">
          <div className="z-10">
            <div className="inline-block px-4 py-1.5 bg-red-900/40 text-red-400 text-sm font-bold uppercase tracking-widest rounded-full mb-8 border border-red-500/20 backdrop-blur-md">
              Available 24/7 For Emergencies
            </div>
            <h1 className="text-6xl lg:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1] text-white">
              Injured? We Fight For <span className="text-red-500">Your Maximum Compensation.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
              Aggressive legal advocacy for injury victims in Georgia. Whether it&apos;s a car accident or workplace injury, we aggressively handle the insurance companies. <strong>We don&apos;t get paid until you win.</strong>
            </p>
            <div className="flex gap-8 border-y border-white/10 py-6">
              <div>
                <div className="text-3xl font-black text-white">$50M+</div>
                <div className="text-sm text-slate-500 font-medium">Recovered for clients</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">99%</div>
                <div className="text-sm text-slate-500 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="z-10">
            <LeadForm domain={domain} />
          </div>
        </div>
      </main>
    );
  }

  return notFound();
}
