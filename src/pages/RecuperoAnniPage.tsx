import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { GraduationCap, Check } from 'lucide-react';

const RecuperoAnniPage = () => {
  const benefits = [
    "Programmi personalizzati per ogni indirizzo",
    "Preparazione completa in tutte le materie",
    "Recupero di uno o più anni scolastici",
    "Docenti esperti e qualificati",
    "Flessibilità negli orari"
  ];

  return (
    <ServiceLayout
      title="Recupero anni scolastici"
      description="Programmi intensivi per il recupero degli anni scolastici. Percorsi personalizzati per ogni indirizzo di studio con docenti qualificati e supporto costante."
      breadcrumbItems={[
        { label: 'Servizi', href: '/#servizi' },
        { label: 'Recupero Anni', href: '/servizi/recupero-anni' }
      ]}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-secondary-800 mb-6 flex items-center">
            <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
            Recupero Anni Scolastici
          </h1>
          
          <div className="prose max-w-none text-secondary-600">
            <p className="text-lg mb-4">
              Ritrovarti indietro con gli studi può sembrare un ostacolo difficile da superare, ma con il giusto supporto è possibile recuperare il tempo perso e rimettersi in carreggiata. Il nostro servizio di recupero anni scolastici è pensato per chiunque abbia bisogno di colmare le lacune, riprendere gli studi interrotti o conseguire il diploma nel minor tempo possibile, senza rinunciare alla qualità della formazione.
            </p>

            <p className="mb-4">
              Al Centro Studi Il Sapere, adottiamo un metodo didattico efficace e personalizzato, costruito sulle esigenze di ogni studente. Grazie a un team di docenti qualificati, seguiamo un approccio pratico e mirato che permette di assimilare velocemente i programmi scolastici, ottimizzando lo studio e migliorando la preparazione in tutte le materie necessarie.
            </p>

            <p className="mb-4">
            Sappiamo che ogni studente ha tempi e modalità di apprendimento diversi, per questo offriamo percorsi flessibili con lezioni individuali o in piccoli gruppi, in modo da garantire il massimo dell'attenzione e del supporto.
            </p>

            <p className="mb-4">
            Non lasciare che un anno perso diventi un ostacolo per il tuo futuro. Con il nostro supporto, puoi rimetterti in pari e conquistare il tuo diploma con sicurezza e determinazione!
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
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Studenti durante una lezione di recupero"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jDmo61JekUk36mXcF9BJeRo2ixTVzMCulb0Otw"
            alt="Gruppo di studio"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Momento di studio individuale"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RecuperoAnniPage;