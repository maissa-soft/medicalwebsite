'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500 flex items-center justify-center text-white font-black text-xl shadow-md transform rotate-[-8deg] group-hover:scale-110 group-hover:rotate-0 transition-all duration-300">
              <span className="italic">P</span>
            </div>
            <span className="font-heading font-extrabold text-2xl text-slate-800 tracking-tight">
              Paramédical<span className="text-primary">DZ</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <ul className="hidden md:flex gap-8">
              <li>
                <Link href="/" className="text-slate-600 font-bold hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/institutes" className="text-slate-600 font-bold hover:text-primary transition-colors">
                  {t("nav.institutes")}
                </Link>
              </li>
              <li>
                <Link href="/specialties" className="text-slate-600 font-bold hover:text-primary transition-colors">
                  {t("nav.specialties")}
                </Link>
              </li>
              <li>
                <Link href="/cours" className="text-slate-600 font-bold hover:text-primary transition-colors">
                  {t("nav.courses")}
                </Link>
              </li>
              <li>
                <Link href="/moyennes" className="text-slate-600 font-bold hover:text-primary transition-colors">
                  {t("nav.averages")}
                </Link>
              </li>

              </ul>

            {/* Premium Language Switcher */}
            <div className="flex bg-slate-100/80 backdrop-blur-xs rounded-full p-1 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all duration-300">
              <button 
                onClick={() => setLanguage('fr')} 
                className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer ${
                  language === 'fr' 
                    ? 'bg-primary text-white shadow-xs' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                FR
              </button>
              <button 
                onClick={() => setLanguage('ar')} 
                className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer ${
                  language === 'ar' 
                    ? 'bg-primary text-white shadow-xs' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
