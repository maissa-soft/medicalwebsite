'use client';

import React from 'react';
import InstituteCard from './InstituteCard';
import { useInstitutes, InstituteFilter } from '@/hooks/useInstitutes';
import { useLanguage } from './LanguageContext';

const InstitutesGallery = () => {
  const {
    filter,
    searchQuery,
    currentPage,
    displayedInstitutes,
    totalPages,
    handleFilter,
    handleSearch,
    setCurrentPage
  } = useInstitutes();
  const { language } = useLanguage();

  const filterTabs = [
    { id: 'all', fr: 'Tous les Instituts', ar: 'كل المعاهد' },
    { id: 'infspm', fr: 'Instituts Paramédicaux', ar: 'المعاهد شبه الطبية' },
    { id: 'infssf', fr: 'Instituts des Sages-Femmes', ar: 'معاهد القابلات' },
  ];

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative group">
          <input
            type="text"
            placeholder={language === 'ar' ? 'ابحث عن معهد أو ولاية...' : 'Rechercher un institut, une wilaya ou une ville...'}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl shadow-sm focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-700 font-medium placeholder:text-slate-400"
          />
          <div className="absolute end-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleFilter(tab.id as InstituteFilter)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm
              ${filter === tab.id 
                ? 'bg-primary text-white shadow-primary/20 scale-105' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'}`}
          >
            {language === 'ar' ? tab.ar : tab.fr}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedInstitutes.map((inst) => (
          <InstituteCard key={inst.id} institute={inst} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            {language === 'ar' ? 'السابق →' : '← Précédent'}
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 rounded-lg text-sm font-bold transition-all
                  ${currentPage === pageNum 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            {language === 'ar' ? '← التالي' : 'Suivant →'}
          </button>
        </div>
      )}
    </div>
  );
};

export default InstitutesGallery;
