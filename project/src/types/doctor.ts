export interface Doctor {
  id: number;
  name: string;
  specialties: string[];
  experience: number;
  fees: number;
  clinic: boolean;
  video: boolean;
  image?: string;
}

export interface FilterState {
  searchQuery: string;
  consultationType: string; // 'video' | 'clinic' | ''
  selectedSpecialties: string[];
  sortBy: string; // 'fees' | 'experience' | ''
}