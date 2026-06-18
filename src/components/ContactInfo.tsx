import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { translateWilaya } from '@/data/translations';


interface ContactInfoProps {
  address: string;
  emails: string[];
}

export default function ContactInfo({ address, emails }: ContactInfoProps) {
  const { language, t } = useLanguage();
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        {t('inst.details.contact')}
      </h2>
      <p className="text-lg text-slate-600 mb-2 flex items-center gap-2">
        📍 {language === 'ar' ? translateWilaya(address, 'ar') : address}
      </p>
      <ul className="list-disc pl-5 text-slate-600">
        {emails.map(email => (
          <li key={email} className="flex items-center gap-2">
            ✉️
            <a href={`mailto:${email}`} className="text-primary hover:underline">
              {email}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
