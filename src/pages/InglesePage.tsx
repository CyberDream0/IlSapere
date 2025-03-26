import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { Languages, Check } from 'lucide-react';

const InglesePage = () => {
  const benefits = [
    "Docenti madrelingua qualificati",
    "Preparazione certificazioni internazionali",
    "Classi piccole per massima attenzione",
    "Metodo personalizzato per studente",
    "Soluzioni di gruppo, individuali o online",
    "Flessibilità oraria"
  ];

  return (
    <ServiceLayout
      title="Lezioni e certificazioni di inglese"
      description="Corsi di inglese con docenti madrelingua, preparazione alle certificazioni Cambridge, IELTS e TOEFL. Approccio comunicativo e materiali didattici innovativi."
      breadcrumbItems={[
        { label: 'Servizi', href: '/#servizi' },
        { label: 'Inglese', href: '/servizi/inglese' }
      ]}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-secondary-800 mb-6 flex items-center">
            <Languages className="w-8 h-8 text-primary-600 mr-3" />
           Lezioni e Certificazioni d'Inglese
          </h1>
          
          <div className="prose max-w-none text-secondary-600">
            <p className="text-lg mb-4">
              Oggi, l'inglese è una competenza fondamentale in un mondo sempre più globalizzato. Purtroppo, molte volte l’educazione scolastica convenzionale non riesce a fornire una preparazione completa, lasciando gli studenti poco preparati per affrontare sfide linguistiche reali, come quelle richieste dalle certificazioni internazionali o dalle esigenze del mondo lavorativo e universitario.
            </p>

            <p className="mb-4">
              Al Centro Studi Il Sapere, affrontiamo questa sfida con un approccio mirato, adattato al livello di ciascun studente. Le nostre lezioni sono pensate per raggiungere livelli d'inglese accademici avanzati, con particolare attenzione alla preparazione per le certificazioni linguistiche internazionali (come British e Cambridge) e, allo stesso tempo, mantenendo l'approccio pratico e realistico che si rivela indispensabile nella vita quotidiana, nel lavoro e nei viaggi.
            </p>

            <p className="mb-4">
            Il nostro obiettivo è che ogni studente non solo superi l'esame, ma acquisisca una padronanza linguistica che gli permetta di usare l'inglese in contesti pratici e funzionali, che vanno dall’ambito accademico a quello lavorativo internazionale, fino alla semplice comunicazione durante un viaggio all'estero. Sia che tu voglia studiare o lavorare all'estero, trasferirti in un paese anglofono, o semplicemente migliorare le tue abilità linguistiche per vivere esperienze internazionali, siamo qui per guidarti verso il successo.
            </p>

            <p className="mb-4">
              Per chi vive lontano dalle nostre sedi, offriamo soluzioni online 1 to 1, garantendo un supporto personalizzato e flessibile che si adatta ai tuoi orari e alle tue esigenze.

Con il nostro approccio, non solo imparerai la lingua, ma acquisirai la confidenza necessaria per utilizzarla efficacemente in tutte le situazioni della vita.
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
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Lezione di inglese con docente madrelingua"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Studenti durante una conversazione in inglese"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Preparazione alle certificazioni"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default InglesePage;