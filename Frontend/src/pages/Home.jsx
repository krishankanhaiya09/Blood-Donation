import React from "react";
import "./Home.css";
import {useNavigate} from 'react-router-dom'
import FindDonor from "./findDonor";
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className="home-page">
      {/* Background blobs */}
      <div className="bg-shape shape-one"></div>
      <div className="bg-shape shape-two"></div>
      <div className="bg-shape shape-three"></div>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-left glass-card">
          <span className="tag">Save Life • Donate Blood</span>
          <h1>
            Be Someone’s <span>Heartbeat</span> Today
          </h1>
          <p>
            A single blood donation can save multiple lives. Join our community
            of heroes and make a real impact with one simple step.
          </p>

          <div className="hero-buttons">
            <button onClick={()=>navigate('/Donatenow')} className="primary-btn">Donate Now</button>
            <button onClick={()=>navigate('/FindDonor')} className="secondary-btn">Find Donors</button>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h2>10K+</h2>
              <p>Registered Donors</p>
            </div>
            <div className="stat-card">
              <h2>2.5K+</h2>
              <p>Lives Saved</p>
            </div>
            <div className="stat-card">
              <h2>24/7</h2>
              <p>Emergency Support</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="blood-visual">
            <div className="circle-glow"></div>
            <div className="drop-wrapper">
              <div className="blood-drop"></div>
            </div>

            <div className="floating-card top-card">
              <h4>Urgent Need</h4>
              <p>O+ Blood Required</p>
            </div>

            <div className="floating-card bottom-card">
              <h4>New Donors</h4>
              <p>Join & Save Lives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why donate */}
      <section className="why-section">
        <div className="section-head">
          <h2>Why Blood Donation Matters</h2>
          <p>
            Every drop counts. Your small act can give someone a second chance
            at life.
          </p>
        </div>

        <div className="why-grid">
          <div className="info-card">
            <div className="icon-box">❤️</div>
            <h3>Save Lives</h3>
            <p>
              Blood donation helps accident victims, surgery patients, and
              people fighting serious illnesses.
            </p>
          </div>

          <div className="info-card">
            <div className="icon-box">🩸</div>
            <h3>Emergency Help</h3>
            <p>
              In urgent situations, timely blood availability can make the
              difference between life and death.
            </p>
          </div>

          <div className="info-card">
            <div className="icon-box">🤝</div>
            <h3>Community Support</h3>
            <p>
              Build a stronger and more caring society by becoming part of a
              donor network.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section glass-card">
        <div className="section-head">
          <h2>How It Works</h2>
          <p>Simple steps to become a real-life hero.</p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <span>01</span>
            <h3>Register</h3>
            <p>Create your donor profile with basic details.</p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Get Matched</h3>
            <p>Connect with patients, hospitals, or urgent requirements.</p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Donate Blood</h3>
            <p>Visit the location and complete your lifesaving donation.</p>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Save a Life</h3>
            <p>Your contribution gives hope and strength to someone in need.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-card">
          <h2>Your One Donation Can Change Everything</h2>
          <p>
            Become a donor today and help create a safer, stronger, and more
            caring future.
          </p>
          <button className="primary-btn">Become a Donor</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-box">
            <h2>BloodBridge</h2>
            <p>
              Connecting donors with those in need through a smart, simple, and
              lifesaving platform.
            </p>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Donate</li>
              <li>Find Donor</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-box">
            <h3>Contact</h3>
            <p>Email: support@bloodbridge.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Available 24/7 for emergencies</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 BloodBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;