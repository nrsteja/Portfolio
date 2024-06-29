import React, { useEffect, useState } from 'react';
import './DescriptionCard.css';
import { Close, GitHub, Link } from '../Icons/Icons';

function DescriptionCard({ card, type, onClose }) {
  const [isProject, setIsProject] = useState(type === 'proj');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(`Type changed to: ${type}`);
    setIsProject(type === 'proj');
    setIsVisible(true);
  }, [type]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      <div className={`overlay ${isVisible ? 'active' : ''}`} onClick={handleClose}></div>
      <div className={`description-card ${isVisible ? 'active' : ''}`}>
        <button className="close-button" onClick={handleClose}>
          <Close />
        </button>
        <div className="description-card-inner">
          <h2 className="description-card-title">{card.name}</h2>
          <div className='description-card-inner-image'>
            {card.image && (
              <span className="description-card-image">{card.image}</span>
            )}
            <div className='description-card-inner-details'>
              {!isProject && (
                <div className="description-card-role">
                  <h3>{card.role} Engineer</h3>
                </div>
              )}
              {isProject && (
                <div className="description-card-role">
                  <h3>{card.topic}</h3>
                  {isProject && card.repoLink && (
                    <div className="card-detail-repo">
                      <a href={card.repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
                        <GitHub />
                      </a>
                    </div>
                  )}
                  {isProject && card.videoLink && (
                    <div className="card-detail-repo">
                      <a href={card.videoLink} target="_blank" rel="noopener noreferrer" className="video-link">
                        <Link />
                      </a>
                    </div>
                  )}
                </div>
              )}
              <div className="card-detail-project">
                <div className="card-detail-row">
                  <p><strong style={{color: '#0e3f5b'}}>Domain:</strong> {card.domain}</p>
                  <p><strong style={{color: '#0e3f5b'}}>Duration:</strong> {card.duration}</p>
                </div>
                {!isProject && (
                  <div className="card-detail-row">
                    <p><strong style={{color: '#0e3f5b'}}>From:</strong> {card.from} <strong>To:</strong> {card.to}</p>
                    <p><strong style={{color: '#0e3f5b'}}>Projects:</strong> {card.projects}</p>
                  </div>
                )}
                {isProject && (
                  <div className="card-detail-row">
                    <p><strong style={{color: '#0e3f5b'}}>Level:</strong> {card.level}</p>
                    <p><strong style={{color: '#0e3f5b'}}>Conducted By:</strong> {card.conducted}</p>
                  </div>
                )}
              </div>
              <div className="card-detail-para">
                <p className="card-description-details"><strong style={{color: '#550637'}}>Description:</strong> {card.description}</p>
              </div>
              
              
              <div className="card-technologies">
                <h4>Technologies Used</h4>
                <ul>
                  {!isProject && (card.technologies.map((tech, index) => (
                    <li key={index}>
                      <span className="tech-logo">{tech.logos}</span>
                      <span className="tech-name">{tech.name}</span>
                    </li>
                  )))}
                  {isProject && (card.concepts.map((tech, index) => (
                    <li key={index}>
                      <span className="tech-logo">{tech.logos}</span>
                      <span className="tech-name">{tech.name}</span>
                    </li>
                  )))}
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DescriptionCard;
