import React, { useEffect, useState } from 'react'
import "./About.css"
import Buttons from '../../assets/components/Buttons/Buttons'
import Back from '../../assets/components/Back/back'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/Home')
    }
    
  return (
    <div className='about-main'>
        <div className='button-container'>
            <Buttons />
        </div>
        <div className='about-back-button'>
            <Back onClick={handleNavigate}/>
        </div>
    </div>
  )
}
