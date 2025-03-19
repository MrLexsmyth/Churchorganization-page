import React from 'react';
import { Church, Clock, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Footer = (
  
) => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Church Information */}
          <div className="footer-section">
            <h3 className="footer-heading">Christ Grace Pentecostal Revelation Church</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={20} />
                <span>No 19, Hassan Street, Odutola, Oke-Ado, Ibadan.</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>(+234) 805 300 6678</span>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <span>contact@gracechurch.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>

            <div className="quick-links">
              { ['About Us', 'Ministries', 'Events', 'Sermons', 'Give'] .map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </div>
          </div>

          {/* Service Times */}
          <div className="footer-section">
            <h3 className="footer-heading">Service Times</h3>
            <div className="contact-info">
              <div className="service-time">
                <Clock size={30} />
                <div className="service-time-details">
                  <p className="service-time-title">Sunday Services</p>
                  <p>8:00 AM - Sunday School</p>
                  <p>9:00 AM - Sunday Service</p>
                </div>
              </div>
              <div className="service-time">
                <Church size={30} />
                <div className="service-time-details">
                  <p className="service-time-title">Monday Evening</p>
                  <p>5:30 PM - Bible Study</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="footer-section">
            <h3 className="footer-heading">Stay Connected</h3>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Christ Grace Pentecostal Revelation Church. All rights reserved.
          </p>
          <a href="http://wa.me/2348169273808">Designed and Develop By Shittu Odunayo.</a>
         
        </div>
        <div>
      <a
        href="https://wa.me/2348053006678"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      > 
        <FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' style={{ color: 'green', fontSize: '24px' }} />
      </a>
    </div>
      </div>
     
    </footer>
  );
};

export default Footer;