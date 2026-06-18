import { notFound } from 'next/navigation';
import Link from 'next/link';
import { courses, specialties } from '@/data/mockData';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const course = courses.find(c => c.id === resolvedParams.id);
  if (!course) return { title: 'Cours Introuvable | Paramédical DZ' };
  
  return {
    title: `${course.title} | Paramédical DZ`,
    description: course.description || `Télécharger ${course.title} pour les études paramédicales en Algérie.`,
  };
}

function getYouTubeEmbedUrl(url: string | undefined) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
}

function getGoogleDriveEmbedUrl(url: string | undefined) {
  if (!url) return null;
  if (url.includes('drive.google.com/file/d/')) {
    const parts = url.split('/file/d/');
    if (parts.length > 1) {
      const id = parts[1].split('/')[0];
      return `https://drive.google.com/file/d/${id}/preview`;
    }
  }
  return null;
}

export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const course = courses.find(c => c.id === resolvedParams.id);
  
  if (!course) {
    notFound();
  }

  const specialty = specialties.find(s => s.id === course.specialtyId);

  const youtubeEmbedUrl = getYouTubeEmbedUrl(course.downloadUrl);
  const driveEmbedUrl = getGoogleDriveEmbedUrl(course.downloadUrl);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'Video': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Exam': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return '📄';
      case 'Video': return '🎥';
      case 'Exam': return '📝';
      default: return '📚';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
      {/* Back Navigation */}
      <Link 
        href={specialty ? `/specialty/${specialty.id}` : "/courses"} 
        className="inline-flex items-center text-slate-500 hover:text-primary font-medium mb-8 group"
        id="back-to-specialty-link"
      >
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 
        Retour à {specialty ? specialty.name : 'la liste des cours'}
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Header Card */}
          <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden">
            {/* Ambient Background Decorative light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            
            <div className="flex flex-col md:flex-row items-start gap-5 relative z-10">
              <span className="text-4xl w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl shadow-sm border border-slate-100 shrink-0">
                {getTypeIcon(course.type)}
              </span>
              
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg border ${getTypeColor(course.type)}`}>
                    {course.type}
                  </span>
                  {course.subjectId && (
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                      {course.subjectId}
                    </span>
                  )}
                  {course.semester && (
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                      S{course.semester}
                    </span>
                  )}
                </div>
                
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  {course.title}
                </h1>
                
                <p className="text-slate-500 text-sm font-medium">
                  Spécialité : <span className="text-primary-dark font-bold">{specialty?.name || 'Général'}</span>
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100 text-slate-600">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Description</h3>
              <p className="leading-relaxed text-sm md:text-base">{course.description}</p>
            </div>
          </div>



          {/* Viewer / Preview Section */}
          <div className="glass-card p-4 md:p-6 rounded-3xl">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span>👁️</span> Aperçu & Lecture
            </h2>
            
            <div className="w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-inner flex items-center justify-center relative min-h-[350px] md:min-h-[450px]">
              {youtubeEmbedUrl ? (
                <iframe
                  src={youtubeEmbedUrl}
                  title={course.title}
                  className="absolute inset-0 w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : driveEmbedUrl ? (
                <iframe
                  src={driveEmbedUrl}
                  title={course.title}
                  className="absolute inset-0 w-full h-full border-none"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              ) : (
                /* Fallback Placeholder Visual Design */
                <div className="text-center p-8 max-w-sm">
                  <div className="text-5xl mb-4 animate-bounce">📄</div>
                  <h3 className="text-white font-bold text-lg mb-2">Aperçu indisponible</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    L'aperçu en ligne n'est pas disponible pour ce type de document. Vous pouvez le télécharger pour le lire localement.
                  </p>
                  {course.downloadUrl && (
                    <a
                      href={course.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/30 transition-all hover:scale-105"
                      id="fallback-download-btn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Télécharger ({course.size || 'Fichier'})
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
          
        </div>

        {/* Sidebar Info & Action Area */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          {/* Action Box Card */}
          <div className="glass-card p-6 rounded-3xl border border-slate-100 shadow-md">
            <h3 className="text-slate-800 font-bold text-base mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span>📥</span> Options d'Accès
            </h3>
            
            {course.downloadUrl ? (
              <div className="space-y-4">
                <a
                  href={course.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-center ${
                    course.type === 'Video' 
                      ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-red-200' 
                      : 'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-primary/30'
                  }`}
                  id="primary-download-btn"
                >
                  {course.type === 'Video' ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      Voir sur YouTube
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Ouvrir / Télécharger ({course.size})
                    </>
                  )}
                </a>
                
                <p className="text-[11px] text-slate-400 text-center">
                  Hébergé de manière sécurisée sur {course.type === 'Video' ? 'YouTube' : 'Google Drive'}.
                </p>
              </div>
            ) : (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center text-slate-500 text-sm">
                Aucun lien de téléchargement disponible pour le moment.
              </div>
            )}

            {/* Resources Stats */}
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Nombre de vues</span>
                <span className="text-slate-800 font-bold">{course.views} vues</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Taille estimée</span>
                <span className="text-slate-800 font-bold">{course.size || 'Inconnue'}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Type de ressource</span>
                <span className="text-slate-800 font-bold">{course.type}</span>
              </div>
              {course.duration && (
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">
                    {course.type === 'Video' ? 'Durée de la vidéo' : 'Pages du document'}
                  </span>
                  <span className="text-slate-800 font-bold">{course.duration}</span>
                </div>
              )}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
