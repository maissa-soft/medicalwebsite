"use client";

import { useState, useEffect, useMemo } from 'react';
import { DataService } from '@/services/dataService';
import { Course } from '@/data/mockData';

export function useCourses(specialtyId?: string) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Initial load
  useEffect(() => {
    const allCourses = specialtyId 
      ? DataService.getCoursesBySpecialty(specialtyId)
      : DataService.getCourses();
    setCourses(allCourses);

    // Load favorites from LocalStorage
    const saved = localStorage.getItem('paramedical_fav_courses');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, [specialtyId]);

  // Sync favorites to LocalStorage
  useEffect(() => {
    localStorage.setItem('paramedical_fav_courses', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (courseId: string) => {
    setFavorites(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesType = filterType === 'all' || course.type === filterType;
      const matchesSearch = !searchQuery || 
                           course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.subjectId?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [courses, filterType, searchQuery]);

  return {
    courses: filteredCourses,
    favorites,
    toggleFavorite,
    isFavorite: (id: string) => favorites.includes(id),
    setFilterType,
    setSearchQuery,
    filterType,
    searchQuery
  };
}
