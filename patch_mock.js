const fs = require('fs');

const raw = fs.readFileSync('data2.txt', 'utf-8');
const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);

const idMap = {
  "INFIMIERS DE SANTE PUBLIQUE": "isp",
  "INFIMIERS DE SANTE": "isp",
  "KINESITHERAPEUTES DE SANTE PUBLIQUE": "kine",
  "MANIPULATEURS EN IMAGERIE MEDICALE DE SANTE PUBLIQUE": "manip-radio",
  "MANIPULATEURS EN IMAGERIE MEDICALE DE SANTE": "manip-radio",
  "LABORANTINS DE SANTE PUBLIQUE": "labo",
  "LABORANTINS DE SANTE": "labo",
  "PREPARATEURS EN PHARMACIE DE SANTE PUBLIQUE": "prep-pharma",
  "ASSISTANTS MEDICAUX DE SANTE PUBLIQUE": "ass-med",
  "ERGOTHERAPEUTES DE SANTE PUBLIQUE": "ergo",
  "HYGIENISTES DE SANTE PUBLIQUE": "hygiene",
  "ASSISTANTS SOCIAUX DE SANTE PUBLIQUE": "ass-soc",
  "DIETETICIENS DE SANTE PUBLIQUE": "diet",
  "PROTHESISTES DENTAIRES DE SANTE PUBLIQUE": "prothese",
  "PEDICURE PODOLOGUE DE SANTE PUBLIQUE": "podo",
  "APPAREILLEURS ORTHOPEDISTES DE SANTE PUBLIQUE": "ortho-app",
  "PSYCHOMOTRICIENS DE SANTE PUBLIQUE": "psycho"
};

let parsedData = {};
let curInst = null;
let curSpec = null;

for (let line of lines) {
  if (line.includes('INFSPM')) {
    const match = line.match(/(INFSPM[\sA-Z-]+)/);
    if (match) {
       curInst = match[1].trim();
       if (!parsedData[curInst]) parsedData[curInst] = {};
    }
  } 
  else if (line.startsWith('•')) {
    const specRaw = line.replace('•', '').trim();
    curSpec = idMap[specRaw] || null;
    if (!curSpec && specRaw.length > 5) console.log("Unknown spec:", specRaw);
    else if (curInst && curSpec) {
      if (!parsedData[curInst][curSpec]) parsedData[curInst][curSpec] = [];
    }
  } 
  else if ((line.includes('min 1') || line.includes('min1')) && curInst && curSpec) {
    const rx = /^(.*?)(?:\s*:)?\s*\(\s*min\s*1\s*:\s*([0-9.]+|-+)/i;
    const m = line.match(rx);
    if (m) {
      let w = m[1].replace(/:/g, '').trim(); 
      w = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
      let v = parseFloat(m[2]);
      if (isNaN(v)) {
         // try min 2 if min 1 is empty --
         const rx2 = /min\s*2\s*:\s*([0-9.]+)/i;
         const m2 = line.match(rx2);
         if(m2 && !isNaN(parseFloat(m2[1]))) {
            v = parseFloat(m2[1]);
         } else {
            v = 0;
         }
      }
      parsedData[curInst][curSpec].push({ w, v });
    } else {
        console.log("Failed to parse line:", line);
    }
  }
}

// Write a small script to inject this into mockData.ts
const targetFile = 'src/data/mockData.ts';
let mockData = fs.readFileSync(targetFile, 'utf-8');

// We will replace the institutes array.
// But first, we need to extract the existing 'institutes' array because we want to preserve Sages-Femmes!
// For safe injection, let's just generate the code.
const infspmList = [
  { id: "infsp-adrar", name: "INFSPM ADRAR", wilaya: "Adrar", spec: ["isp", "kine", "manip-radio", "labo", "prep-pharma", "ass-med"] },
  { id: "infsp-batna", name: "INFSPM BATNA", wilaya: "Batna", spec: ["isp", "kine", "ergo", "manip-radio", "labo", "prep-pharma", "hygiene", "ass-med"] },
  { id: "infsp-bejaia", name: "INFSPM BEJAIA", wilaya: "Béjaïa", spec: ["isp", "labo", "ass-med", "ass-soc"] },
  { id: "infsp-biskra", name: "INFSPM BISKRA", wilaya: "Biskra", spec: ["isp", "prothese", "kine", "manip-radio", "labo", "prep-pharma", "hygiene", "ass-med"] },
  { id: "infsp-bechar", name: "INFSPM BECHAR", wilaya: "Béchar", spec: ["isp", "kine", "manip-radio", "labo", "ass-med", "ass-soc"] },
  { id: "infsp-blida", name: "INFSPM BLIDA", wilaya: "Blida", spec: ["isp", "prothese", "kine", "ergo", "psycho", "manip-radio", "labo", "prep-pharma", "hygiene"] },
  { id: "infsp-bouira", name: "INFSPM BOUIRA", wilaya: "Bouira", spec: ["isp", "manip-radio", "hygiene"] },
  { id: "infsp-tebessa", name: "INFSPM TEBESSA", wilaya: "Tébessa", spec: ["isp", "manip-radio", "labo", "ass-med"] },
  { id: "infsp-tiaret", name: "INFSPM TIARET", wilaya: "Tiaret", spec: ["isp", "manip-radio", "labo", "hygiene", "ass-med"] },
  { id: "infsp-alger", name: "INFSPM ALGER", wilaya: "Alger", spec: ["isp", "diet", "prothese", "kine", "podo", "ergo", "ortho-app", "psycho", "manip-radio", "labo", "prep-pharma", "hygiene", "ass-med", "ass-soc"] },
  { id: "infsp-jijel", name: "INFSPM JIJEL", wilaya: "Jijel", spec: ["isp", "kine", "manip-radio", "labo", "prep-pharma", "ass-soc"] },
  { id: "infsp-setif", name: "INFSPM SETIF", wilaya: "Sétif", spec: ["isp", "kine", "ergo", "ortho-app", "psycho", "manip-radio", "labo", "prep-pharma"] },
  { id: "infsp-saida", name: "INFSPM SAIDA", wilaya: "Saïda", spec: ["isp", "manip-radio", "labo", "ass-med", "ass-soc"] },
  { id: "infsp-skikda", name: "INFSPM SKIKDA", wilaya: "Skikda", spec: ["isp", "manip-radio", "labo", "prep-pharma", "hygiene", "ass-med"] },
  { id: "infsp-sba", name: "INFSPM SIDI BEL ABBES", wilaya: "Sidi Bel Abbès", spec: ["isp", "kine", "ergo", "psycho", "manip-radio", "labo", "prep-pharma"] },
  { id: "infsp-constantine", name: "INFSPM CONSTANTINE", wilaya: "Constantine", spec: ["isp", "diet", "kine", "manip-radio", "labo", "prep-pharma", "ass-soc"] },
  { id: "infsp-medea", name: "INFSPM MEDEA", wilaya: "Médéa", spec: ["isp", "manip-radio", "labo", "prep-pharma"] },
  { id: "infsp-mostaganem", name: "INFSPM MOSTAGANEM", wilaya: "Mostaganem", spec: ["isp", "manip-radio", "labo", "prep-pharma", "hygiene", "ass-med", "ass-soc"] },
  { id: "infsp-msila", name: "INFSPM MSILA", wilaya: "M'Sila", spec: ["isp", "manip-radio", "labo", "ass-med", "ass-soc"] },
  { id: "infsp-mascara", name: "INFSPM MASCARA", wilaya: "Mascara", spec: ["isp", "kine", "ergo", "manip-radio", "labo", "hygiene", "ass-med"] },
  { id: "infsp-ouargla", name: "INFSPM OUARGLA", wilaya: "Ouargla", spec: ["isp", "kine", "manip-radio", "labo", "hygiene", "ass-med", "ass-soc"] },
  { id: "infsp-oran", name: "INFSPM ORAN", wilaya: "Oran", spec: ["isp", "prothese", "prep-pharma", "diet", "kine", "ortho-app", "manip-radio", "labo", "hygiene", "ass-med", "ass-soc"] },
  { id: "infsp-ain-defla", name: "INFSPM AIN DEFLA", wilaya: "Aïn Defla", spec: ["isp", "manip-radio", "labo", "ass-med", "ass-soc"] }
];

const knownConstantines = {
  "INFSPM CONSTANTINE": { "isp": 15.53, "diet": 15.89, "kine": 16.53, "manip-radio": 15.95, "labo": 15.83, "prep-pharma": 15.72, "ass-soc": 14.74 },
  "INFSPM ORAN": { "isp": 15.01, "prothese": 16.25, "prep-pharma": 15.72, "diet": 16.50, "kine": 16.40, "ortho-app": 15.53, "manip-radio": 15.79, "labo": 15.80, "hygiene": 15.62, "ass-med": 14.25, "ass-soc": 14.23 },
  "INFSPM SETIF": { "isp": 15.79, "kine": 16.60, "ergo": 15.85, "ortho-app": 16.04, "manip-radio": 16.23, "labo": 16.30, "prep-pharma": 16.06 }
}; // Alger is now handled completely by parsedData ! Oran, Constantine, Setif are just fallbacks if not in parsedData text.

// Build the array
let replacementArray = 'export const institutes: Institute[] = [\n';

for (let inst of infspmList) {
  replacementArray += `  { id: "${inst.id}", name: "${inst.name}", type: "INFSPM", wilaya: "${inst.wilaya}", location: "${inst.wilaya}", bacAverage: 14, description: "Institut National de Formation Supérieure Paramédicale.", specialties: ${JSON.stringify(inst.spec)}, averages: [\n`;
  for (let s of inst.spec) {
    if (parsedData[inst.name] && parsedData[inst.name][s]) {
      for (let cand of parsedData[inst.name][s]) {
         replacementArray += `    { specialtyId: "${s}", year: 2025, average: ${cand.v}, targetWilaya: "${cand.w}" },\n`;
      }
    } else {
      let v = knownConstantines[inst.name]?.[s] || 0;
      replacementArray += `    { specialtyId: "${s}", year: 2025, average: ${v} },\n`;
    }
  }
  replacementArray += `  ]},\n`;
}

// Preserve Sages-Femmes
const sfTlemcen = [ { w: "Adrar", v: 14.57 }, { w: "Chlef", v: 16.10 }, { w: "Béchar", v: 14.25 }, { w: "Tlemcen", v: 16.23 }, { w: "Tiaret", v: 15.82 }, { w: "Saïda", v: 15.17 }, { w: "Sidi Bel Abbès", v: 15.88 }, { w: "Mostaganem", v: 15.61 }, { w: "Mascara", v: 16.03 }, { w: "Oran", v: 15.67 }, { w: "El Bayadh", v: 15.26 }, { w: "Tindouf", v: 12.69 }, { w: "Tissemsilt", v: 15.28 }, { w: "Naâma", v: 15.19 }, { w: "Aïn Temouchent", v: 15.83 }, { w: "Relizane", v: 15.91 }, { w: "Timimoun", v: 13.97 }, { w: "Bordj Badji Mokhtar", v: 0 }, { w: "Béni Abbès", v: 12.45 } ];
const sfTizi = [ { w: "Laghouat", v: 14.62 }, { w: "Béjaïa", v: 14.99 }, { w: "Blida", v: 15.76 }, { w: "Bouira", v: 15.53 }, { w: "Tamanrasset", v: 11.93 }, { w: "Tizi Ouzou", v: 15.41 }, { w: "Alger", v: 15.74 }, { w: "Djelfa", v: 15.13 }, { w: "Médéa", v: 15.93 }, { w: "M'Sila", v: 15.57 }, { w: "Boumerdès", v: 15.79 }, { w: "Tipaza", v: 15.54 }, { w: "Aïn Defla", v: 15.85 }, { w: "Ghardaïa", v: 15.49 }, { w: "In Salah", v: 12.42 }, { w: "In Guezzam", v: 0 }, { w: "El M'Ghair", v: 14.15 }, { w: "El Meniaa", v: 12.92 } ];
const sfAnnaba = [ { w: "Oum El Bouaghi", v: 15.76 }, { w: "Batna", v: 16.20 }, { w: "Biskra", v: 15.51 }, { w: "Tébessa", v: 15.28 }, { w: "Jijel", v: 15.66 }, { w: "Sétif", v: 15.97 }, { w: "Skikda", v: 15.88 }, { w: "Annaba", v: 15.90 }, { w: "Guelma", v: 15.88 }, { w: "Constantine", v: 15.84 }, { w: "Ouargla", v: 14.26 }, { w: "Illizi", v: 12.19 }, { w: "Bordj Bou Arreridj", v: 15.66 }, { w: "El Tarf", v: 15.85 }, { w: "El Oued", v: 15.53 }, { w: "Khenchela", v: 15.87 }, { w: "Souk Ahras", v: 15.57 }, { w: "Mila", v: 15.85 }, { w: "Ouled Djellal", v: 13.57 }, { w: "Touggourt", v: 15.37 }, { w: "Djanet", v: 10.15 } ];

const sagesFemmes = [
  { id: "infssf-tlemcen", name: "INFSSF TLEMCEN", wilaya: "Tlemcen", spec: ["sage-femme"], avg: sfTlemcen },
  { id: "infssf-tizi-ouzou", name: "INFSSF TIZI OUZOU", wilaya: "Tizi Ouzou", spec: ["sage-femme"], avg: sfTizi },
  { id: "infssf-annaba", name: "INFSSF ANNABA", wilaya: "Annaba", spec: ["sage-femme"], avg: sfAnnaba }
];

for (let inst of sagesFemmes) {
  replacementArray += `  { id: "${inst.id}", name: "${inst.name}", type: "INFSSF", wilaya: "${inst.wilaya}", location: "${inst.wilaya}", bacAverage: 14, description: "Institut National de Sages-Femmes.", specialties: ["sage-femme"], averages: [\n`;
  for(let cand of inst.avg) {
     replacementArray += `    { specialtyId: "sage-femme", year: 2025, average: ${cand.v}, targetWilaya: "${cand.w}" },\n`;
  }
  replacementArray += `  ]},\n`;
}

replacementArray += '];\n\n';

const startIndex = mockData.indexOf('export const institutes: Institute[] = [');
const endIndex = mockData.indexOf('export const specialties: Specialty[] = [');

if (startIndex !== -1 && endIndex !== -1) {
  const before = mockData.substring(0, startIndex);
  const after = mockData.substring(endIndex);
  fs.writeFileSync(targetFile, before + replacementArray + after, 'utf-8');
  console.log("Mock data updated with deep parsing success!");
} else {
  console.log("Error finding indices");
}
