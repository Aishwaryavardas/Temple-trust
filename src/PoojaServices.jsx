import React from 'react';
import './PoojaServices.css'; // Import your custom styles if needed

const TulabharaSevas = () => {
  return (
    <div className="tulabhara-sevas">
      <header className="sevas-header">
        <h2>Tulabhara Sevas</h2>
      </header>

      <div className="sevas-table">
        <table>
          <thead>
            <tr>
              <th>Particulars</th>
              <th>Children (Below 10 years)</th>
              <th>Adults (Above 10 years & Below 70kg)</th>
              <th>Adults (Above 70kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>In Rice</td>
              <td>₹1,400</td>
              <td>₹3,400</td>
              <td>₹4,200</td>
            </tr>
            <tr>
              <td>In Salt</td>
              <td>₹1,000</td>
              <td>₹1,800</td>
              <td>₹2,200</td>
            </tr>
            <tr>
              <td>In Tender Coconut</td>
              <td>₹1,600</td>
              <td>₹3,000</td>
              <td>₹4,100</td>
            </tr>
            <tr>
              <td>In Flower</td>
              <td>₹1,100</td>
              <td>₹2,500</td>
              <td>₹3,200</td>
            </tr>
            <tr>
              <td>In Rice Coconut</td>
              <td>₹1,800</td>
              <td>₹3,600</td>
              <td>₹4,400</td>
            </tr>
            <tr>
              <td>In Jaggery</td>
              <td>₹1,800</td>
              <td>₹4,000</td>
              <td>₹4,600</td>
            </tr>
            <tr>
              <td>In Coconut</td>
              <td>₹1,700</td>
              <td>₹3,500</td>
              <td>₹4,000</td>
            </tr>
            <tr>
              <td>In Bananas</td>
              <td>₹1,600</td>
              <td>₹2,900</td>
              <td>₹4,200</td>
            </tr>
            <tr>
              <td>In Sugar</td>
              <td>₹2,000</td>
              <td>₹3,900</td>
              <td>₹4,800</td>
            </tr>
            <tr>
              <td>In Grain</td>
              <td>₹1,600</td>
              <td>₹3,400</td>
              <td>₹4,000</td>
            </tr>
            <tr>
              <td>In Coins</td>
              <td>₹8,000</td>
              <td>₹22,000</td>
              <td>₹27,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="note">
        <p><strong>Note:</strong> The prices mentioned above are for the respective seva items in Tulabhara Sevas, based on the weight and offerings selected.</p>
      </div>
    </div>
  );
};

export default TulabharaSevas;
