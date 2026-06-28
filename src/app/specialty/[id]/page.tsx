import type { Metadata } from 'next';
import { DataService } from '@/services/dataService';
import SpecialtyDetailClient from '@/components/SpecialtyDetailClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const specialty = DataService.getSpecialtyById(resolvedParams.id);
  
  if (!specialty) {
    return {
      title: 'Spécialité non trouvée',
    };
  }

  return {
    title: `${specialty.name} — Paramédical DZ`,
    description: specialty.description || `Découvrez le programme d'études, les modules et les débouchés pour la spécialité ${specialty.name} en Algérie.`,
  };
}

export async function generateStaticParams() {
  const specialties = DataService.getSpecialties();
  return specialties.map((spec) => ({
    id: spec.id,
  }));
}

export default async function SpecialtyDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const specialty = DataService.getSpecialtyById(resolvedParams.id);

  if (!specialty) {
    notFound();
  }

  return <SpecialtyDetailClient id={resolvedParams.id} />;
}
