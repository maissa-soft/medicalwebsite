'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DataService } from '@/services/dataService';
import CoursesGallery from '@/components/CoursesGallery';
import SpecialtyProgram from '@/components/SpecialtyProgram';

import { useLanguage } from '@/components/LanguageContext';
import { translateSpecialtyName, translateSpecialtyDesc, translateSpecialtyCareer, translateStudyDuration } from '@/data/translations';
import { use } from 'react';

export default function SpecialtyDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const specialty = DataService.getSpecialtyById(resolvedParams.id);
  const { language } = useLanguage();

  if (!specialty) {
    notFound();
  }

  const name = translateSpecialtyName(specialty.name, language, specialty.id);
  const desc = translateSpecialtyDesc(specialty.description, language, specialty.id);
  const career = specialty.career ? translateSpecialtyCareer(specialty.career, language, specialty.id) : '';
  const duration = translateStudyDuration(specialty.duration, language);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
      <Link href="/specialties" className="inline-flex items-center text-slate-500 hover:text-primary font-medium mb-8 group">
        <span className="me-2 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1">←</span>
        {language === 'ar' ? 'العودة إلى التخصصات' : 'Retour aux spécialités'}
      </Link>

      <header className="mb-12 pb-8 border-b-2 border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-dark tracking-tight mb-2">
              {name}
            </h1>
            <div className="flex flex-wrap gap-2">
              {(specialty.code || specialty.abbreviation) && (
                <span className="inline-block bg-primary/10 text-primary font-black py-1 px-4 rounded-full text-sm uppercase tracking-wider border border-primary/20">
                  {language === 'ar' ? 'الرمز:' : 'Code :'} {specialty.code} | {specialty.abbreviation}
                </span>
              )}
            </div>
          </div>
          <span className="inline-block bg-primary-light text-primary-dark px-5 py-2 rounded-xl font-bold whitespace-nowrap shadow-sm mt-4 md:mt-0">
            ⏱ {language === 'ar' ? 'المدة:' : 'Durée :'} {duration}
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-12">
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3">
              {language === 'ar' ? 'حول التخصص' : 'À Propos'}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">{desc}</p>

            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {language === 'ar' ? 'الآفاق التعليمية' : 'Débouchés Professionnels'}
            </h3>
            <p className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-xl font-medium shadow-inner">
              {career}
            </p>
          </div>

          <SpecialtyProgram
            semesters={specialty.semesters}
            subjects={specialty.subjects}
          />

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              🎬 {language === 'ar' ? 'الدروس والموارد البيداغوجية' : 'Cours et Ressources Dédiés'}
            </h2>
            <CoursesGallery specialtyId={specialty.id} />
          </div>
        </section>


      </div>
    </div>
  );
}
