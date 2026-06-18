import instData from './json/institutes.json';
import specData from './json/specialties.json';
import courseData from './json/courses.json';

export interface Subject {
  name: string;
  coefficient: number;
  credit: number;
}

export interface Semester {
  name: string;
  modules: Subject[];
}

export interface AverageRecord {
  instituteId: string;
  instituteName: string;
  instituteWilaya: string;
  specialtyId: string;
  year: number;
  average: number;
  targetWilaya?: string;
}

export interface Institute {
  id: string;
  name: string;
  type: string;
  wilaya: string;
  location: string;
  minAverage?: number;
  maxAverage?: number;
  description: string;
  specialties: string[];
  emails?: string[];
}

export interface Specialty {
  id: string;
  code: string;
  name: string;
  abbreviation: string;
  duration: string;
  description: string;
  career: string;
  subjects?: Subject[];
  semesters?: Semester[];
}

export interface Course {
  id: string;
  specialtyId: string;
  subjectId?: string; // ID ou nom du module associé
  semester?: number;
  title: string;
  type: 'PDF' | 'Video' | 'Article' | 'Exam';
  description: string;
  size?: string;
  thumbnail?: string;
  duration?: string; // Durée pour les vidéos ou pages pour PDF
  views: number;
  downloadUrl?: string; // Lien direct
}

export const institutes: Institute[] = instData as Institute[];
export const specialties: Specialty[] = specData as Specialty[];
export const courses: Course[] = courseData as unknown as Course[];

export async function getAverages(year: number): Promise<AverageRecord[]> {
  try {
    if (year === 2025) {
      const data = await import('./json/averages_2025.json');
      return data.default as AverageRecord[];
    } else if (year === 2024) {
      const data = await import('./json/averages_2024.json');
      return data.default as AverageRecord[];
    }
    // Espace prévu pour 2023, etc.
  } catch (error) {
    console.error(`Erreur de chargement des moyennes pour l'année ${year}:`, error);
  }
  return [];
}
