'use client';

import Link from 'next/link';
import { Specialty } from '@/data/mockData';
import { useLanguage } from './LanguageContext';
import { translateSpecialtyName, translateSpecialtyDesc, translateSpecialtyCareer, translateStudyDuration } from '@/data/translations';

export default function SpecialtyCard({ specialty }: { specialty: Specialty }) {
  const { language } = useLanguage();

  const name = translateSpecialtyName(specialty.name, language, specialty.id);
  const desc = translateSpecialtyDesc(specialty.description, language, specialty.id);
  const career = specialty.career ? translateSpecialtyCareer(specialty.career, language, specialty.id) : '';
  const duration = translateStudyDuration(specialty.duration, language);

  return (
    <article className="glass-card rounded-2xl p-6 border-s-4 border-s-secondary flex flex-col h-full group relative overflow-hidden">
      <div className="absolute top-0 end-0 w-32 h-32 bg-secondary-light/30 rounded-bl-full -me-10 -mt-10 transition-transform group-hover:scale-110"></div>
      
      <h3 className="text-xl text-slate-900 relative z-10 mb-2 font-bold text-start">
        {name}
        {specialty.abbreviation && <span className="ms-2 text-primary">({specialty.abbreviation})</span>}
      </h3>
      <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-md w-fit mb-4 relative z-10 font-medium">
        ⏱ {duration}
      </span>
      
      <p className="text-slate-700 text-sm flex-grow mb-4 relative z-10 leading-relaxed text-start">
        {desc}
      </p>
      
      {career && (
        <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-lg text-sm text-emerald-800 mb-6 relative z-10 text-start">
          <strong className="font-bold">{language === 'ar' ? 'الآفاق:' : 'Débouchés:'}</strong> {career}
        </div>
      )}
      
      <div className="text-end relative z-10">
        <Link 
          href={`/specialty/${specialty.id}`} 
          className="text-primary font-bold text-sm inline-flex items-center hover:text-primary-dark transition-colors group/link"
        >
          {language === 'ar' ? 'عرض البرنامج والدروس' : 'Voir les modules et cours'}
          <span className="ms-1 transition-transform group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1">
            {language === 'ar' ? '←' : '→'}
          </span>
        </Link>
      </div>
    </article>
  );
}
