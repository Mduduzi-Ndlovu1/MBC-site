import React from 'react';
import './footer.css'; // Import your CSS file for styling
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section reveal">
          <h4 className="footer-title">About Us</h4>
          <p className="footer-text">We are a leading company providing the best gas water heaters.</p>
        </div>
        <div className="footer-section reveal">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section reveal">
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <BsTwitter/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <BsInstagram/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LiaLinkedin/>
            </a>
          </div>
        </div>
        <div className="footer-section reveal">
          <h4 className="footer-title">Contact Us</h4>
          <p className="footer-text">1234 Gas Water Heater Lane, Suite 567</p>
          <p className="footer-text">City, State, ZIP</p>
          <p className="footer-text">Phone: (123) 456-7890</p>
          <p className="footer-text">Email: info@company.com</p>
        </div>
      </div>
      <div className="footer-bottom reveal">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
