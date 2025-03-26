import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumb from './Breadcrumb';
import ContactSection from './ContactSection';
import ServiceNavbar from './ServiceNavbar';

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  breadcrumbItems: {
    label: string;
    href: string;
  }[];
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  description,
  children,
  breadcrumbItems,
}) => {
  return (
    <>
      <Helmet>
        <title>{`${title} - Centro Studi Il Sapere`}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-primary-50">
        <ServiceNavbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="mt-8">
            {children}
          </div>

          <div className="mt-16">
            <ContactSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLayout;