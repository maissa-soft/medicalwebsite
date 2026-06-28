const fs = require('fs');
const path = require('path');

const filePath = 'e:/medicalwebsite/src/data/json/institutes.json';
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const descriptions = {
  "infsp-adrar": "L'INFSPM d'Adrar est un pôle d'excellence pour la formation paramédicale dans le sud algérien. Il se distingue par ses équipements modernes et sa contribution vitale à la couverture sanitaire de la région de la Saoura.",
  "infsp-batna": "Situé au cœur des Aurès, l'INFSPM de Batna forme depuis des années l'élite du personnel paramédical de l'Est du pays, avec une forte spécialisation en kinésithérapie et en rééducation fonctionnelle.",
  "infsp-bejaia": "L'INFSPM de Béjaïa offre un cadre d'études exceptionnel en région kabyle. Cet institut est particulièrement reconnu pour la qualité de sa formation en soins infirmiers et son partenariat actif avec les hôpitaux locaux.",
  "infsp-biskra": "Porte du désert, l'INFSPM de Biskra répond aux besoins croissants en personnel de santé dans les Zibans. Il propose une large gamme de spécialités allant de la radiologie aux prothèses dentaires.",
  "infsp-bechar": "L'institut de Béchar joue un rôle stratégique dans la formation de cadres paramédicaux pour le sud-ouest algérien, avec un accent mis sur l'encadrement de proximité et la pratique clinique.",
  "infsp-blida": "Proche de la capitale, l'INFSPM de Blida bénéficie d'une situation géographique privilégiée et d'infrastructures de pointe, formant des professionnels hautement qualifiés dans plus de 8 spécialités différentes.",
  "infsp-bouira": "L'INFSPM de Bouira se concentre sur les spécialités essentielles comme les soins infirmiers et l'hygiène hospitalière, garantissant une insertion professionnelle rapide pour ses diplômés au niveau régional.",
  "infsp-tebessa": "L'institut de Tébessa, à l'extrême Est du pays, est un acteur clé de la santé publique frontalière. Il offre un encadrement rigoureux et des formations adaptées aux défis sanitaires locaux.",
  "infsp-tiaret": "Au centre des Hauts Plateaux, l'INFSPM de Tiaret se distingue par son campus dynamique et sa formation polyvalente, préparant ses étudiants aux exigences du secteur paramédical moderne.",
  "infsp-alger": "Le plus grand institut paramédical d'Algérie, l'INFSPM d'Alger propose la plus grande diversité de spécialités (14 au total). C'est le centre de référence national pour les filières rares comme l'ergothérapie et l'appareillage orthopédique.",
  "infsp-jijel": "Face à la Méditerranée, l'INFSPM de Jijel allie rigueur académique et environnement d'études agréable. Il forme les futurs professionnels avec un fort engagement envers la communauté locale.",
  "infsp-setif": "Pôle universitaire majeur, Sétif abrite un INFSPM de haut niveau, reconnu pour son exigence pédagogique et ses infrastructures cliniques de simulation à la pointe de la technologie.",
  "infsp-saida": "L'INFSPM de Saïda forme le personnel paramédical de la région ouest avec un encadrement de qualité, privilégiant l'apprentissage par la pratique au sein des structures de santé de la wilaya.",
  "infsp-skikda": "Situé sur la côte est, l'institut de Skikda est reconnu pour son dynamisme et la diversité de ses programmes, avec une forte demande pour ses formations en laboratoire et manipulation radio.",
  "infsp-sba": "L'INFSPM de Sidi Bel Abbès est un centre de formation historique dans l'Ouest algérien. Il est réputé pour l'excellence de son corps professoral et ses liens étroits avec le CHU de la ville.",
  "infsp-constantine": "L'institut de Constantine, ville des ponts, est l'un des piliers de la formation paramédicale dans l'Est. Il offre des programmes complets avec un fort taux de réussite et d'intégration professionnelle.",
  "infsp-medea": "L'INFSPM de Médéa offre un environnement d'apprentissage structuré et convivial, spécialisé dans les formations d'infirmiers, de laborantins et de préparateurs en pharmacie pour la région du Titteri.",
  "infsp-mostaganem": "Sur le littoral ouest, l'institut de Mostaganem attire des étudiants de toute la région pour la qualité de son enseignement et sa large couverture des spécialités médicales et sociales.",
  "infsp-msila": "L'INFSPM de M'Sila est un acteur essentiel du développement sanitaire dans la région du Hodna. Il forme des cadres paramédicaux compétents, directement opérationnels sur le terrain.",
  "infsp-mascara": "L'institut de Mascara, riche de son histoire, dispense une formation paramédicale moderne et adaptée aux standards internationaux, avec des spécialités très prisées comme l'ergothérapie.",
  "infsp-ouargla": "Pôle incontournable du sud-est, l'INFSPM d'Ouargla forme l'essentiel du personnel de santé de la région pétrolière, offrant des formations de pointe adaptées aux réalités du terrain saharien.",
  "infsp-oran": "L'INFSPM d'Oran, véritable institution dans l'Ouest, offre un panel de 11 spécialités. Son intégration dans le tissu hospitalo-universitaire oranais garantit des stages cliniques de très haute qualité.",
  "infsp-ain-defla": "L'institut d'Aïn Defla, situé dans la plaine du Chélif, est reconnu pour son sérieux et la compétence de ses diplômés qui viennent renforcer le secteur de la santé dans toute la région.",
  "infssf-tlemcen": "L'Institut National de Formation Supérieure des Sages-Femmes (INFSSF) de Tlemcen est un établissement d'excellence entièrement dédié à l'obstétrique, la périnatalité et la santé maternelle dans l'Ouest.",
  "infssf-tizi-ouzou": "L'INFSSF de Tizi Ouzou est un centre de référence en Kabylie pour la formation des sages-femmes. Il se distingue par son enseignement clinique rigoureux et son engagement pour la santé des mères et des enfants.",
  "infssf-annaba": "Basé à Annaba, cet institut de sages-femmes forme l'élite des professionnels de la maternité de l'Est algérien, combinant théorie médicale poussée et pratique intensive en salle d'accouchement."
};

data = data.map(inst => {
  if (descriptions[inst.id]) {
    inst.description = descriptions[inst.id];
  } else {
    inst.description = `L'Institut de Formation Supérieure Paramédicale de ${inst.wilaya} est un pôle régional important de formation dans les métiers de la santé, offrant des programmes d'études complets et pratiques pour répondre aux besoins locaux en personnel paramédical qualifié.`;
  }
  return inst;
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Institutes updated successfully!');
