import locations from '@/data/locations.json';
import Link from 'next/link';

export default function FooterServiceAreas({ domain }: { domain: string }) {
  // Pull all locations mapped exclusively to this specific domain
  const domainLocations = locations.filter(loc => loc.domain === domain);
  
  if (domainLocations.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-t border-white/5">
      <h4 className="text-zinc-300 font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-3">
        <span className="w-8 h-[1px] bg-emerald-500/50 block"></span>
        Areas We Serve
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-3 gap-x-6">
        {domainLocations.sort((a,b) => a.name.localeCompare(b.name)).map(loc => (
          <Link 
            key={loc.slug} 
            href={`/${loc.slug}`}
            className="text-zinc-500 hover:text-emerald-400 text-[13px] font-medium transition-colors line-clamp-1"
          >
            {loc.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
