/**
 * Meta keywords for Next.js metadata (supplemental). Primary ranking signals are
 * titles, descriptions, headings, body copy, and JSON-LD — see /founder and MarketingJsonLd.
 * Broad list: brand, premium fitness intent, pay-per-day, India geo, partner B2B, founder.
 */
const k = (strings: string[]) => strings;

const brand = k([
  "RIVIO",
  "Rivio app",
  "Rivio fitness app",
  "Rivio India",
  "Rivio gym app",
  "Rivio yoga app",
  "Rivio partner app",
  "Rivio business app",
  "Rivio member app",
  "rivioapp.com",
  "Rivio startup",
  "Rivio fitness platform",
  "Rivio wellness",
  "Rivio sports app",
  "Rivio Gurugram",
  "Rivio Haryana fitness",
]);

const payModel = k([
  "pay per day gym",
  "pay per day gym India",
  "pay per visit gym",
  "pay as you go gym",
  "gym without subscription",
  "gym no membership",
  "day pass gym app",
  "single day gym pass",
  "flexible gym access",
  "no contract gym",
  "gym membership alternative",
  "pay only for days you use",
  "per day fitness pricing",
  "micro gym payments",
  "walk in gym pay",
]);

const yogaWellness = k([
  "yoga pay per day",
  "yoga studio day pass India",
  "yoga without subscription",
  "wellness center pay per visit",
  "studio fitness on demand",
  "fitness on demand India",
  "gym yoga sports one app",
  "multi studio fitness app",
  "wellness app India",
  "sports facility day pass",
  "swimming pool pay per day",
  "boutique fitness flexible",
]);

const geoIntent = k([
  "fitness app India",
  "Indian gym app",
  "India pay per day fitness",
  "Delhi NCR gym app",
  "Gurugram fitness app",
  "Mumbai gym alternative",
  "Bangalore fitness flexible",
  "Hyderabad gym app",
  "Pune yoga studio app",
  "Chennai gym day pass",
  "fitness marketplace India",
]);

const partnerB2b = k([
  "gym owner partner app",
  "fitness business QR check-in",
  "studio revenue platform India",
  "partner program fitness India",
  "Rivio partner program",
  "gym QR code attendance",
  "fitness studio management app",
  "multi location gym software mobile",
]);

const features = k([
  "QR code gym check-in",
  "wallet fitness app",
  "fitness streak app",
  "gym discovery app",
  "nearby gyms app India",
  "fitness leaderboard app",
  "reviews gym app",
  "OTP login fitness app",
]);

const founder = k([
  "Amandeep Bishnoi",
  "Amandeep Bishnoi Rivio",
  "Amandeep Bishnoi founder",
  "Amandeep Bishnoi RIVIO founder",
  "Amandeep Bishnoi fitness entrepreneur",
  "Amandeep Bishnoi fitness",
  "Amandeep Bishnoi LinkedIn",
  "Amandeep Bishnoi Instagram",
  "Amandeep Bishnoi App Store developer",
  "Rivio founder",
  "Rivio founder Amandeep Bishnoi",
  "RIVIO company founder",
  "fitness startup founder India",
]);

const premium = k([
  "premium gym day pass India",
  "luxury gym flexible access",
  "boutique fitness studio India premium",
  "high end gym app India",
  "executive fitness flexible schedule",
  "discerning gym goer app",
  "white glove fitness access",
  "curated gym network India",
  "premium wellness day pass",
  "five star hotel gym day pass app",
  "members club fitness flexible",
  "private studio booking flexible India",
  "VIP gym experience pay per visit",
  "concierge fitness India",
  "aspirational fitness brand India",
  "quality over quantity gym app",
  "trusted fitness marketplace India",
  "verified gym partner platform",
  "enterprise grade fitness check-in",
  "seamless gym payment experience",
  "frictionless fitness access India",
  "modern fitness consumer India",
  "digitally native gym app",
  "next gen fitness membership alternative",
  "disruptive fitness model India",
  "innovative pay per use gym",
  "category defining fitness app",
  "category leader pay per day India",
  "full stack fitness platform India",
  "dual sided fitness marketplace",
  "member and partner fitness ecosystem",
  "B2C B2B fitness India",
  "scalable gym technology India",
  "fitness super app India",
  "hyperlocal gym discovery premium",
  "intent based gym search India",
  "conversion optimized gym booking",
  "high intent fitness keywords India",
  "brand safety gym network",
  "compliance ready fitness payouts India",
]);

const longTail = k([
  "best app for gym without annual fee",
  "how to pay for gym per day in India",
  "app to find gyms and pay daily",
  "yoga class single session payment app",
  "no commitment fitness India",
  "cancel anytime fitness app",
  "try multiple gyms one app",
  "fitness flexibility app",
  "gym hopping app India",
  "affordable gym access India",
  "student gym flexible payment",
  "travel gym day pass app",
  "corporate wellness flexible gym",
  "women gym flexible access",
  "home city gym app",
]);

const tech = k([
  "iOS fitness app India",
  "App Store gym India",
  "Rivio App Store download",
  "Rivio Partner App Store",
  "fitness iPhone app India",
  "health application India",
  "fitness technology startup India",
]);

const misc = k([
  "movement platform India",
  "your route to movement",
  "pay per day model fitness",
  "subscription fatigue fitness",
  "gym commitment free",
  "instant gym access",
  "book gym for one day",
  "fitness wallet India",
  "Rivio beta",
  "Rivio launch",
  "Rivio social LinkedIn",
  "Rivio Instagram official",
  "Rivio Facebook page",
  "Rivio X Twitter",
]);

const extra = k([
  "cheap gym day pass",
  "short term gym access",
  "weekly gym flexible",
  "month to month gym alternative",
  "gym trial alternative",
  "fitness pass app",
  "multi gym network India",
  "independent gym discovery",
  "local gym app",
  "morning gym flexible",
  "evening yoga booking flexible",
  "family fitness flexible",
  "beginner gym app India",
  "crossfit studio day pass",
  "pilates studio flexible",
  "mind body fitness India",
  "gamified fitness India",
  "social fitness app India",
  "Razorpay gym app",
  "UPI gym payment",
  "digital fitness India 2026",
  "fitness startup Gurugram",
  "North India gym app",
  "Tier 1 city fitness app",
  "metro city gym flexible",
  "Rivio support",
  "Rivio help center",
  "Rivio privacy",
  "Rivio terms",
  "Rivio about us",
  "Rivio partner onboarding",
  "list gym on Rivio",
  "join Rivio partner",
  "Rivio business earnings",
  "multi branch gym Rivio",
  "boutique studio Rivio",
  "student discount gym app",
  "check in radius gym app",
  "location verified gym visit",
  "transparent gym pricing app",
  "compare gyms app India",
  "amenities filter gym app",
  "women only gym filter",
  "24 hour gym discovery",
  "new year resolution gym flexible",
  "remote worker gym day pass",
  "tourist gym day pass India",
  "university student gym app",
  "stress relief yoga app",
  "weight loss journey flexible gym",
  "marathon training gym access",
  "build in public fitness startup",
]);

function dedupe(arr: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const s of arr) {
    const t = s.trim();
    if (!t || seen.has(t.toLowerCase())) continue;
    seen.add(t.toLowerCase());
    out.push(t);
  }
  return out;
}

export const SITE_SEO_KEYWORDS = dedupe([
  ...brand,
  ...payModel,
  ...yogaWellness,
  ...geoIntent,
  ...partnerB2b,
  ...features,
  ...founder,
  ...premium,
  ...longTail,
  ...tech,
  ...misc,
  ...extra,
]);
