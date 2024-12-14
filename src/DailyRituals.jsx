import React, { useEffect } from 'react';
import './DailyRituals.css'; // Import the CSS for styling

const DailyRituals = () => {
  useEffect(() => {
    // Add the animation class to all ritual blocks after page load
    const ritualBlocks = document.querySelectorAll('.ritual-block');
    ritualBlocks.forEach((block, index) => {
      setTimeout(() => {
        block.classList.add('animate');
      }, index * 300); // Delay for each ritual block
    });
  }, []);

  return (
    <div className="daily-rituals">
      <header className="rituals-header">
        <h2>Daily Rituals</h2>
      </header>

      <div className="rituals-timings">
        {/* Ritual blocks */}
        <div className="ritual-block">
          <h2>6:30 am to 11:00 am</h2>
          <h3>Darshan</h3>
          <p>
            The shrine opens for pilgrims after Vedic cleansing, allowing devotees to offer prayers and receive blessings.
          </p>
        </div>
        <div className="ritual-block">
          <h2>8:30 am to 10:30 am</h2>
          <h3>Shatharudra Abhisheka & Pooja</h3>
          <p>
            One of the most significant poojas dedicated to removing obstacles and seeking prosperity, inspired by Lord Shiva’s worship by Lord Rama.
          </p>
        </div>
        <div className="ritual-block">
          <h2>11:00 am</h2>
          <h3>Mahapooja</h3>
          <p>
            The grand ceremony for offering prayers to the deity, conducted with divine chants and rituals.
          </p>
        </div>
        <div className="ritual-block">
          <h2>11:30 am</h2>
          <h3>Maha Naivedya Samarpana</h3>
          <p>
            Maha Naivedya is the food offered to Lord Manjunatheshwara as part of the worship ritual, without tasting or eating it in the process. The annadana begins post-maha naivedya.
          </p>
        </div>
        <div className="ritual-block">
          <h2>12:00 pm</h2>
          <h3>Mahapooja</h3>
          <p>
            Maha Pooja is a very elaborate pooja performed by decorating the Idol with all natural Vedic decoratives post the abhisheka, chanting Vedic hymns, and playing Vedic instruments.
          </p>
        </div>
        <div className="ritual-block">
          <h2>12:10 pm</h2>
          <h3>Nithyabali</h3>
          <p>
            Nithyabali – Lord Sri Manjunathaswamy's utsavamoorthy will be conducted 3 times a day, with 5 rounds. Darshan will be blocked during this time.
          </p>
        </div>
        <div className="ritual-block">
          <h2>12:15 pm to 2:30 pm</h2>
          <h3>Darshana</h3>
          <p>
            Post the daily rituals, darshana continues till the end of the queue or 2:30 pm, whichever comes first.
          </p>
        </div>
        <div className="ritual-block">
          <h2>5:00 pm to 8:30 pm</h2>
          <h3>Darshana</h3>
          <p>
            The evening shrine opens for darshana.
          </p>
        </div>
        <div className="ritual-block">
          <h2>8:30 pm</h2>
          <h3>Mahapooja</h3>
          <p>
            The evening maha pooja is a very elaborate pooja performed by decorating the Idol with all natural Vedic decoratives, chanting Vedic hymns, and playing Vedic instruments.
          </p>
        </div>
        <div className="ritual-block">
          <h2>8:45 pm</h2>
          <h3>Nithyabali</h3>
          <p>
            Nithyabali – Lord Sri Manjunathaswamy's utsavamoorthy will be conducted 3 times a day, with 5 rounds. Darshan will be blocked during this time.
          </p>
        </div>

        {/* Note Section */}
        <div className="ritual-note">
          <p><strong>Note:</strong> Temple Timings may vary on special occasions.</p>
        </div>
      </div>
    </div>
  );
};

export default DailyRituals;
