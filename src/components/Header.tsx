'use client'

import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header({ domain }: { domain: string }) {
  const isInjury = domain.includes('injury');
  const accentText = isInjury ? 'text-red-400' : 'text-emerald-400';
  
  // Twilio Phone Number Placeholder
  // This will be dynamic based on the domain/location mapping in a production environment
  const phoneNumber = isInjury ? "(404) 555-CRASH" : "(404) 555-ROOF";

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 backdrop-blur-xl bg-black/40 border-b border-white/10"
    >
      <div className="font-extrabold text-2xl tracking-tighter text-white">
        {isInjury ? "PIA Legal." : "ATL Roofing."}
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex text-zinc-400 items-center gap-6 text-sm font-medium mr-4">
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Service Areas</a>
          <a href="#" className="hover:text-white transition-colors">Reviews</a>
        </div>
        
        <a href={`tel:${phoneNumber}`} className={`flex items-center gap-3 font-bold px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 shadow-sm ${accentText}`}>
          <PhoneCall size={18} className="animate-pulse" />
          {phoneNumber}
        </a>
      </div>
    </motion.header>
  );
}
