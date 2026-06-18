const fs = require('fs');
const file = 'src/data/mockData.ts';

const content = fs.readFileSync(file, 'utf-8');
const startIndex = content.indexOf('export const institutes: Institute[] = [');
const endIndex = content.indexOf('export const specialties: Specialty[] = [');

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find blocks");
  process.exit(1);
}

const instDefs = [
  { id: "infsp-adrar", name: "INFSPM ADRAR", type: "INFSPM", wilaya: "Adrar", location: "Adrar", specialties: ["sage-femme", "isp", "kine", "manip-radio", "labo", "prep-pharma", "ass-med"] },
  { id: "infsp-batna", name: "INFSPM BATNA", type: "INFSPM", wilaya: "Batna", location: "Batna", specialties: ["isp", "kine", "ergo", "manip-radio", "labo", "prep-pharma", "hygiene", "ass-med"] },
  { id: "infsp-bejaia", name: "INFSPM BEJAIA", type: "INFSPM", wilaya: "Béjaïa", location: "Béjaïa", specialties: ["isp", "labo", "ass-med", "ass-soc"] },
  { id: "infsp-biskra", name: "INFSPM BISKRA", type: "INFSPM", wilaya: "Biskra", location: "Biskra", specialties: ["isp", "prothese", "kine", "manip-radio", "labo", "prep-pharma", "hygiene", "ass-med"] },
  { id: "infsp-bechar", name: "INFSPM BECHAR", type: "INFSPM", wilaya: "Béchar", location: "Béchar", specialties: ["isp", "kine", "manip-radio", "labo", "ass-med", "ass-soc"] },
  { id: "infsp-blida", name: "INFSPM BLIDA", type: "INFSPM", wilaya: "Blida", location: "Blida", specialties: ["isp", "prothese", "kine", "ergo", "psycho", "manip-radio", "labo", "prep-pharma", "hygiene"] },
  { id: "infsp-bouira", name: "INFSPM BOUIRA", type: "INFSPM", wilaya: "Bouira", location: "Bouira", specialties: ["isp", "manip-radio", "hygiene"] },
  { id: "infsp-tebessa", name: "INFSPM TEBESSA", type: "INFSPM", wilaya: "Tébessa", location: "Tébessa", specialties: ["isp", "manip-radio", "labo", "ass-med"] },
  { id: "infsp-tiaret", name: "INFSPM TIARET", type: "INFSPM", wilaya: "Tiaret", location: "Tiaret", specialties: ["isp", "manip-radio", "labo", "hygiene", "ass-med"] },
  { id: "infsp-alger", name: "INFSPM ALGER", type: "INFSPM", wilaya: "Alger", location: "Alger", specialties: ["isp", "diet", "prothese", "kine", "podo", "ergo", "ortho-app", "psycho", "manip-radio", "labo", "prep-pharma", "hygiene", "ass-med", "ass-soc"] },
  { id: "infsp-jijel", name: "INFSPM JIJEL", type: "INFSPM", wilaya: "Jijel", location: "Jijel", specialties: ["isp", "kine", "manip-radio", "labo", "prep-pharma", "ass-soc"] },
  { id: "infsp-setif", name: "INFSPM SETIF", type: "INFSPM", wilaya: "Sétif", location: "Sétif", specialties: ["isp", "kine", "ergo", "ortho-app", "psycho", "manip-radio", "labo", "prep-pharma"] },
  { id: "infsp-saida", name: "INFSPM SAIDA", type: "INFSPM", wilaya: "Saïda", location: "Saïda", specialties: ["isp", "manip-radio", "labo", "ass-med", "ass-soc"] },
  { id: "infsp-skikda", name: "INFSPM SKIKDA", type: "INFSPM", wilaya: "Skikda", location: "Skikda", specialties: ["isp", "manip-radio", "labo", "prep-pharma", "hygiene", "ass-med"] },
  { id: "infsp-sba", name: "INFSPM SIDI BEL ABBES", type: "INFSPM", wilaya: "Sidi Bel Abbès", location: "Sidi Bel Abbès", specialties: ["isp", "kine", "ergo", "psycho", "manip-radio", "labo", "prep-pharma"] },
  { id: "infsp-constantine", name: "INFSPM CONSTANTINE", type: "INFSPM", wilaya: "Constantine", location: "Constantine", specialties: ["isp", "diet", "kine", "manip-radio", "labo", "prep-pharma", "ass-soc"] },
  { id: "infsp-medea", name: "INFSPM MEDEA", type: "INFSPM", wilaya: "Médéa", location: "Médéa", specialties: ["isp", "manip-radio", "labo", "prep-pharma"] },
  { id: "infsp-mostaganem", name: "INFSPM MOSTAGANEM", type: "INFSPM", wilaya: "Mostaganem", location: "Mostaganem", specialties: ["isp", "manip-radio", "labo", "prep-pharma", "hygiene", "ass-med", "ass-soc"] },
  { id: "infsp-msila", name: "INFSPM MSILA", type: "INFSPM", wilaya: "M'Sila", location: "M'Sila", specialties: ["isp", "manip-radio", "labo", "ass-med", "ass-soc"] },
  { id: "infsp-mascara", name: "INFSPM MASCARA", type: "INFSPM", wilaya: "Mascara", location: "Mascara", specialties: ["isp", "kine", "ergo", "manip-radio", "labo", "hygiene", "ass-med"] },
  { id: "infsp-ouargla", name: "INFSPM OUARGLA", type: "INFSPM", wilaya: "Ouargla", location: "Ouargla", specialties: ["isp", "kine", "manip-radio", "labo", "hygiene", "ass-med", "ass-soc"] },
  { id: "infsp-oran", name: "INFSPM ORAN", type: "INFSPM", wilaya: "Oran", location: "Oran", specialties: ["isp", "prothese", "prep-pharma", "diet", "kine", "ortho-app", "manip-radio", "labo", "hygiene", "ass-med", "ass-soc"] },
  { id: "infsp-ain-defla", name: "INFSPM AIN DEFLA", type: "INFSPM", wilaya: "Aïn Defla", location: "Aïn Defla", specialties: ["isp", "manip-radio", "labo", "ass-med", "ass-soc"] }
];

let replacementArray = 'export const institutes: Institute[] = [\n';
for (const inst of instDefs) {
  replacementArray += `  {\n`;
  replacementArray += `    id: "${inst.id}", name: "${inst.name}", type: "INFSPM", wilaya: "${inst.wilaya}", location: "${inst.location}", bacAverage: 14, description: "Institut National de Formation Supérieure Paramédicale.",\n`;
  replacementArray += `    specialties: ${JSON.stringify(inst.specialties)},\n`;
  replacementArray += `    averages: [\n`;
  for (const spec of inst.specialties) {
    replacementArray += `      { specialtyId: "${spec}", year: 2024, average: 0 },\n`;
    replacementArray += `      { specialtyId: "${spec}", year: 2023, average: 0 },\n`;
  }
  replacementArray += `    ]\n  },\n`;
}
replacementArray += '];\n\n';

const before = content.substring(0, startIndex);
const after = content.substring(endIndex);

fs.writeFileSync(file, before + replacementArray + after, 'utf-8');
console.log("mockData updated gracefully!");
