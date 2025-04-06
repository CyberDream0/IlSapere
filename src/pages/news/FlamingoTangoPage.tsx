import React from 'react';
import NewsPage from '../NewsPage';

const FlamingoTangoPage = () => {
  return (
    <NewsPage
      title="Milonga - Flamingo Tango"
      date="19 Aprile 2025"
      description="Una serata speciale dedicata agli amanti del tango argentino, all'insegna della musica, del ballo e della convivialità. La splendida atmosfera del Villaggio Piccolo Eden farà da cornice a una milonga imperdibile, accompagnata da un menù ricco e gustoso."
      imageUrl="https://pc12gooo1r.ufs.sh/f/ZcR2ERKlx2jDT3LaWLdhKXvZ4NkRIjex8DQpbygSYi7Cz5ow"
      content={`
        <p>Ti invitiamo a una serata magica dove la passione per il tango si fonde con il piacere della buona cucina. Un'occasione unica per ballare, socializzare e godersi una cena deliziosa in un'atmosfera accogliente e raffinata.</p>

        <h2>Il Menù della Serata</h2>
        <ul>
          <li>• Antipasto</li>
          <li>• Risotto</li>
          <li>• Frutta</li>
          <li>• Vino</li>
          <li>• Acqua</li>
        </ul>

        <h2>Dettagli dell'Evento</h2>
        <ul>
          <li><strong>Data:</strong> 19 Aprile 2025</li>
          <li><strong>Orario:</strong> 20:30</li>
          <li><strong>Location:</strong> Villaggio Piccolo Eden</li>
          <li><strong>Quota di partecipazione:</strong> €15 (include cena)</li>
        </ul>

        <div class="bg-primary-50 p-4 rounded-lg mt-6 mb-6">
          <p class="font-semibold text-primary-800">Nota Importante:</p>
          <p>Ingresso solo su prenotazione</p>
        </div>

        <h2>Prenotazioni</h2>
        <p>Per prenotare il tuo posto, contattaci al:</p>
        <p class="text-xl font-semibold text-primary-600">351 9496553</p>

        <p class="mt-6">Non perdere questa occasione unica di vivere una serata indimenticabile tra musica, ballo e ottimo cibo. Prenota subito il tuo posto!</p>
      `}
    />
  );
};

export default FlamingoTangoPage;