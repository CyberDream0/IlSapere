import React from 'react';
import NewsPage from '../NewsPage';

const IeltsPage = () => {
  return (
    <NewsPage
      title="Nuovo corso di preparazione IELTS"
      date="15 Settembre 2024"
      description="Aperte le iscrizioni per il nuovo corso intensivo di preparazione all'esame IELTS. Posti limitati, prenota subito!"
      imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      content={`
        <p>Siamo lieti di annunciare l'apertura delle iscrizioni per il nostro nuovo corso intensivo di preparazione all'esame IELTS. Questo corso è stato progettato per aiutarti a raggiungere il punteggio desiderato nel minor tempo possibile.</p>
        
        <h2>Cosa include il corso:</h2>
        <ul>
          <li>Lezioni intensive con docenti madrelingua certificati</li>
          <li>Materiale didattico specifico per l'esame IELTS</li>
          <li>Simulazioni complete dell'esame</li>
          <li>Strategie e tecniche per affrontare ogni sezione del test</li>
          <li>Feedback personalizzato sul tuo progresso</li>
        </ul>

        <h2>Dettagli del corso:</h2>
        <ul>
          <li>Durata: 8 settimane</li>
          <li>Frequenza: 2 lezioni settimanali di 2 ore ciascuna</li>
          <li>Gruppi piccoli (massimo 8 studenti)</li>
          <li>Orari flessibili (mattina o sera)</li>
        </ul>

        <p>Non perdere questa opportunità di prepararti al meglio per l'esame IELTS. I posti sono limitati per garantire la massima attenzione a ogni studente.</p>

        <h2>Come iscriversi:</h2>
        <p>Contattaci al numero 3519496553 o via email a ilsapere.centrostudi91@gmail.com per prenotare il tuo posto o ricevere maggiori informazioni.</p>
      `}
    />
  );
};

export default IeltsPage;