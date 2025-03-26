import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-secondary-800">{name}</h4>
        <p className="text-primary-600">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;