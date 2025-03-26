import React from 'react';
import NewsPage from '../NewsPage';

const CarnevalePage = () => {
  return (
    <NewsPage
      title="Festa di Carnevale"
      date="3 Marzo 2025"
      description="Festa di Carnevale al Centro Studi Il Sapere! Tutti gli iscritti e i loro amici sono invitati a un pomeriggio di giochi, musica, divertimento e buon cibo. Durante l'evento premieremo la maschera più bella. Vi aspettiamo nella nostra sede di Trinitapoli il 3 marzo dalle 17:00 alle 19:00. Non mancate!"
      imageUrl="/assets/carnevale.jpg"
      content={`
        <p>Festa di Carnevale al Centro Studi Il Sapere! Tutti gli iscritti e i loro amici sono invitati a un pomeriggio di giochi, musica, divertimento e buon cibo. Durante l'evento premieremo la maschera più bella. Vi aspettiamo nella nostra sede di Trinitapoli il 3 marzo dalle 17:00 alle 19:00. Non mancate!</p>

        <h2>Programma della serata:</h2>
        <ul>
          <li>Buffet ricco di dolci e snack</li>
          <li>Musica dal vivo e balli</li>
          <li>Giochi e animazione</li>
          <li>Rottura della pentolaccia</li>
          <li>Premio per la maschera più bella</li>
        </ul>

        <h2>Dettagli dell'evento:</h2>
        <ul>
          <li>Data: Lunedì 3 Marzo 2025</li>
          <li>Orario: 17:00 - 19:00</li>
          <li>Luogo: Via G. Puccini 13, Trinitapoli</li>
          <li>Dress code: In maschera!</li>
        </ul>

        <p>Non perdete questa occasione di festeggiare insieme il Carnevale in un'atmosfera allegra e divertente. Portate la vostra maschera preferita e preparatevi a una serata indimenticabile!</p>

        <h2>Prenotazioni:</h2>
        <p>Per partecipare, contattaci al numero 3519496553 o via email a ilsapere.centrostudi91@gmail.com</p>
      `}
    />
  );
};

export default CarnevalePage;