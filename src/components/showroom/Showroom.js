import React from 'react'

import {Footer} from './../footer/Footer'
import SHOWVIDEO from "./../../videos/backvideo.mp4";

import './Showroom.css';

export const ShowRoom = () => {
    return (
       <>
    <video className="video-containermine" muted autoPlay loop>
        <source src={SHOWVIDEO} type="video/mp4" />
      </video>


       <Footer/>
       </>
    )
}