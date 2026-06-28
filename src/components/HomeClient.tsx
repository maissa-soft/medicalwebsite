'use client';

import Link from 'next/link';
import { DataService } from '@/services/dataService';
import InstituteCard from '@/components/InstituteCard';
import ParticleBackground from '@/components/ParticleBackground';
import { useLanguage } from '@/components/LanguageContext';

export default function HomeClient() {
  const { t, language } = useLanguage();
  const topInstitutes = DataService.getInstitutes().slice(0, 3);

  return (
    <div className="pb-16 bg-white overflow-hidden">
      <header className="relative bg-slate-950 pt-24 pb-32 px-4 text-center mb-16 overflow-hidden min-h-[70vh] flex flex-col justify-center items-center">
        {/* AntiGravity Style Particles */}
        <ParticleBackground />

        {/* Ambient Glows for Dark Mode */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 animate-fade-in shadow-2xl">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-tr from-primary via-indigo-500 to-fuchsia-500 rounded-2xl rotate-12 shadow-[0_0_20px_rgba(14,165,233,0.3)] flex items-center justify-center text-white font-black text-2xl">
              P
            </div>
            <span className="text-3xl font-bold text-white tracking-tight">
              Paramédical <span className="font-light text-slate-500">DZ</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-md">
            {t("home.hero.title")}
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            {t("home.hero.desc")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
            <Link
              href="/moyennes"
              className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/40 hover:bg-primary-dark hover:scale-105 transition-all duration-300"
            >
              {t("home.hero.simulator")}
            </Link>
            <Link
              href="/institutes"
              className="text-slate-500 hover:text-white font-bold transition-colors flex items-center gap-2 group"
            >
              {t("home.hero.view_institutes")}
              <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                {language === 'ar' ? '←' : '→'}
              </span>
            </Link>
          </div>

          {/* AntiGravity Style bottom links */}
          <div className="flex justify-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/guides" className="hover:text-primary transition-colors">
              {language === 'ar' ? 'الوثائق' : 'Documentation'}
            </Link>
            <span className="opacity-30">|</span>
            <a href="https://instagram.com/PRO_DESIGN8825" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Instagram (@PRO_DESIGN8825)
            </a>
            <span className="opacity-30">|</span>
            <Link href="/a-propos" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-end mb-8 pb-4 border-b-2 border-slate-200">
          <h2 className="text-3xl font-heading font-extrabold text-slate-800 m-0">
            {t("home.popular_institutes")}
          </h2>
          <Link href="/institutes" className="text-primary font-bold hover:underline mb-1 flex items-center gap-1">
            {t("home.view_all")} {language === 'ar' ? '←' : '→'}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topInstitutes.map(inst => (
            <InstituteCard key={inst.id} institute={inst} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16">
            {t("home.why_choose")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:-translate-y-2 transition-transform">
              <div className="text-5xl mb-6">🏛️</div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {t("home.reason1.title")}
              </h3>
              <p className="text-slate-400">
                {t("home.reason1.desc")}
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:-translate-y-2 transition-transform">
              <div className="text-5xl mb-6">📚</div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {t("home.reason2.title")}
              </h3>
              <p className="text-slate-400">
                {t("home.reason2.desc")}
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:-translate-y-2 transition-transform">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {t("home.reason3.title")}
              </h3>
              <p className="text-slate-400">
                {t("home.reason3.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
