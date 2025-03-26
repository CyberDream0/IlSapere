import React from 'react';
import NewsPage from '../NewsPage';

const PensieroDiDonnaPage = () => {
  return (
    <NewsPage
      title="Pensiero di Donna"
      date="8 Marzo 2025"
      description="In occasione della Festa della Donna, il Centro Studi Il Sapere organizza Pensiero di Donna, un evento speciale per celebrare il talento, la forza e la creatività femminile attraverso l'arte, la letteratura e il confronto."
      imageUrl="/assets/Pensierodidonna.jpg"
      content={`
        <p>In occasione della Festa della Donna, il Centro Studi Il Sapere organizza Pensiero di Donna, un evento speciale per celebrare il talento, la forza e la creatività femminile attraverso l'arte, la letteratura e il confronto.</p>

        <h2>Dettagli dell'evento:</h2>
        <ul>
          <li>Data: 8 marzo 2025</li>
          <li>Orario: 18:30 - 22:30</li>
          <li>Luogo: Via G. Puccini 13, Trinitapoli</li>
          <li>Ingresso gratuito con prenotazione</li>
        </ul>

        <h2>Programma della serata:</h2>
        <ul>
          <li>Reading di poesie e testi letterari</li>
          <li>Performance musicali e artistiche</li>
          <li>Dibattito sul ruolo della donna nella società</li>
          <li>Rinfresco e momento di networking</li>
        </ul>

        <p>Ospiti speciali: artiste, scrittrici, poetesse e professioniste del territorio.</p>

        <h2>Come partecipare:</h2>
        <p>La partecipazione è gratuita ma su prenotazione. Contattaci al 3519496553 o via email a ilsapere.centrostudi91@gmail.com per riservare il tuo posto.</p>
      `}
    />
  );
};

export default PensieroDiDonnaPage;