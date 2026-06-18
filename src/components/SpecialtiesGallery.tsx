'use client';

import React from 'react';
import { useSpecialties } from '@/hooks/useSpecialties';
import SpecialtyCard from './SpecialtyCard';
import { useLanguage } from './LanguageContext';

const SpecialtiesGallery = () => {
  const { specialties, searchQuery, setSearchQuery } = useSpecialties();
  const { language } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Search Bar Section */}
      <div className="max-w-2xl mx-auto -mt-6">
        <div className="relative group">
          <input
            type="text"
            placeholder={language === 'ar' ? 'ابحث عن تخصص (مثال: ممرض، قابلة...)' : 'Rechercher une spécialité (ex: Infirmier, Sage-femme...)'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all ps-12 text-lg font-medium"
          />
          <div className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {searchQuery && (
          <p className="text-center mt-4 text-slate-400 font-medium animate-fade-in">
            {language === 'ar'
              ? `${specialties.length} نتيجة`
              : `${specialties.length} résultat${specialties.length > 1 ? 's' : ''} trouvé${specialties.length > 1 ? 's' : ''}`}
          </p>
        )}
      </div>

      {specialties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map(spec => (
            <SpecialtyCard key={spec.id} specialty={spec} />
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] py-24 text-center">
          <div className="text-5xl mb-6">🔍</div>
          <h3 className="text-2xl font-bold text-slate-800">
            {language === 'ar' ? 'لا توجد نتائج' : 'Aucun résultat'}
          </h3>
          <p className="text-slate-500 max-w-sm mx-auto mt-2">
            {language === 'ar'
              ? `لم يتم العثور على تخصص يطابق "${searchQuery}".`
              : `Nous n'avons trouvé aucune spécialité correspondant à "${searchQuery}".`}
          </p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-8 text-primary font-bold hover:underline"
          >
            {language === 'ar' ? 'عرض كل التخصصات' : 'Afficher toutes les spécialités'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SpecialtiesGallery;
