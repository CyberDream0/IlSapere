import React from 'react';
import NewsPage from '../NewsPage';

const PratilongaPage = () => {
  return (
    <NewsPage
      title="Pratilonga & Buffet – Tecnica del Tango Argentino"
      date="6 Aprile 2025"
      description="Una serata dedicata all'apprendimento e alla pratica della Tecnica del Tango Argentino, in un ambiente rilassato e conviviale. Un'occasione perfetta per migliorare le proprie abilità e condividere la passione per il tango, accompagnata da un buffet offerto a tutti i partecipanti."
      imageUrl="https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jD8YaRMyAO9FWcA0t2Kxfrji8eIGCnSQ5y4HJo"
      content={`
        <p>Ti invitiamo a una serata speciale dedicata al perfezionamento della tecnica del tango argentino, dove l'apprendimento si fonde con il piacere della condivisione e della convivialità.</p>

        <h2>Programma della Serata</h2>
        <ul class="space-y-2">
          <li>• Sessione pratica guidata di Tecnica del Tango</li>
          <li>• Esercitazioni libere</li>
          <li>• Buffet conviviale</li>
        </ul>

        <h2>Dettagli dell'Evento</h2>
        <ul>
          <li><strong>Data:</strong> 6 Aprile 2025</li>
          <li><strong>Orario:</strong> 19:00 - 21:00</li>
          <li><strong>Contributo di partecipazione:</strong> 5 Euro</li>
        </ul>

        <div class="bg-primary-50 p-4 rounded-lg mt-6 mb-6">
          <p class="font-semibold text-primary-800">Nota Importante:</p>
          <p>Prenotazione obbligatoria</p>
        </div>

        <h2>Prenotazioni</h2>
        <p>Per prenotare il tuo posto, contattaci al:</p>
        <p class="text-xl font-semibold text-primary-600">351 9496553</p>

        <p class="mt-6">Unisciti a noi per una serata di apprendimento, pratica e divertimento!</p>
      `}
    />
  );
};

export default PratilongaPage;