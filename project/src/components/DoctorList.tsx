import React from 'react';
import { Doctor } from '../types/doctor';
import DoctorCard from './DoctorCard';

interface DoctorListProps {
  doctors: Doctor[];
  loading: boolean;
  error: string | null;
}

const DoctorList: React.FC<DoctorListProps> = ({ doctors, loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
        <p>{error}</p>
      </div>
    );
  }

  if (doctors.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-md">
        <p>No doctors found matching your criteria. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;