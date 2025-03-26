import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { BookOpen, Check } from 'lucide-react';

const DoposcuolaPage = () => {
  const benefits = [
    "Supporto personalizzato per ogni materia",
    "Sviluppo di un metodo di studio efficace",
    "Ambiente stimolante e collaborativo",
    "Monitoraggio costante dei progressi",
    "Preparazione verifiche e interrogazioni",
    "Recupero lacune pregresse"
  ];

  return (
    <ServiceLayout
      title="Doposcuola e lezioni private per bambini e ragazzi"
      description="Servizio di doposcuola personalizzato per studenti di ogni età. Supporto qualificato per tutte le materie scolastiche, sviluppo del metodo di studio e preparazione verifiche."
      breadcrumbItems={[
        { label: 'Servizi', href: '/#servizi' },
        { label: 'Doposcuola', href: '/servizi/doposcuola' }
      ]}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-secondary-800 mb-6 flex items-center">
            <BookOpen className="w-8 h-8 text-primary-600 mr-3" />
            Doposcuola e lezioni private per bambini e ragazzi
          </h1>
          
          <div className="prose max-w-none text-secondary-600">
            <p className="text-lg mb-4">
              Il nostro servizio di doposcuola è pensato per offrire un supporto educativo personalizzato a bambini e adolescenti, dalla scuola elementare fino al liceo. Ogni classe è organizzata in base all'età e alle specifiche esigenze dello studente, per garantire un apprendimento mirato e soddisfacente.
            </p>

            <p className="mb-4">
             Offriamo assistenza nelle principali materie scolastiche, dalla matematica all'italiano, dalle scienze alle lingue straniere, con l'obiettivo di consolidare le conoscenze, colmare eventuali lacune e stimolare una maggiore curiosità per lo studio. Grazie a un approccio pratico e coinvolgente, i nostri insegnanti supportano gli studenti non solo nel completamento dei compiti, ma anche nel miglioramento delle loro capacità di apprendimento e gestione del tempo.
            </p>

            <p className="mb-4">
       Siamo consapevoli che ogni studente ha un modo unico di apprendere, per questo il nostro team di docenti altamente qualificati adatta il percorso didattico in base alle necessità individuali, creando un ambiente sereno e stimolante. Ogni classe è strutturata per mantenere alta l'attenzione e favorire un’atmosfera di cooperazione tra pari, dove ciascun alunno può esprimere al meglio il proprio potenziale
            </p>

            <p className="mb-4">
       Il nostro obiettivo è non solo migliorare le performance scolastiche, ma anche accompagnare ogni ragazzo nel percorso di crescita, aiutandolo a sviluppare competenze che gli saranno utili per tutta la vita. Con il nostro doposcuola, ogni studente trova il supporto di cui ha bisogno per affrontare con fiducia le sfide scolastiche e prepararsi al meglio per il futuro.
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
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Studenti durante una sessione di studio"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Ambiente di studio collaborativo"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Studenti che lavorano insieme"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default DoposcuolaPage;