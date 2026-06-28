import type { Metadata } from 'next';
import InstitutesClient from '@/components/InstitutesClient';

export const metadata: Metadata = {
  title: 'Annuaire des Instituts Paramédicaux (INFSPM) en Algérie — Paramédical DZ',
  description: 'Trouvez tous les instituts de formation supérieure paramédicale (INFSPM et INFSSF) en Algérie. Coordonnées, spécialités enseignées et moyennes d\'admission par wilaya.',
};

export default function InstitutesPage() {
  return <InstitutesClient />;
}
