'use client';

import { useState, useMemo } from 'react';
import { useAverages, useAverageFilters } from '@/hooks/useAverages';
import AdSpot from '@/components/AdSpot';
import { useLanguage } from '@/components/LanguageContext';
import { translateWilaya, translateSpecialtyName } from '@/data/translations';

export default function MoyennesPage() {
  const { language, t } = useLanguage();
  const [selectedWilaya, setSelectedWilaya] = useState<string>('Toutes');
  const [selectedYear, setSelectedYear] = useState<string>('2025');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('Toutes');
  const [studentScore, setStudentScore] = useState<string>('');
  
  const { allRows, loading } = useAverages(selectedYear);
  const filteredRows = useAverageFilters(allRows, {
    wilaya: selectedWilaya,
    specialty: selectedSpecialty,
    score: studentScore
  });

  const wilayas = useMemo(() => Array.from(new Set(allRows.map(r => r.wilaya))).sort(), [allRows]);
  const specNames = useMemo(() => Array.from(new Set(allRows.map(r => r.specialty))).sort(), [allRows]);
  const availableYears = ['2025', '2024', '2023', '2022', '2021', '2020', '2019'];

  const validAverages = filteredRows.map(r => r.average).filter(v => v > 0);
  const minAvg = validAverages.length > 0 ? Math.min(...validAverages).toFixed(2) : "--";
  const maxAvg = validAverages.length > 0 ? Math.max(...validAverages).toFixed(2) : "--";
  const resultCount = validAverages.length;

  const allLabel = language === 'ar' ? 'الكل' : 'Toutes';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
      <header className="text-center mb-12 pb-8 border-b border-slate-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 animate-fade-in">
          {t("avg.title").split(' ')[0]} <span className="text-primary">{t("avg.title").split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {t("avg.desc")}
        </p>
      </header>

      <AdSpot format="banner" />

      {/* Barre de filtres */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-6 mt-12 items-center">
        <div className="flex-1 w-full">
          <label className="block text-sm font-bold text-slate-700 mb-2">{t("avg.filter.wilaya")}</label>
          <select 
            value={selectedWilaya} 
            onChange={(e) => setSelectedWilaya(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
          >
            <option value="Toutes">{t("avg.filter.wilaya.all")}</option>
            {wilayas.map(w => (
              <option key={w} value={w}>{translateWilaya(w, language)}</option>
            ))}
          </select>
        </div>

        <div className="flex-1 w-full">
          <label className="block text-sm font-bold text-slate-700 mb-2">{t("avg.filter.specialty")}</label>
          <select 
            value={selectedSpecialty} 
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
          >
            <option value="Toutes">{t("avg.filter.specialty.all")}</option>
            {specNames.map(s => (
              <option key={s} value={s}>{translateSpecialtyName(s, language)}</option>
            ))}
          </select>
        </div>

        <div className="flex-1 w-full">
          <label className="block text-sm font-bold text-slate-700 mb-2">{t("avg.filter.year")}</label>
          <select 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
          >
            {availableYears.map(y => (
              <option key={y} value={y.toString()}>{y}</option>
            ))}
          </select>
        </div>

        <div className="flex-1 w-full">
          <label className="block text-sm font-bold text-primary mb-2">{t("avg.filter.score")}</label>
          <input 
            type="number" 
            step="0.01"
            min="10"
            max="20"
            placeholder={language === 'ar' ? 'مثال: 15.50' : 'ex: 15.50'}
            value={studentScore}
            onChange={(e) => setStudentScore(e.target.value)}
            className="w-full bg-primary/5 border border-primary/30 text-primary-dark rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-bold placeholder:text-primary/40"
          />
        </div>
      </div>

      {/* Statistiques Résumées */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-6 py-4 flex-1 flex flex-col items-center justify-center shadow-sm">
          <span className="text-emerald-600 font-bold text-sm mb-1 uppercase tracking-wider">{t("avg.stat.max")}</span>
          <span className="text-3xl font-black text-emerald-700">{maxAvg}</span>
        </div>
        <div className="bg-rose-50 border border-rose-100 rounded-xl px-6 py-4 flex-1 flex flex-col items-center justify-center shadow-sm">
          <span className="text-rose-600 font-bold text-sm mb-1 uppercase tracking-wider">{t("avg.stat.min")}</span>
          <span className="text-3xl font-black text-rose-700">{minAvg}</span>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-4 flex-1 flex flex-col items-center justify-center shadow-sm">
          <span className="text-blue-600 font-bold text-sm mb-1 uppercase tracking-wider">{t("avg.stat.count")}</span>
          <span className="text-3xl font-black text-blue-700">{resultCount}</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 font-bold text-slate-700">{t("avg.table.wilaya")}</th>
                <th className="px-6 py-4 font-bold text-slate-700 text-center">{t("avg.table.year")}</th>
                <th className="px-6 py-4 font-bold text-slate-700">{t("avg.table.specialty")}</th>
                <th className="px-6 py-4 font-bold text-slate-700">{t("avg.table.institute")}</th>
                <th className="px-6 py-4 font-bold text-slate-700 text-end">{t("avg.table.average")}</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.length > 0 ? (
                filteredRows.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-800">{translateWilaya(row.wilaya, language)}</td>
                    <td className="px-6 py-4 text-center font-semibold text-slate-600">{row.year}</td>
                    <td className="px-6 py-4 font-medium text-primary-dark">{translateSpecialtyName(row.specialty, language)}</td>
                    <td className="px-6 py-4 text-slate-500 text-sm">{row.instituteName}</td>
                    <td className="px-6 py-4 text-end">
                      <span className={`px-4 py-1.5 rounded-full font-bold text-sm shadow-sm ${row.average >= 14.5 ? 'bg-amber-100 text-amber-700' : 'bg-primary-light text-primary-dark'}`}>
                        {row.average.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500 font-medium">
                    {t("avg.table.no_results")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
