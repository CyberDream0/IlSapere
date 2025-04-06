import React from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface NewsItem {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Pratilonga & Buffet – Tecnica del Tango Argentino",
    date: "6 Aprile 2025",
    description: "Una serata dedicata all'apprendimento e alla pratica della Tecnica del Tango Argentino, in un ambiente rilassato e conviviale. Un'occasione perfetta per migliorare le proprie abilità e condividere la passione per il tango, accompagnata da un buffet offerto a tutti i partecipanti.",
    imageUrl: "https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jD8YaRMyAO9FWcA0t2Kxfrji8eIGCnSQ5y4HJo",
    link: "/news/pratilonga"
  },
  {
    title: "Milonga - Flamingo Tango",
    date: "19 Aprile 2025",
    description: "Una serata speciale dedicata agli amanti del tango argentino, all'insegna della musica, del ballo e della convivialità. La splendida atmosfera del Villaggio Piccolo Eden farà da cornice a una milonga imperdibile, accompagnata da un menù ricco e gustoso.",
    imageUrl: "https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jDT3LaWLdhKXvZ4NkRIjex8DQpbygSYi7Cz5ow",
    link: "/news/flamingo-tango"
  },
  {
    title: "Pensiero di Donna",
    date: "8 Marzo 2025",
    description: "In occasione della Festa della Donna, il Centro Studi Il Sapere organizza Pensiero di Donna, un evento speciale per celebrare il talento, la forza e la creatività femminile attraverso l'arte, la letteratura e il confronto.",
    imageUrl: "https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jDFkqpH485Fd2VsTxyZE6Sguaz9t1nO8woC3M5",
    link: "/news/pensiero-di-donna"
  },
  {
    title: "Festa di Carnevale",
    date: "3 Marzo 2025",
    description: "Festa di Carnevale al Centro Studi Il Sapere! Tutti gli iscritti e i loro amici sono invitati a un pomeriggio di giochi, musica, divertimento e buon cibo. Durante l'evento premieremo la maschera più bella. Vi aspettiamo nella nostra sede di Trinitapoli il 3 marzo dalle 17:00 alle 19:00. Non mancate!",
    imageUrl: "https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jDL0iQVMYZtFw6921Ncavm7dWhfIBC5XbKk8zS",
    link: "/news/carnevale"
  },
  {
    title: "Ripartono i nostri corsi!",
    date: "15 Settembre 2024",
    description: "Dopo la pausa estiva, il 15 settembre riprendono ufficialmente tutte le attività del Centro Studi Il Sapere!",
    imageUrl: "https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jDqqVpswB24vXR9TcSQj6VWU7nGsDArOwLtFiy",
    link: "/news/riaprono-i-corsi"
  },
  {
    title: "Milonga in Piazza",
    date: "21 Agosto 2024",
    description: "Il 21 agosto, nella splendida cornice di Margherita di Savoia, si è tenuta una milonga indimenticabile, un evento che ha riunito appassionati di tango da tutta la regione.",
    imageUrl: "https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jDJkipWvhumXQxVpThlJ5bFKSBPO0L1GMZwY9k",
    link: "/news/milonga"
  }
];

const NewsCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="px-4 py-8"
      >
        {newsItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-primary-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2 line-clamp-1">{item.title}</h3>
                <p className="text-secondary-600 mb-4 line-clamp-2">{item.description}</p>
                <a 
                  href={item.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                >
                  Leggi di più
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg z-10 hover:bg-white transition-colors">
        <ChevronLeft className="w-6 h-6 text-secondary-800" />
      </button>
      <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg z-10 hover:bg-white transition-colors">
        <ChevronRight className="w-6 h-6 text-secondary-800" />
      </button>

      <div className="swiper-pagination mt-6"></div>
    </div>
  );
};

export default NewsCarousel;