import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAINS = {
  ROOFING: "atlantaroofingandsiding.net",
  INJURY: "personalinjuryatlantalawyer.com"
};

const TARGET_CITIES = ["roswell", "sandy-springs", "decatur", "johns-creek", "smyrna"];

async function generateContentForCity(city, domain) {
  // Setup your OpenAI API key here:
  // const apiKey = process.env.OPENAI_API_KEY;
  
  // Real prompt example:
  // const prompt = `Write a highly-converting, location-specific SEO paragraph for ${domain} targeting customers in ${city}, Georgia. Include local landmarks if possible.`;
  
  // Mock AI generation for demonstration
  return `This is a highly optimized, AI-generated local SEO paragraph specifically crafted for ${city} residents seeking premium services from ${domain}.`;
}

async function runGenerator() {
  console.log("🚀 Starting AI Content Generation Pipeline...");
  
  const dataPath = path.join(__dirname, '../src/data/locations.json');
  let existingData = [];
  if (fs.existsSync(dataPath)) {
    existingData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  }
  
  for (const city of TARGET_CITIES) {
    for (const domainKey of Object.keys(DOMAINS)) {
      const domain = DOMAINS[domainKey];
      
      if (existingData.find(loc => loc.slug === city && loc.domain === domain)) {
        console.log(`⏩ Skipping ${city} for ${domain} - already exists.`);
        continue;
      }
      
      console.log(`🤖 Generating AI content for ${city} on ${domain}...`);
      const content = await generateContentForCity(city, domain);
      
      existingData.push({
        slug: city,
        name: city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        domain,
        content
      });
      
      await new Promise(r => setTimeout(r, 500)); // Rate limit buffer
    }
  }
  
  fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2));
  console.log("✅ Generation complete! Updated src/data/locations.json.");
}

runGenerator().catch(console.error);
