import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'Paramédical DZ — Instituts & Spécialités Paramédicales en Algérie',
  description: 'La plateforme de référence pour l\'orientation paramédicale en Algérie. Retrouvez les moyennes BAC réelles, les instituts de formation (INFSPM), les spécialités et téléchargez gratuitement vos cours et sujets d\'examen.',
  keywords: 'paramédical algérie, INFSPM, instituts paramédicaux, moyennes bac paramédical, infirmier algérie, sage femme algérie, cours paramédical',
};

export default function Home() {
  return <HomeClient />;
}
