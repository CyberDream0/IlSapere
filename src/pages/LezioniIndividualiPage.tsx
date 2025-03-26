import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { Users, Check } from 'lucide-react';

const LezioniIndividualiPage = () => {
  const benefits = [
    "Programma su misura",
    "Flessibilità di orari",
    "Monitoraggio costante dei progressi",
    "Vasta gamma di corsi Universitari",
    "Sviluppo dell'autonomia"
  ];

  return (
    <ServiceLayout
      title="Master e corsi di laurea universitari"
      description="Lezioni private personalizzate con docenti qualificati. Supporto individuale per sviluppare metodo di studio, autostima e motivazione."
      breadcrumbItems={[
        { label: 'Servizi', href: '/#servizi' },
        { label: 'Lezioni Individuali', href: '/servizi/lezioni-individuali' }
      ]}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-secondary-800 mb-6">
           Master e corsi di laurea universitari
          </h1>
          
          <div className="prose max-w-none text-secondary-600">
            <p className="text-lg mb-4">
            Al giorno d’oggi, avere una laurea rappresenta un valore fondamentale per accedere a migliori opportunità lavorative e costruire un futuro solido. Tuttavia, per molti studenti e lavoratori, frequentare un’università tradizionale può essere complicato a causa di impegni personali e professionali.
            </p>

            <p className="mb-4">
           Al Centro Studi Il Sapere, offriamo la possibilità di ottenere una laurea in modo flessibile e accessibile. Con il nostro supporto, potrai seguire i corsi universitari a distanza e non, studiare con materiali didattici aggiornati e ricevere assistenza qualificata per affrontare al meglio il tuo percorso accademico.
            </p>

            <p className="mb-4">
          Sia che tu voglia conseguire una laurea per crescere professionalmente, cambiare carriera o raggiungere un obiettivo personale, il nostro centro ti guiderà passo dopo passo, garantendoti un percorso strutturato e un supporto costante, affinché tu possa ottenere il tuo titolo di studio in modo efficace e senza rinunciare agli altri impegni della tua vita.
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
            src="/assets/getting-your-degree.jpg"
            alt="Lezione individuale"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Tutoring personalizzato"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Studio individuale guidato"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default LezioniIndividualiPage;