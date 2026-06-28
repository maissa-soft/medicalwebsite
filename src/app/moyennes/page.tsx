import type { Metadata } from 'next';
import MoyennesClient from '@/components/MoyennesClient';

export const metadata: Metadata = {
  title: 'Moyennes BAC Paramédical en Algérie — Simulateur d\'Admission',
  description: 'Consultez les moyennes d\'acceptation au paramédical en Algérie par wilaya et spécialité. Utilisez notre simulateur pour évaluer vos chances d\'admission.',
};

export default function MoyennesPage() {
  return <MoyennesClient />;
}
