const fs = require('fs');

const specialtiesPath = 'src/data/json/specialties.json';
const specialties = JSON.parse(fs.readFileSync(specialtiesPath, 'utf8'));

const ergoData = [
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
      { name: "Anatomie descriptive et fonctionnelle", coefficient: 3, credit: 2 },
      { name: "Biomécanique et cinésiologie", coefficient: 3, credit: 3 },
      { name: "Méthodologie d’analyse de l’activité", coefficient: 3, credit: 2 },
      { name: "Technologie de base", coefficient: 3, credit: 8 },
      { name: "Morphologie – Biométrie", coefficient: 2, credit: 1 },
      { name: "Méthodologie et didactique professionnelle", coefficient: 2, credit: 2 },
      { name: "Modèles conceptuels de l’ergothérapie", coefficient: 3, credit: 3 },
      { name: "Séminaire d’intégration professionnelle et d’enseignement clinique", coefficient: 3, credit: 3 },
      { name: "Sémiologie", coefficient: 1, credit: 1 },
      { name: "Maitrise linguistique (anglais scientifique)", coefficient: 1, credit: 1 },
      { name: "Santé fonctionnelle et travail pluridisciplinaire", coefficient: 1, credit: 1 },
      { name: "Education pour la santé et santé communautaire", coefficient: 1, credit: 1 },
      { name: "Informatique et internet", coefficient: 2, credit: 2 }
    ]
  },
  {
    name: "Semestre 3",
    modules: [
      { name: "Anatomie et physiologie en neurologie SNC/SNP", coefficient: 3, credit: 4 },
      { name: "Rhumatologie", coefficient: 3, credit: 1 },
      { name: "Traumatologie et orthopédie", coefficient: 3, credit: 2 },
      { name: "Gériatrie et gérontologie", coefficient: 3, credit: 1 },
      { name: "Psychiatrie et psychopathologie", coefficient: 3, credit: 2 },
      { name: "Psychologie du développement", coefficient: 3, credit: 2 },
      { name: "Application de l’ergothérapie aux dysfonctionnements moteurs (1ère partie)", coefficient: 3, credit: 5 },
      { name: "Application de l’ergothérapie aux dysfonctionnements psychiques (1ère partie)", coefficient: 3, credit: 4 },
      { name: "Application de l’ergothérapie aux dysfonctionnements de la sénescence (1ère partie)", coefficient: 3, credit: 4 },
      { name: "Appareillage et aides techniques (1ère partie)", coefficient: 3, credit: 2 },
      { name: "Histoire et éthique professionnelle de l’ergothérapie", coefficient: 1, credit: 1 },
      { name: "Manutention", coefficient: 2, credit: 2 }
    ]
  },
  {
    name: "Semestre 4",
    modules: [
      { name: "Pathologies Neurologie centrale (1ère partie)", coefficient: 3, credit: 1 },
      { name: "Pathologies Neurologie périphérique", coefficient: 3, credit: 1 },
      { name: "Pathologies infantiles", coefficient: 3, credit: 1 },
      { name: "Application de l’ergothérapie aux dysfonctionnements de la sénescence (2ème partie)", coefficient: 3, credit: 3 },
      { name: "Application de l’ergothérapie aux dysfonctionnements moteurs (2ème partie)", coefficient: 3, credit: 3 },
      { name: "Application de l’ergothérapie aux dysfonctionnements psychiques (2ème partie)", coefficient: 3, credit: 4 },
      { name: "Application de l’ergothérapie aux dysfonctionnements neuro-psychologiques (1ère partie)", coefficient: 3, credit: 3 },
      { name: "Application de l’ergothérapie aux dysfonctionnements du développement (1ère partie)", coefficient: 3, credit: 3 },
      { name: "Appareillage et aides techniques (2ème partie)", coefficient: 3, credit: 1 },
      { name: "Réadaptation professionnelle", coefficient: 3, credit: 1 },
      { name: "Méthodologie d’évaluation du fonctionnement humain", coefficient: 3, credit: 2 },
      { name: "Séminaires d’intégration professionnelle", coefficient: 3, credit: 3 },
      { name: "Législation du Handicap", coefficient: 1, credit: 1 },
      { name: "Maitrise linguistique (anglais scientifique)", coefficient: 1, credit: 1 },
      { name: "Ergonomie", coefficient: 2, credit: 1 },
      { name: "Méthodologie du mémoire professionnel (1ère partie)", coefficient: 2, credit: 1 }
    ]
  },
  {
    name: "Semestre 5",
    modules: [
      { name: "Pathologie Neurologie centrale (2ème partie)", coefficient: 3, credit: 2 },
      { name: "Psychologie générale et clinique", coefficient: 3, credit: 3 },
      { name: "Neuropsychologie (1ère partie)", coefficient: 3, credit: 3 },
      { name: "Application de l’ergothérapie aux dysfonctionnements neuro moteurs (1ère partie)", coefficient: 3, credit: 5 },
      { name: "Application de l’ergothérapie aux dysfonctionnements neuropsychologiques (2ème partie)", coefficient: 3, credit: 4 },
      { name: "Application de l’ergothérapie aux dysfonctionnements du développement (2ème Partie)", coefficient: 3, credit: 4 },
      { name: "Amputation et Ergothérapie", coefficient: 2, credit: 3 },
      { name: "Pathologie générale : métaboliques, cardiovasculaire", coefficient: 2, credit: 1 },
      { name: "Séminaires d’intégration professionnelle", coefficient: 3, credit: 2 },
      { name: "Ergonomie de l’habitat (1ère partie)", coefficient: 2, credit: 2 },
      { name: "Méthodologie du mémoire professionnel (2ème partie)", coefficient: 2, credit: 1 }
    ]
  },
  {
    name: "Semestre 6",
    modules: [
      { name: "Neuropsychologie (2ème partie)", coefficient: 3, credit: 2 },
      { name: "Application de l’ergothérapie aux dysfonctionnements neuro moteurs (2ème partie)", coefficient: 3, credit: 8 },
      { name: "Cancérologie et Ergothérapie", coefficient: 2, credit: 2 },
      { name: "Séminaires d’intégration professionnelle", coefficient: 3, credit: 12 },
      { name: "Eléments d’organisation d’un service d’ergothérapie", coefficient: 2, credit: 3 },
      { name: "Ergonomie de l’habitat (2ème partie)", coefficient: 2, credit: 3 }
    ]
  }
];

const ispData = [
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
      { name: "Anatomie physiologie – 2ème partie", coefficient: 3, credit: 3 },
      { name: "Chirurgie", coefficient: 1, credit: 2 },
      { name: "Soins infirmiers", coefficient: 6, credit: 12 },
      { name: "Hygiène hospitalière – 2ème partie", coefficient: 2, credit: 2 },
      { name: "Informatique et internet", coefficient: 1, credit: 2 },
      { name: "Information/ Education/ Communication.", coefficient: 1, credit: 2 },
      { name: "Sciences de l’environnement", coefficient: 1, credit: 1 },
      { name: "Sémiologie", coefficient: 1, credit: 1 },
      { name: "Microbiologie parasitologie immunologie", coefficient: 1, credit: 1 },
      { name: "Puériculture", coefficient: 2, credit: 2 },
      { name: "Nutrition Diététique.", coefficient: 1, credit: 1 },
      { name: "Pharmacie", coefficient: 1, credit: 1 }
    ]
  }
];

const updatedSpecialties = specialties.map(s => {
  if (s.id === 'ergo') {
    return { ...s, semesters: ergoData };
  }
  if (s.id === 'isp') {
    return { ...s, semesters: ispData };
  }
  return s;
});

fs.writeFileSync(specialtiesPath, JSON.stringify(updatedSpecialties, null, 2));
console.log('Specialties updated: ergo and isp.');
