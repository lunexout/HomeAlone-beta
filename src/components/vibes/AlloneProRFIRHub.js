import React from 'react'
import './AlloneProRFIRHub.css'
import photo1 from './img/en_bg2_01-6c3424cdf2.jpg'
import photo2 from './img/bg2_02-240f11ec25.jpg'
import PHOTO3 from './img/bg2_03-c21368682d.jpg'





export const AlloneProRFIRHub = () => {
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
                    } 
                    ul{
                        list-style-type: none;
                    }       `
                }}
            />
            <section className="free_model clear">
                <div className="rf_sec1">
                    <div className="content">
                        <h1>ALLONE PRO RF SMART HUB</h1>
                        <p className="sub_tit">SMART RF HUB AND IR REMOTE CONTROLLER</p>
                        <hr style={{ marginLeft: 0 }} />
                        <p>RF 433 Protocol | IR Remote Control | APP Remote Control</p>
                    </div>
                </div>
                <div className="rf_sec2">
                    <div className="content">
                        <p>THREE STEPS TO MAKE YOUR SMART LIFE COME TRUE</p>
                        <ul className="clear">
                            <li>
                                <div className="icon icon1" />
                                <p>SMART HUB</p>
                            </li>
                            <li>
                                <div className="icon icon6" />
                            </li>
                            <li>
                                <div className="icon icon2" />
                                <p>YOUR DEVICES</p>
                            </li>
                            <li>
                                <div className="icon icon6" />
                            </li>
                            <li>
                                <div className="icon icon3" />
                                <p>APP</p>
                            </li>
                            <li>
                                <div className="icon icon6" />
                            </li>
                            <li>
                                <div className="icon icon4" />
                                <p>ORVIBO IOT CLOUD</p>
                            </li>
                            <li>
                                <div className="icon icon7" />
                            </li>
                            <li>
                                <div className="icon icon5" />
                                <p style={{ fontSize: '16px', textAlign: 'left' }}>SMART HOME</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="rf_sec3">
                    <ul className="clear">
                        <li><img src={photo1} alt="智能家居控制器" />
                            <div>
                                <div className="num num1" />
                                <p className="title">CONTROL MULTIPLE RF DEVICES OF DIFFERENT BRANDS</p>
                                <p>Connect multiple third-party RF products of different brands, and provide more competitive
                                    smart home solution to users.</p>
                            </div>
                        </li>
                        <li><img src={photo2} alt="Allone Pro多功能智能主机" />
                            <div>
                                <div className="num num2" />
                                <p className="title">REAL-TIME UPDATION OF RF PROTOCOLS ON CLOUD</p>
                                <p>Supports many of RF433 products in the market including curtain motors, lighting switches,
                                    clothes hanger, etc., and improved the security by RF encryption.</p>
                            </div>
                        </li>
                        <li style={{ marginRight: 0 }}><img src={PHOTO3} alt="RF智能主机" />
                            <div>
                                <div className="num num3" />
                                <p className="title">SUPPORT 95% IR HOME APPLIANCES IN THE MARKET</p>
                                <p>Support most of the IR home appliances in the market including A/C, TV, fan, projector, set
                                    top box, etc., and support 8000+ different models of IR devices.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="rf_sec8">
                    <h2>LIFE COULD BE SO EASY WITH VOICE CONTROL</h2>
                    <p>Support Amazon Alexa and Google Home to enable the voice control on the IR home<br />appliances (TV, A/C)
                        and the curtains.</p>
                </div>
                <div className="oi_six">
                    <div className="os_container">
                        <h2>STANDARDIZED AND CUSTOMIZABLE SMART HOME APP</h2>
                        <p className="os_txt">HomeMate APP from ORVIBO has user-friendly interactions and functions. By
                            settings,<br />users can experience kinds of smart scenes in daily life. And with the open
                            API,<br />HomeMate is available for manufacturers to customize their own APP.</p>
                        <div className="os_phone animate" />
                        <div className="os_left">
                            <div className="os_line1 animate" />
                            <div className="os_line2 animate" />
                            <div className="os_line3 animate" />
                            <div className="os_line4 animate" />
                            <div className="os_line5 animate" />
                            <div className="os_line6 animate" />
                            <div className="os_line7 animate" />
                            <div className="os_icon1 animate" />
                            <div className="os_icon2 animate" />
                            <div className="os_icon3 animate" />
                            <div className="os_icon4 animate" />
                        </div>
                        <div className="os_right">
                            <div className="os_line1 animate" />
                            <div className="os_line2 animate" />
                            <div className="os_line3 animate" />
                            <div className="os_line4 animate" />
                            <div className="os_line5 animate" />
                            <div className="os_line6 animate" />
                            <div className="os_line7 animate" />
                            <div className="os_icon1 animate" />
                            <div className="os_icon2 animate" />
                            <div className="os_icon3 animate" />
                            <div className="os_icon4 animate" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}