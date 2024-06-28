import React, { useState } from 'react';
import "./Card.css";
import HtmlCss from "./../../images/HtmlCss.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import {ReactNative, Figma, OpenAI} from './../Icons/Icons.jsx'
import xrvision from "./../../images/xrvision.jpg"
import xrvisionLogo from "./../../images/xrvision-logo.png"

function ListOfConcepts({concepts}){
    const concept = concepts.map((element) => {
        return (
            <ul type="disc" className='item'>
                <li>{element}</li>
            </ul>
        )
    })
    return <div className='container'>{concept}</div>
}


const Card = ({type, onClick, ...props}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  console.log('props.logos:', props);
  // console.log('props.concepts:', props.concepts);
  const categoryClassName = (type === 'proj')? "front": "front-exp"; 

  const click = () => {
    console.log("more info");
  }

  return (
    <div className="card" onClick={onClick}>
      <div className="content">
        <div className="back">
          <div className="back-content">
            <strong>{props.domain}</strong>
          </div>
        </div>
        <div className={`front ${type === 'exp' ? 'front-exp' : ''}`}>
          {type === 'proj' && (
            <div className="currentplaying" onClick={onClick}>
              <p className="front-card-heading">{props.name}</p>
            </div>
          )}
          
          {type === 'proj' &&  props.concepts.map((concept, index) => (
            <div className="loader" key={index}
            onMouseEnter={()=> setHoveredIndex(index)}
              onMouseLeave={()=> setHoveredIndex(null)}>
              <div className="song">
                
                <p className="front-card-name">{concept.name}</p>
                
              </div>
              
              <div className="front-card-albumcover">
              {concept.logos}
              </div>
              
              {hoveredIndex=== index && (
                
                  <div className="loading">
                    <div className="load"></div>
                    <div className="load"></div>
                    <div className="load"></div>
                    <div className="load"></div>
                  </div>
                )} 
                {hoveredIndex !== index && (
                  <div className="play"></div>
                )}
                 
            </div>
            
          ))}
          {/* {type === 'proj' && (
            <button className="front-card-btn-exp card-btn-solid-exp">MORE INFO</button>
          )} */}
          {type === 'exp' && (
            <div className="front-card-exp">
              <div className="front-card-img-exp" >
                {props.image}
              </div>
              <div className="front-card-avatar-exp">
                {props.icon}
              </div>
              <div className="front-card-title-exp">{props.company}</div>
              <div className="front-card-subtitle-exp">{props.role}</div>
              
              <div className="front-card-wrapper-exp">
                <button className="front-card-btn-exp">{props.duration}</button>
                <button className="front-card-btn-exp card-btn-solid-exp" onClick={click}>MORE INFO</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;