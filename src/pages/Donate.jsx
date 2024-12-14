import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Donate.css';

const Donate = () => {
  const [showModal, setShowModal] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false); // To track payment completion
  const navigate = useNavigate();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handlePayment = () => {
    // Simulate payment process
    setPaymentComplete(true);
    closeModal(); // Close modal after payment
  };

  const handleGenerateReceipt = () => {
    // Navigate to a receipt page or generate a downloadable receipt
    navigate('/receipt'); // Replace with actual route or logic to generate receipt
  };

  return (
    <div className="donation-page">
      {/* Banner Section */}
      <div className="banner">
        <h1>Support Our Temple</h1>
        <p>Preserve the temple’s heritage and contribute to community initiatives.</p>
      </div>

      {/* Why Donate Section */}
<div className="why-donate">
  <h2>Why Your Contribution Matters</h2>
  <p>
    Your support is crucial in helping us maintain a space for spiritual growth, community connection, and the preservation of traditions. By donating, you make a significant impact in areas such as:
  </p>
  <ul>
    <li>Maintaining and renovating our temple and sacred grounds</li>
    <li>Facilitating religious, spiritual, and cultural events</li>
    <li>Supporting local community programs such as food drives, education, and wellness initiatives</li>
    <li>Ensuring the preservation of our spiritual heritage for future generations</li>
  </ul>
</div> 
{/* Why Donate Section */}


      {/* Donation Methods Section */}
      <div className="donation-methods">
        <h2>How You Can Contribute</h2>
        <p>Select a donation method that suits you best:</p>
        <div className="methods">
          <div className="method">
            <h3>Bank Transfer</h3>
            <p><strong>Bank Name:</strong> XYZ Bank</p>
            <p><strong>Account Number:</strong> 1234567890</p>
            <p><strong>IFSC Code:</strong> XYZ12345</p>
          </div>
          <div className="method">
            <h3>UPI Payment</h3>
            <p><strong>UPI ID:</strong> temple@upi</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFSC7_coSyTIaZUxrKFPSRs1koEGZBX6OWQ&s" // Replace with an actual QR code URL
              alt="UPI QR Code"
              className="qr-code"
            />
            <p>Scan the QR code using any UPI app to donate directly.</p>
          </div>
          <div className="method">
            <h3>Online Payment</h3>
            <button className="donate-button" onClick={openModal}>Donate Now</button>
            <p>It will support the upkeep of sacred spaces, enabling more people to experience the peace and tranquility of the temple. Additionally, your contribution helps fund educational programs and community outreach initiatives that make a lasting impact </p>
          </div>
        </div>
      </div>

      {/* Modal for online payment */}
      {showModal && (
        <div className="payment-modal">
          <div className="modal-content">
            <h2>Proceed with Online Donation</h2>
            <p>Select your preferred payment method and contribute securely:</p>
            <button onClick={closeModal} className="close-modal">Close</button>
            <button
              className="donate-button"
              onClick={handlePayment} // Simulate payment
            >
              Proceed to Payment Gateway
            </button>
          </div>
        </div>
      )}

      {/* Generate Receipt Section */}
      {paymentComplete && (
        <div className="receipt-section">
          <h2>Thank You for Your Donation!</h2>
          <p>Your contribution is greatly appreciated. You can generate a receipt for your records.</p>
          <button className="generate-receipt-button" onClick={handleGenerateReceipt}>
            Generate Receipt
          </button>
        </div>
      )}

      {/* How Donations Are Used Section */}
      <div className="donation-usage">
        <h2>How Your Donations Are Used</h2>
        <div className="usage-details">
          <div className="usage-item">
            <h3>Temple Maintenance</h3>
            <p>Your contributions help in cleaning, repairing, and renovating temple structures.</p>
          </div>
          <div className="usage-item">
            <h3>Community Programs</h3>
            <p>Support food distribution, healthcare initiatives, and educational workshops.</p>
          </div>
          <div className="usage-item">
            <h3>Cultural Events</h3>
            <p>Promote spiritual and cultural activities for people of all ages.</p>
          </div>
          <div className="usage-item">
            <h3>Charity Efforts</h3>
            <p>Provide aid to those in need through outreach and welfare programs.</p>
          </div>
        </div>
      </div>

      {/* Save the Temple Section */}
      <div className="save-temple-section">
        <h2>Save the Temple</h2>
        <p>
          Our temple is a sacred space, and your contributions help preserve its sanctity for future generations.
          Every donation makes a meaningful difference. Thank you for your generous support!
        </p>
      </div>
    </div>
  );
};

export default Donate;
