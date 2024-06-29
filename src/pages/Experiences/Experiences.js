import React from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../../assets/components/Back/back'; // Adjust the path based on your project structure
import "./Experiences.css";
import Card from '../../assets/components/Card/Card.jsx';
import MainCard from '../../assets/components/MainCard/MainCard.jsx';
import { ReactNative, OpenAI, Figma, Java, VisualParadigm, OOPS, Python, Remix, LinearRegressions, NeuralNetwork, RandomForest, OpenCV, Numpy, Tailwind, XRVision, XRVisionImage, SUTDImage, SUTD, STEng, STEngImage, ROS, LiDAR, Linux, Unreal, SolidWorks, TensorFlow, CNN, Yolo } from '../../assets/components/Icons/Icons.jsx';
import { experiencesData } from '../../assets/data/database.jsx';

const Experiences = () => {
    const homePageNavigate = '/Home'
    return (
        <div className='experiences-main'>
            <header className='experiences-header'>
                <h1>EXPERIENCES</h1>
            </header>
            <div>
                <MainCard type="exp" card={experiencesData} navigation={homePageNavigate} />
            </div>

        </div>
    );
};

export default Experiences;
