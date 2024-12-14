import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import PoojaServices from './pages/PoojaServices';
import DailyRituals from './pages/DailyRituals';
import CommunityPrograms from './pages/CommunityPrograms';
import Donate from './pages/Donate'; // Import Donate component
import ThankYou from './pages/ThankYou'; // Import the ThankYou page
import Gallery from './pages/Gallery';
import Navbar from './pages/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes> {/* Use Routes here to wrap your route definitions */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/daily-rituals" element={<DailyRituals />} />
        <Route path="/community-programs" element={<CommunityPrograms />} />
        <Route path="/pooja-services" element={<PoojaServices />} />
        <Route path="/donate" element={<Donate />} /> {/* Donate route */}
        <Route path="/thank-you" element={<ThankYou />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/navbar" element={<Navbar />} /> 

         {/* Add PaymentForm route */}
      </Routes>
    </Router>
  );
};

export default App;
