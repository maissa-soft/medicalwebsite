'use client';

import React from 'react';
import Link from 'next/link';
import { Institute } from '@/data/mockData';
import { useLanguage } from './LanguageContext';
import { translateInstituteName, translateWilaya } from '@/data/translations';

export default function InstituteCard({ institute }: { institute: Institute }) {
  const { language } = useLanguage();

  return (
    <article className="glass-card rounded-2xl flex flex-col h-full group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4 gap-2">
          <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary-light/30 px-2 py-1 rounded-md">
            {language === 'ar' ? 'معهد وطني' : institute.type}
          </span>
          <div className="flex gap-2">
            <div className="bg-rose-50 px-2 py-1 rounded-md border border-rose-100 flex items-center">
               <span className="text-[9px] font-bold text-rose-500 me-1">MIN</span>
               <span className="text-xs font-black text-rose-600">{institute.minAverage?.toFixed(2) || '--'}</span>
            </div>
            <div className="bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 flex items-center">
               <span className="text-[9px] font-bold text-emerald-500 me-1">MAX</span>
               <span className="text-xs font-black text-emerald-600">{institute.maxAverage?.toFixed(2) || '--'}</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors text-start">
          {translateInstituteName(institute.name, language)}
        </h3>
        
        <p className="text-slate-500 text-sm mb-4 flex items-center gap-1.5 text-start">
          📍 {translateWilaya(institute.location, language)}
        </p>

        <p className="text-slate-600 text-sm flex-grow mb-6 leading-relaxed text-start">
          {language === 'ar' 
            ? `المعهد الوطني للتكوين العالي للشبه طبي لولاية ${translateWilaya(institute.location, language)}.`
            : institute.description}
        </p>
        
        <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-auto">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">
            {institute.specialties.length} {language === 'ar' ? 'تخصصات' : 'Spécialités'}
          </span>
          <Link 
            href={`/institute/${institute.id}`} 
            className="text-primary font-bold text-sm hover:underline flex items-center gap-1 group/btn"
          >
            {language === 'ar' ? 'التفاصيل' : 'Détails'}{' '}
            <span className="inline-block transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1">
              {language === 'ar' ? '←' : '→'}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
