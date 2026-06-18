'use client';

import InstitutesGallery from '@/components/InstitutesGallery';
import { useLanguage } from '@/components/LanguageContext';

export default function InstitutesPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
      <header className="text-center mb-12 pb-8 border-b border-slate-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          {language === 'ar'
            ? <span>المعاهد <span className="text-primary">شبه الطبية</span></span>
            : <span>Instituts <span className="text-primary">Paramédicaux</span></span>
          }
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          {language === 'ar'
            ? 'استكشف معاهد التكوين الموزعة عبر التراب الوطني واستخدم الفلاتر لاكتشاف جميع مؤسساتنا.'
            : 'Explorez les instituts de formation à travers le pays. Filtrez pour découvrir l\'ensemble de nos campus.'}
        </p>
      </header>



      <div className="mt-12">
        <InstitutesGallery />
      </div>
    </div>
  );
}
