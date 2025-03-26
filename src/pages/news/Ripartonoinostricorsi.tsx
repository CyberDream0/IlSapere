import React from 'react';
import NewsPage from '../NewsPage';

const SaggioPage = () => {
  return (
    <NewsPage
      title="Saggio di fine anno dei corsi di danza"
      date="10 Giugno 2025"
      description="Gli allievi dei corsi di danza si esibiranno in uno spettacolo che celebra un anno di impegno e passione."
      imageUrl="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      content={`
        <p>È con grande gioia che annunciamo il nostro saggio di fine anno, un evento che celebra il talento, la dedizione e i progressi dei nostri allievi dei corsi di danza. Una serata magica dove potrete ammirare le performance dei nostri studenti in diversi stili di danza.</p>

        <h2>Programma della serata:</h2>
        <ul>
          <li>Esibizioni di tango argentino</li>
          <li>Performance di danza moderna</li>
          <li>Coreografie di gruppo</li>
          <li>Esibizioni speciali degli insegnanti</li>
        </ul>

        <h2>Dettagli dell'evento:</h2>
        <ul>
          <li>Data: 10 Giugno 2025</li>
          <li>Orario: 20:30</li>
          <li>Luogo: Teatro Comunale di Molfetta</li>
          <li>Durata: Circa 2 ore con intervallo</li>
        </ul>

        <h2>Biglietti:</h2>
        <ul>
          <li>Adulti: €15</li>
          <li>Bambini (fino a 12 anni): €10</li>
          <li>Prevendita disponibile presso la nostra sede</li>
        </ul>

        <p>Non perdete l'occasione di assistere a questo spettacolo unico che rappresenta il culmine di un anno di impegno e passione per la danza.</p>

        <h2>Prenotazioni:</h2>
        <p>Per prenotare i biglietti, contattaci al numero 3519496553 o via email a ilsapere.centrostudi91@gmail.com</p>
      `}
    />
  );
};

export default SaggioPage;