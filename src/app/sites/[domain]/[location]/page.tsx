import { notFound } from "next/navigation";
import locations from "@/data/locations.json";
import RoofingLocationTemplate from "@/components/templates/roofing/RoofingLocationTemplate";
import LawLocationTemplate from "@/components/templates/law/LawLocationTemplate";

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

  if (domain === "personalinjuryatlantalawyer.com") {
    return (
      <LawLocationTemplate 
        domain={domain} 
        locationName={formattedLocation} 
        content={aiGeneratedContent} 
      />
    );
  }

  return notFound();
}
