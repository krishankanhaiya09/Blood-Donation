import React from "react";
import "./FindDonor.css";

const FindDonor = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted successfully");
  };

  return (
    <div className="find-page">
      <div className="find-wrapper">
        <div className="find-left">
          <span className="find-tag">Find Blood Donors</span>
          <h1>
            Request the <span>Right Donor</span> Fast
          </h1>
          <p>
            Fill in the required details and we will help match suitable blood
            donors from the database based on blood group, city, urgency, and
            availability.
          </p>

          <div className="find-info-cards">
            <div className="mini-card">
              <h3>Fast Match</h3>
              <p>Search by blood group and city</p>
            </div>
            <div className="mini-card">
              <h3>Emergency Help</h3>
              <p>Priority support for urgent cases</p>
            </div>
          </div>
        </div>

        <div className="find-right">
          <form className="find-form" onSubmit={handleSubmit}>
            <h2>Blood Request Form</h2>

            <div className="form-grid">
              <input type="text" placeholder="Patient Name" required />
              <input type="text" placeholder="Requester Name" required />
              <input type="tel" placeholder="Contact Number" required />
              <input type="email" placeholder="Email (optional)" />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="Hospital Name" required />
              <input type="text" placeholder="Hospital Address" required />

              <select required>
                <option value="">Required Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>

              <input type="number" placeholder="Units Required" required />

              <select required>
                <option value="">Emergency Level</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>

              <input type="date" required />
              <input type="time" required />

              <select required>
                <option value="">Reason for Requirement</option>
                <option>Accident</option>
                <option>Surgery</option>
                <option>Delivery</option>
                <option>Anemia</option>
                <option>Other</option>
              </select>

              <select>
                <option value="">Preferred Donor City Match</option>
                <option>Same City Only</option>
                <option>Nearby Cities Also</option>
                <option>Any Available Donor</option>
              </select>
            </div>

            <textarea
              rows="4"
              placeholder="Additional Note / Case Details"
            ></textarea>

            <button type="submit">Find Donors</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FindDonor;