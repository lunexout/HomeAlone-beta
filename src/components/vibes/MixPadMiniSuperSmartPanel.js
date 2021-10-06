import React from 'react'
import './MixPadMiniSuperSmartPanel.css'
import vid1 from './img/sec1.mp4'
import vid2 from './img/sec3_play-39c57c26d7.png'
import vid3 from './img/7OgiAiuKATQA.mp4'
import vid4 from './img/left_1-e79f777a04.png'
import vid5 from './img/left_2-3a905854da.png'
import vid6 from './img/sec4_1.mp4'
import vid7 from './img/curtain.mp4'
import vid8 from './img/sec5_1-44ad8a51b5.png'
import vid9 from './img/sec5_3-3f2cce9470.png'
import vid10 from './img/sec5.mp4'
import vid13 from './img/M7mxwABFyt4A.mp4'
export const MixPadMiniSuperSmartPanel = () => {
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
            <div className="mixpadMiniPage">
                <div className="banner">
                    <div className="text">
                        <p className="f36">One supper smart switch，full house smart</p>
                        <h2 className="f59">MixPad Mini supper smart gateway</h2>
                        <div className="bannerImg"><span className="f20">Touch screen control | Smart lighting | Air conditioning control |
                            Curtain control | Security alarm | Scene control</span></div>
                        <div className="logo"> <img alt="Home Alone" className="lazy img1" data-original="img/banner_logo_1-6c48b347dc.png" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" />
                            <img alt="Home Alone" className="lazy img2" data-original="img/banner_logo_2-83f5ac1a52.png" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" />
                        </div>
                    </div>
                </div>
                <div className="secmini1 secmini bg">
                    <div className=" ">
                        <h2 className="title">Goodbye! Chaotic walls</h2>
                        <p className="desc">Mixpad mini can control the lights, air conditioners, curtains and other home appliances<br />in
                            the room, making the wall more concise and beautiful, replace the complexity of<br />traditional switches.</p>
                    </div>
                    <div className="videoWrapper" />
                    <div className="video"><video loop width="100%" src={vid1} autoPlay preload="auto" muted /></div>
                </div>
                <div className="secmini2 secmini">
                    <div className=" ">
                        <h2 className="title">One MixPad Mini is equal to many smart products</h2>
                        <p className="desc">MixPad Mini is also a smart hub, integrating the functions of different devices: smart gateways,
                            smart switches,<br />air conditioning panels, background music panels, AI voice speakers, etc., which can
                            replace multiple smart single<br />products. The operation is convenient, the interaction is excellent, and the
                            intelligentization and automation of the<br />home are truly realized, bringing a new home life experience.</p>
                    </div>
                </div>
                <div className="secmini3 bg lazy"><video loop width="100%" height="100%" src={vid3} autoPlay preload="auto" muted />
                    <div className="mask">
                        <div className="content">
                            <h2 className="title">Life have another possibility...</h2>
                            <div className="video f20"><span>Watch video</span> <img alt="Home Alone" src={vid2} /></div>
                        </div>
                    </div>
                </div>
                <div className="secmini4">
                    <h2 className="title">Free grouping, set scene mode</h2>
                </div>
                <div className="secmini4_1 secmini">
                    <div className="left">
                        <div className="content  ">
                            <h2 className="title">Full house lighting<br />one-key control</h2>
                            <p className="desc">One panel can control multiple lights, turn<br />off all lights with one button, and no
                                need<br />to switch one by one.</p>
                        </div> <img alt="Home Alone" className="active" src={vid4} /> <img alt="Home Alone" className="img1 whiteImg" src={vid5} />
                    </div>
                    <div className="right">
                        <div className="right_1" />
                        <div className="videoWrapper" />
                        <div className="video"><video loop width="100%" src={vid6} id="secmini4_1_video" preload="auto" muted /></div>
                    </div>
                </div>
                <div className="secmini4_2">
                    <div className="mask">
                        <div className="content">
                            <div className=" ">
                                <h2 className="title">Full house curtains<br />open and close freely</h2>
                                <p className="desc">In the morning, the curtains are automatically<br />opened slowly at regular intervals.</p>
                            </div>
                        </div>
                        <div className="toastsecmini">
                            <div className="toast toast1  ">Open curtains</div>
                            <div className="toast toast2   delay-1">OK</div>
                        </div>
                    </div>
                    <div className="video"><video loop width="100%" src={vid7} id="curtain" preload="auto" muted /></div>
                </div>
                <div className="secmini4_4">
                    <div className="secmini">
                        <div className=" ">
                            <h2 className="title">Air conditioning control, remote control</h2>
                            <p className="desc">It completely replaces all air conditioner panels and remote controls in the home,
                                and<br />supports all air conditioners to achieve precise control of on-off and temperature.</p>
                        </div>
                    </div>
                    <div className="temperature">
                        <p className="one">Indoor temperature：30℃</p>
                        <p className="two"><span className="num">30</span><sup className="unit">℃</sup></p>
                        <p className="three">
                        </p><div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div className="active" />
                        <p />
                    </div>
                    <div className="cold" />
                    <div className="guide" />
                </div>
                <div className="secmini5-1 secmini">
                    <h2 className="title  ">Experience the convenience<br />brought by AI anytime, anywhere</h2>
                </div>
                <div className="secmini5">
                    <div className="content">
                        <div className="case case1 caseText">
                            <div className="txtWrapper">
                                <p className="title  ">Before going out<br />One key operation</p>
                                <p className="desc  ">Easy-to-operate interface.</p>
                            </div>
                            <div> <img alt="Home Alone" src={vid8} /></div>
                        </div>
                        <div className="case case2 caseText">
                            <div> <img alt="Home Alone" src={vid9} /></div>
                            <div className="txtWrapper">
                                <p className="title  ">Mobile APP<br />remote control outdoor</p>
                                <p className="desc  ">In summer, turn on the air conditioner<br />remotely,Experience
                                    comfortimmediately<br />when you arrive home.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-original="img/sec5-0225d4103d.png" className="secmini7 secmini lazy">
                    <h2 className="title  ">Flash-dog,<br />Discover smart appliances at home automatically</h2>
                    <p className="desc  ">Built-in WiFi and Bluetooth，Realize the intelligent scene linkage of the full
                        house<br />through touch screen interaction.</p>
                    <p className="yellow_1 circle delay_1">Sweeping<br />robot</p>
                    <p className="yellow_2 circle delay_1">Air-conditioning<br />fan</p>
                    <p className="yellow_3 circle delay_1">Air purifier</p>
                    <p className="yellow_5 circle delay_2">Drying<br />rack</p>
                    <p className="yellow_6 circle delay_2">Washing<br />machine</p>
                    <p className="gray_1 circle delay_3">Power<br />window</p>
                    <p className="gray_2 circle delay_3">Dishwasher</p>
                    <p className="gray_3 circle delay_3">TV set</p>
                    <p className="gray_4 circle delay_4">Heater</p>
                    <p className="gray_5 circle delay_4">Refrigerator</p>
                    <p className="gray_6 circle delay_4">Water<br />heater</p>
                    <div className="videoWrapper" />
                    <div className="video"><video loop width="100%" src={vid10} autoPlay preload="auto" muted /></div>
                </div>
                <div className="secmini8 secmini">
                    <div className="content  ">
                        <h2 className="title">New interactive interface is beautiful and practical</h2>
                        <p className="desc">The brand-new HOME AI 2.0 , comprehensively upgraded colors, graphics, interactions and dynamic
                            effects ensure<br />that it is not only beautiful, but also greatly reduces the difficulty of use. Children and
                            elderly people can also<br />easily use it, satisfying the use of the whole family.</p>
                        <div className="video f20"><span>Watch video</span></div>
                    </div>
                </div>
                <div className="secmini3 bg lazy"><video loop width="100%" height="100%" src={vid13} autoPlay preload="auto" muted /></div>
                <div className="secmini8-1" />




            </div>
        </div>
    )
}
