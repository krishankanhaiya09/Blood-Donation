import React, { useState } from "react";
import "./Donatenow.css";

const DonateNow = () => {
  const [formData, setFormData] = useState({
    city: "",
    date: "",
  });

  const [showResults, setShowResults] = useState(false);

  const requests = [
    {
      id: 1,
      patientName: "Rohit Sharma",
      bloodGroup: "O+",
      hospital: "City Care Hospital",
      city: "Rajkot",
      date: "2026-03-30",
      emergency: "High",
      contact: "9876543210",
    },
    {
      id: 2,
      patientName: "Anjali Verma",
      bloodGroup: "A-",
      hospital: "Sterling Hospital",
      city: "Rajkot",
      date: "2026-03-30",
      emergency: "Critical",
      contact: "9123456780",
    },
    {
      id: 3,
      patientName: "Vikas Patel",
      bloodGroup: "B+",
      hospital: "Wockhardt Hospital",
      city: "Ahmedabad",
      date: "2026-03-31",
      emergency: "Medium",
      contact: "9988776655",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const filteredRequests = requests.filter((item) => {
    return (
      item.city.toLowerCase() === formData.city.toLowerCase() &&
      item.date === formData.date
    );
  });

  return (
    <div className="donate-now-page">
      <div className="donate-now-wrapper">
        <div className="donate-now-left">
          <span className="dn-tag">Donate Blood</span>
          <h1>
            Find Where Your <span>Blood Is Needed</span>
          </h1>
          <p>
            Enter your city and available date. We will show you requests where
            patients need blood on that date in your city.
          </p>
        </div>

        <div className="donate-now-right">
          <form className="donate-now-form" onSubmit={handleSubmit}>
            <h2>Search Blood Requests</h2>

            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <button type="submit">Show Requests</button>
          </form>
        </div>
      </div>

      {showResults && (
        <div className="requests-section">
          <h2>Matching Blood Requests</h2>

          {filteredRequests.length > 0 ? (
            <div className="requests-grid">
              {filteredRequests.map((item) => (
                <div className="request-card" key={item.id}>
                  <div className="blood-badge">{item.bloodGroup}</div>
                  <h3>{item.patientName}</h3>
                  <p><strong>Hospital:</strong> {item.hospital}</p>
                  <p><strong>City:</strong> {item.city}</p>
                  <p><strong>Date:</strong> {item.date}</p>
                  <p><strong>Emergency:</strong> {item.emergency}</p>
                  <p><strong>Contact:</strong> {item.contact}</p>
                  <button>I Can Donate</button>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No matching blood requests found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DonateNow;