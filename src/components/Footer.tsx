'use client';

import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  const address = language === 'ar' ? 'قسنطينة، الجزائر' : 'Constantine, Algérie';
  const emails = ["contact@paramedical-dz.com", "roumeissa@paramedical-dz.com"];

  return (
    <footer className="bg-white border-t border-slate-200 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-slate-100">
          {/* About Section */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500 flex items-center justify-center text-white font-black text-lg shadow-md transform rotate-[-8deg] group-hover:scale-110 group-hover:rotate-0 transition-all duration-300">
                <span className="italic">P</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-800 m-0">
                Paramédical<span className="text-primary">DZ</span>
              </h3>
            </div>
            <p className="text-slate-500 max-w-md text-sm leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-slate-800 mb-3 text-base">
              {t("inst.details.contact")}
            </h4>
            <p className="text-slate-500 text-sm mb-2 flex items-center gap-2 justify-center">
              <span>📍</span>
              <span>{address}</span>
            </p>
            <div className="flex flex-col gap-1.5 items-center">
              {emails.map(email => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="text-sm text-primary hover:text-primary-dark transition-colors flex items-center gap-2 justify-center"
                >
                  <span>✉️</span>
                  <span className="underline decoration-primary/30 hover:decoration-primary">{email}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-start gap-4 mt-8 pt-8 border-t border-slate-100 text-slate-500 text-sm font-medium">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>{t("footer.created_by")}</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 font-black text-base hover:scale-110 transition-transform cursor-pointer drop-shadow-sm">
              ❤️ MeissaSoft ❤️
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="/a-propos" className="hover:text-primary transition-colors">À Propos</a>
            <a href="/politique-confidentialite" className="hover:text-primary transition-colors">Confidentialité</a>
            <a href="/conditions-utilisation" className="hover:text-primary transition-colors">Conditions</a>
          </div>
          <div>
            <span>{t("footer.rights")} &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
