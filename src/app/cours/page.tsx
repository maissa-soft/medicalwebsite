import React from 'react';
import CoursesGallery from '@/components/CoursesGallery';

export const metadata = {
  title: 'Paramédical Academy | Cours et Ressources',
  description: 'Accédez gratuitement aux cours, sujets d\'examens et ressources pédagogiques pour toutes les spécialités paramédicales.',
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Paramédical <span className="text-primary italic">Academy.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Votre bibliothèque numérique gratuite. Retrouvez des centaines de cours, 
            vidéos et sujets d'examens classés par spécialité.
          </p>
        </div>

        {/* Courses Gallery with search and favorites */}
        <CoursesGallery />

        {/* Bottom Banner */}
        <div className="mt-20 p-8 md:p-12 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative group">
           <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-600/20 opacity-50"></div>
           <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="text-center md:text-left">
               <h2 className="text-3xl font-bold mb-3">Envie de contribuer ?</h2>
               <p className="text-slate-400 max-w-md">
                 Vous avez des cours ou des sujets d'examens à partager ? Aide-nous à enrichir l'Academy pour tout le monde.
               </p>
             </div>
             <a 
               href="mailto:contact@paramedicaldz.com?subject=Proposition de contenu Academy"
               className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-xl shadow-white/5 active:scale-95 text-center min-w-[200px]"
             >
                Proposer un contenu
             </a>
           </div>
        </div>
      </div>
    </main>
  );
}
