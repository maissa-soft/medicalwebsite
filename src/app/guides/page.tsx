import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guides & Orientation — Paramédical DZ | Conseils Formation Paramédicale Algérie',
  description: "Guides pratiques et articles d'orientation pour la formation supérieure paramédicale en Algérie. Comment s'inscrire, choisir sa spécialité, préparer son dossier et réussir ses études.",
};

const guides = [
  {
    id: 'inscription-infspm',
    emoji: '📝',
    title: "Comment s'inscrire dans un institut paramédical (INFSPM) en Algérie ?",
    summary: "Guide complet sur les étapes d'inscription, les conditions d'accès, les documents requis et le calendrier des inscriptions pour intégrer un INFSPM après le BAC.",
    content: [
      {
        subtitle: "Conditions d'accès",
        text: "Pour intégrer un Institut National de Formation Supérieure Paramédicale (INFSPM), vous devez être titulaire d'un baccalauréat (toutes filières confondues, selon la spécialité visée). La sélection se fait sur la base de la moyenne obtenue au baccalauréat. Chaque spécialité a un seuil minimum qui varie selon la wilaya et l'année."
      },
      {
        subtitle: "Documents requis",
        text: "Le dossier d'inscription comprend généralement : le relevé de notes du BAC, une copie certifiée du diplôme du BAC, un extrait de naissance, des photos d'identité, un certificat médical d'aptitude, et une fiche de vœux remplie auprès de la Direction de la Santé de votre wilaya (DSP)."
      },
      {
        subtitle: "Processus de sélection",
        text: "Les candidats sont orientés par la Direction de la Santé et de la Population (DSP) de leur wilaya de résidence. L'affectation se fait selon la moyenne BAC, les vœux du candidat et les places disponibles dans chaque institut. Les résultats sont publiés après le traitement informatique au niveau national."
      },
      {
        subtitle: "Calendrier indicatif",
        text: "Les inscriptions se déroulent généralement entre août et octobre de chaque année. Le retrait des fiches de vœux se fait au niveau de la DSP de votre wilaya dans les semaines suivant la publication des résultats du BAC. Les affectations sont communiquées avant la rentrée universitaire en octobre."
      }
    ]
  },
  {
    id: 'choisir-specialite',
    emoji: '🎯',
    title: "Comment choisir sa spécialité paramédicale ?",
    summary: "Critères de choix, débouchés professionnels, durée de formation et perspectives de carrière pour chacune des 13 spécialités paramédicales disponibles en Algérie.",
    content: [
      {
        subtitle: "Les critères à considérer",
        text: "Le choix d'une spécialité paramédicale dépend de plusieurs facteurs : vos centres d'intérêt (soins directs, technique, rééducation), votre moyenne BAC (certaines spécialités sont plus sélectives comme la kinésithérapie), la disponibilité dans votre wilaya, et les débouchés professionnels dans votre région."
      },
      {
        subtitle: "Les spécialités les plus demandées",
        text: "La kinésithérapie et le laborantin sont parmi les spécialités les plus demandées avec des moyennes d'admission généralement élevées (15+). Les infirmiers de santé publique (ISP) offrent le plus grand nombre de places. Les sages-femmes sont formées dans des instituts spécialisés (INFSSF)."
      },
      {
        subtitle: "Durée de formation",
        text: "La majorité des spécialités paramédicales ont une durée de formation de 3 ans. Certaines, comme la sage-femme, peuvent durer de 3 à 4 ans. La formation comprend des cours théoriques, des travaux pratiques et des stages hospitaliers obligatoires."
      },
      {
        subtitle: "Débouchés professionnels",
        text: "Les diplômés paramédicaux peuvent exercer dans le secteur public (hôpitaux, polycliniques, centres de santé) ou dans le secteur privé (cliniques, cabinets libéraux, laboratoires). Certaines spécialités comme la kinésithérapie et l'optique permettent facilement l'exercice en libéral."
      }
    ]
  },
  {
    id: 'reussir-etudes',
    emoji: '🏆',
    title: "Conseils pour réussir ses études paramédicales",
    summary: "Méthodologie d'étude, préparation aux examens, gestion des stages hospitaliers et conseils pratiques pour exceller dans votre formation paramédicale.",
    content: [
      {
        subtitle: "Organisation et méthodologie",
        text: "La formation paramédicale est dense et combine théorie et pratique. Organisez votre temps en planifiant vos révisions à l'avance. Prenez des notes structurées pendant les cours et révisez régulièrement plutôt que de tout accumuler avant les examens. Formez des groupes d'étude avec vos camarades pour mieux comprendre les matières complexes."
      },
      {
        subtitle: "Les stages hospitaliers",
        text: "Les stages sont une composante essentielle de la formation. Ils vous permettent de mettre en pratique vos connaissances théoriques. Soyez ponctuel, respectueux envers les patients et le personnel, et n'hésitez pas à poser des questions à vos encadrants. Tenez un carnet de stage pour noter vos observations et apprentissages quotidiens."
      },
      {
        subtitle: "Préparation du mémoire de fin d'études",
        text: "Le mémoire de fin d'études est un travail de recherche important. Choisissez un sujet qui vous passionne et qui a une pertinence clinique. Commencez vos recherches bibliographiques tôt, définissez une problématique claire et suivez rigoureusement la méthodologie scientifique. Consultez régulièrement votre directeur de mémoire."
      },
      {
        subtitle: "Ressources complémentaires",
        text: "Complétez vos cours avec des ressources en ligne : vidéos YouTube de professeurs reconnus, manuels de référence, et applications médicales. Notre section Cours propose des ressources gratuites classées par spécialité. N'hésitez pas à consulter des ouvrages en français et en anglais pour approfondir vos connaissances."
      }
    ]
  },
  {
    id: 'apres-diplome',
    emoji: '🚀',
    title: "Que faire après le diplôme paramédical ?",
    summary: "Options de carrière, spécialisations, exercice libéral et possibilités de poursuite d'études après l'obtention du diplôme paramédical en Algérie.",
    content: [
      {
        subtitle: "Le secteur public",
        text: "Après l'obtention de votre diplôme, vous pouvez passer le concours de recrutement dans la fonction publique hospitalière. Les postes sont ouverts dans les CHU, les hôpitaux régionaux, les polycliniques et les centres de santé de proximité. La titularisation intervient après une période de stage probatoire."
      },
      {
        subtitle: "Le secteur privé et l'exercice libéral",
        text: "Certaines spécialités permettent l'exercice en libéral après obtention de l'autorisation nécessaire auprès de la Direction de la Santé. C'est notamment le cas pour les kinésithérapeutes, les opticiens-lunetiers, les orthophonistes et les sages-femmes. L'ouverture d'un cabinet nécessite un local conforme aux normes sanitaires."
      },
      {
        subtitle: "La poursuite d'études",
        text: "Des passerelles existent pour poursuivre des études universitaires dans des domaines connexes. Des formations complémentaires et des spécialisations sont également proposées par certains instituts. La formation continue est essentielle pour rester à jour avec les avancées médicales et techniques."
      },
      {
        subtitle: "Perspectives d'évolution",
        text: "Avec l'expérience, les paramédicaux peuvent accéder à des postes de responsabilité : surveillant médical, chef de service paramédical, formateur dans les INFSPM, ou coordinateur de programmes de santé publique. Ces évolutions nécessitent généralement de l'ancienneté et des formations complémentaires."
      }
    ]
  }
];

export default function GuidesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[70vh]">
      <header className="text-center mb-16 pb-8 border-b border-slate-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Guides & <span className="text-primary">Orientation</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Tout ce que vous devez savoir pour réussir votre parcours dans la formation supérieure paramédicale en Algérie.
        </p>
      </header>

      <div className="space-y-16">
        {guides.map((guide) => (
          <article key={guide.id} id={guide.id} className="scroll-mt-24">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-3xl">{guide.emoji}</span>
                <span>{guide.title}</span>
              </h2>
              <p className="text-slate-500 mb-6 text-sm border-b border-slate-100 pb-4">
                {guide.summary}
              </p>

              <div className="space-y-6">
                {guide.content.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-primary-dark mb-2">{section.subtitle}</h3>
                    <p className="text-slate-600 leading-relaxed">{section.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Besoin de plus d&apos;informations ?</h2>
        <p className="text-slate-400 mb-6 max-w-lg mx-auto">
          Consultez notre annuaire des instituts et le simulateur d&apos;admission pour affiner votre choix.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/institutes" className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors">
            Voir les Instituts
          </Link>
          <Link href="/moyennes" className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
            Simulateur d&apos;Admission
          </Link>
        </div>
      </div>
    </main>
  );
}
