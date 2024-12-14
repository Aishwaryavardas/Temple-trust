import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './Services.css'; // Import your services page CSS

const Services = () => {
  return (
    <div className="services">
      <header className="services-header">
  <h1>Services & Programs</h1>
</header>

      <section className="services-content">
        {/* Daily Rituals Section */}
        <div className="section service-card">
          <img 
            src="/images/Daily-Rituals.jpg" 
            alt="Daily Rituals" 
            className="service-image"
          />
          <div className="service-info">
            <h2>Daily Rituals</h2>
            <p>
              Experience the serene daily routines and rituals that start from 
              the break of dawn, offering a spiritual journey like no other.
            </p>
            <Link to="/daily-rituals" className="learn-more">
              Learn More
            </Link>
          </div>
        </div>

        {/* Pooja Services Section */}
        <div className="section service-card">
          <img 
            src="/images/social-services.jpg" 
            alt="Pooja Services" 
            className="service-image"
          />
          <div className="service-info">
            <h2>Pooja Services</h2>
            <p>
              Participate in divine Pooja services including Rudra Pooja, Navagraha 
              Pooja, and various special offerings for personal blessings.
            </p>
            <Link to="/pooja-services" className="learn-more">
              Learn More
            </Link>
          </div>
        </div>

        {/* Community Programs Section */}
        <div className="section service-card">
          <img 
            src="/images/Community-programs.jpg" 
            alt="Community Programs" 
            className="service-image"
          />
          <div className="service-info">
            <h2>Community Programs</h2>
            <p>
              Engage in our community events, including health camps, cultural 
              celebrations, and spiritual talks for overall well-being.
            </p>
            <Link to="/community-programs" className="learn-more">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 