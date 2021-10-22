import React from 'react'
import './ZigbeeWaterLeakageSensor.css'
import { Footer } from './../footer/Footer'

export const ZigbeeWaterLeakageSensor = () => {
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
                    }  ul{
                        list-style-type: none;
                    }      `
                }}
            />
            <div className="im_sec_1">
                <p>SMART WATER LEAKAGE SENSOR</p>
            </div>
            <div className="im_sec2 clear">
                <div className="shadow_bg">COMMON ISSUES IN OUR DAILY LIFE</div>
                <div className="bg1 bg">
                    <div className="shadow">
                        <p>Forgot to turn off the tap when<br />the water supply was cut off</p>
                    </div>
                </div>
                <div className="bg2 bg">
                    <div className="shadow">
                        <p>Unexpected water leakage<br />when family are on vacation</p>
                    </div>
                </div>
                <div className="bg3 bg">
                    <div className="shadow">
                        <p>Can't close the window when<br />there is suddenly rain</p>
                    </div>
                </div>
                <div className="bg4 bg">
                    <div className="shadow">
                        <p>Slippery bathroom caused by<br />the surplus&nbsp;water and poor drainage</p>
                    </div>
                </div>
            </div>
            <div className="im_sec3">
                <div className="content">
                    <p className="f_p">SENSITIVE DETECTION AND<br />TIMELY ALARM</p>
                    <p className="s_p">Get notified when there is water leakage, water overflow and<br />water level change to
                        efficiently avoid the accident and damage.</p>
                    <div id="pop1" className="pop pop1">
                        <p>Water level gets normal!</p>
                    </div>
                    <div id="pop2" className="pop pop2">
                        <p>Water leaking, please pay attention!</p>
                    </div>
                </div>
            </div>
            <div className="im_sec_4">
                <p className="tit">CLOSE THE WINDOW AUTOMATICALLY WHEN<br />DETECTING THE RAIN</p>
                <p className="cont">Put the water leakage sensor beside the window to detect if it’s raining, and link with<br />the
                    window pushing device to close the window automatically if it detects the heavy rain.</p><img alt="Home Alone" id="iphone6_1" src="img/iphone6_1-78eaba3749.png" />
            </div>
            <div className="im_sec_5">
                <p className="tit">APPLIED AT HUMID PLACES</p>
                <p className="cont">Put the water leakage sensor in the bathroom to detect the water level and efficiently<br />avoid
                    family member falling down on the slippery ground.</p><img alt="Home Alone" id="iphone6_2" src="img/iphone6_2-43bf246624.png" />
            </div>
            <div className="im_sec_6">
                <p>MORE FEATURES</p>
                <div className="content clear">
                    <ul id="icons" className="clear">
                        <li>
                            <div className="icon icon1" />
                            <p>Low power consumption</p>
                        </li>
                        <li>
                            <div className="icon icon2" />
                            <p>Low battery warning</p>
                        </li>
                        <li>
                            <div className="icon icon3" />
                            <p>Tool-free installation</p>
                        </li>
                        <li style={{ marginRight: '0px' }}>
                            <div className="icon icon4" />
                            <p>Split design</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />

        </div>
    )
}


