import type { Metadata } from 'next';
import SpecialtiesClient from '@/components/SpecialtiesClient';

export const metadata: Metadata = {
  title: 'Spécialités Paramédicales et Programmes d\'Études — Paramédical DZ',
  description: 'Découvrez en détail les 13 spécialités paramédicales enseignées en Algérie (Infirmier, Sage-femme, Kinésithérapeute, etc.). Programmes complets, coefficients, crédits et débouchés.',
};

export default function SpecialtiesPage() {
  return <SpecialtiesClient />;
}
