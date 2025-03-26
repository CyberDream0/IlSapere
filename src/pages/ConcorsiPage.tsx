import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { Award, Check } from 'lucide-react';

const ConcorsiPage = () => {
  const benefits = [
    "Preparazione mirata per ogni tipo di concorso",
    "Materiale didattico aggiornato",
    "Docenti esperti in materie specifiche",
    "Strategie per affrontare i test"
  ];

  return (
    <ServiceLayout
      title="Certificazioni per concorsi pubblici"
      description="Preparazione specializzata per concorsi pubblici. Corsi mirati, simulazioni d'esame e strategie vincenti per superare i test di ammissione."
      breadcrumbItems={[
        { label: 'Servizi', href: '/#servizi' },
        { label: 'Concorsi', href: '/servizi/concorsi' }
      ]}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-secondary-800 mb-6 flex items-center">
            <Award className="w-8 h-8 text-primary-600 mr-3" />
            Certificazioni per concorsi pubblici
          </h1>
          
          <div className="prose max-w-none text-secondary-600">
            <p className="text-lg mb-4">
              Nel mondo dei concorsi pubblici, avere le giuste certificazioni può fare la differenza tra il semplice tentare e il riuscire a ottenere il posto desiderato. Molti bandi richiedono titoli e attestati specifici che assegnano punteggi aggiuntivi, rendendo essenziale una preparazione mirata e strategica.
            </p>

            <p className="mb-4">
              Al Centro Studi Il Sapere, forniamo un supporto completo per il conseguimento di una vasta gamma di certificazioni riconosciute, utili peracquisire crediti e aumentare il proprio punteggio nei concorsi pubblici di diversi settori. Grazie alla nostra esperienza e alla qualità dei nostri corsi, offriamo percorsi formativi chiari ed efficaci, con docenti specializzati pronti a guidarti passo dopo passo fino al conseguimento della certificazione.
            </p>

            <p className="mb-4">
              Seguiamo un metodo di studio strutturato che permette di massimizzare il punteggio e le possibilità di successo, con lezioni mirate e un supporto costante fino al superamento dell'esame. Offriamo inoltre soluzioni flessibili, con la possibilità di seguire i corsi in presenza o online, adattandoci alle esigenze di chi ha poco tempo a disposizione.
            </p>

            <p className="mb-4">
              Seguiamo un metodo di studio strutturato che permette di massimizzare il punteggio e le possibilità di successo, con lezioni mirate e un supporto costante fino al superamento dell'esame. Offriamo inoltre soluzioni flessibili, con la possibilità di seguire i corsi in presenza o online, adattandoci alle diverse esigenze.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">I Principali Benefici</h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-secondary-600">
                  <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Preparazione ai concorsi"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Studio intensivo"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="/assets/dipendenti-pubblici-pa.jpg"
            alt="Simulazione d'esame"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ConcorsiPage;