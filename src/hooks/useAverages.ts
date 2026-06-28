import { useState, useEffect, useMemo } from 'react';
import { DataService } from '@/services/dataService';
import { AverageRecord } from '@/data/mockData';

export function useAverages(year: string) {
  const [averages, setAverages] = useState<AverageRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const y = parseInt(year);
    if (!isNaN(y)) {
      setLoading(true);
      DataService.getAveragesByYear(y).then(data => {
        setAverages(data);
        setLoading(false);
      });
    }
  }, [year]);

  const allRows = useMemo(() => {
    const specialties = DataService.getSpecialties();
    return averages.map((avgRecord, index) => {
      const spec = specialties.find(s => s.id === avgRecord.specialtyId);
      return {
        id: `${avgRecord.instituteId}-${avgRecord.specialtyId}-${avgRecord.targetWilaya || ''}-${avgRecord.year}-${index}`,
        wilaya: (avgRecord.targetWilaya || avgRecord.instituteWilaya)
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/^\w/, c => c.toUpperCase()),
        instituteName: avgRecord.instituteName,
        specialty: spec?.name || avgRecord.specialtyId,
        year: avgRecord.year,
        average: avgRecord.average
      };
    }).sort((a, b) => a.wilaya.localeCompare(b.wilaya) || b.year - a.year || a.specialty.localeCompare(b.specialty));
  }, [averages]);

  return { allRows, loading };
}

export function useAverageFilters(allRows: any[], filters: { wilaya: string, specialty: string, score: string }) {
  return useMemo(() => {
    return allRows.filter(row => {
      const matchWilaya = filters.wilaya === 'Toutes' || row.wilaya === filters.wilaya;
      const matchSpecialty = filters.specialty === 'Toutes' || row.specialty === filters.specialty;
      
      let matchScore = true;
      if (filters.score && !isNaN(parseFloat(filters.score))) {
        const score = parseFloat(filters.score);
        matchScore = row.average > 0 && (score + 0.10) >= row.average;
      }

      return matchWilaya && matchSpecialty && matchScore;
    });
  }, [allRows, filters.wilaya, filters.specialty, filters.score]);
}
