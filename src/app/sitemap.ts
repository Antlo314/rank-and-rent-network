import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import locations from '@/data/locations.json';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  let hostname = headersList.get('host') || "atlantaroofingandsiding.net";
  
  // Clean up port for local dev
  if (hostname.includes(':')) {
    hostname = hostname.split(':')[0];
  }
  
  // Default to our main site for local testing or vercel staging bounds
  if (hostname === "localhost" || hostname.includes("vercel.app")) {
     hostname = "atlantaroofingandsiding.net";
  }

  const baseUrl = `https://${hostname}`;

  // Filter the locations specifically to the domain that requested the sitemap
  const domainLocations = locations.filter(loc => loc.domain === hostname);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    }
  ];

  const dynamicPages: MetadataRoute.Sitemap = domainLocations.map((loc) => ({
    url: `${baseUrl}/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...dynamicPages];
}
