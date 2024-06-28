import React, { useState } from 'react';
import './Contact.css';
import { Gmail, Phone, Resume } from '../Icons/Icons';

function Contact() {
  const [notification, setNotification] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setNotification(`Copied to clipboard: ${text}`);
        setTimeout(() => setNotification(''), 2000); // Remove notification after 2 seconds
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  const navigateTo = (url) => {
    window.open(url, '_blank', 'nooperner, noreferrer')
}

  return (
    <div>
      <ul className="social-wrapper">
        <li
          className="social-icon social-phone"
          onClick={() => copyToClipboard('+6583435444')}
        >
          <span className="social-tooltip">+6583435444</span>
          <Phone />
        </li>
        <li
          className="social-icon social-google"
          onClick={() => copyToClipboard('tejeswara.rajani@gmail.com')}
        >
          <span className="social-tooltip">tejeswara.rajani@gmail.com</span>
          <Gmail />
        </li>
        <li className="social-icon social-resume" onClick={() => navigateTo('https://tejeswaranehru-resume.tiiny.site')}>
          <span className="social-tooltip">Resume</span>
          <Resume />
        </li>
      </ul>
      {notification && (
      <div className="notification">
        <svg className="succes-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        <div className='notification-text'>
        {notification}
        </div>
      </div>
      )}
    </div>
  );
}

export default Contact;
