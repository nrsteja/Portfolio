import React from 'react'
import "./SocialMedia.css"
import { Email, GitHub, LinkedIn, Telegram, Whatsapp } from '../Icons/Icons'
function SocialMedia() {
    const navigateTo = (url) => {
        window.open(url, '_blank', 'nooperner, noreferrer')
    }
    const mailOpen = (url) => {
        window.location.href = url;
    }
  return (
    <ul class="social-wrapper">
        <li className="social-icon social-linkedin" onClick={() => navigateTo('https://www.linkedin.com/in/tejeswara-nehru-a72002201/')}>
            <span className="social-tooltip">LinkedIn</span>
            <LinkedIn />
        </li>
        <li className="social-icon social-github" onClick={() => navigateTo('https://github.com/nrsteja')}>
            <span className="social-tooltip">GitHub</span>
            <GitHub />
        </li>
        <li className="social-icon social-telegram" onClick={() => navigateTo('https://t.me/tejarock')}> 
            <span className="social-tooltip">Telegram</span>
            <Telegram />
        </li>
        <li className="social-icon social-whatsapp" onClick={() => navigateTo('https://chatwith.io/s/6583435444')}>
            <span className="social-tooltip">WhatsApp</span>
            <Whatsapp />
        </li>
        <li className="social-icon social-email" onClick={() => mailOpen('mailto:tejeswara.rajani@gmail.com,tejeswar001@e.ntu.edu.sg')}>
            <span className="social-tooltip">Email</span>
            <Email />
        </li>
    </ul>

  )
}

export default SocialMedia