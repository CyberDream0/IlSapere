import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TangoGallery = () => {
  const handleVideoClick = () => {
    window.open('https://www.facebook.com/reel/1087359209773015', '_blank');
  };

  const galleryItems = [
    {
      type: 'image',
      src: '/assets/CollageTango.jpg',
      alt: 'Collage di eventi di tango',
    },
    {
      type: 'video',
      src: '/assets/anteprima.png',
      alt: 'Anteprima video tango',
      onClick: handleVideoClick,
    },
    {
      type: 'image',
      src: '/assets/pratilonga.jpg',
      alt: 'Pratilonga di tango',
    },
    {
      type: 'image',
      src: '/assets/milonga28feb.jpg',
      alt: 'Milonga 28 febbraio',
    }
  ];

  return (
    <div className="relative mt-12 mb-8">
      <h2 className="text-2xl font-semibold text-secondary-800 mb-6">
        I Nostri Eventi di Tango
      </h2>
      
      <div className="relative max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[400px] md:h-[500px] w-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain bg-black/5"
                  style={{ cursor: item.type === 'video' ? 'pointer' : 'default' }}
                />
                {item.type === 'video' && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                    onClick={item.onClick}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-20"></div>
                    <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-white/90 rounded-full shadow-lg transition-transform group-hover:scale-110">
                      <Play className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TangoGallery;