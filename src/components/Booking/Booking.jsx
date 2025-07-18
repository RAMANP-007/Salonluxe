import React from 'react';
import './Booking.css';

const Booking = () => {
  return (
    <section className="booking" data-aos="fade-up">
      <div className="booking-content">
        <h2>Book an Appointment</h2>
        <p>We can't wait to welcome you to SalonLuxe. Please fill out the form below to request an appointment.</p>
        
        <div className="booking-note">
          <p><strong>Important Note:</strong> A minimum bill of ₹3000 is required for all booked appointments. We appreciate your understanding and look forward to providing you with our premium services.</p>
        </div>

        <form className="booking-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <select required>
            <option value="" disabled selected>Select a Service</option>
            <option value="haircut">Haircuts & Styling</option>
            <option value="manicure">Manicures & Pedicures</option>
            <option value="facial">Facials & Skincare</option>
            <option value="other">Other (Please specify in message)</option>
          </select>
          <input type="datetime-local" required />
          <textarea placeholder="Any additional details or requests?" rows="4"></textarea>
          <button type="submit">Request Appointment</button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
