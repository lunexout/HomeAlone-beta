import React from "react";
import "./testHome.css";

import cameraLeft from "./../../videos/cameraLeft.mp4";
import cameraRight from "./../../videos/cameraRight.mp4";
import openDoor from "./../../videos/openDoor.mp4";
import closeDoor from "./../../videos/closeDoor.mp4";
import curtainClose from "./../../videos/curtainClose.mp4";
import curtainOpen from "./../../videos/curtainOpen.mp4";

import STATUS from "./../mobile/status.png";
import BACKVIDEO from "./../../videos/backvideo.mp4";

import BANNER from './../../assets/358800.jpg'
import CLOSE from './../../assets/close.svg'

export const TestYourHome = () => {
  const [activeVideo, setActiveVideo] = React.useState(cameraRight);
  const [phone, setPhone] = React.useState(true)
  const videoSources = [
    {
      name: "Camera Right",
      src: cameraRight,
    },
    {
      name: "Camera Left",
      src: cameraLeft,
    },
    {
      name: "Open Door",
      src: openDoor,
    },
    {
      name: "Close Door",
      src: closeDoor,
    },
    {
      name: "Curtain Open",
      src: curtainOpen,
    },
    {
      name: "Curtain Close",
      src: curtainClose,
    },
  ];

  const PlayVideo = () => {
    return (
      <video id="mainvideo" className="video-container" autoPlay loop>
        <source src={activeVideo} type="video/mp4" />
      </video>
    );
  };
  const spanActive = (event, name) => {
    event.target.parentNode.parentNode
      .querySelectorAll(".controllers-container button")
      .forEach((elem) => {
        elem.classList.remove("active-video");
      });
    event.target.classList.toggle("active-video");
  };
  const changeActiveVideo = (arg, event, video) => {
    spanActive(event, video.name);
    setActiveVideo(arg);
  };
  return (
    <>
      <div className="test-box">
        <div className="test-home animate__animated  animate__fadeInRight">
          <PlayVideo />
        </div>
      </div>
      <div className={`calculator animate__animated ${phone ? 'animate__fadeInUp' : 'animate__fadeOutDown'}`}>
        <div className="top-container" >
          <div className="clock">
            <span className="hour"></span>:<span className="minute"></span>
          </div>
          <div className="status">
            <img src={STATUS} alt="Status" />
          </div>
        </div>
        <video id="mainvideo" className="video-container2" muted autoPlay loop>
          <source src={BACKVIDEO} type="video/mp4" />
        </video>
          <img src={BANNER} alt='banner' style={{width: '100%', height: 90}} />
        <div className="controllers-container">
          {videoSources.map((video, index) => {
            return (
              <>
                <button
                  key={index}
                  className={`controller-btn ${
                    index === 0 ? "active-video" : ""
                  }`}
                  onClick={(e) => changeActiveVideo(video.src, e, video)}
                >
                  {video.name}
                </button>
              </>
            );
          })}
        </div>
        <div>
          <img src={CLOSE} onClick={() => {setPhone(false)}} style={{width: 50, marginTop: 13}} alt='close'/>
        </div>
        <div className="bottom"></div>
      </div>
      {!phone && 
      <div className={`calculator animate__animated animate__fadeInUp`} style={{bottom: -550}} onClick={() => setPhone(true)}>
      <div className="top-container" >
        <div className="clock">
          <span className="hour"></span>:<span className="minute"></span>
        </div>
        <div className="status">
          <img src={STATUS} alt="Status" />
        </div>
      </div>
      <video id="mainvideo" className="video-container2" muted autoPlay loop>
        <source src={BACKVIDEO} type="video/mp4" />
      </video>
        <img src={BANNER} alt='banner' style={{width: '100%', height: 90}} />
      <div className="controllers-container">
        {videoSources.map((video, index) => {
          return (
            <>
              <button
                key={index}
                className={`controller-btn ${
                  index === 0 ? "active-video" : ""
                }`}
                onClick={(e) => changeActiveVideo(video.src, e, video)}
              >
                {video.name}
              </button>
            </>
          );
        })}
      </div>
      <div className="bottom"></div>
    </div>
    }
    </>
  );
};
