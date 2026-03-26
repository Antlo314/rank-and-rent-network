'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LeadForm({ domain, locationName }: { domain: string, locationName?: string }) {
  const [submitted, setSubmitted] = useState(false);

  // Styling based on domain for brand consistency
  const isInjury = domain.includes('injury');
  const accentColor = isInjury ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950';
  const shadowColor = isInjury ? 'rgba(220,38,38,0.3)' : 'rgba(16,185,129,0.3)';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Connect to Twilio/GHL/CRM endpoint to properly route and track lead value
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl text-center shadow-2xl"
      >
        <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
        <p className="text-zinc-400">Our local {locationName ? `${locationName} ` : ''}team will contact you shortly.</p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="p-8 backdrop-blur-2xl bg-black/40 border border-white/10 rounded-3xl relative overflow-hidden"
      style={{ boxShadow: `0 0 50px ${shadowColor}, 0 0 0 1px rgba(255,255,255,0.05) inset` }}
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
      <h3 className="text-3xl font-bold mb-6 text-white text-center">
        {isInjury ? 'Free Case Evaluation' : 'Get a Free Estimate'}
      </h3>
      
      <div className="space-y-4">
        <div>
          <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors" />
        </div>
        <div>
          <input required type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors" />
        </div>
        <div>
          <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors" />
        </div>
        <button type="submit" className={`w-full py-4 mt-2 rounded-xl font-bold transition-all shadow-lg text-lg ${accentColor}`}>
          {isInjury ? 'Request Consultation' : 'Claim My Estimate'}
        </button>
      </div>
      <p className="text-xs text-center text-zinc-500 mt-6 flex flex-col items-center justify-center">
        🔒 Your information is secure and entirely confidential.
      </p>
    </motion.form>
  );
}
