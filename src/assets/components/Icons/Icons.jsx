import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faReact, faFigma, faJava, faPython, faCreativeCommonsRemix, faLinkedinIn, faGithub, faTelegram, faWhatsapp, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCircleNodes, faCode, faCodeBranch, faMicrochip, faTimes, faHeart, faGear, faTrophy, faUser, faEnvelope, faPhone, faFile } from '@fortawesome/free-solid-svg-icons';

import openai from "./../../images/openai.png"
import Visual_paradigm from "./../../images/visual_paradigm.png"
import OOP from "./../../images/oops.png"
import LinearRegression from "./../../images/linear-regression.png"
import Neuralnetworks from "./../../images/deep-learning.png"
import opencv from "./../../images/opencv.png"
import numpy from "./../../images/numpy.png"
import tailwind from "./../../images/tailwind.png"
import java from "./../../images/java.png"
import figma from "./../../images/figma.png"
import python from "./../../images/python.png"
import xrvision from "./../../images/xrvision-logo.png"
import xrvisionimage from "./../../images/xrvision.jpg"
import steng from "./../../images/STEng-icon.png"
import stengimage from "./../../images/st-eng.jpg"
import sutd from "./../../images/sutd-icon.jpg"
import sutdimage from "./../../images/sutd.jpg"
import lidar from "./../../images/lidar.png"
import ros from "./../../images/ros.png"
import unreal from "./../../images/unreal.png"
import yolo from "./../../images/yolo.png"
import tensorflow from "./../../images/tensorflow.png"
import cnn from "./../../images/cnn.png"
import solidworks from "./../../images/solidworks.png"
import linux from "./../../images/linux.png"
import grocerygrabber from "./../../images/grocerygrabber.jpg"
import handgesture from "./../../images/hand-gesture.png"
import pineapplestudios from "./../../images/pineapple-studios.jpg"
import premierleague from "./../../images/premierleague.jpg"
import hotelbooking from "./../../images/hotelbooking.png"
import earth from "./../../images/earth.png"
import sun from "./../../images/sun.png"
import jupyter from "./../../images/jupyter.png"
import saturn from "./../../images/saturn3.png"
import awards from "./../../images/awards.png"
import skills from "./../../images/skills.png"
import ml from "./../../images/ml.png"
import django from "./../../images/django.png"
import mongo from "./../../images/mongo.png"
import git from "./../../images/git.png"
import swe from "./../../images/swe.png"
import mobdev from "./../../images/mobdev.png"
import webdev from "./../../images/webdev.png"
import word from "./../../images/word.png"
import powerpoint from "./../../images/powerpoint.png"
import excel from "./../../images/excel.png"
import pytorch from "./../../images/pytorch.png"
import matlab from "./../../images/matlab.png"
import r from "./../../images/r.png"
import c from "./../../images/c.png"
import express from "./../../images/express.png"
import mysql from "./../../images/mysql.png"
import postgresql from "./../../images/postgresql.png"
import javascript from "./../../images/javascript.png"
import cpp from "./../../images/c++.png"
import nodejs from "./../../images/nodejs.png"
import knime from "./../../images/knime.png"
import tableau from "./../../images/tableau.png"
import pandas from "./../../images/pandas.png"
import creo from "./../../images/creo.png"
import typscript from "./../../images/typescript.png"
import google from "./../../images/google.png"

const iconStyle = {
    height: '35px',
    width: '35px',
    color: 'red',
    zIndex: '2',
};

export const Close = () => {
    return <FontAwesomeIcon icon={faTimes} />
}

export const HTML = () => {
    return <FontAwesomeIcon style={iconStyle} icon={faHtml5} />
}
export const CSS = () => {
    return <FontAwesomeIcon style={iconStyle} icon={faCss3} />
}
export const ReactNative = () => {
    return <FontAwesomeIcon style={{color: 'rgb(80, 246, 255)', height: '30px'}} icon={faReact} />
}
export const Figma = () => {
    return <img style={iconStyle} src={figma} />
}
export const Java = () => {
    return <img style={iconStyle} src={java} />
}
export const OOPS = () => {
    return <img style={iconStyle} src={OOP}/>
}

export const VisualParadigm = () => {
    return <img style={iconStyle} src={Visual_paradigm} />
}

export const OpenAI = () => {
    return <img style={iconStyle} src={openai} />
}

export const Python = () => {
    return <img style={iconStyle} src={python} />
}
export const Remix = () => {
    return <FontAwesomeIcon style={iconStyle} icon={faCreativeCommonsRemix} />
}
export const LinearRegressions = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-graph-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
        </svg>
    );
}
export const NeuralNetwork = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" className="bi bi-diagram-3" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
        </svg>
    );
}
export const RandomForest = () => {
    return <FontAwesomeIcon style={{color: 'blue', height: '30px'}} icon={faCodeBranch} />
}

export const OpenCV = () => {
    return <img style={iconStyle} src={opencv} />
}
export const Numpy = () => {
    return <img style={iconStyle} src={numpy} />
}
export const Tailwind = () => {
    return <img style={iconStyle} src={tailwind} />
}
export const XRVision = () => {
    return <img src={xrvision} style={{ height: '38px' }} alt="XR Vision Logo" />
}
export const XRVisionImage = () => {
    return <img src={xrvisionimage} width="100%" height="100%" alt="XR Vision" />
}
export const SUTD = () => {
    return <img src={sutd} style={{ height: '46px' }} alt="SUTD Logo" />
}
export const SUTDImage = () => {
    return <img src={sutdimage} width="100%" height="100%" alt="SUTD" />
}
export const STEng = () => {
    return <img src={steng} style={{ height: '38px' }} alt="ST Engineering Logo" />
}
export const STEngImage = () => {
    return <img src={stengimage} width="100%" height="100%" alt="ST Engineering" />
}

export const LiDAR = () => {
    return <img src={lidar} width="100%" height="100%" alt="Lidar" />
}
export const ROS = () => {
    return <img src={ros} width="100%" height="100%" alt="ROS" />
}
export const ROSICON = () => {
    return <img src={ros} style={iconStyle} alt="ROS" />
}
export const Unreal = () => {
    return <img src={unreal} width="100%" height="100%" alt="Unreal Engine" />
}
export const Yolo = () => {
    return <img src={yolo} width="100%" height="100%" alt="YOLO" />
}
export const YoloIcon = () => {
    return <img src={yolo} style={iconStyle} alt="YOLO" />
}
export const TensorFlow = () => {
    return <img src={tensorflow} width="100%" height="100%" alt="TensorFlow" />
}
export const TensorFlowIcon = () => {
    return <img src={tensorflow} style={iconStyle} alt="TensorFlow" />
}
export const CNN = () => {
    return <img src={cnn} width="100%" height="100%" alt="CNN" />
}
export const SolidWorks = () => {
    return <img src={solidworks} width="100%" height="100%" alt="SolidWorks" />
}
export const SolidWorksIcon = () => {
    return <img src={solidworks} style={iconStyle} alt="SolidWorks" />
}
export const Linux = () => {
    return <img src={linux} width="100%" height="100%" alt="Linux" />
}
export const LinuxIcon = () => {
    return <img src={linux} style={iconStyle} alt="Linux" />
}

export const GroceryGrabber = () => {
    return <img src={grocerygrabber} width="100%" height="100%" alt="Grocery Grabber" />
}
export const HandGesture = () => {
    return <img src={handgesture} width="100%" height="100%" alt="Hand Gesture" />
}
export const PineappleStudios = () => {
    return <img src={pineapplestudios} width="100%" height="100%" alt="Pineapple Studios" />
}
export const PremierLeague = () => {
    return <img src={premierleague} width="100%" height="100%" alt="Premier League" />
}
export const HotelBooking = () => {
    return <img src={hotelbooking} width="100%" height="100%" alt="Hotel Booking" />
}

export const Earth = () => {
    return <img src={earth} width="100%" height="100%" alt="Earth" />
}
export const Sun = () => {
    return <img src={sun} width="100%" height="100%" alt="Sun" />
}
export const Jupyter = () => {
    return <img src={jupyter} width="100%" height="100%" alt="jupyter" />
}
export const Saturn = () => {
    return <img src={saturn} width="100%" height="100%" alt="saturn" />
}

export const Heart = () => {
    return <FontAwesomeIcon style={iconStyle} icon={faHeart} />
}

export const Skills = () => {
    return  <FontAwesomeIcon style={{height:'25px'}} icon={faGear} />
}

export const Awards = () => {
    return <FontAwesomeIcon style={{height:'25px'}} icon={faTrophy} />
}
export const User = () => {
    return <FontAwesomeIcon style={{height:'25px'}} icon={faUser} />
}
export const ML = () => {
    return <img src={ml} style={iconStyle} alt="ml" />
}
export const Django = () => {
    return <img src={django} style={iconStyle} alt="django" />
}
export const Mongo = () => {
    return <img src={mongo} style={iconStyle} alt="mongo" />
}
export const Git = () => {
    return <img src={git} style={iconStyle} alt="git" />
}
export const SWE = () => {
    return <img src={swe} style={iconStyle} alt="swe" />
}
export const MobDev = () => {
    return <img src={mobdev} style={iconStyle} alt="mobdev" />
}
export const WebDev = () => {
    return <img src={webdev} style={iconStyle} alt="webdev" />
}
export const Word = () => {
    return <img src={word} style={iconStyle} alt="word" />
}
export const PowerPoint = () => {
    return <img src={powerpoint} style={iconStyle} alt="powerpoint" />
}
export const Excel = () => {
    return <img src={excel} style={iconStyle} alt="excel" />
}
export const PyTorch = () => {
    return <img src={pytorch} style={iconStyle} alt="pytorch" />
}
export const Matlab = () => {
    return <img src={matlab} style={iconStyle} alt="matlab" />
}
export const R = () => {
    return <img src={r} style={iconStyle} alt="r" />
}
export const C = () => {
    return <img src={c} style={iconStyle} alt="c" />
}
export const Cpp = () => {
    return <img src={cpp} style={iconStyle} alt="cpp" />
}
export const ExpressJS = () => {
    return <img src={express} style={{height:'35px', width:'50px'}} alt="express" />
}
export const MySQL = () => {
    return <img src={mysql} style={iconStyle} alt="mysql" />
}
export const PostgreSQL = () => {
    return <img src={postgresql} style={iconStyle} alt="postgresql" />
}
export const JavaScript = () => {
    return <img src={javascript} style={iconStyle} alt="javascript" />
}
export const NodeJS = () => {
    return <img src={nodejs} style={iconStyle} alt="nodejs" />
}
export const Knime = () => {
    return <img src={knime} style={iconStyle} alt="knime" />
}
export const Tableau = () => {
    return <img src={tableau} style={iconStyle} alt="tableau" />
}
export const Pandas = () => {
    return <img src={pandas} style={iconStyle} alt="pandas" />
}
export const CREO = () => {
    return <img src={creo} style={iconStyle} alt="creo" />
}
export const TypeScript = () => {
    return <img src={typscript} style={iconStyle} alt="typscript" />
}
export const LinkedIn = () => {
    return <FontAwesomeIcon icon={faLinkedinIn} />
}
export const GitHub = () => {
    return <FontAwesomeIcon style={{height:'30px'}} icon={faGithub} />
}
export const Telegram = () => {
    return <FontAwesomeIcon style={{height:'30px'}} icon={faTelegram} />
}
export const Whatsapp = () => {
    return <FontAwesomeIcon style={{height:'30px'}} icon={faWhatsapp} />
}
export const Email = () => {
    return <FontAwesomeIcon style={{height:'30px'}} icon={faEnvelope} />
}
export const Phone = () => {
    return <FontAwesomeIcon icon={faPhone} />
}
export const Gmail = () => {
    return <FontAwesomeIcon icon={faGoogle} />
}
export const Resume = () => {
    return <FontAwesomeIcon icon={faFile} />
}
export const Google = () => {
    return <img src={google}  alt="google" />
}
export const Link = () => {
    return <FontAwesomeIcon style={{height:'30px'}} icon={faYoutube} />
}
