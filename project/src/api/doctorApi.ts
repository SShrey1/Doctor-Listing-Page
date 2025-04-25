import { Doctor } from '../types/doctor';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchDoctors = async (): Promise<Doctor[]> => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform the JSONPlaceholder user data to match our Doctor interface
    return data.map((user: any) => ({
      id: user.id,
      name: user.name,
      specialties: [user.company.name, 'General Medicine'], // Using company name as one specialty
      experience: Math.floor(Math.random() * 20) + 5, // Random experience 5-25 years
      fees: Math.floor(Math.random() * 1000) + 500, // Random fees between 500-1500
      clinic: true, // All doctors available for clinic visits
      video: Math.random() > 0.3, // 70% chance of video consultation availability
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}` // Consistent avatar per doctor
    }));
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};