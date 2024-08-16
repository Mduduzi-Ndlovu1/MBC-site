import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './TeamSection.css'; // Ensure you have a CSS file for styling

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      description: 'John is the visionary behind our company, guiding us towards innovation and excellence.',
      image: 'path_to_john_doe_image', // Replace with actual image path
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      description: 'Jane leads our tech team, ensuring we stay ahead with the latest technologies and practices.',
      image: 'path_to_jane_smith_image', // Replace with actual image path
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      github: 'https://github.com/janesmith',
    },
    {
      name: 'Alice Johnson',
      position: 'COO',
      description: 'Alice oversees our operations, ensuring everything runs smoothly and efficiently.',
      image: 'path_to_alice_johnson_image', // Replace with actual image path
      linkedin: 'https://linkedin.com/in/alicejohnson',
      twitter: 'https://twitter.com/alicejohnson',
      github: 'https://github.com/alicejohnson',
    },
  ];

  return (
    <section className="team-section reveal">
      <h2>Meet Our Team</h2>
      <div className="team-cards reveal">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card reveal">
            <img src={member.image} alt={member.name} className="team-card__image" />
            <div className="team-card__content reveal">
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__position">{member.position}</p>
              <p className="team-card__description">{member.description}</p>
              <div className="team-card__social-icons">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaTwitter />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
