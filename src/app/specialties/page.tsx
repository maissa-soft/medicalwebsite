'use client';

import React from 'react';
import SpecialtiesGallery from '@/components/SpecialtiesGallery';
import { useLanguage } from '@/components/LanguageContext';

export default function SpecialtiesPage() {
  const { language } = useLanguage();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh] pt-32">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight animate-fade-in">
          {language === 'ar'
            ? <span>التخصصات والبرامج <span className="text-primary italic">الدراسية.</span></span>
            : <span>Spécialités et <span className="text-primary italic">Modules.</span></span>
          }
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.1s' }}>
          {language === 'ar'
            ? 'اكتشف تخصصاتنا الدراسية وتعرّف على الآفاق التعليمية، المسارات التكوينية والمواد المدرّسة بمعاملاتها وأرصدتها.'
            : 'Explorez nos filières d\'études pour découvrir les débouchés, les parcours et les matières enseignées avec coefficients et crédits.'}
        </p>
      </header>



      <SpecialtiesGallery />
    </main>
  );
}
