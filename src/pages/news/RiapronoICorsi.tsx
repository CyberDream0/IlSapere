import React from 'react';
import NewsPage from '../NewsPage';

const RiapronoICorsi = () => {
  return (
    <NewsPage
      title="Ripartono i nostri corsi!"
      date="15 Settembre 2024"
      description="Dopo la pausa estiva, il 15 settembre riprendono ufficialmente tutte le attività del Centro Studi Il Sapere!"
      imageUrl="/assets/assistenza didattica.jpg"
      content={`
        <p>Dopo la pausa estiva, il 15 settembre riprendono ufficialmente tutte le attività del Centro Studi Il Sapere! Siamo pronti ad accogliere nuovi e vecchi studenti con un’offerta formativa completa e un supporto dedicato per ogni esigenza.

Ripartono i nostri corsi di doposcuola per bambini e ragazzi, le lezioni di inglese mirate al raggiungimento di certificazioni linguistiche e tutti gli altri servizi, tra cui preparazione ai concorsi pubblici, recupero anni scolastici, corsi universitari e attività sportive.

Il nostro team di docenti altamente specializzati è pronto a seguirti passo dopo passo, aiutandoti a raggiungere i tuoi obiettivi con un approccio personalizzato e orientato ai risultati.

Non perdere l’opportunità di iniziare il nuovo anno accademico con il piede giusto! Ti aspettiamo dal 15 settembre.</li>
        </ul>
      `}
    />
  );
};

export default RiapronoICorsi;