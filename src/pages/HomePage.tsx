import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import NewsletterForm from '../components/NewsletterForm';
import TestimonialCarousel from '../components/TestimonialCarousel';
import NewsCarousel from '../components/NewsCarousel';
import { GraduationCap, BookOpen, Languages, Users, Award, Music, MapPin, Phone, Mail } from 'lucide-react';

function HomePage() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/393519496553`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-primary-50">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-700 to-primary-800 relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Centro Studi
              <br />
              Il Sapere
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Il tuo successo parte da qui! Ti offriamo il supporto e gli strumenti giusti per crescere e raggiungere i tuoi obiettivi.
            </p>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section id="chi-siamo" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              Chi Siamo
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Dal 2019 lavoriamo con impegno e passione per offrirti percorsi formativi di qualità, 
              pensati per rispondere alle tue esigenze e aiutarti a raggiungere i tuoi obiettivi.
            </p>
          </div>
          
          <div className="mb-12 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-secondary-800 mb-4">La Nostra Storia</h3>
            <p className="text-lg text-secondary-600 mb-4">
             Il Centro Studi Il Sapere nasce come un'associazione sportiva nel 1990, nel tempo ha ampliato la propria missione, evolvendo in un centro di didattica e formazione con un forte impegno verso la qualità e il raggiungimento dei risultati. 
            </p>
            <p className="text-lg text-secondary-600">
              Il centro si avvale di un team di oltre 15 professionisti altamente qualificati, con esperienze diversificate, pronti a garantire l'esperienza migliore per ogni studente. La nostra visione è quella di fornire un supporto completo, per aiutarti a raggiungere i tuoi obiettivi, qualunque essi siano.
            </p>
          </div>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="servizi" className="py-16 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              I Nostri Servizi
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Offriamo una vasta gamma di servizi educativi personalizzati per soddisfare le esigenze di ogni studente, 
              indipendentemente dall'età o dal livello di istruzione.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Doposcuola e lezioni private per bambini e ragazzi"
              description="Un ambiente stimolante dove i compiti diventano opportunità di crescita. Supporto personalizzato per ogni materia scolastica e livello."
              imageUrl="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              icon={<BookOpen className="w-8 h-8 text-primary-600" />}
              link="/servizi/doposcuola"
            />
            <ServiceCard
              title="Lezioni e certificazioni d'Inglese"
              description="Preparazione completa per certificazioni Cambridge e British. Docenti madrelingua qualificati e approcci didattici all'avanguardia."
              imageUrl="/assets/English_language.svg.png"
              icon={<Languages className="w-8 h-8 text-primary-600" />}
              link="/servizi/inglese"
            />
            <ServiceCard
              title="Recupero anni scolastici"
              description="Programmi intensivi per recuperare il tempo perduto. Percorsi personalizzati per ogni indirizzo di studio e situazione personale."
              imageUrl="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              icon={<GraduationCap className="w-8 h-8 text-primary-600" />}
              link="/servizi/recupero-anni"
            />
            <ServiceCard
              title="Certificazioni per concorsi pubblici"
              description="Preparazione per certificazioni utili per l'ammissione ai concorsi pubblici."
              imageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              icon={<Award className="w-8 h-8 text-primary-600" />}
              link="/servizi/concorsi"
            />
            <ServiceCard
              title="Corsi di ballo e attivita' fisica"
              description="Corsi di tango argentino e ginnastica soft. Lezioni per tutte le età e livelli di esperienza."
              imageUrl="/assets/immaginetango.jpg"
              icon={<Music className="w-8 h-8 text-primary-600" />}
              link="/servizi/ballo"
            />
            <ServiceCard
              title="Master e corsi di laurea universitari"
              description="Lezioni e approccio completamente personalizzato per massimizzare i risultati. Tanti corsi universitari fra cui scegliere."
              imageUrl="/assets/universita' telematica.jpg"
              icon={<Users className="w-8 h-8 text-primary-600" />}
              link="/servizi/lezioni-individuali"
            />
          </div>
        </div>
      </section>

      {/* Testimonianze Section */}
      <section id="testimonianze" className="py-16 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              Perché Scegliere Noi
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Scopri le storie di successo di chi ha scelto di intraprendere un percorso con noi.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* News ed Eventi Section */}
      <section id="news" className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              News ed Eventi
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Resta aggiornato sulle ultime novità, i corsi in partenza e gli eventi speciali.
            </p>
          </div>
          
          <NewsCarousel />
        </div>
      </section>

      {/* Contatti Section */}
      <section id="contatti" className="py-16 bg-gradient-to-t from-secondary-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-800 mb-12">
            Richiedi una consulenza gratuita oggi
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Vieni a Trovarci</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Le Nostre Sedi:</p>
                    <p>Via G. Puccini 13, Trinitapoli</p>
                    <p>Via X Regina, Margherita di Savoia</p>
                    <p>Via Madonna della Croce 265, Barletta</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Chiamaci:</p>
                    <p>3519496553</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Scrivici:</p>
                    <p>ilsapere.centrostudi91@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.0435863582584!2d15.935661776582739!3d41.35922659890721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1339199daf21f0e5%3A0x3cb5e49a9d6a5a9e!2sVia%20Giacomo%20Puccini%2C%2013%2C%2076015%20Trinitapoli%20BT!5e0!3m2!1sit!2sit!4v1709913439811!5m2!1sit!2sit"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sede principale Centro Studi Il Sapere"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Contattaci</h3>
              <ContactForm />
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Rimani Informato</h4>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-secondary-800 to-secondary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Il Sapere</h3>
                <p className="text-secondary-300">
                  Il tuo successo parte da qui.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Seguici</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/share/19111Uum5e/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/ilsapere.centrostudi?igsh=em44aHJndzVnamxk"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-secondary-300 hover:text-white transition-colors"
                    aria-label="Contattaci su WhatsApp"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M20.11 3.89C17.95 1.72 14.99 0.5 11.87 0.5C5.42 0.5 0.17 5.75 0.17 12.2C0.17 14.39 0.77 16.52 1.91 18.36L0.08 24L5.85 22.2C7.61 23.24 9.61 23.79 11.66 23.79H11.67C18.12 23.79 23.37 18.54 23.37 12.09C23.37 8.97 22.27 6.06 20.11 3.89ZM11.87 21.83C10.08 21.83 8.33 21.31 6.8 20.32L6.45 20.11L2.83 21.18L3.92 17.66L3.69 17.3C2.61 15.71 2.03 13.79 2.03 11.82C2.03 6.82 6.48 2.37 11.48 2.37C14.12 2.37 16.61 3.37 18.44 5.2C20.27 7.03 21.27 9.52 21.27 12.16C21.51 17.16 17.06 21.83 11.87 21.83ZM17.22 14.67C16.92 14.52 15.49 13.82 15.22 13.72C14.95 13.62 14.75 13.57 14.55 13.87C14.35 14.17 13.8 14.82 13.63 15.02C13.46 15.22 13.29 15.24 12.99 15.09C12.69 14.94 11.77 14.63 10.68 13.65C9.83 12.89 9.26 11.95 9.09 11.65C8.92 11.35 9.07 11.19 9.22 11.04C9.35 10.91 9.51 10.7 9.65 10.53C9.79 10.36 9.84 10.23 9.94 10.03C10.04 9.83 9.99 9.66 9.91 9.51C9.84 9.36 9.26 7.93 9.01 7.33C8.76 6.75 8.51 6.83 8.33 6.82C8.16 6.81 7.96 6.81 7.76 6.81C7.56 6.81 7.24 6.89 6.97 7.19C6.7 7.49 5.95 8.19 5.95 9.62C5.95 11.05 6.97 12.43 7.11 12.63C7.25 12.83 9.26 15.94 12.34 17.21C13.09 17.54 13.67 17.73 14.12 17.87C14.86 18.1 15.54 18.07 16.08 17.99C16.68 17.9 17.85 17.28 18.1 16.58C18.35 15.88 18.35 15.28 18.27 15.15C18.2 15.02 18 14.94 17.7 14.79L17.22 14.67Z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
              <ul className="space-y-2">
                <li><a href="#chi-siamo" className="text-secondary-300 hover:text-white transition-colors">Chi Siamo</a></li>
                <li><a href="#servizi" className="text-secondary-300 hover:text-white transition-colors">Servizi</a></li>
                <li><a href="#news" className="text-secondary-300 hover:text-white transition-colors">News</a></li>
                <li><a href="#contatti" className="text-secondary-300 hover:text-white transition-colors">Contatti</a></li>
                <li>
                  <a 
                    href="/lavora-con-noi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    Lavora con noi
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-secondary-700 text-center">
            <p className="text-sm text-secondary-400">© 2019-2025 Centro Studi Il Sapere. Tutti i diritti riservati.</p>
            <div className="mt-2 flex justify-center space-x-6">
              <a 
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-secondary-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-secondary-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;