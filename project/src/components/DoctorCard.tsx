import React from 'react';
import { Doctor } from '../types/doctor';
import { Video, MapPin } from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div 
      data-testid="doctor-card" 
      className="bg-white p-4 rounded-lg shadow-md border border-gray-200 transition hover:shadow-lg"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          {doctor.image ? (
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-800 font-bold text-xl">
              {doctor.name.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 
            data-testid="doctor-name" 
            className="text-xl font-semibold text-gray-900"
          >
            Dr. {doctor.name}
          </h3>
          
          <div 
            data-testid="doctor-specialty" 
            className="mt-1 text-gray-600"
          >
            {doctor.specialties.join(', ')}
          </div>
          
          <div className="mt-3 flex flex-wrap gap-3">
            <div 
              data-testid="doctor-experience" 
              className="flex items-center text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
            >
              {doctor.experience} years experience
            </div>
            
            <div 
              data-testid="doctor-fee" 
              className="flex items-center text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full"
            >
              ₹{doctor.fees} fee
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {doctor.video && (
              <div className="flex items-center text-sm text-blue-600 gap-1">
                <Video size={16} />
                <span>Video Consult</span>
              </div>
            )}
            
            {doctor.clinic && (
              <div className="flex items-center text-sm text-blue-600 gap-1 ml-3">
                <MapPin size={16} />
                <span>In Clinic</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col justify-between items-end mt-3 sm:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;