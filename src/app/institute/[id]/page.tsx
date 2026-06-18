'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DataService } from '@/services/dataService';
import SpecialtyCard from '@/components/SpecialtyCard';
import AdSpot from '@/components/AdSpot';
import { useLanguage } from '@/components/LanguageContext';
import { translateInstituteName, translateWilaya, translateSpecialtyName } from '@/data/translations';
import { use, useEffect, useState } from 'react';

export default function InstituteDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const institute = DataService.getInstituteById(resolvedParams.id);
  const { language } = useLanguage();

  const [wilayaMapping, setWilayaMapping] = useState<Record<string, Set<string>>>({});
  const [sortedWilayas, setSortedWilayas] = useState<string[]>([]);

  if (!institute) {
    notFound();
  }

  const specialtiesList = DataService.getSpecialties();
  const instituteSpecialties = specialtiesList.filter(s =>
    institute.specialties.includes(s.id)
  );

  useEffect(() => {
    DataService.getAveragesByYear(2025).then(allAverages => {
      const instituteAverages = allAverages.filter(a => a.instituteId === institute.id);
      const mapping: Record<string, Set<string>> = {};

      instituteAverages.forEach(avg => {
        const w = (avg.targetWilaya || institute.wilaya)
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/^\w/, c => c.toUpperCase());

        if (!mapping[w]) mapping[w] = new Set();
        const specName = specialtiesList.find(s => s.id === avg.specialtyId)?.name || avg.specialtyId;
        mapping[w].add(specName);
      });

      setWilayaMapping(mapping);
      setSortedWilayas(Object.keys(mapping).sort());
    });
  }, [institute.id]);

  const instituteName = translateInstituteName(institute.name, language);
  const instituteLocation = translateWilaya(institute.location, language);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
      <Link href="/institutes" className="inline-flex items-center text-slate-500 hover:text-primary font-medium mb-8 group">
        <span className="me-2 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1">←</span>
        {language === 'ar' ? 'العودة إلى المعاهد' : 'Retour aux instituts'}
      </Link>
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-8 border-b-2 border-slate-200">
        <div>
          <span className="bg-primary-light text-primary-dark px-4 py-1.5 rounded-full font-bold text-sm tracking-wide inline-block mb-3">
            {language === 'ar' ? 'معهد وطني' : institute.type}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            {instituteName}
          </h1>
          <p className="text-lg text-slate-500 flex items-center gap-2">
            📍 {instituteLocation}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 text-center min-w-[140px] shadow-sm transform hover:scale-105 transition-transform">
            <span className="block text-xs text-rose-600 uppercase font-black tracking-widest mb-1">
              {language === 'ar' ? 'الحد الأدنى' : 'Min. Requis'}
            </span>
            <span className="block text-3xl font-extrabold text-rose-600 leading-none">
              {institute.minAverage ? institute.minAverage.toFixed(2) : '--'}
            </span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center min-w-[140px] shadow-sm transform hover:scale-105 transition-transform">
            <span className="block text-xs text-emerald-600 uppercase font-black tracking-widest mb-1">
              {language === 'ar' ? 'أعلى معدل' : 'Admis Max'}
            </span>
            <span className="block text-3xl font-extrabold text-emerald-600 leading-none">
              {institute.maxAverage ? institute.maxAverage.toFixed(2) : '--'}
            </span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            {language === 'ar' ? 'حول المعهد' : 'À propos de l\'institut'}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            {language === 'ar'
              ? `المعهد الوطني للتكوين العالي لشبه الطبي لولاية ${instituteLocation}، يشكل مرجعاً رئيسياً للتكوين في مجال الصحة على المستوى الإقليمي.`
              : institute.description}
          </p>


          {sortedWilayas.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">
                {language === 'ar' ? 'الولايات والتخصصات المتاحة' : 'Wilayas Rattachées & Spécialités Ouvertes'}
              </h2>
              <p className="text-slate-600 mb-6">
                {language === 'ar'
                  ? 'يستقبل هذا المعهد خريجي الباكالوريا من الولايات التالية للتخصصات المحددة:'
                  : 'Cet institut accueille les bacheliers des wilayas suivantes pour les spécialités indiquées :'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {sortedWilayas.map(w => (
                  <div key={w} className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-primary-dark mb-3 border-b border-primary-light/50 pb-2 flex items-center gap-2">
                      📍 {translateWilaya(w, language)}
                    </h3>
                    <ul className="space-y-1.5 marker:text-primary list-disc ps-5">
                      {Array.from(wilayaMapping[w]).sort().map(specName => (
                        <li key={specName} className="text-sm text-slate-700 font-medium">
                          {translateSpecialtyName(specName, language)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 m-0">
              {language === 'ar' ? 'التخصصات المتوفرة' : 'Spécialités Disponibles'}
            </h2>
            <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-bold">
              {instituteSpecialties.length}
            </span>
          </div>
          
          <div className="flex flex-col gap-6">
            {instituteSpecialties.map(spec => (
              <SpecialtyCard key={spec.id} specialty={spec} />
            ))}
          </div>
        </section>

        <aside className="lg:col-span-1">
          <div className="sticky top-28">
            <AdSpot format="rectangle" />
          </div>
        </aside>
      </div>
    </div>
  );
}
