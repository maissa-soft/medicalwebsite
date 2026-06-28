const fs = require('fs');

const filePath = 'e:/medicalwebsite/src/data/json/specialties.json';
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const descriptions = {
  "sage-femme": {
    "desc": "La formation de sage-femme prépare des professionnels capables d'assurer le suivi complet de la grossesse, l'accompagnement de la mère pendant l'accouchement et les soins obstétricaux postnatals. Ce cursus rigoureux forme les futurs garants de la santé maternelle et infantile.",
    "career": "Maternités, cliniques d'accouchement, centres de Protection Maternelle et Infantile (PMI), cabinets libéraux."
  },
  "isp": {
    "desc": "La formation d'Infirmier de Santé Publique est une filière polyvalente qui forme le pivot du système de soins hospitaliers. Les étudiants apprennent à dispenser des soins infirmiers de base, à administrer des traitements et à assurer la surveillance clinique des patients.",
    "career": "Hôpitaux publics, CHU, cliniques privées, centres de santé de proximité, médecine du travail."
  },
  "diet": {
    "desc": "Le diététicien de santé publique est un expert de la nutrition. La formation couvre la prévention nutritionnelle, l'élaboration de régimes thérapeutiques adaptés aux pathologies (diabète, maladies cardiovasculaires) et la gestion de la restauration collective.",
    "career": "Services hospitaliers spécialisés (endocrinologie, pédiatrie), centres de rééducation, restauration collective, centres sportifs."
  },
  "prothese": {
    "desc": "La spécialité de prothésiste dentaire allie compétences techniques et sensibilité esthétique. Les étudiants apprennent la conception, la fabrication et la réparation des différents types de prothèses dentaires (fixes et amovibles) en collaboration avec les chirurgiens-dentistes.",
    "career": "Laboratoires de prothèses dentaires indépendants, CHU (services de stomatologie et médecine dentaire)."
  },
  "kine": {
    "desc": "La kinésithérapie est axée sur la rééducation fonctionnelle par le mouvement et les techniques manuelles. La formation approfondie en biomécanique et physiologie permet aux futurs professionnels de traiter les troubles musculosquelettiques, neurologiques et respiratoires.",
    "career": "Centres de rééducation fonctionnelle, hôpitaux (orthopédie, neurologie, rhumatologie), médecine sportive, cabinets libéraux."
  },
  "podo": {
    "desc": "Le pédicure-podologue est le spécialiste des affections du pied. La formation englobe les soins d'hygiène, le traitement des pathologies épidermiques et unguéales, ainsi que la conception d'orthèses plantaires sur mesure pour corriger les troubles statiques.",
    "career": "Cabinets libéraux (très fréquent), services d'endocrinologie (pied diabétique), centres d'appareillage orthopédique."
  },
  "ergo": {
    "desc": "L'ergothérapie vise à maintenir, restaurer ou faciliter les activités humaines de manière sécurisée et autonome. La formation prépare les étudiants à utiliser l'activité comme outil thérapeutique pour les personnes souffrant de handicaps physiques ou mentaux.",
    "career": "Services de psychiatrie, centres de réadaptation, EHPAD, services de gériatrie et de pédiatrie spécialisée."
  },
  "manip-radio": {
    "desc": "Le manipulateur en imagerie médicale est un technicien hautement qualifié qui réalise les examens radiologiques (radiographie, scanner, IRM) sur prescription médicale. La formation allie maîtrise des rayonnements, anatomie radiologique et relation patient.",
    "career": "Services de radiologie des CHU, cliniques d'imagerie médicale, centres de traitement en radiothérapie."
  },
  "labo": {
    "desc": "Le laborantin de santé publique réalise les prélèvements et les analyses biologiques (biochimie, hématologie, microbiologie) nécessaires au diagnostic médical. La formation garantit la maîtrise des automates d'analyse et des protocoles de qualité rigoureux.",
    "career": "Laboratoires d'analyses médicales (publics et privés), services d'hémobiologie et de transfusion sanguine."
  },
  "ass-med": {
    "desc": "L'assistant médical est le relais administratif et organisationnel au sein d'une structure de soins. La formation couvre la gestion des dossiers patients, la facturation, l'accueil et la coordination du parcours de soins en étroite collaboration avec les médecins.",
    "career": "Secrétariats médicaux, cliniques privées, cabinets de médecins spécialistes, directions hospitalières."
  },
  "optique": {
    "desc": "L'opticien-lunetier est un professionnel de la vision. La formation prépare à la conception, la réalisation et l'adaptation d'équipements d'optique (lunettes, lentilles) selon les prescriptions ophtalmologiques, avec de solides bases en optique physique et optométrie.",
    "career": "Magasins d'optique (employé ou gérant), services d'ophtalmologie hospitaliers."
  },
  "orthophonie": {
    "desc": "L'orthophoniste prévient, évalue et traite les troubles de la voix, de la parole, de la communication et du langage écrit ou oral. La formation pluridisciplinaire (linguistique, psychologie, anatomie) prépare à la rééducation de patients de tous âges.",
    "career": "Cabinets libéraux, services d'ORL, centres médico-pédagogiques (CMP), structures d'accueil pour enfants handicapés."
  },
  "psychologie": {
    "desc": "La psychologie clinique en milieu paramédical se concentre sur l'accompagnement psychologique et le soutien émotionnel des patients hospitalisés et de leurs familles face à la maladie. La formation développe l'écoute clinique et la passation de bilans psychologiques.",
    "career": "Centres de santé mentale, services hospitaliers (oncologie, pédiatrie, soins palliatifs), psychiatrie."
  },
  "prep-pharma": {
    "desc": "Le préparateur en pharmacie est le collaborateur direct du pharmacien. La formation approfondie en pharmacologie et législation permet la délivrance des médicaments, la réalisation de préparations magistrales et la gestion des stocks de produits de santé.",
    "career": "Pharmacies d'officine (privées), pharmacies hospitalières, industrie pharmaceutique."
  },
  "hygiene": {
    "desc": "L'hygiéniste de santé publique est le garant de la sécurité sanitaire en milieu hospitalier. La formation permet de prévenir les infections nosocomiales, d'élaborer des protocoles de stérilisation et de veiller à l'application stricte des règles d'hygiène.",
    "career": "Comités de Lutte contre les Infections Nosocomiales (CLIN), services d'épidémiologie, directions de santé publique."
  },
  "ass-soc": {
    "desc": "L'assistant social de santé publique aide les patients à surmonter leurs difficultés sociales, administratives ou financières liées à leur état de santé. La formation prépare à l'accompagnement social, l'orientation et l'accès aux droits de santé.",
    "career": "Services sociaux des hôpitaux, centres de protection maternelle et infantile (PMI), structures de sécurité sociale."
  },
  "ortho-app": {
    "desc": "L'appareilleur orthopédiste conçoit, fabrique et adapte les prothèses (membres artificiels) et les orthèses (corsets, attelles). La formation allie biomécanique, maîtrise des matériaux (résine, carbone) et relation thérapeutique avec les patients amputés.",
    "career": "Centres d'appareillage orthopédique (ONAAPH en Algérie), structures de rééducation fonctionnelle, ateliers privés."
  }
};

data = data.map(spec => {
  if (descriptions[spec.id]) {
    spec.description = descriptions[spec.id].desc;
    if (descriptions[spec.id].career) {
      spec.career = descriptions[spec.id].career;
    }
  }
  return spec;
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Specialties updated successfully!');
