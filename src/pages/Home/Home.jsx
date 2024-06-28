import React from 'react';
import "./Home.css";
import { Saturn, Sun } from '../../assets/components/Icons/Icons';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleEarthClick = () => {
        navigate('/About');
    };
    const handleSunClick = () => {
        navigate('/Projects');
    };
    const handleSaturnClick = () => {
        navigate('/Experiences');
    };

    return (
        <div className='home-main'>
            <div className="earth-container" onClick={handleEarthClick}>
                <div className="earth-overlay"></div>
                <div className="planet-label earth-planet">About Me</div>
            </div>
            <div className="home-sun" onClick={handleSunClick}>
                <Sun />
                <div className="planet-label sun-planet">Projects</div>
            </div>
            <div className="home-saturn" onClick={handleSaturnClick}>
                <Saturn />
                <div className="planet-label saturn-planet">Experiences</div>
            </div>
        </div>
    );
}

export default Home;
