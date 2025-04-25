import { Doctor, FilterState } from '../types/doctor';

export const filterDoctors = (doctors: Doctor[], filters: FilterState): Doctor[] => {
  return doctors.filter((doctor) => {
    // Filter by search query
    if (
      filters.searchQuery &&
      !doctor.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Filter by consultation type
    if (filters.consultationType === 'video' && !doctor.video) {
      return false;
    }
    if (filters.consultationType === 'clinic' && !doctor.clinic) {
      return false;
    }

    // Filter by specialties
    if (
      filters.selectedSpecialties.length > 0 &&
      !doctor.specialties.some((specialty) =>
        filters.selectedSpecialties.includes(specialty)
      )
    ) {
      return false;
    }

    return true;
  });
};

export const sortDoctors = (doctors: Doctor[], sortBy: string): Doctor[] => {
  const sortedDoctors = [...doctors];
  
  if (sortBy === 'fees') {
    sortedDoctors.sort((a, b) => a.fees - b.fees);
  } else if (sortBy === 'experience') {
    sortedDoctors.sort((a, b) => b.experience - a.experience);
  }
  
  return sortedDoctors;
};

export const getUniqueSpecialties = (doctors: Doctor[]): string[] => {
  const specialtiesSet = new Set<string>();
  
  doctors.forEach((doctor) => {
    doctor.specialties.forEach((specialty) => {
      specialtiesSet.add(specialty);
    });
  });
  
  return Array.from(specialtiesSet).sort();
};

export const getFilterStateFromUrl = (): FilterState => {
  const params = new URLSearchParams(window.location.search);
  
  return {
    searchQuery: params.get('search') || '',
    consultationType: params.get('consultationType') || '',
    selectedSpecialties: params.getAll('specialty'),
    sortBy: params.get('sortBy') || '',
  };
};

export const updateUrlWithFilters = (filters: FilterState): void => {
  const params = new URLSearchParams();
  
  if (filters.searchQuery) {
    params.set('search', filters.searchQuery);
  }
  
  if (filters.consultationType) {
    params.set('consultationType', filters.consultationType);
  }
  
  filters.selectedSpecialties.forEach((specialty) => {
    params.append('specialty', specialty);
  });
  
  if (filters.sortBy) {
    params.set('sortBy', filters.sortBy);
  }
  
  const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
  window.history.pushState({ filters }, '', newUrl);
};

export const getSuggestions = (doctors: Doctor[], query: string): Doctor[] => {
  if (!query.trim()) return [];
  
  return doctors
    .filter(doctor => 
      doctor.name.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 3); // Return top 3 matches
};