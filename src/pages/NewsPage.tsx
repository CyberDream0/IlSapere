import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import ServiceNavbar from '../components/ServiceNavbar';

interface NewsPageProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  content: string;
}

const NewsPage: React.FC<NewsPageProps> = ({ title, date, description, imageUrl, content }) => {
  return (
    <>
      <Helmet>
        <title>{`${title} - Centro Studi Il Sapere`}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-primary-50">
        <ServiceNavbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <Breadcrumb items={[
            { label: 'News ed Eventi', href: '/#news' },
            { label: title, href: '#' }
          ]} />

          <article className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Content */}
                <div>
                  <div className="flex items-center text-primary-600 mb-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{date}</span>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-secondary-800 mb-4">{title}</h1>
                  
                  <div className="prose max-w-none text-secondary-600">
                    <p className="text-lg font-medium mb-6">{description}</p>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative">
                  <div className="sticky top-24">
                    <img 
                      src={imageUrl} 
                      alt={title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default NewsPage;