import React from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../../assets/components/Back/back'; // Adjust the path based on your project structure
import "./Projects.css";
import Card from '../../assets/components/Card/Card.jsx';
import MainCard from '../../assets/components/MainCard/MainCard.jsx';
import { ReactNative, OpenAI, Figma, Java, VisualParadigm, OOPS, Python, Remix, LinearRegressions, NeuralNetwork, RandomForest, OpenCV, Numpy, Tailwind, ROS, LiDAR, Linux, GroceryGrabber, HandGesture, PineappleStudios, PremierLeague, HotelBooking } from '../../assets/components/Icons/Icons.jsx';
import { projectsData } from '../../assets/data/database.jsx';
const Projects = () => {
  const homePageNavigate = '/Home'
  return (
    <div className='projects-main'>
      <header className='experiences-header'>
        <h1>PROJECTS</h1>
      </header>
      <MainCard type="proj" card={projectsData} navigation={homePageNavigate} />
    </div>
  );
};

export default Projects;
