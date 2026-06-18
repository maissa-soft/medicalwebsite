import Link from 'next/link';
import { Course } from '@/data/mockData';

export default function CourseItem({ course }: { course: Course }) {
  const isVideo = course.type === 'Video';
  const icon = isVideo ? '🎥' : (course.type === 'PDF' ? '📄' : '📝');

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-slate-200 rounded-xl mb-3 hover:border-primary hover:shadow-md transition-all group">
      <div className="flex items-center gap-4 mb-4 sm:mb-0">
        <span className="text-2xl w-12 h-12 flex items-center justify-center bg-slate-50 rounded-lg group-hover:bg-primary-light transition-colors">
          {icon}
        </span>
        <div>
          <h4 className="font-bold text-slate-800 text-base mb-1">{course.title}</h4>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
            {course.type} • {course.size}
          </span>
        </div>
      </div>
      <Link 
        href={`/course/${course.id}`} 
        className="bg-primary-light text-primary-dark hover:bg-primary hover:text-white px-5 py-2.5 rounded-lg text-sm font-bold whitespace-nowrap text-center transition-colors"
      >
        {isVideo ? 'Lancer la vidéo' : 'Lire / Télécharger'}
      </Link>
    </div>
  );
}
