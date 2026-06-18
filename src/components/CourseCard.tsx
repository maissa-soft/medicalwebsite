"use client";

import React from 'react';
import Link from 'next/link';
import { Course } from '@/data/mockData';

interface Props {
  course: Course;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const CourseCard = ({ course, isFavorite, onToggleFavorite }: Props) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF': return 'bg-rose-100 text-rose-600 border-rose-200';
      case 'Video': return 'bg-amber-100 text-amber-600 border-amber-200';
      case 'Exam': return 'bg-emerald-100 text-emerald-600 border-emerald-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return '📄';
      case 'Video': return '🎬';
      case 'Exam': return '📝';
      default: return '📚';
    }
  };

  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col h-full group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg border ${getTypeColor(course.type)}`}>
          {getTypeIcon(course.type)} {course.type}
        </span>
        <button 
          onClick={() => onToggleFavorite(course.id)}
          className={`p-2 rounded-xl transition-all duration-300 ${isFavorite ? 'bg-rose-50 text-rose-500 scale-110' : 'bg-slate-50 text-slate-300 hover:text-rose-400'}`}
          title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={isFavorite ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <Link href={`/course/${course.id}`} className="flex-grow flex flex-col mb-6 cursor-pointer">
        <div className="mb-2">
          <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">
            {course.subjectId || 'Général'} • S{course.semester}
          </span>
          <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors">
            {course.title}
          </h3>
        </div>

        <p className="text-slate-500 text-xs line-clamp-2 flex-grow">
          {course.description}
        </p>
      </Link>

      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
        <div className="text-[10px] text-slate-400 flex items-center gap-1.5 font-medium">
           <span>👁️ {course.views}</span>
           <span>•</span>
           <span>💾 {course.size}</span>
        </div>
        <Link 
          href={`/course/${course.id}`} 
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all shadow-lg ${course.type === 'Video' ? 'bg-primary text-white shadow-primary/20 hover:scale-105' : 'bg-slate-900 text-white shadow-slate-200 hover:bg-primary'}`}
        >
          {course.type === 'Video' ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              <span className="text-xs">Voir la vidéo</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              <span className="text-xs">{course.type === 'Exam' ? 'Sujet' : 'Lire / Télécharger'}</span>
            </>
          )}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
