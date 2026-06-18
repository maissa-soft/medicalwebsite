'use client';

import { courses } from '@/data/mockData';
import CourseItem from '@/components/CourseItem';
import { useLanguage } from '@/components/LanguageContext';

export default function CoursesPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
      <header className="text-center mb-12 pb-8 border-b border-slate-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          {language === 'ar'
            ? <span>كل <span className="text-primary">الدروس</span></span>
            : <span>Tous les <span className="text-primary">Cours</span></span>
          }
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          {language === 'ar'
            ? 'تصفح وحمّل جميع الدروس المتوفرة لكل التخصصات.'
            : 'Consultez et téléchargez l\'ensemble des cours pour toutes les spécialités.'}
        </p>
      </header>



      <div className="mt-12 flex flex-col gap-4">
        {courses.map(course => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
