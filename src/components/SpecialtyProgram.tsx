"use client";

import React, { useState, useMemo } from 'react';
import { Semester, Subject } from '@/data/mockData';

interface Props {
  semesters?: Semester[];
  subjects?: Subject[];
}

const SpecialtyProgram = ({ semesters, subjects }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSemesters = useMemo(() => {
    if (!semesters) return [];
    return semesters.map(sem => ({
      ...sem,
      modules: sem.modules.filter(m => 
        m.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      )
    })).filter(sem => sem.modules.length > 0);
  }, [semesters, searchQuery]);

  const filteredSubjects = useMemo(() => {
    if (!subjects) return [];
    return subjects.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  }, [subjects, searchQuery]);

  const hasResults = filteredSemesters.length > 0 || filteredSubjects.length > 0;

  return (
    <div className="glass-card p-8 rounded-2xl border-l-4 border-l-secondary">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
          📚 Programme d'Enseignement
        </h2>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Rechercher un module..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {!hasResults && searchQuery && (
        <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <p className="text-slate-500 italic">Aucun module ne correspond à "{searchQuery}"</p>
        </div>
      )}

      {filteredSemesters.length > 0 ? (
        <div className="flex flex-col gap-8">
          {filteredSemesters.map((sem, sIdx) => (
            <div key={sIdx} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
              <h3 className="bg-slate-200 text-slate-800 font-bold px-5 py-3 border-b border-slate-300">
                {sem.name}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-white border-b border-slate-100">
                      <th className="px-5 py-3 font-semibold text-slate-600 text-sm">Module / Matière</th>
                      <th className="px-5 py-3 font-semibold text-slate-600 text-center w-32 text-sm">Coef</th>
                      <th className="px-5 py-3 font-semibold text-slate-600 text-center w-32 text-sm">Crédits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sem.modules.map((subject, idx) => (
                      <tr key={idx} className="border-b border-slate-100/50 hover:bg-white transition-colors">
                        <td className="px-5 py-3 font-medium text-slate-800 text-sm">{subject.name}</td>
                        <td className="px-5 py-3 text-center text-slate-600 text-sm">{subject.coefficient}</td>
                        <td className="px-5 py-3 text-center font-bold text-primary-dark text-sm">{subject.credit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      ) : (
        filteredSubjects.length > 0 && (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-5 py-4 font-semibold text-slate-700">Module / Matière</th>
                  <th className="px-5 py-4 font-semibold text-slate-700 text-center w-32">Coefficient</th>
                  <th className="px-5 py-4 font-semibold text-slate-700 text-center w-32">Crédit</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubjects.map((subject, idx) => (
                  <tr key={idx} className="border-b border-slate-100/70 hover:bg-slate-50">
                    <td className="px-5 py-4 font-medium text-slate-800">{subject.name}</td>
                    <td className="px-5 py-4 text-center text-slate-600 bg-slate-50/50">{subject.coefficient}</td>
                    <td className="px-5 py-4 text-center font-bold text-primary-dark bg-primary-light/20">{subject.credit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
};

export default SpecialtyProgram;
