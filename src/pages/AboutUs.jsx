import React from 'react';
import Navbar from '../components/Navbar';
import './AboutUs.css';
import Button from '../components/Button';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <section className="intro-section reveal">
          <h2 className='text-center reveal'>Welcome to Montle Business Consulting <span className="highlight">(MBC)</span> cc</h2>
          <p className='reveal'>
            At Montle Business Consulting cc, we are dedicated to revolutionizing the supply and installation of gas equipment. Our mission is to deliver exceptional service and build a reputable brand that stands out both locally in Gauteng and internationally. We are committed to expanding our reach across South Africa and beyond, aiming to be the top choice for businesses and households alike. With a focus on legal compliance, continuous staff training, and a commitment to excellence, we are set to redefine industry standards and become a global leader in our field.
          </p>
        </section>

        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Our Mission</h1>
              <p>
                Our mission is to deliver superior gas water heaters and equipment through exceptional supply and installation services across South Africa. We are dedicated to upholding the highest standards of quality, reliability, and customer satisfaction in every project. By leveraging our expertise and advanced technology, we aim to provide innovative solutions that meet our clients' diverse needs, ensuring their systems operate efficiently and effectively. We strive to build long-term relationships with our customers by consistently exceeding their expectations and offering unparalleled support throughout the lifecycle of our products.
              </p>

              <div className="hero-buttons">
                <Button name="Request Quote" classname="btn" path="./contact" />
              </div>
              
            </div>
          </div>
          <div className="hero-image-container">
            <img src="src/assets/logo/logo bg-stuff.jpg" alt="Hero" className="hero-image" />
          </div>
        </section>
        <section className="hero">
        <div className="hero-image-container">
            <img src="src/assets/logo/logo bg-stuff.jpg" alt="Hero" className="hero-image" />
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1>Our Vision</h1>
              <p>
              Our vision is to become the leading provider of gas water heaters and related equipment in South Africa, recognized for our innovation and excellence in the industry. We aspire to set new benchmarks for quality and service through strategic expansion and investment in cutting-edge technology. Our goal is to not only dominate the local market but also to extend our influence to international markets, becoming a global leader in the supply and installation of gas equipment. By focusing on continuous improvement, sustainability, and customer-centric solutions, we aim to shape the future of the industry and make a significant impact worldwide.
              </p>

              <div className="hero-buttons">
                <Button name="Request Quote" classname="btn" path="./contact" />
              </div>
              
            </div>
          </div>
          
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="path_to_placeholder" alt="Team Member" className="team-photo" />
              <h3>John Doe</h3>
              <p>Position</p>
              <p>Short bio about the team member goes here.</p>
            </div>
            {/* Repeat similar blocks for additional team members */}
          </div>
        </section>

        <section className="subscription">
          <h3>Get Exclusive Offers</h3>
          <p>Sign up to receive updates and special offers.</p>
          <form className="subscription-form">
            <input type="email" placeholder="Enter your email" className="subscription-input" />
            <button type="submit" className="subscription-button btn-solid">Subscribe</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
