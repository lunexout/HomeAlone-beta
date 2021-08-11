import React from "react";
import "./testHome.css";

import cameraLeft from "./../../videos/cameraLeft.mp4";
import cameraRight from "./../../videos/cameraRight.mp4";
import openDoor from "./../../videos/openDoor.mp4";
import closeDoor from "./../../videos/closeDoor.mp4";
import curtainClose from "./../../videos/curtainClose.mp4";
import curtainOpen from "./../../videos/curtainOpen.mp4";


export const TestYourHome = () => {
  const [activeVideo, setActiveVideo] = React.useState(cameraRight);
  const videoSources = [
    {
        name: "Camera Right", src: cameraRight,
    },
    {
        name: "Camera Left", src: cameraLeft,
    },
    {
        name: "Open Door", src: openDoor,
    },
    {
        name: "Close Door", src: closeDoor,
    },
    {
        name: "Curtain Open", src: curtainOpen,
    },
    {
        name: "Curtain Close", src: curtainClose,
    },
]


  const PlayVideo = () => {
    return (
      <video id="mainvideo" className="video-container" controls autoPlay loop>
        <source src={activeVideo} type="video/mp4" />
      </video>
    );
  };
  const  spanActive = (event, name) => {
    event.target.parentNode.parentNode
        .querySelectorAll(".controllers-container button")
        .forEach((elem) => {
            elem.classList.remove("active-video");
        });
    event.target.classList.toggle("active-video");
    }
  const changeActiveVideo = (arg, event, video) => {
    spanActive(event, video.name)
    setActiveVideo(arg);
  };
  return (
    <>
      <div className="test-box">
        <div className="test-home animate__animated  animate__fadeInRight">
          <PlayVideo />
          <div className="controllers-container">
              {videoSources.map((video,index) => {
                  return(
                      <>
                        <button key={index} className={`controller-btn ${index === 0 ? "active-video" : ""}`} onClick={(e) => changeActiveVideo(video.src, e, video)}>
                            {video.name}
                        </button>
                      </>
                  )
              })}
          </div>
        </div>
      </div>
    </>
  );
};
