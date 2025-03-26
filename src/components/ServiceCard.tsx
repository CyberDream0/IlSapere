import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon?: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon && <div className="mr-3">{icon}</div>}
          <h3 className="text-xl font-semibold text-secondary-800">{title}</h3>
        </div>
        <p className="text-secondary-600 mb-4">{description}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
        >
          Scopri di più
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;