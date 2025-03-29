import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import TangoGallery from '../components/TangoGallery';
import { Music, Check } from 'lucide-react';

const BalloPage = () => {
  const benefits = [
    "Corsi per tutti i livelli ed età",
    "Insegnanti professionisti qualificati",
    "Diversi corsi fra cui scegliere",
    "Esivizioni ed eventi nelle piu belle citta della Puglia",
  ];

  return (
    <ServiceLayout
      title="Corsi di ballo e attività fisica"
      description="Corsi di danza classica, moderna, hip-hop e latino-americano per tutte le età e livelli. Lezioni con insegnanti professionisti in un ambiente accogliente e stimolante."
      breadcrumbItems={[
        { label: 'Servizi', href: '/#servizi' },
        { label: 'Corsi di Ballo', href: '/servizi/ballo' }
      ]}
    >
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-secondary-800 mb-6 flex items-center">
              <Music className="w-8 h-8 text-primary-600 mr-3" />
              Corsi di Ballo
            </h1>
            
            <div className="prose max-w-none text-secondary-600">
              <p className="text-lg mb-4">
               Il Centro Studi Il Sapere affonda le sue radici nel mondo dello sport e della danza. Nato dall'esperienza dell'ASD Studio Danza, associazione sportiva fondata nel 1990, il nostro centro porta avanti con passione questa tradizione, offrendo corsi dedicati a chi desidera avvicinarsi al ballo e al movimento in un ambiente accogliente e stimolante.
              </p>

              <p className="mb-4">
                Proponiamo un'ampia offerta di corsi, con un'attenzione particolare al tango argentino, un'arte che unisce eleganza, tecnica e connessione tra i ballerini. Per chi cerca un'attività più dolce ma altrettanto efficace, offriamo anche ginnastica soft per signore, ideale per mantenersi in forma con esercizi mirati e a basso impatto.
              </p>

              <p className="mb-4">
               Entrare a far parte dei nostri corsi significa abbracciare un'esperienza che va oltre l'apprendimento della tecnica. La danza e il movimento diventano un'occasione di socialità, crescita personale e puro divertimento. Inoltre, gli appassionati di tango avranno la possibilità di partecipare a eventi territoriali esclusivi, come le suggestive milonghe nelle più belle città pugliesi, vivendo momenti unici di condivisione e passione per il ballo.
              </p>

              <p className="mb-4">
           Se desideri scoprire il piacere del movimento attraverso la danza e l'attività fisica, il nostro centro è il posto giusto per te!
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
              src="https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jDmjN5fqNkUk36mXcF9BJeRo2ixTVzMCulb0Ot"
              alt="Lezione di danza classica"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
               src="https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jDhoOEBaTOzTKIHX5gw8d0nECcS1oJN9LDjaeY"
              alt="Esibizione di danza moderna"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jD6hIxLax1TNIP058x2ets3EiuqrmWDQlY7nRj"
              alt="Corso di hip-hop"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <TangoGallery />
      </div>
    </ServiceLayout>
  );
};

export default BalloPage;