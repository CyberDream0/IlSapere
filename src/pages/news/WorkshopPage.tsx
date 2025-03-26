import React from 'react';
import NewsPage from '../NewsPage';

const WorkshopPage = () => {
  return (
    <NewsPage
      title="Workshop gratuito sul metodo di studio"
      date="22 Settembre 2024"
      description="Un pomeriggio dedicato a studenti e genitori per scoprire tecniche efficaci di apprendimento e organizzazione dello studio."
      imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      content={`
        <p>Il Centro Studi Il Sapere è lieto di invitarti a un workshop gratuito dedicato alle tecniche di studio efficaci e all'organizzazione del tempo. Un'occasione imperdibile per studenti e genitori per acquisire strumenti pratici e strategie concrete.</p>

        <h2>Programma del workshop:</h2>
        <ul>
          <li>Come organizzare efficacemente il tempo di studio</li>
          <li>Tecniche di memorizzazione e comprensione</li>
          <li>Strategie per prendere appunti</li>
          <li>Gestione dell'ansia da esame</li>
          <li>Strumenti digitali per lo studio</li>
        </ul>

        <h2>A chi è rivolto:</h2>
        <ul>
          <li>Studenti delle scuole medie e superiori</li>
          <li>Universitari</li>
          <li>Genitori interessati a supportare i propri figli nello studio</li>
        </ul>

        <h2>Dettagli dell'evento:</h2>
        <ul>
          <li>Data: 22 Settembre 2024</li>
          <li>Orario: 15:00 - 18:00</li>
          <li>Luogo: Via Dante 2, Molfetta (BA)</li>
          <li>Partecipazione: Gratuita (prenotazione obbligatoria)</li>
        </ul>

        <p>Per partecipare è necessaria la prenotazione. I posti sono limitati per garantire la massima interazione e efficacia del workshop.</p>

        <h2>Come prenotarsi:</h2>
        <p>Chiama il numero 3519496553 o invia una email a ilsapere.centrostudi91@gmail.com indicando nome, cognome e numero di partecipanti.</p>
      `}
    />
  );
};

export default WorkshopPage;