import React from "react";

import { Footer } from "./../footer/Footer";
import engvideo from "./../../assets/eng full.mp4";
import geovideo from "./../../assets/geo full.mp4";
import ruvideo from "./../../assets/ru full.mp4";
import "./Showroom.css";

export const ShowRoom = () => {
  let bckVideo;
  if (localStorage.getItem("lang") === "ru") {
    bckVideo = ruvideo;
  } else if (localStorage.getItem("lang") === "ge") {
    bckVideo = geovideo;
  } else {
    bckVideo = engvideo;
  }
  return (
    <>
      <video className="video-containermine" muted autoPlay loop>
        <source src={bckVideo} type="video/mp4" />
      </video>

      <Footer />
    </>
  );
};
