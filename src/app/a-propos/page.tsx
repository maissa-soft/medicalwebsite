import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À Propos — Paramédical DZ | Portail Paramédical Algérie',
  description:
    'Découvrez la mission de Paramédical DZ, la plateforme de référence pour l\'orientation dans la formation supérieure paramédicale en Algérie. Informations officielles, moyennes BAC, spécialités et cours.',
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[70vh]">
      <header className="text-center mb-16 pb-8 border-b border-slate-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          À Propos de <span className="text-primary">Paramédical DZ</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          La plateforme de référence pour l&apos;orientation et la formation supérieure paramédicale en Algérie.
        </p>
      </header>

      <div className="prose prose-lg prose-slate max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
            🎯 Notre Mission
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            <strong>Paramédical DZ</strong> est une plateforme éducative algérienne créée pour accompagner les bacheliers
            et les étudiants dans leur parcours vers les métiers de la santé paramédicale. Notre objectif est de centraliser,
            organiser et rendre accessibles toutes les informations essentielles relatives à la formation supérieure paramédicale
            en Algérie.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Face au manque d&apos;information structurée sur les instituts nationaux de formation supérieure paramédicale (INFSPM),
            les spécialités disponibles, les moyennes d&apos;admission et les programmes d&apos;études, nous avons décidé de créer
            un espace numérique unique et fiable qui répond à toutes ces questions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
            📚 Ce que nous proposons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-primary-dark mb-2">🏛️ Annuaire des Instituts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Un répertoire complet de tous les instituts INFSPM et INFSSF répartis sur le territoire national,
                avec les spécialités disponibles, les wilayas rattachées et les coordonnées de contact.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-primary-dark mb-2">📊 Moyennes d&apos;Admission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Les moyennes BAC indicatives d&apos;acceptation pour chaque institut, spécialité et wilaya,
                avec un simulateur d&apos;admission pour aider les candidats à évaluer leurs chances.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-primary-dark mb-2">🎓 Programmes d&apos;Études</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Les programmes détaillés de chaque spécialité avec les modules, coefficients, crédits
                et la durée de formation, pour permettre aux étudiants de se préparer au mieux.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-primary-dark mb-2">📖 Bibliothèque de Cours</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Une collection de ressources pédagogiques (cours PDF, vidéos, sujets d&apos;examens)
                classées par spécialité et semestre, accessibles gratuitement.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
            🇩🇿 Pourquoi Paramédical DZ ?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            En Algérie, le secteur paramédical représente un pilier fondamental du système de santé nationale.
            Avec plus de 25 instituts de formation répartis à travers le pays et 13 spécialités différentes,
            le choix d&apos;orientation peut s&apos;avérer complexe pour les nouveaux bacheliers.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Paramédical DZ simplifie ce processus en offrant une interface moderne, bilingue (français et arabe),
            et accessible depuis n&apos;importe quel appareil. Nous compilons les données officielles provenant
            des instituts et du Ministère de la Santé pour garantir la fiabilité de nos informations.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
            <li><strong>Données vérifiées</strong> : Moyennes d&apos;admission basées sur les résultats réels des années précédentes</li>
            <li><strong>Mise à jour régulière</strong> : Nos données sont actualisées chaque année après les résultats du BAC</li>
            <li><strong>100% gratuit</strong> : Toutes nos ressources sont accessibles gratuitement et sans inscription</li>
            <li><strong>Bilingue</strong> : Interface disponible en français et en arabe</li>
            <li><strong>Open data</strong> : Nous croyons que l&apos;information éducative doit être accessible à tous</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
            👥 L&apos;Équipe
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Paramédical DZ est un projet développé par <strong>MeissaSoft</strong>, une équipe basée à Constantine, Algérie,
            spécialisée dans le développement de solutions web éducatives. Notre ambition est de contribuer à la
            démocratisation de l&apos;information dans le domaine de la santé en Algérie.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mt-6">
            <h3 className="text-lg font-bold text-primary-dark mb-3">📬 Nous contacter</h3>
            <p className="text-slate-600 text-sm mb-3">
              Pour toute question, suggestion ou proposition de contenu, n&apos;hésitez pas à nous écrire :
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="mr-2">✉️</span>
                <a href="mailto:contact@paramedical-dz.com" className="text-primary hover:text-primary-dark font-medium underline">
                  contact@paramedical-dz.com
                </a>
              </li>
              <li>
                <span className="mr-2">📍</span>
                <span className="text-slate-600">Constantine, Algérie</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
            ⚖️ Mentions légales
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Paramédical DZ est un site informatif indépendant. Les informations présentées sont fournies à titre
            indicatif et ne se substituent pas aux communications officielles des instituts ou du Ministère de la
            Santé. Nous encourageons les étudiants à vérifier les informations auprès des sources officielles.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="/politique-confidentialite" className="text-primary hover:text-primary-dark font-medium underline">
              Politique de Confidentialité
            </Link>
            <Link href="/conditions-utilisation" className="text-primary hover:text-primary-dark font-medium underline">
              Conditions d&apos;Utilisation
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
