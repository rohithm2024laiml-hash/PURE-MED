const fs = require('fs');
const path = require('path');
const { REMEDIES, CATEGORIES, HERBS_ENCYCLOPEDIA } = require('./data.js');

const outputJsPath = "c:\\Users\\rohit\\Documents\\PURE MED\\data.js";

const MEDICAL_OVERRIDES = {
    // Diseases
    "cold": "சளி",
    "cough": "இருமல்",
    "fever": "காய்ச்சல்",
    "headache": "தலைவலி",
    "stomach pain": "வயிற்று வலி",
    "indigestion": "செரிமானமின்மை",
    "diarrhea": "வயிற்றுப்போக்கு",
    "constipation": "மலச்சிக்கல்",
    "acidity": "நெஞ்செரிச்சல் / அசிடிட்டி",
    "vomiting": "வாந்தி",
    "sore throat": "தொண்டை வலி / கரகரப்பு",
    "asthma": "ஆஸ்துமா / மூச்சுத்திணறல்",
    "diabetes": "சர்க்கரை நோய் (நீரிழிவு)",
    "high blood pressure": "உயர் இரத்த அழுத்தம்",
    "low immunity": "குறைந்த நோய் எதிர்ப்பு சக்தி",
    "skin allergy": "தோல் ஒவ்வாமை",
    "pimples": "முகப்பரு",
    "hair fall": "முடி உதிர்தல்",
    "dandruff": "பொடுகு",
    "joint pain": "மூட்டு வலி",
    "body pain": "உடல் வலி",
    "toothache": "பல் வலி",
    "bad breath": "வாய் துர்நாற்றம்",
    "ear pain": "காது வலி",
    "eye irritation": "கண் எரிச்சல்",
    "insomnia": "தூக்கமின்மை",
    "stress": "மன அழுத்தம்",
    "anxiety": "பதற்றம் / கவலை",
    "obesity": "உடல் பருமன்",
    "weight loss": "உடல் எடை குறைப்பு",
    "anemia": "இரத்த சோகை",
    "low energy": "சோர்வு / குறைந்த ஆற்றல்",
    "menstrual pain": "மாதவிடாய் வலி",
    "pcos": "பிசிஓஎஸ் (சினைப்பை நீர்க்கட்டி)",
    "urinary infection": "சிறுநீர் பாதை தொற்று",
    "kidney stones": "சிறுநீரகக் கற்கள்",
    "liver detox": "கல்லீரல் நச்சு நீக்கம்",
    "jaundice": "மஞ்சள் காமாலை",
    "piles": "மூல நோய்",
    "ulcer": "வயிற்றுப் புண் (அல்சர்)",
    "back pain": "முதுகு வலி",
    "neck pain": "கழுத்து வலி",
    "migraine": "ஒற்றைத் தலைவலி (மைக்ரேன்)",
    "sunburn": "சூரிய ஒளி அலர்ஜி",
    "dry skin": "வறண்ட சருமம்",
    "cracked heels": "பித்த வெடிப்பு",
    "chickenpox": "சின்னம்மை",
    "mosquito bites": "கொசுக்கடி",
    "sinusitis": "사이너스 (சைனஸ் அழற்சி)",
    "nausea": "குமட்டல்",
    "dehydration": "நீர்ச்சத்து குறைபாடு",
    "weak bones": "பலவீனமான எலும்புகள்",
    "memory improvement": "ஞாபக சக்தி மேம்பாடு",
    "heart health": "இதய ஆரோக்கியம்",
    "cholesterol": "கொலஸ்ட்ரால்",
    "common flu": "சாதாரண காய்ச்சல்",
    "throat infection": "தொண்டை தொற்று",
    "dry cough": "வறட்டு இருமல்",
    "loss of appetite": "பசியின்மை",
    "hyperacidity": "அதிக அமிலத்தன்மை",
    "cold body": "உடல் குளிர்ச்சி",
    "immunity boost": "நோய் எதிர்ப்பு சக்தி அதிகரிப்பு",
    "fatigue": "உடல் சோர்வு",
    "motion sickness": "பயண வாந்தி / குமட்டல்",
    "nasal blockage": "மூக்கடைப்பு",
    "bronchitis": "மூச்சுக்குழாய் அழற்சி",
    "thyroid support": "தைராய்டு ஆதரவு",
    "bone strength": "எலும்பு வலிமை",
    "cramps": "தசப்பிடிப்பு",
    "poor digestion": "குறைந்த செரிமானம்",
    "seasonal allergy": "பருவகால ஒவ்வாமை",
    "diabetes type 2": "டைப் 2 நீரிழிவு",
    "hypertension": "இரத்த அழுத்தம் (அழுத்தம்)",
    "arthritis": "வாத நோய் (ஆர்த்ரிடிஸ்)",
    "depression": "மனச்சோர்வு",
    "anxiety disorder": "பதற்ற நோய்",
    "eczema": "எக்ஸிமா (தோல் நோய்)",
    "psoriasis": "சொரியாசிஸ் (செதில் படை)",
    "acne": "பருக்கள்",
    "fungal infection": "பூஞ்சை தொற்று",
    "high cholesterol": "அதிக கொலஸ்ட்ரால்",
    "heartburn": "நெஞ்செரிச்சல்",
    "gastritis": "வயிற்று வீக்கம் / கேஸ்",
    "food poisoning": "உணவு நச்சுத்தன்மை",
    "dengue": "டெங்கு காய்ச்சல்",
    "typhoid": "டைபாய்டு காய்ச்சல்",
    "malaria": "மலேரியா",
    "covid-19 immunity": "கோவிட்-19 எதிர்ப்பு சக்தி",
    "pneumonia": "நிமோனியா",
    "tuberculosis": "காசநோய் (டிபி)",
    "sciatica": "சயாடிகா நரம்பு வலி",
    "frozen shoulder": "தோள்பட்டை விறைப்பு",
    "osteoporosis": "எலும்புத் துளை நோய்",
    "low blood pressure": "குறைந்த இரத்த அழுத்தம்",
    "nerve weakness": "நரம்பு தளர்ச்சி",
    "vertigo": "தலைச்சுற்றல் (வெர்டிகோ)",
    "epilepsy": "வலிப்பு நோய்",
    "parkinson support": "பார்கின்சன் ஆதரவு",
    "alzheimer support": "அல்சைமர் ஆதரவு",
    "eye dryness": "கண் வறட்சி",
    "conjunctivitis": "கண் வலி (மெட்ராஸ் ஐ)",
    "cataract prevention": "கண்புரை தடுப்பு",
    "hearing weakness": "காது கேளாமை",
    "nose bleeding": "மூக்கில் இரத்தக் கசிவு",
    "mouth ulcer": "வாய் புண்",
    "bleeding gums": "ஈறுகளில் இரத்தம் வடிதல்",
    "dental cavities": "பல் சொத்தை",
    "bad digestion": "மோசமான செரிமானம்",
    "gas trouble": "வாயுத் தொல்லை",
    "appendix pain": "குடல்வால் அழற்சி வலி",
    "liver fatty disease": "கல்லீரல் கொழுப்பு நோய்",
    "kidney weakness": "சிறுநீரக பலவீனம்",
    "urine burning": "சிறுநீர் எரிச்சல்",
    "gallbladder stones": "பித்தப்பை கற்கள்",
    "hemorrhoids": "மூல நோய் (ஹேமராய்ட்ஸ்)",
    "varicose veins": "சிரை வீக்கம் (வெரிகோஸ் வெயின்ஸ்)",
    "skin dryness": "தோல் வறட்சி",
    "dark spots": "கரும்புள்ளிகள்",
    "wrinkles": "சுருக்கங்கள்",
    "premature hair greying": "இளநரை",
    "hair dandruff": "தலை பொடுகு",
    "hair growth": "முடி வளர்ச்சி",
    "menopause symptoms": "மாதவிடாய் நின்ற அறிகுறிகள்",
    "infertility support": "மலட்டுத்தன்மை ஆதரவு",
    "pregnancy nausea": "கர்ப்பகால குமட்டல்",
    "postpartum recovery": "பிரசவத்திற்கு பிந்தைய மீட்பு",
    "child immunity": "குழந்தை எதிர்ப்பு சக்தி",
    "bed wetting": "படுக்கையில் சிறுநீர் கழித்தல்",
    "autism support": "ஆட்டிசம் ஆதரவு",
    "adhd support": "ஏடிஹெச்டி ஆதரவு",
    "muscle pain": "தசை வலி",
    "sports injury": "விளையாட்டு காயம்",
    "burn injury": "தீக்காயம்",
    "cuts and wounds": "வெட்டுக்கள் மற்றும் காயங்கள்",
    "snake bite": "பாம்பு கடி",
    "bee sting": "தேனீ கொட்டு",
    "motion fever": "பயணக் காய்ச்சல்",
    "heat stroke": "வெப்பத் தாக்கம்",
    "cold fever": "சளி காய்ச்சல்",
    "seasonal cold": "பருவகால சளி",
    
    // Ingredients
    "tulsi": "துளசி",
    "ginger": "இஞ்சி",
    "pepper": "மிளகு",
    "honey": "தேன்",
    "turmeric": "மஞ்சள்",
    "milk": "பால்",
    "nilavembu leaves": "நிலவேம்பு இலைகள்",
    "water": "தண்ணீர்",
    "mint": "புதினா",
    "eucalyptus oil": "யூகலிப்டஸ் தைலம்",
    "camphor": "கற்பூரம்",
    "cumin seeds": "சீரகம்",
    "lemon": "எலுமிச்சை",
    "buttermilk": "மோர்",
    "curry leaves": "கறிவேப்பிலை",
    "banana": "வாழைப்பழம்",
    "neem leaves": "வேப்பிலை",
    "warm water": "வெதுவெதுப்பான தண்ணீர்",
    "salt": "உப்பு",
    "fenugreek seeds": "வெந்தயம்",
    "garlic": "பூண்டு",
    "amla": "நெல்லிக்காய்",
    "aloe vera": "கற்றாழை",
    "hibiscus": "செம்பருத்தி",
    "coconut oil": "தேங்காய் எண்ணெய்",
    "clove": "கிராம்பு",
    "clove oil": "கிராம்பு எண்ணெய்",
    "mint leaves": "புதினா இலைகள்",
    "sesame oil": "நல்லெண்ணெய்",
    "rose water": "பன்னீர் (ரோஸ் வாட்டர்)",
    "nutmeg": "ஜாதிக்காய்",
    "brahmi leaves": "பிராமி இலைகள்",
    "ashwagandha powder": "அஸ்வகந்தா பொடி",
    "green tea": "பச்சை தேயிலை (கிரீன் டீ)",
    "dates": "பேரிச்சம்பழம்",
    "almonds": "பாதாம்",
    "cashews": "முந்திரி",
    "fennel seeds": "சோம்பு",
    "cinnamon": "இலவங்கப்பட்டை",
    "coriander seeds": "கொத்தமல்லி விதை",
    "banana stem": "வாழைத்தண்டு",
    "keelanelli leaves": "கீழாநெல்லி இலைகள்",
    "sugarcane juice": "கரும்புச் சாறு",
    "cabbage": "முட்டைக்கோஸ்",
    "peppermint leaves": "புதினா",
    "cucumber": "வெள்ளரிக்காய்",
    "ragi": "கேழ்வரகு (ராகி)",
    "jaggery": "வெல்லம்",
    "vallarai leaves": "வல்லாரை இலைகள்",
    "arjuna bark": "மருதம்பட்டை",
    "tamarind": "புளி",
    "palm candy": "பனங்கற்கண்டு",
    "ajwain": "ஓமம்",
    "cumin": "சீரகம்",
    "herbal mix": "மூலிகைக் கலவை",
    "dry ginger": "சுக்கு",
    "palm sugar": "பனை வெல்லம்",
    "ginger candy": "இஞ்சி மிட்டாய்",
    "hot water": "சுடுதண்ணீர்",
    "adathoda leaves": "ஆடாதொடை இலைகள்",
    "moringa soup": "முருங்கை சூப்",
    "sesame": "எள்",
    "laddu": "லட்டு",
    "pudina chutney": "புதினா சட்னி",
    "bitter gourd": "பாகற்காய்",
    "hibiscus petals": "செம்பருத்தி இதழ்கள்",
    "chamomile flowers": "சாமந்தி பூக்கள்",
    "aloe coconut mix": "கற்றாழை தேங்காய் கலவை",
    "aloe neem face pack": "கற்றாழை வேம்பு பேக்",
    "apple cider vinegar": "ஆப்பிள் சீடர் வினிகர்",
    "flaxseeds": "ஆளிவிதை",
    "cold milk": "குளிர்ந்த பால்",
    "coriander": "கொத்தமல்லி",
    "papaya leaves": "பப்பாளி இலைகள்",
    "basil": "துளசி",
    "nilavembu decoction": "நிலவேம்பு குடிநீர்",
    "omega herbal diet": "ஒமேகா மூலிகை உணவு",
    "walnuts": "அக்ரூட் பருப்புகள் (வால்நட்)",
    "epsom salt": "எப்சம் உப்பு",
    "baking soda": "சமையல் சோடா",
    "dry fruits mix": "உலர் பழங்கள் கலவை",
    "shatavari": "தண்ணீர்விட்டான் கிழங்கு",
    "saffron": "குங்குமப்பூ",
    "neem bath": "வேப்பிலை குளியல்",
    "pepper ginger soup": "மிளகு இஞ்சி சூப்",
    "moringa leaves": "முருங்கை இலைகள்",
    "morindha": "நோனி பழம்",
    "neem paste": "வேப்பிலை விழுது",
    "turmeric paste": "மஞ்சள் விழுது",
    "fenugreek hair pack": "வெந்தயம் கூந்தல் பேக்",
    "ashwagandha": "அஸ்வகந்தா",
    "brahmi": "பிராமி",
    "morringa leaves": "முருங்கை இலைகள்"
};

// Helper to fetch Google translation
async function translateText(text) {
    if (!text) return "";
    
    // Check overrides first
    const key = text.trim().toLowerCase();
    if (MEDICAL_OVERRIDES[key]) {
        return MEDICAL_OVERRIDES[key];
    }

    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ta&dt=t&q=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data[0] && data[0][0] && data[0][0][0]) {
            return data[0][0][0];
        }
    } catch (e) {
        console.error(`Failed to translate "${text}":`, e);
    }
    return text; // Fallback to original
}

// Delay helper to avoid hitting API rate limits
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
    console.log("Starting translation of database...");

    const bilingualRemedies = [];

    // Translate Remedies
    for (let i = 0; i < REMEDIES.length; i++) {
        const rem = REMEDIES[i];
        console.log(`Translating remedy ${i+1}/${REMEDIES.length}: ${rem.disease} - ${rem.name}`);

        const disease_ta = await translateText(rem.disease);
        const name_ta = await translateText(rem.name);
        
        const ingredients_ta = [];
        for (const ing of rem.ingredients) {
            ingredients_ta.push(await translateText(ing));
        }

        const preparation_ta = await translateText(rem.preparation);
        const usage_ta = await translateText(rem.usage);
        const precautions_ta = await translateText(rem.precautions);

        bilingualRemedies.push({
            id: rem.id,
            disease_en: rem.disease,
            disease_ta: disease_ta,
            name_en: rem.name,
            name_ta: name_ta,
            category: rem.category,
            ingredients_en: rem.ingredients,
            ingredients_ta: ingredients_ta,
            preparation_en: rem.preparation,
            preparation_ta: preparation_ta,
            usage_en: rem.usage,
            usage_ta: usage_ta,
            precautions_en: rem.precautions,
            precautions_ta: precautions_ta
        });

        // Small pause to prevent rate limiting
        await sleep(100);
    }

    // Translate Herbs Encyclopedia
    console.log("Translating Herbs Encyclopedia...");
    const bilingualHerbs = [];
    for (const herb of HERBS_ENCYCLOPEDIA) {
        const benefits_ta = await translateText(herb.benefits);
        const howToUse_ta = await translateText(herb.howToUse);
        // Extract common name and tamil name from "Tulsi (Holy Basil / துளசி)"
        const nameParts = herb.name.split('/');
        const name_ta = nameParts[1] ? nameParts[1].replace(')', '').trim() : herb.name;

        bilingualHerbs.push({
            name_en: herb.name,
            name_ta: herb.name, // Keep bilingual string in name
            scientificName: herb.scientificName,
            benefits_en: herb.benefits,
            benefits_ta: benefits_ta,
            howToUse_en: herb.howToUse,
            howToUse_ta: howToUse_ta
        });
    }

    // Write file
    const outputContent = `// PURE MED Traditional Tamil Remedies Database
// Auto-generated bilingual version (English & Tamil)

const REMEDIES = ${JSON.stringify(bilingualRemedies, null, 2)};

const CATEGORIES = {
  respiratory: {
    id: "respiratory",
    name_en: "Cold, Cough & Fever",
    name_ta: "சளி, இருமல் & காய்ச்சல்",
    icon: "🫁"
  },
  digestion: {
    id: "digestion",
    name_en: "Digestion & Stomach",
    name_ta: "செரிமானம் & வயிறு",
    icon: "🥣"
  },
  skin_hair: {
    id: "skin_hair",
    name_en: "Skin & Hair Care",
    name_ta: "சருமம் & கூந்தல் பராமரிப்பு",
    icon: "🌿"
  },
  pain_relief: {
    id: "pain_relief",
    name_en: "Pain & Inflammation",
    name_ta: "வலி & வீக்கம் நிவாரணம்",
    icon: "🩹"
  },
  mental_neurological: {
    id: "mental_neurological",
    name_en: "Brain & Nervous System",
    name_ta: "மூளை & நரம்பு மண்டலம்",
    icon: "🧠"
  },
  general_wellness: {
    id: "general_wellness",
    name_en: "General Health & Immunity",
    name_ta: "பொது ஆரோக்கியம் & எதிர்ப்பு சக்தி",
    icon: "☀️"
  }
};

const HERBS_ENCYCLOPEDIA = ${JSON.stringify(bilingualHerbs, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { REMEDIES, CATEGORIES, HERBS_ENCYCLOPEDIA };
}
`;

    fs.writeFileSync(outputJsPath, outputContent, 'utf8');
    console.log(`Success! Bilingual database written to ${outputJsPath}`);
}

main();
