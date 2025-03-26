import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DoposcuolaPage from './pages/DoposcuolaPage';
import InglesePage from './pages/InglesePage';
import RecuperoAnniPage from './pages/RecuperoAnniPage';
import ConcorsiPage from './pages/ConcorsiPage';
import BalloPage from './pages/BalloPage';
import LezioniIndividualiPage from './pages/LezioniIndividualiPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import IeltsPage from './pages/news/IeltsPage';
import WorkshopPage from './pages/news/WorkshopPage';
import RiapronoICorsi from './pages/news/RiapronoICorsi';
import MilongaPage from './pages/news/MilongaPage';
import CarnevalePage from './pages/news/CarnevalePage';
import PensieroDiDonnaPage from './pages/news/PensieroDiDonnaPage';
import LavoraConNoiPage from './pages/LavoraConNoiPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servizi/doposcuola" element={<DoposcuolaPage />} />
      <Route path="/servizi/inglese" element={<InglesePage />} />
      <Route path="/servizi/recupero-anni" element={<RecuperoAnniPage />} />
      <Route path="/servizi/concorsi" element={<ConcorsiPage />} />
      <Route path="/servizi/ballo" element={<BalloPage />} />
      <Route path="/servizi/lezioni-individuali" element={<LezioniIndividualiPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      <Route path="/news/ielts" element={<IeltsPage />} />
      <Route path="/news/workshop" element={<WorkshopPage />} />
      <Route path="/news/riaprono-i-corsi" element={<RiapronoICorsi />} />
      <Route path="/news/milonga" element={<MilongaPage />} />
      <Route path="/news/carnevale" element={<CarnevalePage />} />
      <Route path="/news/pensiero-di-donna" element={<PensieroDiDonnaPage />} />
      <Route path="/lavora-con-noi" element={<LavoraConNoiPage />} />
    </Routes>
  );
}

export default App