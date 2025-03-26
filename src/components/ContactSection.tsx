import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-center text-secondary-800 mb-8">
        Contattaci per Maggiori Informazioni
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="text-primary-600 flex-shrink-0 mt-1 w-6 h-6" />
            <div>
              <p className="font-medium text-lg text-secondary-800">Le Nostre Sedi:</p>
              <p className="text-secondary-600">Via G. Puccini 13, Trinitapoli</p>
              <p className="text-secondary-600">Via X Regina, Margherita di Savoia</p>
              <p className="text-secondary-600">Via Madonna della Croce 265, Barletta</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Phone className="text-primary-600 flex-shrink-0 mt-1 w-6 h-6" />
            <div>
              <p className="font-medium text-lg text-secondary-800">Chiamaci:</p>
              <p className="text-secondary-600">3519496553</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Mail className="text-primary-600 flex-shrink-0 mt-1 w-6 h-6" />
            <div>
              <p className="font-medium text-lg text-secondary-800">Scrivici:</p>
              <p className="text-secondary-600">ilsapere.centrostudi91@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="h-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.0435863582584!2d15.935661776582739!3d41.35922659890721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1339199daf21f0e5%3A0x3cb5e49a9d6a5a9e!2sVia%20Giacomo%20Puccini%2C%2013%2C%2076015%20Trinitapoli%20BT!5e0!3m2!1sit!2sit!4v1709913439811!5m2!1sit!2sit"
            width="100%" 
            height="100%" 
            className="rounded-lg"
            style={{ border: 0, minHeight: '300px' }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sede principale Centro Studi Il Sapere"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;