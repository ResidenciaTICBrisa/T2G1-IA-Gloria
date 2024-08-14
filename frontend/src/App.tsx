import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import FormStatePage from './pages/FormStatePage'
import FormAboutViolencePage from './pages/FormAboutViolencePage';
import FormClassifyViolencePage from './pages/FormClassifyViolencePage'
import AuthorizeLocalizationPage from './pages/AuthorizeLocalizationPage';
import WhatToDoPage from './pages/WhatToDoPage';
import EmergencyPage from './pages/EmergencyPage';
import KnowMorePage from './pages/KnowMorePage';
import ThankYouPage from './pages/ThankYouPage';
import Mapa from './pages/MapPage';
import MapFilter from './pages/MapFilterPage';
import MapAddress from './pages/MapAddress';
import Modal from './pages/Modal';

export default function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Modal />} />
            <Route path="/authorize-localization" element={<AuthorizeLocalizationPage />} />
            <Route path="/form-state" element={<FormStatePage />} />
            <Route path="/form-about-violence" element={<FormAboutViolencePage />} />
            <Route path="/form-classify-violence" element={<FormClassifyViolencePage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/know-more" element={<KnowMorePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/map-page" element={<Mapa />} />
            <Route path="/map-filter" element={<MapFilter />} />
            <Route path="/map-address" element={<MapAddress />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/what-to-do" element={<WhatToDoPage />} />
          </Routes>
    </Router>
  )
}

