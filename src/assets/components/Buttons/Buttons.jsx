import React, { useState } from 'react';
import "./Buttons.css";
import { Sun, Earth, Jupyter } from '../Icons/Icons';
import AboutCard from '../AboutCard/AboutCard';
import { skillsData, awardsData, aboutMeData } from '../../data/database';
import { useNavigate } from 'react-router-dom';

function Buttons() {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState(null);

  const handleNavigate = () => {
    setActiveType(null);
    navigate('/Home');
  };

  const handleIconClick = (type) => {
    setActiveType(type);
  };

  const closeDescription = () => {
    setActiveType(null);
  };

  return (
    <div className='about-me-page'>
      <div className='about-button-container'>
        <ul className="wrapper">
          <li className="about-icon facebook" onClick={() => handleIconClick('skills')}>
            <span className="tooltip">Skills</span>
            <Sun />
          </li>
          <li className="about-icon twitter" onClick={() => handleIconClick('me')}>
            <span className="tooltip">Me</span>
            <Earth />
          </li>
          <li className="about-icon instagram" onClick={() => handleIconClick('awards')}>
            <span className="tooltip">Awards</span>
            <Jupyter />
          </li>
        </ul>
      </div>
      {activeType && (
        <div className='about-card-click'>
          <header className='buttons-header'>
            <h1>{activeType.toUpperCase()}</h1>
          </header>
          <AboutCard type={activeType} onClose={closeDescription} />
        </div>
      )}
    </div>
  );
}

export default Buttons;
