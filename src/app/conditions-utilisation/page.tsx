import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions d'Utilisation — Paramédical DZ",
  description: "Conditions générales d'utilisation du site Paramédical DZ. Règles d'accès et d'utilisation de la plateforme.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[70vh]">
      <header className="text-center mb-16 pb-8 border-b border-slate-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Conditions d&apos;<span className="text-primary">Utilisation</span>
        </h1>
        <p className="text-sm text-slate-400">Dernière mise à jour : Juin 2026</p>
      </header>

      <div className="space-y-10 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Présentation du site</h2>
          <p>
            Le site <strong>Paramédical DZ</strong> (paramedical-dz.com) est un portail éducatif gratuit dédié à
            l&apos;orientation dans la formation supérieure paramédicale en Algérie. Il est édité par MeissaSoft,
            Constantine, Algérie.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. Acceptation des conditions</h2>
          <p>
            L&apos;accès et l&apos;utilisation du site impliquent l&apos;acceptation pleine et entière de ces conditions.
            Si vous n&apos;acceptez pas ces conditions, veuillez cesser d&apos;utiliser le site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Services proposés</h2>
          <p className="mb-3">Paramédical DZ propose gratuitement :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Un annuaire des instituts de formation paramédicale (INFSPM/INFSSF)</li>
            <li>Les moyennes BAC indicatives d&apos;admission par wilaya et spécialité</li>
            <li>Les programmes d&apos;études détaillés de chaque spécialité</li>
            <li>Une bibliothèque de cours et ressources pédagogiques</li>
            <li>Des guides d&apos;orientation pour les bacheliers</li>
            <li>Un simulateur d&apos;admission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Nature des informations</h2>
          <p className="mb-3">
            Les informations publiées sur Paramédical DZ sont fournies <strong>à titre indicatif</strong> et
            ne constituent en aucun cas un engagement contractuel. Les moyennes d&apos;admission, les spécialités
            disponibles et les conditions d&apos;accès peuvent varier d&apos;une année à l&apos;autre.
          </p>
          <p>
            Nous recommandons aux utilisateurs de vérifier les informations auprès des instituts concernés
            ou du Ministère de la Santé avant toute décision d&apos;orientation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">5. Propriété intellectuelle</h2>
          <p className="mb-3">
            L&apos;ensemble des éléments du site (textes, design, logo, code source) est la propriété de MeissaSoft
            et est protégé par les lois relatives à la propriété intellectuelle.
          </p>
          <p>
            Les ressources pédagogiques (cours, vidéos) partagées sur le site peuvent être soumises aux droits
            d&apos;auteur de leurs auteurs respectifs. Elles sont diffusées à des fins éducatives uniquement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">6. Utilisation acceptable</h2>
          <p className="mb-3">En utilisant ce site, vous vous engagez à :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Ne pas utiliser le site à des fins illégales ou non autorisées</li>
            <li>Ne pas tenter d&apos;accéder de manière non autorisée aux systèmes du site</li>
            <li>Ne pas reproduire, copier ou revendre le contenu sans autorisation écrite</li>
            <li>Ne pas diffuser de contenu diffamatoire, offensant ou inapproprié</li>
            <li>Respecter les droits de propriété intellectuelle</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">7. Limitation de responsabilité</h2>
          <p className="mb-3">
            MeissaSoft s&apos;efforce de fournir des informations exactes et à jour. Cependant, nous ne garantissons
            pas l&apos;exactitude, l&apos;exhaustivité ou l&apos;actualité des informations publiées.
          </p>
          <p>
            MeissaSoft ne saurait être tenu responsable des dommages directs ou indirects résultant de
            l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser le site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">8. Publicité</h2>
          <p>
            Le site peut afficher des annonces publicitaires fournies par Google AdSense. Ces annonces
            sont clairement identifiées et séparées du contenu éditorial. Le contenu des annonces relève
            de la responsabilité des annonceurs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">9. Liens externes</h2>
          <p>
            Le site contient des liens vers des ressources externes (YouTube, Google Drive, sites institutionnels).
            MeissaSoft n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">10. Modifications</h2>
          <p>
            MeissaSoft se réserve le droit de modifier ces conditions à tout moment. Les utilisateurs seront
            informés des modifications par la mise à jour de la date en haut de cette page. L&apos;utilisation
            continue du site vaut acceptation des conditions modifiées.
          </p>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h2 className="text-xl font-bold text-slate-800 mb-3">11. Contact</h2>
          <p className="font-bold text-slate-800">MeissaSoft</p>
          <p>📍 Constantine, Algérie</p>
          <p>✉️ <a href="mailto:contact@paramedical-dz.com" className="text-primary underline">contact@paramedical-dz.com</a></p>
          <p>🌐 paramedical-dz.com</p>
        </section>
      </div>
    </main>
  );
}
