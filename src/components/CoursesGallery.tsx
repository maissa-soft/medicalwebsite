'use client';

import React, { useState } from 'react';
import { useCourses } from '@/hooks/useCourses';
import CourseCard from './CourseCard';
import { DataService } from '@/services/dataService';
import { useLanguage } from './LanguageContext';

interface Props {
  specialtyId?: string;
}

const CoursesGallery = ({ specialtyId }: Props) => {
  const { 
    courses, 
    isFavorite, 
    toggleFavorite, 
    setFilterType, 
    setSearchQuery, 
    filterType, 
    searchQuery,
    favorites 
  } = useCourses(specialtyId);
  const { language } = useLanguage();

  const [activeTab, setActiveTab] = useState<'all' | 'fav'>('all');
  const specialties = DataService.getSpecialties();

  const displayedCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(c => isFavorite(c.id));

  const filterLabels: Record<string, { fr: string; ar: string }> = {
    all: { fr: 'Tout voir', ar: 'الكل' },
    PDF: { fr: 'PDF', ar: 'PDF' },
    Video: { fr: 'Vidéo', ar: 'فيديو' },
    Exam: { fr: 'Examen', ar: 'امتحان' },
  };

  return (
    <div className="space-y-8">
      {/* Search & Tabs Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder={language === 'ar' ? 'ابحث بالعنوان أو المقياس...' : 'Rechercher par titre ou module...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute end-4 top-1/2 -translate-y-1/2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'all' ? 'bg-white text-primary shadow-sm' : 'text-slate-500'}`}
          >
            {language === 'ar' ? 'كل الدروس' : 'Tous les Cours'}
          </button>
          <button 
            onClick={() => setActiveTab('fav')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'fav' ? 'bg-white text-rose-500 shadow-sm' : 'text-slate-500'}`}
          >
            ❤️ {language === 'ar' ? 'المفضلة' : 'Favoris'}
            {favorites.length > 0 && (
              <span className="bg-rose-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                {favorites.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2">
        {['all', 'PDF', 'Video', 'Exam'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${filterType === type ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'}`}
          >
            {language === 'ar' ? filterLabels[type]?.ar : filterLabels[type]?.fr}
          </button>
        ))}
      </div>

      {displayedCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              isFavorite={isFavorite(course.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl py-20 text-center">
          <div className="text-4xl mb-4">📭</div>
          <h3 className="text-xl font-bold text-slate-800">
            {language === 'ar' ? 'لا توجد دروس' : 'Aucun cours trouvé'}
          </h3>
          <p className="text-slate-500 max-w-xs mx-auto mt-2">
            {language === 'ar' 
              ? 'حاول بفلاتر أخرى أو ابحث عن مقياس مختلف.'
              : 'Réessayez avec d\'autres filtres ou recherchez un autre module.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default CoursesGallery;
