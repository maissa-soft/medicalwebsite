const fs = require('fs');

const specialtiesDef = `
export interface Subject {
  name: string;
  coefficient: number;
  credit: number;
}
export interface AverageRecord {
  specialtyId: string;
  year: number;
  average: number;
  targetWilaya?: string;
}
export interface Institute {
  id: string;
  name: string;
  type: string;
  wilaya: string;
  location: string;
  bacAverage: number;
  description: string;
  specialties: string[];
  averages: AverageRecord[];
}
export interface Specialty {
  id: string;
  code: string;
  name: string;
  abbreviation: string;
  duration: string;
  description: string;
  career: string;
  subjects: Subject[];
}
export interface Course {
  id: string;
  specialtyId: string;
  title: string;
  type: 'PDF' | 'Video' | 'Article';
  size: string;
}

export const specialties: Specialty[] = [
  { id: "sage-femme", code: "W01SANTE", name: "SAGE FEMME DE SANTE PUBLIQUE", abbreviation: "SAGE-FEMME", duration: "3 à 4 ans", description: "Suivi des grossesses, accouchements et soins obstétricaux.", career: "Maternités, PMI.", subjects: [{ name: "Anatomie Obstétricale", coefficient: 3, credit: 6 }] },
  { id: "isp", code: "X01SANTE", name: "INFIMIERS DE SANTE PUBLIQUE", abbreviation: "ISP", duration: "3 ans", description: "Formation polyvalente pour les soins hospitaliers.", career: "Hôpitaux, cliniques.", subjects: [{ name: "Soins Infirmiers de Base", coefficient: 4, credit: 8 }] },
  { id: "diet", code: "X02SANTE", name: "DIETETICIENS DE SANTE PUBLIQUE", abbreviation: "DIET", duration: "3 ans", description: "Prévention et traitement nutritionnel des maladies.", career: "Hôpitaux, Restauration.", subjects: [{ name: "Nutrition et Diététique", coefficient: 4, credit: 8 }] },
  { id: "prothese", code: "X03SANTE", name: "PROTHESISTES DENTAIRES DE SANTE PUBLIQUE", abbreviation: "PROTH", duration: "3 ans", description: "Conception et fabrication des prothèses dentaires.", career: "Labos dentaires.", subjects: [{ name: "Technologie des Prothèses", coefficient: 4, credit: 7 }] },
  { id: "kine", code: "X04SANTE", name: "KINESITHERAPEUTES DE SANTE PUBLIQUE", abbreviation: "KINE", duration: "3 ans", description: "Rééducation fonctionnelle.", career: "Centres de rééducation.", subjects: [{ name: "Biomécanique", coefficient: 4, credit: 8 }] },
  { id: "podo", code: "X05SANTE", name: "PEDICURE PODOLOGUE DE SANTE PUBLIQUE", abbreviation: "PODO", duration: "3 ans", description: "Soins et traitements des affections du pied.", career: "Cabinets libéraux.", subjects: [{ name: "Pathologies du pied", coefficient: 3, credit: 6 }] },
  { id: "ergo", code: "X06SANTE", name: "ERGOTHERAPEUTES DE SANTE PUBLIQUE", abbreviation: "ERGO", duration: "3 ans", description: "Rééducation par l'activité.", career: "Psychiatrie, Gériatrie.", subjects: [{ name: "Ergothérapie Avancée", coefficient: 4, credit: 7 }] },
  { id: "ortho-app", code: "X07SANTE", name: "APPAREILLEURS ORTHOPEDISTES DE SANTE PUBLIQUE", abbreviation: "ORTHO-APP", duration: "3 ans", description: "Conception et appareillages orthopédiques.", career: "Centres d'appareillages.", subjects: [{ name: "Fabrication d'Ortèses", coefficient: 4, credit: 8 }] },
  { id: "psycho", code: "X08SANTE", name: "PSYCHOMOTRICIENS DE SANTE PUBLIQUE", abbreviation: "PSYCHO", duration: "3 ans", description: "Thérapie des troubles psychomoteurs.", career: "Centres médico-psychologiques", subjects: [{ name: "Développement Psychomoteur", coefficient: 4, credit: 7 }] },
  { id: "manip-radio", code: "X09SANTE", name: "MANIPULATEURS EN IMAGERIE MEDICALE DE SANTE PUBLIQUE", abbreviation: "MIM", duration: "3 ans", description: "Imagerie médicale (Radio, Scanner).", career: "Centres d'imagerie.", subjects: [{ name: "Imagerie Rayons X", coefficient: 4, credit: 7 }] },
  { id: "labo", code: "X10SANTE", name: "LABORANTINS DE SANTE PUBLIQUE", abbreviation: "LABO", duration: "3 ans", description: "Analyses médicales.", career: "Laboratoires.", subjects: [{ name: "Biochimie Clinique", coefficient: 4, credit: 8 }] },
  { id: "prep-pharma", code: "X11SANTE", name: "PREPARATEURS EN PHARMACIE DE SANTE PUBLIQUE", abbreviation: "PREP", duration: "3 ans", description: "Préparation des produits pharmaceutiques.", career: "Pharmacies, hôpitaux.", subjects: [{ name: "Pharmacologie Appliquée", coefficient: 4, credit: 8 }] },
  { id: "hygiene", code: "X12SANTE", name: "HYGIENISTES DE SANTE PUBLIQUE", abbreviation: "HYG", duration: "3 ans", description: "Contrôle de l'hygiène environnementale.", career: "Structures de soins.", subjects: [{ name: "Hygiène Hospitalière", coefficient: 3, credit: 6 }] },
  { id: "ass-med", code: "X13SANTE", name: "ASSISTANTS MEDICAUX DE SANTE PUBLIQUE", abbreviation: "ASS-MED", duration: "3 ans", description: "Assistance dans les processus médicaux.", career: "Cabinets, Urgences.", subjects: [{ name: "Logistique Médicale", coefficient: 3, credit: 5 }] },
  { id: "ass-soc", code: "X14SANTE", name: "ASSISTANTS SOCIAUX DE SANTE PUBLIQUE", abbreviation: "ASS-SOC", duration: "3 ans", description: "Accompagnement social des patients.", career: "Centres sociaux.", subjects: [{ name: "Sociologie de la Santé", coefficient: 3, credit: 6 }] }
];
export const courses: Course[] = [];
`;

const infspm = [
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

const sagesFemmes = [
  { id: "infssf-tlemcen", name: "INFSSF TLEMCEN", wilaya: "Tlemcen", spec: ["sage-femme"] },
  { id: "infssf-tizi-ouzou", name: "INFSSF TIZI OUZOU", wilaya: "Tizi Ouzou", spec: ["sage-femme"] },
  { id: "infssf-annaba", name: "INFSSF ANNABA", wilaya: "Annaba", spec: ["sage-femme"] }
];

const knownAverages = {
  "INFSPM CONSTANTINE": { "isp": 15.53, "diet": 15.89, "kine": 16.53, "manip-radio": 15.95, "labo": 15.83, "prep-pharma": 15.72, "ass-soc": 14.74 },
  "INFSPM ALGER": { "isp": 15.14, "diet": 16.34, "prothese": 16.45, "kine": 16.70, "podo": 14.97, "ergo": 15.40, "psycho": 15.86, "labo": 15.96, "prep-pharma": 15.84, "hygiene": 15.44, "ass-med": 15.04, "ass-soc": 15.40 },
  "INFSPM ORAN": { "isp": 15.01, "prothese": 16.25, "prep-pharma": 15.72, "diet": 16.50, "kine": 16.40, "ortho-app": 15.53, "manip-radio": 15.79, "labo": 15.80, "hygiene": 15.62, "ass-med": 14.25, "ass-soc": 14.23 },
  "INFSPM SETIF": { "isp": 15.79, "kine": 16.60, "ergo": 15.85, "ortho-app": 16.04, "manip-radio": 16.23, "labo": 16.30, "prep-pharma": 16.06 }
};

const sfTlemcen = [
  { w: "Adrar", v: 14.57 }, { w: "Chlef", v: 16.10 }, { w: "Béchar", v: 14.25 }, { w: "Tlemcen", v: 16.23 }, { w: "Tiaret", v: 15.82 }, { w: "Saïda", v: 15.17 }, { w: "Sidi Bel Abbès", v: 15.88 }, { w: "Mostaganem", v: 15.61 }, { w: "Mascara", v: 16.03 }, { w: "Oran", v: 15.67 }, { w: "El Bayadh", v: 15.26 }, { w: "Tindouf", v: 12.69 }, { w: "Tissemsilt", v: 15.28 }, { w: "Naâma", v: 15.19 }, { w: "Aïn Temouchent", v: 15.83 }, { w: "Relizane", v: 15.91 }, { w: "Timimoun", v: 13.97 }, { w: "Bordj Badji Mokhtar", v: 0 }, { w: "Béni Abbès", v: 12.45 }
];
const sfTizi = [
  { w: "Laghouat", v: 14.62 }, { w: "Béjaïa", v: 14.99 }, { w: "Blida", v: 15.76 }, { w: "Bouira", v: 15.53 }, { w: "Tamanrasset", v: 11.93 }, { w: "Tizi Ouzou", v: 15.41 }, { w: "Alger", v: 15.74 }, { w: "Djelfa", v: 15.13 }, { w: "Médéa", v: 15.93 }, { w: "M'Sila", v: 15.57 }, { w: "Boumerdès", v: 15.79 }, { w: "Tipaza", v: 15.54 }, { w: "Aïn Defla", v: 15.85 }, { w: "Ghardaïa", v: 15.49 }, { w: "In Salah", v: 12.42 }, { w: "In Guezzam", v: 0 }, { w: "El M'Ghair", v: 14.15 }, { w: "El Meniaa", v: 12.92 }
];
const sfAnnaba = [
  { w: "Oum El Bouaghi", v: 15.76 }, { w: "Batna", v: 16.20 }, { w: "Biskra", v: 15.51 }, { w: "Tébessa", v: 15.28 }, { w: "Jijel", v: 15.66 }, { w: "Sétif", v: 15.97 }, { w: "Skikda", v: 15.88 }, { w: "Annaba", v: 15.90 }, { w: "Guelma", v: 15.88 }, { w: "Constantine", v: 15.84 }, { w: "Ouargla", v: 14.26 }, { w: "Illizi", v: 12.19 }, { w: "Bordj Bou Arreridj", v: 15.66 }, { w: "El Tarf", v: 15.85 }, { w: "El Oued", v: 15.53 }, { w: "Khenchela", v: 15.87 }, { w: "Souk Ahras", v: 15.57 }, { w: "Mila", v: 15.85 }, { w: "Ouled Djellal", v: 13.57 }, { w: "Touggourt", v: 15.37 }, { w: "Djanet", v: 10.15 }
];

let res = 'export const institutes: Institute[] = [\n';
const allInst = [...infspm, ...sagesFemmes];

for (const inst of allInst) {
  res += `  { id: "${inst.id}", name: "${inst.name}", type: "${inst.id.includes('infssf') ? 'INFSSF' : 'INFSPM'}", wilaya: "${inst.wilaya}", location: "${inst.wilaya}", bacAverage: 14, description: "Institut National de Formation Supérieure Paramédicale.", specialties: ${JSON.stringify(inst.spec)}, averages: [\n`;
  
  if (inst.id === 'infssf-tlemcen') {
    sfTlemcen.forEach(o => res += `    { specialtyId: "sage-femme", year: 2025, average: ${o.v}, targetWilaya: "${o.w}" },\n`);
  } else if (inst.id === 'infssf-tizi-ouzou') {
    sfTizi.forEach(o => res += `    { specialtyId: "sage-femme", year: 2025, average: ${o.v}, targetWilaya: "${o.w}" },\n`);
  } else if (inst.id === 'infssf-annaba') {
    sfAnnaba.forEach(o => res += `    { specialtyId: "sage-femme", year: 2025, average: ${o.v}, targetWilaya: "${o.w}" },\n`);
  } else {
    for (const s of inst.spec) {
      const avg = knownAverages[inst.name]?.[s] || 0;
      res += `    { specialtyId: "${s}", year: 2025, average: ${avg} },\n`;
    }
  }
  res += `  ]},\n`;
}
res += '];\n';

fs.writeFileSync('e:/medicalwebsite/src/data/mockData.ts', res + '\n' + specialtiesDef, 'utf-8');
console.log('Done generating mockData.ts');
