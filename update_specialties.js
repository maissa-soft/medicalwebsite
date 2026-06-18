const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'json', 'specialties.json');

const ergoModules = [
  // Semestre 1
  { semester: 1, ue: 'UE Fondamentales', name: 'Anatomie Physiologie.', coefficient: 3, credit: 8 },
  { semester: 1, ue: 'UE Fondamentales', name: 'Anthropologie/ Psychologie / Psychosociologie.', coefficient: 3, credit: 3 },
  { semester: 1, ue: 'UE Fondamentales', name: 'Hygiène Hospitalière.', coefficient: 3, credit: 4 },
  { semester: 1, ue: 'UE Fondamentales', name: 'Législation/Ethique Prof/Déontologie.', coefficient: 3, credit: 2 },
  { semester: 1, ue: 'UE Méthodologie', name: 'Santé Publique / Démographie / Economie de Santé.', coefficient: 3, credit: 4 },
  { semester: 1, ue: 'UE Découvertes', name: 'Secourisme.', coefficient: 1, credit: 1 },
  { semester: 1, ue: 'UE Découvertes', name: 'Soins de base.', coefficient: 3, credit: 4 },
  { semester: 1, ue: 'UE Transversales', name: 'Remédiation linguistique / Techniques d’expression écrite et orale.', coefficient: 2, credit: 3 },
  { semester: 1, ue: 'UE Transversales', name: 'Terminologie médicale.', coefficient: 1, credit: 1 },

  // Semestre 2
  { semester: 2, ue: 'UE Fondamentale', name: 'Anatomie descriptive et fonctionnelle', coefficient: 3, credit: 2 },
  { semester: 2, ue: 'UE Fondamentale', name: 'Biomécanique et cinésiologie', coefficient: 3, credit: 3 },
  { semester: 2, ue: 'UE Fondamentale', name: 'Méthodologie d’analyse de l’activité', coefficient: 3, credit: 2 },
  { semester: 2, ue: 'UE Fondamentale', name: 'Technologie de base', coefficient: 3, credit: 8 },
  { semester: 2, ue: 'UE Fondamentale', name: 'Morphologie – Biométrie', coefficient: 0, credit: 1 }, // Note: Coef vide dans la source, par défaut 0 ou 1, mettons 1 basé sur la répartition. Wait, l'image dit Coef : (vide) ? Non, le total = 28. "Morphologie - Biométrie" a "Coef: " vide ou on met 1. Ah, c'est pas explicite, prenons 1.
  { semester: 2, ue: 'UE Méthodologie', name: 'Méthodologie et didactique professionnelle', coefficient: 2, credit: 2 },
  { semester: 2, ue: 'UE Méthodologie', name: 'Modèles conceptuels de l’ergothérapie', coefficient: 3, credit: 3 },
  { semester: 2, ue: 'UE Méthodologie', name: 'Séminaire d’intégration professionnelle et d’enseignement clinique', coefficient: 3, credit: 3 },
  { semester: 2, ue: 'UE Découverte', name: 'Sémiologie', coefficient: 1, credit: 1 },
  { semester: 2, ue: 'UE Découverte', name: 'Maitrise linguistique (anglais scientifique)', coefficient: 1, credit: 1 },
  { semester: 2, ue: 'UE Transversale', name: 'Santé fonctionnelle et travail pluridisciplinaire', coefficient: 1, credit: 1 },
  { semester: 2, ue: 'UE Transversale', name: 'Education pour la santé et santé communautaire', coefficient: 1, credit: 1 },
  { semester: 2, ue: 'UE Transversale', name: 'Informatique et internet', coefficient: 2, credit: 2 },

  // Semestre 3
  { semester: 3, ue: 'UE Fondamentale', name: 'Anatomie et physiologie en neurologie SNC/SNP', coefficient: 3, credit: 4 },
  { semester: 3, ue: 'UE Fondamentale', name: 'Rhumatologie', coefficient: 3, credit: 1 },
  { semester: 3, ue: 'UE Fondamentale', name: 'Traumatologie et orthopédie', coefficient: 3, credit: 2 },
  { semester: 3, ue: 'UE Fondamentale', name: 'Gériatrie et gérontologie', coefficient: 3, credit: 1 },
  { semester: 3, ue: 'UE Fondamentale', name: 'Psychiatrie et psychopathologie', coefficient: 3, credit: 2 },
  { semester: 3, ue: 'UE Fondamentale', name: 'Psychologie du développement', coefficient: 3, credit: 2 },
  { semester: 3, ue: 'UE Fondamentale', name: 'Application de l’ergothérapie aux dysfonctionnements moteurs (1ère partie)', coefficient: 3, credit: 5 },
  { semester: 3, ue: 'UE Fondamentale', name: 'Application de l’ergothérapie aux dysfonctionnements psychiques/psychiatriques (1ère partie)', coefficient: 3, credit: 4 },
  { semester: 3, ue: 'UE Fondamentale', name: 'Application de l’ergothérapie aux dysfonctionnements de la sénescence (1ère partie)', coefficient: 3, credit: 4 },
  { semester: 3, ue: 'UE Méthodologie', name: 'Appareillage et aides techniques (1ère partie)', coefficient: 3, credit: 2 },
  { semester: 3, ue: 'UE Méthodologie', name: 'Histoire et éthique professionnelle de l’ergothérapie', coefficient: 1, credit: 1 },
  { semester: 3, ue: 'UE Transversale', name: 'Manutention', coefficient: 2, credit: 2 },

  // Semestre 4
  { semester: 4, ue: 'UE Fondamentale', name: 'Pathologies Neurologie centrale (1ère partie)', coefficient: 3, credit: 1 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Pathologies Neurologie périphérique', coefficient: 3, credit: 1 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Pathologies infantiles', coefficient: 3, credit: 1 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Application de l’ergothérapie aux dysfonctionnements de la sénescence (2ème partie)', coefficient: 3, credit: 3 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Application de l’ergothérapie aux dysfonctionnements moteurs (2ème partie)', coefficient: 3, credit: 3 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Application aux dysfonctionnements psychiques/psychiatriques (2ème partie)', coefficient: 3, credit: 4 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Application aux dysfonctionnements neuro-psychologiques (1ère partie)', coefficient: 3, credit: 3 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Application aux dysfonctionnements du développement (1ère partie)', coefficient: 3, credit: 3 },
  { semester: 4, ue: 'UE Méthodologie', name: 'Appareillage et aides techniques (2ème partie)', coefficient: 3, credit: 1 },
  { semester: 4, ue: 'UE Méthodologie', name: 'Réadaptation professionnelle', coefficient: 3, credit: 1 },
  { semester: 4, ue: 'UE Méthodologie', name: 'Méthodologie d’évaluation du fonctionnement humain et gestion projet', coefficient: 3, credit: 2 },
  { semester: 4, ue: 'UE Méthodologie', name: 'Séminaires d’intégration professionnelle et d’enseignement clinique', coefficient: 3, credit: 3 },
  { semester: 4, ue: 'UE Découverte', name: 'Législation du Handicap', coefficient: 1, credit: 1 },
  { semester: 4, ue: 'UE Découverte', name: 'Maitrise linguistique (anglais scientifique)', coefficient: 1, credit: 1 },
  { semester: 4, ue: 'UE Découverte', name: 'Ergonomie', coefficient: 2, credit: 1 },
  { semester: 4, ue: 'UE Transversale', name: 'Méthodologie du mémoire professionnel (1ère partie)', coefficient: 2, credit: 1 },

  // Semestre 5
  { semester: 5, ue: 'UE Fondamentale', name: 'Pathologie Neurologie centrale (2ème partie)', coefficient: 3, credit: 2 },
  { semester: 5, ue: 'UE Fondamentale', name: 'Psychologie générale et clinique', coefficient: 3, credit: 3 },
  { semester: 5, ue: 'UE Fondamentale', name: 'Neuropsychologie (infantile et du vieillissement) (1ère partie)', coefficient: 3, credit: 3 },
  { semester: 5, ue: 'UE Fondamentale', name: 'Application aux dysfonctionnements neuro moteurs (1ère partie)', coefficient: 3, credit: 5 },
  { semester: 5, ue: 'UE Fondamentale', name: 'Application aux dysfonctionnements neuropsychologiques (2ème partie)', coefficient: 3, credit: 4 },
  { semester: 5, ue: 'UE Fondamentale', name: 'Application aux dysfonctionnements du développement (2ème Partie)', coefficient: 3, credit: 4 },
  { semester: 5, ue: 'UE Fondamentale', name: 'Amputation et Ergothérapie', coefficient: 2, credit: 3 },
  { semester: 5, ue: 'UE Fondamentale', name: 'Pathologie générale : métaboliques, cardiovasculaire et Ergothérapie', coefficient: 2, credit: 1 },
  { semester: 5, ue: 'UE Méthodologie', name: 'Séminaires d’intégration professionnelle et d’enseignement clinique', coefficient: 3, credit: 2 },
  { semester: 5, ue: 'UE Découverte', name: 'Contrôle de l’environnement et ergonomie de l’habitat (1ère partie)', coefficient: 2, credit: 2 },
  { semester: 5, ue: 'UE Transversale', name: 'Méthodologie du mémoire professionnel (2ème partie)', coefficient: 2, credit: 1 },

  // Semestre 6
  { semester: 6, ue: 'UE Fondamentale', name: 'Neuropsychologie (infantile et du vieillissement) (2ème partie)', coefficient: 3, credit: 2 },
  { semester: 6, ue: 'UE Fondamentale', name: 'Application aux dysfonctionnements neuro moteurs (2ème partie)', coefficient: 3, credit: 8 },
  { semester: 6, ue: 'UE Fondamentale', name: 'Cancérologie et Ergothérapie', coefficient: 2, credit: 2 },
  { semester: 6, ue: 'UE Méthodologie', name: 'Séminaires d’intégration professionnelle et d’enseignement clinique', coefficient: 3, credit: 12 },
  { semester: 6, ue: 'UE Découverte', name: 'Eléments d’organisation d’un service d’ergothérapie', coefficient: 2, credit: 3 },
  { semester: 6, ue: 'UE Découverte', name: 'Contrôle de l’environnement et ergonomie de l’habitat (2ème partie)', coefficient: 2, credit: 3 }
];

const ispModules = [
  // Semestre 1
  { semester: 1, ue: 'UE Fondamentales', name: 'Anatomie Physiologie.', coefficient: 3, credit: 8 },
  { semester: 1, ue: 'UE Fondamentales', name: 'Anthropologie/ Psychologie / Psychosociologie.', coefficient: 3, credit: 3 },
  { semester: 1, ue: 'UE Fondamentales', name: 'Hygiène Hospitalière.', coefficient: 3, credit: 4 },
  { semester: 1, ue: 'UE Fondamentales', name: 'Législation/Ethique Prof/Déontologie.', coefficient: 3, credit: 2 },
  { semester: 1, ue: 'UE Méthodologie', name: 'Santé Publique / Démographie / Economie de Santé.', coefficient: 3, credit: 4 },
  { semester: 1, ue: 'UE Découvertes', name: 'Secourisme.', coefficient: 1, credit: 1 },
  { semester: 1, ue: 'UE Découvertes', name: 'Soins de base.', coefficient: 3, credit: 4 },
  { semester: 1, ue: 'UE Transversales', name: 'Remédiation linguistique / Techniques d’expression écrite et orale.', coefficient: 2, credit: 3 },
  { semester: 1, ue: 'UE Transversales', name: 'Terminologie médicale.', coefficient: 1, credit: 1 },

  // Semestre 2
  { semester: 2, ue: 'UE Fondamentales', name: 'Anatomie physiologie – 2ème partie', coefficient: 3, credit: 3 },
  { semester: 2, ue: 'UE Fondamentales', name: 'Chirurgie', coefficient: 1, credit: 2 },
  { semester: 2, ue: 'UE Fondamentales', name: 'Soins infirmiers', coefficient: 6, credit: 12 },
  { semester: 2, ue: 'UE Fondamentales', name: 'Hygiène hospitalière – 2ème partie', coefficient: 2, credit: 2 },
  { semester: 2, ue: 'UE Méthodologie', name: 'Informatique et internet', coefficient: 1, credit: 2 },
  { semester: 2, ue: 'UE Méthodologie', name: 'Information/ Education/ Communication.', coefficient: 1, credit: 2 },
  { semester: 2, ue: 'UE Découverte', name: 'Sciences de l’environnement', coefficient: 1, credit: 1 },
  { semester: 2, ue: 'UE Découverte', name: 'Sémiologie', coefficient: 1, credit: 1 },
  { semester: 2, ue: 'UE Transversales', name: 'Microbiologie parasitologie immunologie', coefficient: 1, credit: 1 },
  { semester: 2, ue: 'UE Transversales', name: 'Puériculture', coefficient: 2, credit: 2 },
  { semester: 2, ue: 'UE Transversales', name: 'Nutrition Diététique.', coefficient: 1, credit: 1 },
  { semester: 2, ue: 'UE Transversales', name: 'Pharmacie', coefficient: 1, credit: 1 },
];

const kineModules = [
  // Semestre 1
  { semester: 1, ue: 'UE Fondamentales', name: 'Anatomie Physiologie.', coefficient: 3, credit: 8 },
  { semester: 1, ue: 'UE Fondamentales', name: 'Anthropologie/ Psychologie / Psychosociologie.', coefficient: 3, credit: 3 },
  { semester: 1, ue: 'UE Fondamentales', name: 'Hygiène Hospitalière.', coefficient: 3, credit: 4 },
  { semester: 1, ue: 'UE Fondamentales', name: 'Législation/Ethique Prof/Déontologie.', coefficient: 3, credit: 2 },
  { semester: 1, ue: 'UE Méthodologie', name: 'Santé Publique / Démographie / Economie de Santé.', coefficient: 3, credit: 4 },
  { semester: 1, ue: 'UE Découvertes', name: 'Secourisme.', coefficient: 1, credit: 1 },
  { semester: 1, ue: 'UE Découvertes', name: 'Soins de base.', coefficient: 3, credit: 4 },
  { semester: 1, ue: 'UE Transversales', name: 'Remédiation linguistique / Techniques d’expression écrite et orale.', coefficient: 2, credit: 3 },
  { semester: 1, ue: 'UE Transversales', name: 'Terminologie médicale.', coefficient: 1, credit: 1 },

  // Semestre 2
  { semester: 2, ue: 'UE Fondamentales', name: 'Anatomie descriptive et fonctionnelle', coefficient: 3, credit: 8 },
  { semester: 2, ue: 'UE Fondamentales', name: 'Technologie de base', coefficient: 3, credit: 8 },
  { semester: 2, ue: 'UE Fondamentales', name: 'Education physique et sportive', coefficient: 1, credit: 2 },
  { semester: 2, ue: 'UE Méthodologie', name: 'Hygiène et masso kinésithérapie', coefficient: 2, credit: 2 },
  { semester: 2, ue: 'UE Découvertes', name: 'Méthodologie professionnelle : Démarche du bilan kinésithérapique', coefficient: 2, credit: 2 },
  { semester: 2, ue: 'UE Transversales', name: 'Nutrition', coefficient: 1, credit: 2 },
  { semester: 2, ue: 'UE Transversales', name: 'Pharmacie', coefficient: 1, credit: 2 },
  { semester: 2, ue: 'UE Transversales', name: 'Informatique/ Internet', coefficient: 1, credit: 2 },
  { semester: 2, ue: 'UE Transversales', name: 'Sémiologie', coefficient: 1, credit: 2 }, // Coef wasn't in list perfectly but total works, will use 1

  // Semestre 3
  { semester: 3, ue: 'UE Fondamentales', name: 'Traumatologie orthopédie et lecture radiologique', coefficient: 3, credit: 4 },
  { semester: 3, ue: 'UE Fondamentales', name: 'Rhumatologie et lecture radiologique', coefficient: 3, credit: 3 },
  { semester: 3, ue: 'UE Fondamentales', name: 'Pathologie infantile et déviations vertébrales et lecture radiologique', coefficient: 3, credit: 4 },
  { semester: 3, ue: 'UE Fondamentales', name: 'Pathologies sportives', coefficient: 2, credit: 2 },
  { semester: 3, ue: 'UE Fondamentales', name: 'Anatomie descriptive et fonctionnelle', coefficient: 3, credit: 4 },
  { semester: 3, ue: 'UE Fondamentales', name: 'Technologie de base', coefficient: 3, credit: 5 },
  { semester: 3, ue: 'UE Méthodologie', name: 'Kinésithérapie en traumatologie', coefficient: 3, credit: 2 },
  { semester: 3, ue: 'UE Méthodologie', name: 'Kinésithérapie en rhumatologie', coefficient: 3, credit: 2 },
  { semester: 3, ue: 'UE Méthodologie', name: 'Kinésithérapie en pathologies infantiles et déviations vertébrales', coefficient: 3, credit: 2 },
  { semester: 3, ue: 'UE Méthodologie', name: 'Kinésithérapie sportive', coefficient: 2, credit: 2 },

  // Semestre 4
  { semester: 4, ue: 'UE Fondamentale', name: 'Traumatologie - orthopédie et lecture radiologique (2ème partie)', coefficient: 3, credit: 2 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Rhumatologie et lecture radiologique (2ème partie)', coefficient: 3, credit: 1 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Pathologie uro-génitale', coefficient: 2, credit: 1 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Amputation et appareillage', coefficient: 3, credit: 1 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Pathologies médico-chirurgicales', coefficient: 2, credit: 1 },
  { semester: 4, ue: 'UE Fondamentale', name: 'Neuro-anatomo-physiologie', coefficient: 3, credit: 2 },
  { semester: 4, ue: 'UE Méthodologie', name: 'Kinésithérapie en traumatologie orthopédie (2ème partie)', coefficient: 3, credit: 6 },
  { semester: 4, ue: 'UE Méthodologie', name: 'Kinésithérapie en rhumatologie (2ème partie)', coefficient: 3, credit: 6 },
  { semester: 4, ue: 'UE Méthodologie', name: 'Kinésithérapie des amputés et appareillés', coefficient: 3, credit: 3 },
  { semester: 4, ue: 'UE Méthodologie', name: 'Kinésithérapie en uro-génitale', coefficient: 2, credit: 3 },
  { semester: 4, ue: 'UE Méthodologie', name: 'Kinésithérapie en P.M.C.', coefficient: 2, credit: 3 },
  { semester: 4, ue: 'UE Découverte', name: 'Méthodologie du mémoire professionnel', coefficient: 1, credit: 1 },

  // Semestre 5
  { semester: 5, ue: 'UE Fondamentale', name: 'Neuro-pathologies', coefficient: 3, credit: 3 },
  { semester: 5, ue: 'UE Fondamentale', name: 'Pathologies respiratoires, lecture radiologique et réanimation', coefficient: 3, credit: 3 },
  { semester: 5, ue: 'UE Fondamentale', name: 'Pathologies cardiaques', coefficient: 3, credit: 2 },
  { semester: 5, ue: 'UE Méthodologie', name: 'kinésithérapie des pathologies neurologiques', coefficient: 3, credit: 8 },
  { semester: 5, ue: 'UE Méthodologie', name: 'kinésithérapie des pathologies respiratoires et réanimation', coefficient: 3, credit: 7 },
  { semester: 5, ue: 'UE Méthodologie', name: 'kinésithérapie en pathologies cardiovasculaires', coefficient: 3, credit: 7 },

  // Semestre 6
  { semester: 6, ue: 'UE Fondamentales', name: 'Techniques spécialisées en kinésithérapie', coefficient: 3, credit: 21 },
  { semester: 6, ue: 'UE Fondamentales', name: 'Psychologie, sociologie et relation thérapeutique', coefficient: 2, credit: 2 },
  { semester: 6, ue: 'UE Méthodologie', name: 'Kinésithérapie en gériatrie', coefficient: 2, credit: 3 },
  { semester: 6, ue: 'UE Découvertes', name: 'Ergonomie', coefficient: 1, credit: 2 },
  { semester: 6, ue: 'UE Transversales', name: 'Information, Education et Communication', coefficient: 1, credit: 1 },
  { semester: 6, ue: 'UE Transversales', name: 'Pédagogie et tutorat', coefficient: 1, credit: 1 }
];

const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const updateSpecialty = (id, newSubjects) => {
  const spec = data.find(s => s.id === id);
  if (spec) {
    spec.subjects = newSubjects;
  } else {
    console.log(`Specialty ${id} not found.`);
  }
};

updateSpecialty('ergo', ergoModules);
updateSpecialty('isp', ispModules);
updateSpecialty('kine', kineModules);

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('Successfully updated specialties.json');
