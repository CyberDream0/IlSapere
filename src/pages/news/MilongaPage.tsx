import React from 'react';
import NewsPage from '../NewsPage';

const MilongaPage = () => {
  return (
    <NewsPage
      title="Milonga in Piazza"
      date="21 Agosto 2024"
      description="Il 21 agosto, nella splendida cornice di Margherita di Savoia, si è tenuta una milonga indimenticabile, un evento che ha riunito appassionati di tango da tutta la regione."
      imageUrl="/assets/milonga estate.jpg"
      content={`
        <p>Il 21 agosto, nella splendida cornice di Margherita di Savoia, si è tenuta una milonga indimenticabile, un evento che ha riunito appassionati di tango da tutta la regione. Tra le luci soffuse e la brezza estiva, ballerini di ogni livello si sono lasciati trasportare dalla magia della musica, creando un’atmosfera di pura eleganza e passione. Con una selezione musicale curata nei minimi dettagli e una pista animata fino a tarda notte, la serata è stata un successo, confermando ancora una volta il tango come un’esperienza che unisce, emoziona e lascia un segno nel cuore di chi lo vive.</p>
      `}
    />
  );
};

export default MilongaPage;