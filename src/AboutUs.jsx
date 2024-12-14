import React from 'react';
import './AboutUs.css'; // Import your updated CSS


const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Header Section */}
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Discover the history, mission, and values of Dharmasthala Temple</p>
      </header>

      <section className="section history">
  <h2 className="history-title">Our History</h2>
  <div className="history-content">
    <div className="history-text">
      <p className="history-intro">
        The Dharmasthala Temple stands as a testament to <strong>faith, heritage, and selfless service</strong>.
        Its legacy stretches back over <strong>800 years</strong>, making it a cornerstone of spiritual and
        cultural significance in India.
      </p>

      <div className="history-details">
        <p>
          Established in the <strong>12th century</strong> by the Jain chieftains and maintained by the
          <strong>Heggade family</strong>, the temple has remained a harmonious blend of Jain traditions and
          Hindu worship practices. The presiding deity, <strong>Lord Manjunatha</strong> (an incarnation of
          Lord Shiva), attracts devotees seeking peace and divine blessings.
        </p>

        <p>
          Over the centuries, the temple grew into a hub of charity and social service. 
          <strong>Anna Daana</strong> (free meals) began in the 16th century, serving thousands of visitors
          daily. In modern times, the temple has expanded its efforts with initiatives like education, 
          healthcare, and rural development, embodying the belief that <strong>"Service to humanity is 
          service to God."</strong>
        </p>

        <p>
          The temple has undergone several renovations to preserve its ancient architecture. Its sanctum
          sanctum houses intricately carved sculptures and inscriptions that narrate tales of devotion
          and history.
        </p>
      </div>
    </div>

    <div className="history-image-wrapper">
      <img
        src="/images/history-imagee.jpg"
        alt="Dharmasthala Temple History"
        className="history-image"
      />
      <div className="image-overlay">
        <p>12th Century Legacy</p>
      </div>
    </div>
  </div>
</section>


      {/* Mission & Values Section */}
      <section className="section mission-values">
        <h2>Our Mission & Values</h2>
        <div className="values-content">
          <div className="value-card">
            <h3>Compassion</h3>
            <p>Serving humanity with love and respect through community services.</p>
          </div>
          <div className="value-card">
            <h3>Spirituality</h3>
            <p>Preserving faith and traditions through sacred rituals and prayers.</p>
          </div>
          <div className="value-card">
            <h3>Equality</h3>
            <p>Promoting harmony and inclusivity among devotees, regardless of background.</p>
          </div>
          <div className="value-card">
            <h3>Service</h3>
            <p>
              Dedicated to serving society through free meals, education, and healthcare
              programs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Milestones Section */}
<section className="section milestones">
  <h2>Key Milestones</h2>

  {/* Early Years */}
  <div className="milestone-category">
    <h3 className="milestone-heading">Early Years</h3>
    <div className="timeline">
      <div className="timeline-item">
        <h4>1200 AD</h4>
        <p>Foundation of Dharmasthala Temple, uniting Jain traditions with Hindu worship under the Heggade family's guidance.</p>
      </div>
      <div className="timeline-item">
        <h4>1500 AD</h4>
        <p>Start of the <strong>Anna Daana</strong> (free meal program), symbolizing compassion and equality.</p>
      </div>
    </div>
  </div>


  {/* Modern Era */}
  <div className="milestone-category">
    <h3 className="milestone-heading">Modern Era</h3>
    <div className="timeline">
      <div className="timeline-item">
        <h4>2000 AD</h4>
        <p>Restoration and preservation of the temple’s intricate sculptures and inscriptions to honor its heritage.</p>
      </div>
      <div className="timeline-item">
        <h4>2018 AD</h4>
        <p>Introduction of <strong>eco-friendly initiatives</strong> and modern infrastructure, fostering sustainability.</p>
      </div>
      <div className="timeline-item">
        <h4>2023 AD</h4>
        <p>Digitalization of temple services and global outreach, making Dharmasthala a modern spiritual hub.</p>
      </div>
    </div>
  </div>
</section>




      {/* Important Events Section */}
<section className="section events">
  <h2>Important Events</h2>
  
  <div className="events-grid">
    {/* Event 1 */}
    <div className="event">
      <div className="event-image">
        <img src="/images/annual-festival-image.jpg" alt="Annual Festival" />
      </div>
      <div className="event-description">
        <h3>Annual Festival (January)</h3>
        <p>
          A grand celebration with spiritual rituals, cultural performances, and 
          traditional processions that bring together thousands of devotees in unity.
        </p>
      </div>
    </div>

    {/* Event 2 */}
    <div className="event">
      <div className="event-image">
        <img src="/images/rituals-image.jpg" alt="Daily Rituals" />
      </div>
      <div className="event-description">
        <h3>Daily Rituals</h3>
        <p>
          Daily prayers and pujas conducted with devotion to honor Lord Manjunatha 
          and foster spiritual growth in every devotee’s life.
        </p>
      </div>
    </div>

    {/* Event 3 */}
    <div className="event">
      <div className="event-image">
        <img src="/images/background-image.jpg" alt="Charity Initiatives" />
      </div>
      <div className="event-description">
        <h3>Charity Initiatives</h3>
        <p>
          Events focused on serving the underprivileged, including free meals, medical 
          camps, and educational support programs, embodying the spirit of compassion.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Places to Visit Nearby Section */}
<section className="section nearby-places">
  <h2>Places to Visit Nearby</h2>
  <div className="places">
    <div className="place-card">
      <img src="/images/Netravati-River.jpg" alt="Netravati River" />
      <h3>Netravati River</h3>
      <p>A serene spot for relaxation and spiritual cleansing.</p>
    </div>
    <div className="place-card">
      <img src="/images/Chandranath-Temple.jpg" alt="Chandranatha Temple" />
      <h3>Chandranatha Temple</h3>
      <p>A historic Jain temple located close to Dharmasthala.</p>
    </div>
    <div className="place-card">
      <img src="/images/Kudremukh-hills.jpg" alt="Kudremukh Hills" />
      <h3>Kudremukh Hills</h3>
      <p>Perfect for nature lovers and trekking enthusiasts.</p>
    </div>
  </div>
</section>
{/* Quote Section */}
      <section className="section quote">
        <blockquote>
          "Service to humanity is service to God."
          <cite> - Dharmasthala Tradition</cite>
        </blockquote>
      </section>
    </div>
  );
};

export default AboutUs;
