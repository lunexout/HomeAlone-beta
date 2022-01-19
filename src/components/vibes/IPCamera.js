import React from 'react'
import './IPCamera.css'
import photo1 from './img/bg3-8d876ab46b.png'

import photo2 from './img/bg4-a9ad58dac1.png'
// import { Footer } from './../footer/Footer'

import photo3 from './img/bg5-f6b42bb1de.png'
import photo4 from './img/bg7-42ea7ab39c.png'
import photo5 from './img/bg8-b6638db0ec.png'
import photo6 from './img/bg9-fdd4699c6d.png'
import photo7 from './img/bg10-1f2864fa16.png'
import photo8 from './img/bg11-0bf87b2f7a.jpg'
export const IPCamera = () => {
    return (
        <div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    @media screen and (min-width:1760px) {
                        html {
                            font-size: 100px
                        }
                    }
                    
                    @media (min-width:1360px) and (max-width:1760px) {
                        html {
                            font-size: calc((100vw - 160px)/ 16)
                        }
                    }
                    
                    @media screen and (max-width:1360px) {
                        html {
                            font-size: 75px
                        }
                    }
                    
                    @media screen and (min-width:1920px) {
                        html{
                            font-size: calc(83.34vw / 16)
                        }
                    }        `
                }}
            />
            <div className="yt__container">
                <div className="yt__sec1 s__bg">
                    <div className="sec1__content">
                        <div className="sec1__title">
                            <p>Smart PTZ Camera</p>
                            <div className="tag">SC32PT</div>
                        </div>
                        <div className="sec1__subhead">1080P full HD image quality, 355° panoramic cruise, see more fully and
                            clearly</div>
                        <div className="sec1__desc">
                            <p>1080P Full HD Wide Angle | Dual Rotating PTZ | Super Infrared Night Vision</p>
                            <p>Motion Detection Alarm | Two-way Voice Intercom</p>
                        </div>
                    </div>
                </div>
                <div className="yt__sec2 d__sec">
                    <div className="sec2__content">
                        <div className="sec__title">1080P HD Image Quality, Full Upgrade of Video Imaging Effect</div>
                        <div className="sec__desc">
                            <p>1080P high-definition picture quality, 2 million pixels, 4 times digital zoom in detail to show
                                no distortion,using professional image processing</p>
                            <p>chip Hi3518Ev200, the screen display color is rich and full, and every place is as delicate and
                                real as you can see with your own eyes.</p>
                        </div>
                    </div>
                    <div className="sec2__feature">
                        <div className="sec2__bg s__bg diff">
                            <div id="blur" className="blur s__bg" />
                            <div id="resize" className="resize s__bg" />
                        </div>
                        <div className="sec2__size"><span>720p</span> <span>1080P</span></div>
                    </div>
                </div>
                <div className="yt__sec3 s__bg d__sec lazy" style={{ backgroundImage: `url(${photo1})` }}>
                    <div className="sec3__content">
                        <div className="sec__title">Double Rotating Platform, Without Monitoring Dead Angle</div>
                        <div className="sec__desc">
                            <p>The dual-rotating pan/tilt design supports flexible rotation of 355° horizontally and 75°
                                vertically; with a large wide angle of 125°, it</p>
                            <p>can realize horizontal, vertical, and full-view stereo monitoring.</p>
                        </div>
                    </div>
                </div>
                <div className="yt__sec4 s__bg d__sec lazy" style={{ backgroundImage: `url(${photo2})` }}>
                    <div className="sec3__content">
                        <div className="sec__title">Night Vision With High Video Quality</div>
                        <div className="sec__desc">
                            <p>More powerful infrared processing In order to have a clearer night vision effect, in the dark and
                            </p>
                            <p>low light environment, you can see every detail you want to see.</p>
                        </div>
                    </div>
                </div>
                <div className="yt__sec5 s__bg d__sec lazy" style={{ backgroundImage: `url(${photo3})` }}>
                    <div className="sec5__content">
                        <div className="sec__title">Sensitive Motion Detection</div>
                        <div className="sec__desc">
                            <p>When abnormal movement in the home is detected the first time, the camera automatically captures
                                the moving picture and uploads the</p>
                            <p>video to cloud storage in real time.At the same time, I received an alarm notification on the
                                Smart Home 365 APP, and I knew what was</p>
                            <p>happening at home the first time, and immediately checked it in real time.</p>
                        </div>
                    </div>
                </div>
                <div className="yt__sec6">
                    <p className="sec6__title">Remote Monitoring in Real Time</p>
                </div>
                <div className="yt__sec7 s__bg d__sec lazy" style={{ backgroundImage: `url(${photo4})` }}>
                    <div className="sec7__content">
                        <div className="sec__title">Always pay attention to the elderly and children</div>
                        <div className="sec__desc">
                            <p>Always pay attention to the elderly and children，When the elderly or children are at home alone,
                                they can remotely view the situation of their</p>
                            <p>relatives through the mobile phone, and control the situation at home anytime, anywhere.</p>
                        </div>
                    </div>
                </div>
                <div className="yt__sec8 s__bg d__sec lazy" style={{ backgroundImage: `url(${photo5})` }}>
                    <div className="sec8__content">
                        <div className="sec__title">Remotely Care for Pets at Home</div>
                        <div className="sec__desc">
                            <p>Pets have a large space for activities and like to hide in corners.</p>
                            <p>The smart PTZ camera has a super wide angle,</p>
                            <p>Can clearly and quickly detect pets hiding in corners.</p>
                        </div>
                    </div>
                </div>
                <div className="yt__sec8 s__bg d__sec small lazy" style={{ backgroundImage: `url(${photo6})` }}>
                    <div className="sec8__content">
                        <div className="sec__title">
                            <p>Real-Time Two-Way Intercom</p>
                            <p>As Smooth as A Phone Call</p>
                        </div>
                        <div className="sec__desc">
                            <p>The built-in microphone and loudspeaker after professional debugging</p>
                            <p>can ensure the clear sound,Just press and hold the intercom button to</p>
                            <p>communicate with your family "face to face".Don't miss any important</p>
                            <p>moments of your family.</p>
                        </div>
                    </div>
                </div>
                <div className="yt__sec9 s__bg d__sec lazy" style={{ backgroundImage: `url(${photo7})` }}>
                    <div className="sec8__content">
                        <div className="sec__title">
                            <p>7*24 Hours of Uninterrupted Storage</p>
                            <p>Keeping The Warm Moments of Life</p>
                        </div>
                        <div className="sec__desc">
                            <p>The smart PTZ camera supports local storage, inserting a micro SD card can record and store the
                                video captured in the camera's</p>
                            <p>perspective to the card;At the same time, it supports secure cloud storage, real-time
                                transmission, no need to worry about storage</p>
                            <p>space, automatic looping and uninterrupted recording, and remote visits to view stored videos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="yt__sec10 d__sec s__bg lazy" style={{ backgroundImage: `url(${photo8})` }}>
                    <div className="sec10__info">
                        <div className="sec__title">Intelligent security linkage, 24-hour full-space protection</div>
                        <div className="sec__desc">
                            <p>Together with the security products that have been connected to ORVIBO Home,</p>
                            <p>we will build a 24/7 space protection together, making the care more intimate.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="item1">
                            <div className="icon" /><em />

                            <div className="pic" />
                        </div>
                        <div className="item2">
                            <div className="icon" /><em />

                            <div className="pic" />
                        </div>
                        <div className="item3">
                            <div className="icon" /><em />

                            <div className="pic" />
                        </div>
                        <div className="item4">
                            <div className="icon" /><em />

                            <div className="pic" />
                        </div>
                        <div className="item5">
                            <div className="icon" /><em />

                            <div className="pic" />
                        </div>
                        <div className="item6">
                            <div className="icon" /><em />

                            <div className="pic" />
                        </div>
                    </div>
                </div>
            </div>         
             {/* <Footer /> */}

        </div>
    )
}