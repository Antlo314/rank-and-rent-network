import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAINS = {
  ROOFING: "atlantaroofingandsiding.net",
  INJURY: "personalinjuryatlantalawyer.com"
};

// 100 high-income/high-population Metro Atlanta & Georgia locales
const TARGET_CITIES = [
  'alpharetta', 'milton', 'roswell', 'johns-creek', 'sandy-springs', 'dunwoody', 'decatur', 
  'peachtree-city', 'suwanee', 'duluth', 'woodstock', 'canton', 'kennesaw', 'marietta', 'smyrna', 
  'brookhaven', 'buckhead', 'vinings', 'chamblee', 'doraville', 'tucker', 'stone-mountain', 
  'snellville', 'lawrenceville', 'dacula', 'buford', 'sugar-hill', 'cumming', 'dawsonville', 
  'gainesville', 'flowery-branch', 'braselton', 'hoschton', 'winder', 'monroe', 'loganville', 
  'conyers', 'covington', 'mcdonough', 'stockbridge', 'fayetteville', 'newnan', 'sharpsburg', 
  'senoia', 'peachtree-corners', 'norcross', 'lilburn', 'stonecrest', 'lithonia', 'villa-rica', 
  'carrollton', 'douglasville', 'dallas', 'hiram', 'acworth', 'powder-springs', 'austell', 
  'mableton', 'college-park', 'east-point', 'hapeville', 'forest-park', 'riverdale', 'jonesboro', 
  'lovejoy', 'hampton', 'locust-grove', 'griffin', 'jackson', 'social-circle', 'madison', 
  'athens', 'watkinsville', 'bogart', 'statham', 'jefferson', 'commerce', 'royston', 'hartwell', 
  'lavonia', 'toccoa', 'cornelia', 'clarkesville', 'cleveland', 'dahlonega', 'jasper', 'ellijay', 
  'blue-ridge', 'blairsville', 'hiawassee', 'young-harris', 'clayton', 'cartersville', 'rome', 
  'calhoun', 'dalton', 'chatsworth', 'ringgold', 'fort-oglethorpe', 'lafayette', 'summerville'
];

// Spintax Helper Function
function spin(spintax) {
  return spintax.replace(/{([^{}]*)}/g, (match, choices) => {
    const options = choices.split('|');
    return options[Math.floor(Math.random() * options.length)];
  });
}

function generateSpintaxContent(city, domain) {
  const formattedCity = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  if (domain === DOMAINS.ROOFING) {
    const roofingSpintax = `{Expert|Professional|Top-rated|Award-winning|Trusted} {roofing contractors|roofing services|roof replacements|storm damage mitigation|roof repair} serving ${formattedCity}, GA. {We specialize in|Our local experts deliver|We provide} {high-end|premium|lifetime} {architectural shingles|metal roofs|seamless gutters} {and 24/7 emergency response|backed by industry-leading warranties|to protect your biggest investment}. {Contact us today for a free estimate|Call us now for a rapid inspection|Discover why ${formattedCity} homeowners trust us}.`;
    return spin(roofingSpintax);
  }
  
  if (domain === DOMAINS.INJURY) {
    const injurySpintax = `{Aggressive|Dedicated|Top-rated|Experienced|Relentless} {personal injury|accident|injury} {lawyers|attorneys|advocates} {serving|representing victims in} ${formattedCity}, GA. {From catastrophic car crashes to slip & fall cases|We handle everything from truck accidents to medical malpractice|Maximizing compensation for victims of negligence}, {we fight the insurance companies|we bring heavy legal firepower|we aggressively advocate} {so you can focus 100% on recovery|to ensure you get every dollar you deserve}. {Zero upfront fees|We don't get paid unless you win}.`;
    return spin(injurySpintax);
  }

  return `Premium services offered in ${formattedCity}.`;
}

async function runGenerator() {
  console.log("🚀 Starting Programmatic Spintax Generation Pipeline...");
  
  const dataPath = path.join(__dirname, '../src/data/locations.json');
  let existingData = [];
  if (fs.existsSync(dataPath)) {
    existingData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  }
  
  for (const city of TARGET_CITIES) {
    for (const domainKey of Object.keys(DOMAINS)) {
      const domain = DOMAINS[domainKey];
      
      const formattedCityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

      // Checking if slug and domain already exist
      if (existingData.find(loc => loc.slug === city && loc.domain === domain)) {
        continue; // Skip silently to keep console clean
      }
      
      console.log(`🤖 Spinning content for ${formattedCityName} on ${domain}...`);
      const content = generateSpintaxContent(city, domain);
      
      existingData.push({
        slug: city,
        name: formattedCityName,
        domain,
        content
      });
    }
  }
  
  fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2));
  console.log(`✅ Generation complete! Populated ${existingData.length} total local SEO records running perfectly.`);
}

runGenerator().catch(console.error);
