import React from 'react';
import "./AboutCard.css";
import { Close } from '../Icons/Icons';
import { skillsData, awardsData, aboutMeData } from '../../data/database';
import SocialMedia from '../SocialMedia/SocialMedia';
import Contact from '../Contact/Contact';

const AboutCard = ({ type, onClose }) => {
  const renderContent = () => {
    switch (type) {
      case 'skills':
        return (
          <div className="skills-container">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-card">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        );
      case 'awards':
        return (
          <div className="awards-container">
            {awardsData.map((award, index) => (
              <div key={index} className="award-card">
                <p className="award-name"><span>{award.name}</span></p>
                <p className="award-description">{award.description}</p>
              </div>
            ))}
          </div>
        );
      case 'me':
        return (
          <div className="about-me-container">
            <div className='about-me-contact'>
              <div className="about-me-image"/>
              <p className='about-me-links'><Contact /></p>
            </div>
            
            <div className='about-me-para'>
              <p className='about-me-name'>TEJESWARA NEHRU</p>
              <p className="about-me-description">{aboutMeData.description}</p>
              <p className='about-me-links'><SocialMedia /></p>
              {/* <SocialMedia /> */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about-main-card">
      <div className="about-main-card-container">
        <button className="about-close-button" onClick={onClose}>
          <Close />
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutCard;
