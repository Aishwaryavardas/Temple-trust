import React, { useState } from 'react';
import './CommunityPrograms.css';  // For styling the page and layout

const CommunityPrograms = () => {
  const [hoveredImage, setHoveredImage] = useState(null);  // State to track hovered image name
  const [showModal, setShowModal] = useState(false);  // State to manage modal visibility
  const [modalContent, setModalContent] = useState('');  // State to manage modal content

  const images = [
    { src: '/images/mmjpg.jpg', name: 'Community Program 1' },
    { src: '/images/socailupliftment.jpg', name: 'Community Program 2' },
    { src: '/images/social-services.jpg', name: 'Community Program 3' },
  ];

  // Function to open the modal with specific content
  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <div className="community-programs">
      <h1>Community Programs</h1>

      {/* Images Gallery */}
      <div className="programs-gallery">
        {images.map((image, index) => (
          <div key={index} className="program-image-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}${image.src}`}
              alt={image.name}
              className="program-image"
              onMouseEnter={() => setHoveredImage(image.name)} // Set hovered image name
              onMouseLeave={() => setHoveredImage(null)} // Reset hovered image name
            />
            {hoveredImage === image.name && (
              <div className="program-name">{image.name}</div> // Display image name on hover
            )}
          </div>
        ))}
      </div>

      {/* Information about each section */}
      <div className="program-info">
        <h2>About Our Community Programs</h2>
        <p>
          Our community programs aim to engage, empower, and support individuals in various aspects of life.
          We offer programs related to education, health, cultural activities, and social services.
          Whether you're interested in volunteering or participating in an event, our programs are designed
          to foster connection and bring positive change to the community.
        </p>

        {/* Section 1: Health Programs */}
        <div className="section">
          <h3>Health Programs</h3>
          <div className="section-content">
            <img src={`${process.env.PUBLIC_URL}/images/Health.jpg`} alt="Health Program" className="section-image" />
            <div className="section-text">
              <p>
                We organize regular health camps where we offer free health checkups, awareness programs, 
                and distribute health kits to underprivileged communities. These programs aim to improve overall 
                health and hygiene in our society.
              </p>
              <p>For more information:
                <button className="info-button" onClick={() => openModal('Health Programs: More details about our health camps and services.')}>
                  Click Here
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Education Programs */}
        <div className="section">
          <h3>Education Programs</h3>
          <div className="section-content">
            <img src={`${process.env.PUBLIC_URL}/images/Education.jpg`} alt="Education Program" className="section-image" />
            <div className="section-text">
              <p>
                Our education programs focus on providing free tutoring and mentorship to children from underprivileged backgrounds. 
                We also conduct workshops and training programs for adults to enhance their skills and employability.
              </p>
              <p>For more information:
                <button className="info-button" onClick={() => openModal('Education Programs: More details about our tutoring, workshops, and training.')}>
                  Click Here
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Cultural Programs */}
        <div className="section">
          <h3>Cultural Programs</h3>
          <div className="section-content">
            <img src={`${process.env.PUBLIC_URL}/images/cultural.jpg`} alt="Cultural Program" className="section-image" />
            <div className="section-text">
              <p>
                We celebrate various cultural festivals and events to bring the community together. These programs include dance, 
                music performances, and other cultural activities that highlight the traditions of our community.
              </p>
              <p>For more information:
                <button className="info-button" onClick={() => openModal('Cultural Programs: Explore our upcoming cultural events and performances.')}>
                  Click Here
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Social Welfare Programs */}
        <div className="section">
          <h3>Social Welfare Programs</h3>
          <div className="section-content">
            <img src={`${process.env.PUBLIC_URL}/images/social-services.jpg`} alt="Social Welfare Program" className="section-image" />
            <div className="section-text">
              <p>
                Our social welfare programs focus on assisting marginalized communities through food drives, 
                shelter, clothing donations, and helping individuals in need during crises.
              </p>
              <p>For more information:
                <button className="info-button" onClick={() => openModal('Social Welfare Programs: Details on how we assist marginalized communities through food drives and shelters.')}>
                  Click Here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for displaying more information */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Program Details</h2>
            <p>{modalContent}</p>
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityPrograms;
