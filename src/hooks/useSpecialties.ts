"use client";

import { useState, useMemo } from 'react';
import { DataService } from '@/services/dataService';
import { Specialty } from '@/data/mockData';

export function useSpecialties() {
  const [searchQuery, setSearchQuery] = useState('');
  const specialties = DataService.getSpecialties();

  const filteredSpecialties = useMemo(() => {
    if (!searchQuery) return specialties;
    
    const query = searchQuery.toLowerCase();
    return specialties.filter(spec => 
      spec.name.toLowerCase().includes(query) ||
      spec.abbreviation.toLowerCase().includes(query) ||
      spec.code?.toLowerCase().includes(query) ||
      spec.description.toLowerCase().includes(query)
    );
  }, [specialties, searchQuery]);

  return {
    specialties: filteredSpecialties,
    searchQuery,
    setSearchQuery
  };
}
