import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="text-secondary-600 hover:text-primary-600">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <ChevronRight className="w-4 h-4 text-secondary-400" />
            <Link
              to={item.href}
              className="ml-1 md:ml-2 text-secondary-600 hover:text-primary-600"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;