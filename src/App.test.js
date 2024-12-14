import React from 'react';
import './HomePage.css'; // Import updated styles

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Main Heading */}
      <header className="homepage-header">
        <h1>Welcome to Dharmasthala</h1>
        <p>Experience the serenity and divinity of our temple, a place of worship and solace.</p>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#about-us">About Us</a>
        <a href="#services">Services</a>
        <a href="#donate">Donate</a>
      </nav>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events">
          <p><strong>Festival of Lights:</strong> December 25, 2024</p>
          <p><strong>Annual Rituals:</strong> January 14, 2025</p>
          <p><strong>Community Gathering:</strong> February 20, 2025</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
