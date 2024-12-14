import React from 'react';
import './Gallery.css'; // Import your CSS for the gallery

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <p>Explore images of our temple, events, and festivals that highlight the spiritual and cultural significance of Dharmasthala.</p>
      
      <div className="gallery-grid">
        {/* Image with description on hover */}
        <div className="gallery-item">
          <img src="/images/Gallery/1.jpg" alt="Temple View" />
          <div className="description">Temple View</div>
        </div>
        <div className="gallery-item">
          <img src="/images/Gallery/2.jpg" alt="Event Celebration" />
          <div className="description">Festivals</div>
        </div>
        <div className="gallery-item">
          <img src="/images/Gallery/3.jpg" alt="Festival Lights" />
          <div className="description">Dana</div>
        </div>
        <div className="gallery-item">
          <img src="/images/Gallery/4.jpg" alt="Community Gathering" />
          <div className="description">Community Gathering</div>
        </div>
        <div className="gallery-item">
          <img src="/images/Gallery/5.jpg" alt="Temple Ritual" />
          <div className="description">Healthcare</div>
        </div>
        <div className="gallery-item">
          <img src="/images/Gallery/7.jpg" alt="Devotional Music Event" />
          <div className="description">Lord Bahubali</div>
        </div>
        <div className="gallery-item">
          <img src="/images/Gallery/8.jpg" alt="Devotional Music Event" />
          <div className="description">Temple</div>
        </div>
        <div className="gallery-item">
          <img src="/images/Gallery/9.jpg" alt="Devotional Music Event" />
          <div className="description">Library</div>
        </div>
        <div className="gallery-item">
          <img src="/images/Gallery/10.jpg" alt="Devotional Music Event" />
          <div className="description">Prasada</div>
        </div>
        <div className="gallery-item">
          <img src="/images/Gallery/11.jpg" alt="Devotional Music Event" />
          <div className="description">Educational Institution</div>
        </div>
        <div className="gallery-item">
          <img src="/images/Gallery/12.jpg" alt="Devotional Music Event" />
          <div className="description">Sculptures</div>
        </div>
        <div className="gallery-item">
          <img src="/images/Gallery/13.jpg" alt="Devotional Music Event" />
          <div className="description">Festival vibes</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
