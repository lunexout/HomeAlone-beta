import React from "react";
import "./testHome.css";

//  import cameraLeft from "./../../videos/cameraLeft.mp4";
//  import cameraRight from "./../../videos/cameraRight.mp4";
//  import openDoor from "./../../videos/openDoor.mp4";
//  import closeDoor from "./../../videos/closeDoor.mp4";
//  import curtainClose from "./../../videos/curtainClose.mp4";
//  import curtainOpen from "./../../videos/curtainOpen.mp4";

//eng
import enACcontroll from "./../../videos/for site parts/AC controller/en.mp4";
import enCurtSys from "./../../videos/for site parts/Curtain System/en.mp4";
import enDoorlock from "./../../videos/for site parts/Door lock sensor/en.mp4";
import enGasleak from "./../../videos/for site parts/Gas leakage sensor/en.mp4";
import enDoorWindow from "./../../videos/for site parts/Door Window sensor/en.mp4";
import enLightCont from "./../../videos/for site parts/Light Control/en.mp4";
import enMixpados from "./../../videos/for site parts/Mixpad/en.mp4";
import enSmartAudio from "./../../videos/for site parts/Smart Audio system/en.mp4";
import enSmartGarage from "./../../videos/for site parts/Smart Garage System/en.mp4";
import enVideoCamera from "./../../videos/for site parts/Smart Video Camera/en.mp4";
import enTHsensor from "./../../videos/for site parts/TH sensor/en.mp4";
import enTVcontroll from "./../../videos/for site parts/TV remote controller/en.mp4";

//ru
import ruACcontroll from "./../../videos/for site parts/AC controller/ru.mp4";
import ruCurtSys from "./../../videos/for site parts/Curtain System/ru.mp4";
import ruDoorlock from "./../../videos/for site parts/Door lock sensor/ru.mp4";
import ruGasleak from "./../../videos/for site parts/Gas leakage sensor/ru.mp4";
import ruDoorWindow from "./../../videos/for site parts/Door Window sensor/ru.mp4";
import ruLightCont from "./../../videos/for site parts/Light Control/ru.mp4";
import ruMixpados from "./../../videos/for site parts/Mixpad/ru.mp4";
import ruSmartAudio from "./../../videos/for site parts/Smart Audio system/ru.mp4";
import ruSmartGarage from "./../../videos/for site parts/Smart Garage System/ru.mp4";
import ruVideoCamera from "./../../videos/for site parts/Smart Video Camera/ru.mp4";
import ruTHsensor from "./../../videos/for site parts/TH sensor/ru.mp4";
import ruTVcontroll from "./../../videos/for site parts/TV remote controller/ru.mp4";

//geo
import geACcontroll from "./../../videos/for site parts/AC controller/ge.mp4";
import geCurtSys from "./../../videos/for site parts/Curtain System/ge.mp4";
import geDoorlock from "./../../videos/for site parts/Door lock sensor/ge.mp4";
import geGasleak from "./../../videos/for site parts/Gas leakage sensor/ge.mp4";
import geDoorWindow from "./../../videos/for site parts/Door Window sensor/ge.mp4";
import geLightCont from "./../../videos/for site parts/Light Control/ge.mp4";
import geMixpados from "./../../videos/for site parts/Mixpad/ge.mp4";
import geSmartAudio from "./../../videos/for site parts/Smart Audio system/ge.mp4";
import geSmartGarage from "./../../videos/for site parts/Smart Garage System/ge.mp4";
import geVideoCamera from "./../../videos/for site parts/Smart Video Camera/ge.mp4";
import geTHsensor from "./../../videos/for site parts/TH sensor/ge.mp4";
import geTVcontroll from "./../../videos/for site parts/TV remote controller/ge.mp4";

import STATUS from "./../../assets/status.png";


export const TestYourHome = () => {
  //ACcontroll
  let ACcontroll;
  if (localStorage.getItem("lang") === "ru") {
    ACcontroll = ruACcontroll;
  } else if (localStorage.getItem("lang") === "ge") {
    ACcontroll = geACcontroll;
  } else {
    ACcontroll = enACcontroll;
  }
  // CurtSys
  let CurtSys;
  if (localStorage.getItem("lang") === "ru") {
    CurtSys = ruCurtSys;
  } else if (localStorage.getItem("lang") === "ge") {
    CurtSys = geCurtSys;
  } else {
    CurtSys = enCurtSys;
  }
  //Doorlock
  let Doorlock;
  if (localStorage.getItem("lang") === "ru") {
    Doorlock = ruDoorlock;
  } else if (localStorage.getItem("lang") === "ge") {
    Doorlock = geDoorlock;
  } else {
    Doorlock = enDoorlock;
  }
  //Gasleak
  let Gasleak;
  if (localStorage.getItem("lang") === "ru") {
    Gasleak = ruGasleak;
  } else if (localStorage.getItem("lang") === "ge") {
    Gasleak = geGasleak;
  } else {
    Gasleak = enGasleak;
  }
  // DoorWindow
  let DoorWindow;
  if (localStorage.getItem("lang") === "ru") {
    DoorWindow = ruDoorWindow;
  } else if (localStorage.getItem("lang") === "ge") {
    DoorWindow = geDoorWindow;
  } else {
    DoorWindow = enDoorWindow;
  }
  // LightCont
  let LightCont;
  if (localStorage.getItem("lang") === "ru") {
    LightCont = ruLightCont;
  } else if (localStorage.getItem("lang") === "ge") {
    LightCont = geLightCont;
  } else {
    LightCont = enLightCont;
  }
  // Mixpados
  let Mixpados;
  if (localStorage.getItem("lang") === "ru") {
    Mixpados = ruMixpados;
  } else if (localStorage.getItem("lang") === "ge") {
    Mixpados = geMixpados;
  } else {
    Mixpados = enMixpados;
  }
  // SmartAudio
  let SmartAudio;
  if (localStorage.getItem("lang") === "ru") {
    SmartAudio = ruSmartAudio;
  } else if (localStorage.getItem("lang") === "ge") {
    SmartAudio = geSmartAudio;
  } else {
    SmartAudio = enSmartAudio;
  }
  // SmartGarage
  let SmartGarage;
  if (localStorage.getItem("lang") === "ru") {
    SmartGarage = ruSmartGarage;
  } else if (localStorage.getItem("lang") === "ge") {
    SmartGarage = geSmartGarage;
  } else {
    SmartGarage = enSmartGarage;
  }
  // VideoCamera
  let VideoCamera;
  if (localStorage.getItem("lang") === "ru") {
    VideoCamera = ruVideoCamera;
  } else if (localStorage.getItem("lang") === "ge") {
    VideoCamera = geVideoCamera;
  } else {
    VideoCamera = enVideoCamera;
  }
  // THsensor
  let THsensor;
  if (localStorage.getItem("lang") === "ru") {
    THsensor = ruTHsensor;
  } else if (localStorage.getItem("lang") === "ge") {
    THsensor = geTHsensor;
  } else {
    THsensor = enTHsensor;
  }
  // TVcontroll
  let TVcontroll;
  if (localStorage.getItem("lang") === "ru") {
    TVcontroll = ruTVcontroll;
  } else if (localStorage.getItem("lang") === "ge") {
    TVcontroll = geTVcontroll;
  } else {
    TVcontroll = enTVcontroll;
  }

  const [activeVideo, setActiveVideo] = React.useState(ACcontroll);
  const [phone, setPhone] = React.useState(true);
  const videoSources = [
    {
      name: "AC controller",
      src: ACcontroll,
    },

    {
      name: "Curtain System",
      src: CurtSys,
    },

    {
      name: "Door lock sensor",
      src: Doorlock,
    },
    {
      name: "Gas leakage",
      src: Gasleak,
    },
    {
      name: "Door/Window ",
      src: DoorWindow,
    },
    {
      name: "Light Control",
      src: LightCont,
    },
    {
      name: "Mixpad",
      src: Mixpados,
    },
    {
      name: "Smart Audio",
      src: SmartAudio,
    },
    {
      name: "Smart Garage",
      src: SmartGarage,
    },

    {
      name: "Video Camera",
      src: VideoCamera,
    },
    {
      name: "TH sensor",
      src: THsensor,
    },
    {
      name: "TV controller",
      src: TVcontroll,
    },
  ];

  const PlayVideo = () => {
    return (
      <video id="mainvideo" className="video-container" autoPlay loop>
        <source src={activeVideo} type="video/mp4" />
      </video>
    );
  };

  //  const PlayVideo = () => {
  //    return (
  //      <video id="mainvideo" className="video-container2" muted autoPlay loop>
  //        <source src={activeVideo} type="video/mp4" />
  //      </video>
  //    );
  //  };

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
      <div
        className={`calculator animate__animated ${
          phone ? "animate__fadeInUp" : "animate__fadeOutDown"
        }`}
      >
        <div className="top-container">
          <div className="clock">
            <span className="hour"></span>:<span className="minute"></span>
          </div>
          <div className="status">
            <img src={STATUS} alt="Status" />
          </div>
        </div>

        <PlayVideo />
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
        <div></div>
        <div className="bottom"></div>
      </div>
      {!phone && (
        <div
          className={`calculator animate__animated animate__fadeInUp`}
          style={{ bottom: -550 }}
          onClick={() => setPhone(true)}
        >
          <div className="top-container">
            <div className="clock">
              <span className="hour"></span>:<span className="minute"></span>
            </div>
            <div className="status">
              <img src={STATUS} alt="Status" />
            </div>
          </div>
          <video
            id="mainvideo"
            className="video-container2"
            muted
            autoPlay
            loop
          >
            <PlayVideo />
          </video>
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
      )}
      {/* <div dangerouslySetInnerHTML={{ __html: "<iframe class='responsive-iframe' src='https:twinmotion.unrealengine.com/presentation/w3GIZjbJ-tS18Uo_?fbclid=IwAR0OqbOANKH59_mpslccrrjbh9c5TGStvPLL_JXeFXVGMLD3rxRzRnFMRpo'/>"}} /> */}
    </>
  );
};
