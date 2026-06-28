import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — Paramédical DZ',
  description: 'Politique de confidentialité de Paramédical DZ. Collecte, utilisation et protection de vos données.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[70vh]">
      <header className="text-center mb-16 pb-8 border-b border-slate-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Politique de <span className="text-primary">Confidentialité</span>
        </h1>
        <p className="text-sm text-slate-400">Dernière mise à jour : Juin 2026</p>
      </header>

      <div className="space-y-10 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Introduction</h2>
          <p className="mb-3">
            Le site <strong>Paramédical DZ</strong> (paramedical-dz.com) est édité par MeissaSoft, Constantine, Algérie.
            Cette politique décrit comment nous collectons, utilisons et protégeons vos informations.
          </p>
          <p>En utilisant notre site, vous acceptez ces termes. Si vous n&apos;acceptez pas, veuillez ne pas utiliser notre site.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. Données collectées</h2>
          <p className="mb-3">Paramédical DZ ne requiert aucune inscription. Nous collectons uniquement :</p>
          <h3 className="text-lg font-semibold text-slate-700 mt-4 mb-2">2.1 Données automatiques</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Adresse IP (anonymisée)</li>
            <li>Type de navigateur et système d&apos;exploitation</li>
            <li>Pages visitées et durée de visite</li>
            <li>Préférences linguistiques (français/arabe)</li>
          </ul>
          <h3 className="text-lg font-semibold text-slate-700 mt-4 mb-2">2.2 Données volontaires</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Adresse email (si vous nous contactez)</li>
            <li>Contenu de vos messages</li>
          </ul>
          <p className="mt-3"><strong>Nous ne collectons pas</strong> de données sensibles (financières, santé, identité).</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Utilisation des données</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Améliorer l&apos;expérience utilisateur</li>
            <li>Analyser les statistiques de fréquentation</li>
            <li>Répondre à vos demandes</li>
            <li>Assurer le fonctionnement technique du site</li>
          </ul>
          <p className="mt-3">Nous ne vendons ni ne partageons vos données avec des tiers à des fins commerciales.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Cookies</h2>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li><strong>Cookies fonctionnels</strong> : préférence de langue et cours favoris</li>
            <li><strong>Cookies analytiques</strong> : analyse anonymisée du trafic</li>
            <li><strong>Cookies publicitaires</strong> : Google AdSense affiche des annonces pertinentes via des cookies</li>
          </ul>
          <p className="mb-2">
            Google AdSense utilise le cookie DoubleClick DART. Désactivez-le via les{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              Paramètres des annonces Google
            </a>. Consultez la{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              Politique de confidentialité de Google
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">5. Stockage et sécurité</h2>
          <p>
            Les données sont hébergées par Vercel Inc. sur des serveurs sécurisés, conservées 12 mois maximum.
            Les préférences sont stockées localement (localStorage/cookies) dans votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">6. Vos droits</h2>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li><strong>Accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Rectification</strong> : corriger des données inexactes</li>
            <li><strong>Suppression</strong> : demander la suppression</li>
            <li><strong>Opposition</strong> : vous opposer au traitement</li>
          </ul>
          <p>
            Contactez-nous :{' '}
            <a href="mailto:contact@paramedical-dz.com" className="text-primary underline font-medium">contact@paramedical-dz.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">7. Liens tiers</h2>
          <p>
            Notre site contient des liens vers des sites externes (YouTube, Google Drive). Nous ne sommes pas
            responsables de leurs pratiques de confidentialité.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">8. Modifications</h2>
          <p>Cette politique peut être modifiée à tout moment. Les changements prennent effet dès publication.</p>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h2 className="text-xl font-bold text-slate-800 mb-3">9. Contact</h2>
          <p className="font-bold text-slate-800">MeissaSoft</p>
          <p>📍 Constantine, Algérie</p>
          <p>✉️ <a href="mailto:contact@paramedical-dz.com" className="text-primary underline">contact@paramedical-dz.com</a></p>
          <p>🌐 paramedical-dz.com</p>
        </section>
      </div>
    </main>
  );
}
