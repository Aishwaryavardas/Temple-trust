import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Temple Trust</div>
        <ul className="nav-links">
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/donate">Donate</a></li>
          <li><a href="/gallery">Gallery</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>WELCOME TO DHARMASTHALA TEMPLE</h1>
        <p>A sacred place of worship and spiritual tranquility.</p>
        {/* Updates Section */}
<section className="updates-section">
  <h2>Updates</h2>
  <div className="updates-content">
    <p>
      Devotees kindly note that guest houses of Sri Kshetra Dharmasthala can only be booked through the official website.Kindly do not make bookings from other websites. Dharmasthala will not be responsible for fraud bookings.
    </p>
  </div>
</section>
      </div>

      {/* Upcoming Events Section */}
      <section className="upcoming">
        <h2>Upcoming Events</h2>
        <p>Explore the upcoming spiritual gatherings, festivals, and cultural programs at Dharmasthala Temple.</p>
        <ul className="events-list">
          <li>
            <strong>Annual Laksha Deepotsava:</strong> Held in December, this grand festival illuminates the temple with thousands of oil lamps and includes cultural performances and spiritual discourses.
          </li>
          <li>
            <strong>Mahashivaratri:</strong> Devotees gather to offer prayers to Lord Shiva, accompanied by traditional rituals and bhajans.
          </li>
          <li>
            <strong>Anniversary Celebrations:</strong> A special event to commemorate the temple's historical and cultural significance.
          </li>
        </ul>
      </section>
      <section className="contact">
        <div className="map">
          <iframe
            title="Temple Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.224348364537!2d-122.419416084681!3d37.77492977975854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzMwLjciTiAxMjLCsDI1JzA4LjkiVw!5e0!3m2!1sen!2sin!4v1617749382745!5m2!1sen!2sin"
          ></iframe>
        </div>
        <form className="contact-form">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <strong>TEMPLE OFFICE :</strong><br />
            SHREE KSHETRA DHARMASTHALA<br />
            D.K, Karnataka -574216<br />
            Helpline: 08256 -266666<br />
            Office: 08256 – 266655<br />
            E-Mail: <a href="mailto:info@shridharmasthala.org">info@shridharmasthala.org</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Office Timings</h3>
          <p>
            Morning: 09:30 AM to 2:00 PM<br />
            Evening: 4:00 PM to 9:00 PM
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/Users/sagarhs/temple-trust/src/AboutUs.jsx">Online Room Booking</a></li>
            <li><a href="public/images/Daily-Rituls.jpg">Terms and Policies</a></li>
            <li><a href="https://www.shridharmasthala.org/events/">Events</a></li>
            <li><a href="https://www.shridharmasthala.org/rural-development/">Notices</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
