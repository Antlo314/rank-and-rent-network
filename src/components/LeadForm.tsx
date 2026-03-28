'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LeadForm({ domain, locationName }: { domain: string, locationName?: string }) {
  const [submitted, setSubmitted] = useState(false);

  // Styling based on domain for brand consistency
  const isInjury = domain.includes('injury');
  const accentColor = isInjury ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950';
  const shadowColor = isInjury ? 'rgba(220,38,38,0.3)' : 'rgba(16,185,129,0.3)';

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Extract the precise data from the input fields
    const formData = new FormData(e.currentTarget);
    const leadData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      domain,
      locationName,
      // Dynamic logic for specific networks
      serviceType: formData.get('serviceType'),
      timeline: formData.get('timeline'),
      incidentType: formData.get('incidentType'),
      fault: formData.get('fault')
    };

    try {
      // Fire the lead data to our secure Next.js Backend Node API
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to push lead:", error);
    } finally {
      setLoading(false);
    }
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
          <input required type="text" name="name" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors" />
        </div>
        <div>
          <input required type="tel" name="phone" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors" />
        </div>
        
        {isInjury ? (
          <>
            <div>
              <select required aria-label="Incident Type" name="incidentType" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:border-white/30 transition-colors">
                <option value="" disabled className="text-zinc-500">What type of accident?</option>
                <option value="Car / Auto Accident" className="bg-zinc-900">Car / Auto Accident</option>
                <option value="Slip and Fall" className="bg-zinc-900">Slip & Fall</option>
                <option value="Workplace Injury" className="bg-zinc-900">Workplace Injury</option>
                <option value="Medical Malpractice" className="bg-zinc-900">Medical Malpractice</option>
                <option value="Other" className="bg-zinc-900">Other</option>
              </select>
            </div>
            <div>
              <select required aria-label="Fault" name="fault" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:border-white/30 transition-colors">
                <option value="" disabled className="text-zinc-500">Were you at fault?</option>
                <option value="No - Not at fault" className="bg-zinc-900">No - The other party is at fault</option>
                <option value="Yes - Partially or Fully" className="bg-zinc-900">Yes - Partially or Fully</option>
                <option value="Not Sure" className="bg-zinc-900">Not Sure / Police report pending</option>
              </select>
            </div>
          </>
        ) : (
          <>
            <div>
              <select required aria-label="Service Type" name="serviceType" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:border-white/30 transition-colors">
                <option value="" disabled className="text-zinc-500">What do you need help with?</option>
                <option value="Full Roof Replacement" className="bg-zinc-900">Full Roof Replacement</option>
                <option value="Severe Storm / Hail Damage" className="bg-zinc-900">Severe Storm / Insurance Claim</option>
                <option value="Minor Leak / Repair" className="bg-zinc-900">Minor Leak / Repair</option>
                <option value="Siding or Gutters" className="bg-zinc-900">Siding or Gutters</option>
                <option value="Commercial Roofing" className="bg-zinc-900">Commercial Roofing</option>
              </select>
            </div>
            <div>
              <select required aria-label="Timeline" name="timeline" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:border-white/30 transition-colors">
                <option value="" disabled className="text-zinc-500">How soon do you need this fixed?</option>
                <option value="ASAP - Active Emergency" className="bg-zinc-900">ASAP - Active Emergency</option>
                <option value="Within 1-2 Weeks" className="bg-zinc-900">Within 1-2 Weeks</option>
                <option value="Just getting an estimate" className="bg-zinc-900">Just getting an estimate</option>
              </select>
            </div>
          </>
        )}
        
        <button type="submit" disabled={loading} className={`w-full py-4 mt-2 rounded-xl font-bold transition-all shadow-lg text-lg ${accentColor} ${loading ? 'opacity-70 cursor-wait' : ''}`}>
          {loading ? 'Sending Request...' : (isInjury ? 'Request Consultation' : 'Claim My Estimate')}
        </button>
      </div>
      <p className="text-xs text-center text-zinc-500 mt-6 flex flex-col items-center justify-center">
        🔒 Your information is secure and entirely confidential.
      </p>
    </motion.form>
  );
}
