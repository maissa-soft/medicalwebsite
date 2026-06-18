const fs = require('fs');

const specialtiesPath = 'src/data/json/specialties.json';
const specialties = JSON.parse(fs.readFileSync(specialtiesPath, 'utf8'));

const laboData = [
  {
    name: "Semestre 1",
    modules: [
      { name: "Anatomie Physiologie.", coefficient: 3, credit: 8 },
      { name: "Anthropologie/ Psychologie / Psychosociologie.", coefficient: 3, credit: 3 },
      { name: "Hygiène Hospitalière.", coefficient: 3, credit: 4 },
      { name: "Législation/Ethique Prof/Déontologie.", coefficient: 3, credit: 2 },
      { name: "Santé Publique / Démographie / Economie de Santé.", coefficient: 3, credit: 4 },
      { name: "Secourisme.", coefficient: 1, credit: 1 },
      { name: "Soins de base.", coefficient: 3, credit: 4 },
      { name: "Remédiation linguistique / Techniques d’expression écrite et orale.", coefficient: 2, credit: 3 },
      { name: "Terminologie médicale.", coefficient: 1, credit: 1 }
    ]
  },
  {
    name: "Semestre 2",
    modules: [
      { name: "Chimie", coefficient: 4, credit: 10 },
      { name: "Biophysique", coefficient: 2, credit: 5 },
      { name: "Maths statistiques", coefficient: 1, credit: 3 },
      { name: "Prélèvement et approche du malade", coefficient: 2, credit: 6 },
      { name: "Sémiologie", coefficient: 1, credit: 1 },
      { name: "Pharmacie", coefficient: 1, credit: 1 },
      { name: "Informatique/Internet", coefficient: 1, credit: 2 },
      { name: "Nutrition", coefficient: 1, credit: 1 },
      { name: "Anglais technique", coefficient: 1, credit: 1 }
    ]
  },
  {
    name: "Semestre 3",
    modules: [
      { name: "Bactériologie générale", coefficient: 3, credit: 6 },
      { name: "Biochimie générale", coefficient: 3, credit: 5 },
      { name: "Immunologie", coefficient: 3, credit: 5 },
      { name: "Bactériologie systématique", coefficient: 3, credit: 5 },
      { name: "Parasitologie", coefficient: 3, credit: 5 },
      { name: "Qualité, hygiène et sécurité", coefficient: 1, credit: 1 },
      { name: "Technologie et maintenance", coefficient: 1, credit: 3 }
    ]
  },
  {
    name: "Semestre 4",
    modules: [
      { name: "Anatomie et cytopathologie", coefficient: 2, credit: 6 },
      { name: "Hématologie générale", coefficient: 3, credit: 6 },
      { name: "Mycologie", coefficient: 2, credit: 4 },
      { name: "Bactériologie appliquée", coefficient: 4, credit: 6 },
      { name: "Biochimie appliquée", coefficient: 4, credit: 6 },
      { name: "Méthodologie du mémoire professionnel", coefficient: 2, credit: 2 }
    ]
  },
  {
    name: "Semestre 5",
    modules: [
      { name: "Biologie moléculaire et cellulaire", coefficient: 3, credit: 5 },
      { name: "Virologie", coefficient: 2, credit: 4 },
      { name: "Sérologie", coefficient: 4, credit: 7 },
      { name: "Hématologie appliquée", coefficient: 4, credit: 7 },
      { name: "Parasitologie mycologie appliquées", coefficient: 4, credit: 7 }
    ]
  },
  {
    name: "Semestre 6",
    modules: [
      { name: "Toxicologie", coefficient: 2, credit: 6 },
      { name: "Bactériologie*", coefficient: 4, credit: 4 },
      { name: "Biochimie*", coefficient: 4, credit: 4 },
      { name: "Séro-hématologie*", coefficient: 4, credit: 4 },
      { name: "Parasitologie-mycologie*", coefficient: 4, credit: 4 },
      { name: "Anatomo-cytopathologie appliquée", coefficient: 3, credit: 6 },
      { name: "Information Education Communication", coefficient: 1, credit: 2 }
    ]
  }
];

const updatedSpecialties = specialties.map(s => {
  if (s.id === 'labo') {
    return { ...s, semesters: laboData };
  }
  return s;
});

fs.writeFileSync(specialtiesPath, JSON.stringify(updatedSpecialties, null, 2));
console.log('Specialties updated: labo.');
