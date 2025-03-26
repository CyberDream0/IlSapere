import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie } from 'lucide-react';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-primary-50 py-12">
      <Helmet>
        <title>Cookie Policy - Centro Studi Il Sapere</title>
        <meta name="description" content="Informativa sui cookie del Centro Studi Il Sapere. Scopri come utilizziamo i cookie per migliorare la tua esperienza." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <Cookie className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-3xl font-bold text-secondary-800">Cookie Policy</h1>
          </div>

          <div className="prose max-w-none text-secondary-600">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                1. Cosa sono i Cookie?
              </h2>
              <p className="mb-4">
                I cookie sono piccoli file di testo che vengono salvati sul tuo
                dispositivo quando visiti un sito web. Vengono utilizzati per migliorare
                l'esperienza utente, raccogliere informazioni statistiche e personalizzare
                i contenuti.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                2. Tipologie di Cookie Utilizzati
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-3">
                  <strong>Cookie Tecnici:</strong> Essenziali per il corretto
                  funzionamento del sito web e per garantire l'accesso ai servizi offerti.
                </li>
                <li className="mb-3">
                  <strong>Cookie di Analisi e Performance:</strong> Permettono di
                  raccogliere informazioni sull'uso del sito per migliorarne l'esperienza.
                </li>
                <li className="mb-3">
                  <strong>Cookie di Terze Parti:</strong> Alcuni servizi di terze parti,
                  come i social media e gli strumenti di analisi, possono salvare cookie
                  sul tuo dispositivo.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                3. Come gestire i Cookie
              </h2>
              <p className="mb-4">
                Puoi controllare e/o eliminare i cookie come desideri. Puoi cancellare tutti i cookie
                già presenti sul tuo dispositivo e configurare la maggior parte dei browser in modo che
                non accettino nuovi cookie.
              </p>
              <p className="mb-4">
                Tuttavia, la disabilitazione dei cookie potrebbe compromettere alcune funzionalità
                del nostro sito e limitare la tua esperienza di navigazione.
              </p>
              <p className="mb-4">
                Puoi modificare le impostazioni del tuo browser per rifiutare o accettare i cookie.
                Qui di seguito trovi le istruzioni per i principali browser:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">
                  <a href="https://support.google.com/chrome/answer/95647" 
                     className="text-primary-600 hover:text-primary-800 underline"
                     target="_blank"
                     rel="noopener noreferrer">
                    Google Chrome
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie"
                     className="text-primary-600 hover:text-primary-800 underline"
                     target="_blank"
                     rel="noopener noreferrer">
                    Mozilla Firefox
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies"
                     className="text-primary-600 hover:text-primary-800 underline"
                     target="_blank"
                     rel="noopener noreferrer">
                    Internet Explorer/Edge
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://support.apple.com/kb/ph21411?locale=it_IT"
                     className="text-primary-600 hover:text-primary-800 underline"
                     target="_blank"
                     rel="noopener noreferrer">
                    Safari
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                4. Contatti
              </h2>
              <p className="mb-4">
                Per qualsiasi domanda riguardante la nostra Cookie Policy, puoi contattarci a:
              </p>
              <ul className="list-none space-y-2">
                <li className="font-medium">Centro Studi Il Sapere</li>
                <li className="font-medium">Indirizzo: Via G. Puccini 13, Trinitapoli</li>
                <li className="font-medium">ilsapere.centrostudi91@gmail.com</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;