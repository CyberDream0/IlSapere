import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Grazie al Centro Studi Il Sapere sono riuscito a conseguire le mie certificazioni informatiche e a completare il diploma di maturità tecnico-tecnologica. Un ambiente serio e professionale, con docenti sempre disponibili e pronti ad aiutarti a raggiungere i tuoi obiettivi.",
    author: "Gianmarco C.",
    role: "Diplomato"
  },
  {
    quote: "Un percorso di formazione eccellente che mi ha permesso di ottenere certificazioni informatiche e linguistiche, oltre a completare corsi di perfezionamento universitari. Ora lavoro nella scuola e devo molto alla preparazione ricevuta qui. Un centro che punta alla qualità e al successo degli studenti.",
    author: "Annalisa N.",
    role: "Insegnante"
  },
  {
    quote: "Il Centro Studi Il Sapere mi ha fornito un percorso completo e strutturato, permettendomi di conseguire certificazioni informatiche, linguistiche e corsi di perfezionamento universitari. Grazie alla loro preparazione oggi lavoro nella scuola. Lo consiglio a chiunque voglia investire seriamente nella propria formazione.",
    author: "Maddalena G.",
    role: "Insegnante"
  },
  {
    quote: "Professionalità e competenza al massimo livello. Ho frequentato corsi di perfezionamento e ottenuto certificazioni linguistiche fondamentali per il mio percorso. Ora insegno nella scuola e non posso che ringraziare i docenti per il supporto e la qualità dell'insegnamento.",
    author: "Giacomo M.",
    role: "Insegnante"
  },
  {
    quote: "Sono davvero soddisfatto del corso di inglese. Grazie alla preparazione e alla dedizione del professore sono riuscito a superare l'esame per la certificazione B2 British. Un'esperienza formativa eccellente che consiglio a chiunque voglia migliorare il proprio inglese.",
    author: "Antonio D.",
    role: "Studente"
  },
  {
    quote: "Dopo vari tentativi falliti di superare l'esame di inglese all'università, ho deciso di affidarmi al corso del Centro Studi Il Sapere. Grazie all'approccio pratico e all'insegnamento mirato del professore, sono finalmente riuscita a conseguire la certificazione B2 Cambridge, assicurandomi l'accesso all'università che desideravo. Un corso che ha davvero fatto la differenza.",
    author: "Francesca D.",
    role: "Studentessa universitaria"
  },
  {
    quote: "Il corso di inglese è stato incredibilmente efficace. In poco tempo ho raggiunto il livello C1 Cambridge, grazie a un metodo pratico e mirato. Ottima preparazione, insegnanti competenti e grande attenzione alle esigenze di ogni studente.",
    author: "Riccardo S.",
    role: "Studente"
  },
  {
    quote: "Mio figlio sta ottenendo risultati straordinari al liceo grazie al doposcuola del Centro Studi Il Sapere. Il supporto che riceve ogni giorno è fondamentale e gli ha dato più sicurezza nello studio. Un servizio davvero prezioso.",
    author: "Mamma di Alessio",
    role: "Genitore"
  },
  {
    quote: "Sono molto contenta del doposcuola per mio figlio, che frequenta le scuole medie. Gli insegnanti lo seguono con attenzione e ho visto grandi miglioramenti nel suo rendimento scolastico. Ottima esperienza.",
    author: "Mamma di Nicolas",
    role: "Genitore"
  },
  {
    quote: "Sono molto soddisfatto del doposcuola. Mio figlio ha finalmente trovato un metodo di studio efficace e sta migliorando in tutte le materie. Un centro serio e ben organizzato, con insegnanti preparati e disponibili.",
    author: "Papà di Ivan",
    role: "Genitore"
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        loopedSlides={testimonials.length}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        className="px-4 py-8"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div 
              className="testimonial-card bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg h-full flex flex-col"
              role="article"
              aria-label={`Testimonianza di ${testimonial.author}`}
            >
              <div className="mb-4">
                <h4 className="font-semibold text-secondary-800">{testimonial.author}</h4>
                <p className="text-sm text-secondary-500">{testimonial.role}</p>
              </div>
              <p className="text-secondary-600 italic flex-grow">{testimonial.quote}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button 
        className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg z-10 hover:bg-white transition-colors"
        aria-label="Testimonianza precedente"
      >
        <ChevronLeft className="w-6 h-6 text-secondary-800" />
      </button>
      <button 
        className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg z-10 hover:bg-white transition-colors"
        aria-label="Testimonianza successiva"
      >
        <ChevronRight className="w-6 h-6 text-secondary-800" />
      </button>

      <div className="swiper-pagination mt-6"></div>
    </div>
  );
};

export default TestimonialCarousel;