import React, { useState, useEffect } from 'react';
import { Doctor, FilterState } from './types/doctor';
import { fetchDoctors } from './api/doctorApi';
import { 
  filterDoctors, 
  sortDoctors, 
  getUniqueSpecialties, 
  getFilterStateFromUrl, 
  updateUrlWithFilters,
  getSuggestions
} from './utils/filterUtils';
import AutocompleteSearch from './components/AutocompleteSearch';
import FilterPanel from './components/FilterPanel';
import DoctorList from './components/DoctorList';
import { Search, Filter } from 'lucide-react';

function App() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<Doctor[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Load filters from URL
  const [filters, setFilters] = useState<FilterState>(getFilterStateFromUrl());

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        setLoading(true);
        const data = await fetchDoctors();
        setDoctors(data);
        setSpecialties(getUniqueSpecialties(data));
        setLoading(false);
      } catch (err) {
        setError('Failed to load doctor data. Please try again later.');
        setLoading(false);
      }
    };

    loadDoctors();
  }, []);

  useEffect(() => {
    // Update suggestions when search query changes
    if (filters.searchQuery) {
      setSuggestions(getSuggestions(doctors, filters.searchQuery));
    } else {
      setSuggestions([]);
    }
  }, [filters.searchQuery, doctors]);

  useEffect(() => {
    // Handle back/forward browser navigation
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.filters) {
        setFilters(event.state.filters);
      } else {
        setFilters(getFilterStateFromUrl());
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    updateUrlWithFilters(updatedFilters);
  };

  const handleSearch = (query: string) => {
    handleFilterChange({ searchQuery: query });
  };

  // Apply filters and sorting
  const filteredDoctors = sortDoctors(
    filterDoctors(doctors, filters),
    filters.sortBy
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Find Doctors</h1>
            <AutocompleteSearch 
              doctors={doctors}
              onSearch={handleSearch}
              searchQuery={filters.searchQuery}
              suggestions={suggestions}
            />
            <button 
              className="md:hidden flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              Filters
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Panel (Mobile) */}
          {showFilters && (
            <div className="md:hidden">
              <FilterPanel
                specialties={specialties}
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          )}

          {/* Filter Panel (Desktop) */}
          <div className="hidden md:block w-full md:w-72 sticky top-4">
            <FilterPanel
              specialties={specialties}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Doctor List */}
          <div className="flex-1">
            {/* Applied filters summary */}
            {(filters.searchQuery || filters.consultationType || filters.selectedSpecialties.length > 0 || filters.sortBy) && (
              <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-gray-600">Applied filters:</span>
                  
                  {filters.searchQuery && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Search size={14} />
                      {filters.searchQuery}
                    </span>
                  )}
                  
                  {filters.consultationType && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {filters.consultationType === 'video' ? 'Video Consult' : 'In Clinic'}
                    </span>
                  )}
                  
                  {filters.selectedSpecialties.map(specialty => (
                    <span key={specialty} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {specialty}
                    </span>
                  ))}
                  
                  {filters.sortBy && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Sort: {filters.sortBy === 'fees' ? 'Fees (Low to High)' : 'Experience (High to Low)'}
                    </span>
                  )}
                </div>
              </div>
            )}
            
            {/* Results count */}
            <div className="mb-4">
              <p className="text-gray-600">
                {loading ? 'Loading doctors...' : `${filteredDoctors.length} doctors found`}
              </p>
            </div>
            
            <DoctorList 
              doctors={filteredDoctors} 
              loading={loading} 
              error={error} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;