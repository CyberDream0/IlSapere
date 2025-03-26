import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-primary-50 py-12">
      <Helmet>
        <title>Privacy Policy - Centro Studi Il Sapere</title>
        <meta name="description" content="Informativa sulla privacy del Centro Studi Il Sapere. Scopri come trattiamo e proteggiamo i tuoi dati personali." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <Shield className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-3xl font-bold text-secondary-800">Privacy Policy</h1>
          </div>

          <div className="prose max-w-none text-secondary-600">
            <p className="text-lg mb-6">
              Ultimo aggiornamento: 15 Marzo 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                1. Introduzione
              </h2>
              <p className="mb-4">
                La presente Privacy Policy descrive come il Centro Studi Il Sapere raccoglie, utilizza e protegge i dati personali degli utenti che visitano il nostro sito web e utilizzano i nostri servizi.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                2. Titolare del trattamento
              </h2>
              <p className="mb-4">
                Il titolare del trattamento dei dati è il Centro Studi Il Sapere, con sede in Via Roma 123, Milano.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                3. Dati raccolti e finalità del trattamento
              </h2>
              <p className="mb-4">
                Il Centro Studi Il Sapere raccoglie e tratta i seguenti tipi di dati personali per le seguenti finalità:
              </p>
              <div className="mb-4">
                <p className="mb-2 font-semibold text-secondary-800">Dati anagrafici:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Nome, cognome, data di nascita, codice fiscale</li>
                  <li>Indirizzo email e numero di telefono</li>
                  <li>Indirizzo di residenza/domicilio</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="mb-2 font-semibold text-secondary-800">Finalità del trattamento:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Gestione dell'iscrizione ai nostri corsi e servizi</li>
                  <li>Comunicazioni relative ai servizi richiesti</li>
                  <li>Adempimento degli obblighi di legge</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="mb-2 font-semibold text-secondary-800">Dati di navigazione:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Indirizzo IP e dati di accesso</li>
                  <li>Informazioni sul dispositivo e browser</li>
                  <li>Cookies e dati di utilizzo del sito</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                4. Base giuridica del trattamento
              </h2>
              <p className="mb-4">
                Il trattamento dei dati personali si basa su:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Esecuzione di un contratto</li>
                <li>Adempimento di obblighi legali</li>
                <li>Consenso dell'interessato</li>
                <li>Legittimo interesse del titolare</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                5. Periodo di conservazione
              </h2>
              <p className="mb-4">
                I dati personali vengono conservati per il tempo necessario al raggiungimento delle finalità per cui sono stati raccolti, o per adempiere a obblighi di legge.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                6. Diritti dell'interessato
              </h2>
              <p className="mb-4">
                Gli utenti hanno il diritto di:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Accedere ai propri dati personali</li>
                <li>Richiedere la rettifica o la cancellazione</li>
                <li>Limitare od opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                7. Contatti
              </h2>
              <p className="mb-4">
                Per esercitare i tuoi diritti o per qualsiasi domanda sulla privacy, contattaci:
              </p>
              <p className="mb-4 font-medium">Centro Studi Il Sapere</p>
              <p className="mb-4 font-medium">Indirizzo: Via G. Puccini 13, Trinitapoli</p>
              <p className="mb-4 font-medium">Telefono: 3519496553</p>
              <p className="mb-4 font-medium">Email: ilsapere.centrostudi91@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;