import React from 'react'
import { useNavigate, Button, Image, Text } from 'react-router-dom'
import "./Start.css"
import backgroundVideo from '../../assets/components/BackgroundVideo/backgroundVideo.js'
import galaxyBackground from "./../../assets/images/galaxyBackground.mp4"
import { motion } from "framer-motion"

const Start = () => {
    const navigate = useNavigate();
    return (
        // <div className="App">
        //     <backgroundVideo />
        //     {/* <h1>Home</h1>
        //     <button onClick={()=> navigate('/projects')}>Go to Projects</button>
        //     <button onClick={()=> navigate('/experiences')}>Go to Experiences</button> */}
        // </div>
        <div className="start-main">
            <div className='start-button-container'>
                <motion.button className='motion-button' whileTap={{ scale: 0.85 }} onClick={() => navigate('/Home')}>
                    <p className='header'>READY</p>
                    <p className='text'>To get into my Space</p>
                </motion.button>
            </div>
            <video src={galaxyBackground} autoPlay loop muted />

        </div>
    )
}

export default Start