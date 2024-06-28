import React from "react";
import "./backgroundVideo.css"
import galaxyBackground from "./../../images/galaxyBackground.mp4"

const backgroundVideo = () => {
    return (
        <div className="main">
          <video src={galaxyBackground} autoPlay loop muted />
        </div>
    );
};
    
export default backgroundVideo;