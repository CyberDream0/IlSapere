import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <p className="text-secondary-600 italic mb-4">"{quote}"</p>
      <div>
        <h4 className="font-semibold text-secondary-800">{author}</h4>
        <p className="text-sm text-secondary-500">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;