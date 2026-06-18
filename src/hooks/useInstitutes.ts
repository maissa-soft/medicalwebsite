import { useState, useMemo } from 'react';
import { DataService } from '@/services/dataService';
import { Institute } from '@/data/mockData';

export type InstituteFilter = 'infspm' | 'infssf' | 'all';

export function useInstitutes() {
  const [filter, setFilter] = useState<InstituteFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const institutes = DataService.getInstitutes();

  const filteredInstitutes = useMemo(() => {
    return institutes.filter(inst => {
      const matchesType = filter === 'all' || 
                        (filter === 'infspm' && inst.type === 'INFSPM') || 
                        (filter === 'infssf' && inst.type === 'INFSSF');
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
                           inst.name.toLowerCase().includes(query) || 
                           inst.location.toLowerCase().includes(query) ||
                           inst.wilaya.toLowerCase().includes(query);

      return matchesType && matchesSearch;
    });
  }, [institutes, filter, searchQuery]);

  const totalPages = Math.ceil(filteredInstitutes.length / ITEMS_PER_PAGE);
  const displayedInstitutes = useMemo(() => {
    return filteredInstitutes.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [filteredInstitutes, currentPage]);

  const handleFilter = (f: InstituteFilter) => {
    setFilter(f);
    setCurrentPage(1);
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  return {
    filter,
    searchQuery,
    currentPage,
    displayedInstitutes,
    totalPages,
    handleFilter,
    handleSearch,
    setCurrentPage
  };
}
