import React from 'react';
import { FilterState } from '../types/doctor';

interface FilterPanelProps {
  specialties: string[];
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  specialties,
  filters,
  onFilterChange,
}) => {
  const handleConsultationTypeChange = (value: string) => {
    onFilterChange({ consultationType: value });
  };

  const handleSpecialtyChange = (specialty: string) => {
    const currentSpecialties = [...filters.selectedSpecialties];
    const specialtyIndex = currentSpecialties.indexOf(specialty);

    if (specialtyIndex === -1) {
      currentSpecialties.push(specialty);
    } else {
      currentSpecialties.splice(specialtyIndex, 1);
    }

    onFilterChange({ selectedSpecialties: currentSpecialties });
  };

  const handleSortChange = (value: string) => {
    onFilterChange({ sortBy: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-6">
      {/* Consultation Mode Filter */}
      <div>
        <h3 
          data-testid="filter-header-moc" 
          className="text-lg font-medium text-gray-900 mb-2"
        >
          Consultation Mode
        </h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="consultationType"
              data-testid="filter-video-consult"
              checked={filters.consultationType === 'video'}
              onChange={() => handleConsultationTypeChange('video')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span>Video Consult</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="consultationType"
              data-testid="filter-in-clinic"
              checked={filters.consultationType === 'clinic'}
              onChange={() => handleConsultationTypeChange('clinic')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span>In Clinic</span>
          </label>
          {filters.consultationType && (
            <button
              className="text-sm text-blue-600 hover:text-blue-800 mt-1"
              onClick={() => handleConsultationTypeChange('')}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Specialties Filter */}
      <div>
        <h3 
          data-testid="filter-header-speciality" 
          className="text-lg font-medium text-gray-900 mb-2"
        >
          Speciality
        </h3>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {specialties.map((specialty) => (
            <label key={specialty} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                data-testid={`filter-specialty-${specialty.replace('/', '-')}`}
                checked={filters.selectedSpecialties.includes(specialty)}
                onChange={() => handleSpecialtyChange(specialty)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
              />
              <span>{specialty}</span>
            </label>
          ))}
          {filters.selectedSpecialties.length > 0 && (
            <button
              className="text-sm text-blue-600 hover:text-blue-800 mt-1"
              onClick={() => onFilterChange({ selectedSpecialties: [] })}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Sort Filter */}
      <div>
        <h3 
          data-testid="filter-header-sort" 
          className="text-lg font-medium text-gray-900 mb-2"
        >
          Sort By
        </h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="sortBy"
              data-testid="sort-fees"
              checked={filters.sortBy === 'fees'}
              onChange={() => handleSortChange('fees')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span>Fees (Low to High)</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="sortBy"
              data-testid="sort-experience"
              checked={filters.sortBy === 'experience'}
              onChange={() => handleSortChange('experience')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span>Experience (High to Low)</span>
          </label>
          {filters.sortBy && (
            <button
              className="text-sm text-blue-600 hover:text-blue-800 mt-1"
              onClick={() => handleSortChange('')}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;