import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Services from './Services';
import PoojaServices from './PoojaServices';
import DailyRituals from './DailyRituals';
import CommunityPrograms from './CommunityPrograms';
import Donate from './Donate'; // Import Donate component
import ThankYou from './ThankYou'; // Import the ThankYou page
import Gallery from './Gallery';
import Navbar from './Navbar';
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
