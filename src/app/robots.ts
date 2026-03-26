import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/', // Allows all Googlebots and web crawlers to scrape the programmatic pages
    }
  };
}
