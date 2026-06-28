import type { Metadata } from 'next';
import { DataService } from '@/services/dataService';
import InstituteDetailClient from '@/components/InstituteDetailClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const institute = DataService.getInstituteById(resolvedParams.id);
  
  if (!institute) {
    return {
      title: 'Institut non trouvé',
    };
  }

  return {
    title: `${institute.name} — Paramédical DZ`,
    description: institute.description || `Découvrez toutes les informations sur ${institute.name} : spécialités, moyennes d'admission et wilayas rattachées.`,
  };
}

export async function generateStaticParams() {
  const institutes = DataService.getInstitutes();
  return institutes.map((inst) => ({
    id: inst.id,
  }));
}

export default async function InstituteDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const institute = DataService.getInstituteById(resolvedParams.id);

  if (!institute) {
    notFound();
  }

  return <InstituteDetailClient id={resolvedParams.id} />;
}
