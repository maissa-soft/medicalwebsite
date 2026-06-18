import { 
  institutes as instRaw, 
  specialties as specRaw, 
  courses as courseRaw, 
  getAverages as getAvgRaw,
  Institute,
  Specialty,
  Course,
  AverageRecord
} from '@/data/mockData';

/**
 * DataService - Respecte le principe SRP (Single Responsibility)
 * Centralise l'accès aux données pour découpler les composants des sources JSON.
 */
export const DataService = {
  getInstitutes(): Institute[] {
    return instRaw;
  },

  getInstituteById(id: string): Institute | undefined {
    return instRaw.find(i => i.id === id);
  },

  getSpecialties(): Specialty[] {
    return specRaw;
  },

  getSpecialtyById(id: string): Specialty | undefined {
    return specRaw.find(s => s.id === id);
  },

  getCourses(): Course[] {
    return courseRaw;
  },

  getCoursesBySpecialty(specialtyId: string): Course[] {
    return courseRaw.filter(c => c.specialtyId === specialtyId);
  },

  getPopularCourses(limit: number = 4): Course[] {
    return [...courseRaw].sort((a, b) => b.views - a.views).slice(0, limit);
  },

  async getAveragesByYear(year: number): Promise<AverageRecord[]> {
    return await getAvgRaw(year);
  }
};
