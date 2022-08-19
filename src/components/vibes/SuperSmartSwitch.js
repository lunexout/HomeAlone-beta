import React from "react";
import "./SuperSmartSwitch.css";

// import photo1 from "./../../assets/banner_logo-4933e94378.png";
import photo2 from "./../../assets/sec1_1-2b5c2c26ca.png";
import photo3 from "./../../assets/sec1_2-4ec665530e.png";
import photo4 from "./../../assets/sec1_3-d2d79be704.png";
import photo5 from "./../../assets/sec1_4-5fb30626aa.png";
import photo6 from "./../../assets/sec2_logo-fb4fb7c374.png";
import photo7 from "./../../assets/sec2_text-90eb107c2a.png";
import photo8 from "./../../assets/sec5_1-a767705051.png";
import photo9 from "./../../assets/sec5_2-02f32cefdd.png";
import photo11 from "./../../assets/sec6_1-9453ebf6fd.png";
import photo12 from "./../../assets/sec6_3_en-3f2cce9470.png";
import photo13 from "./../../assets/sec7_1-81778a3b40.png";
import photo14 from "./../../assets/sec7_2-3f12abdf60.png";
import photo15 from "./../../assets/sec7_3-1471fdabc8.png";
import photo16 from "./../../assets/sec7_4-09edd34032.png";

// import { Footer } from './../footer/Footer'

export const SuperSmartSwitch = () => {
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
                            font-size: calc(83.34vw / 16);
                        }
                    }        `,
        }}
      />
      <div className="switch__container">
        <div className="banner">
          <div className="content">
           
            <div className="banner_title">
              <br />
            </div>
            <div className="banner_desc"></div>
          </div>
        </div>
        <div className="sec_super1">
          <div>
            <img alt="Home Alone" src={photo2} />
            <p>
              Beautiful to Simple
              <br />
              High-end design
            </p>
          </div>
          <div>
            <img alt="Home Alone" src={photo3} />
            <p>
              Three Colors Available
              <br />
              Artistic Life
            </p>
          </div>
          <div>
            <img alt="Home Alone" src={photo4} />
            <p>
              Full House Lighting
              <br />
              Remote control
            </p>
          </div>
          <div>
            <img alt="Home Alone" src={photo5} />
            <p>
              Original MixCtrl™
              <br />
              Free definition of key functions
            </p>
          </div>
        </div>
        <div className="sec_super2">
          <div className="content sec show">
            <h2 className="title">
              Beautiful to Simple
              <br />
              Match the extraordinary taste
            </h2>
            <p className="desc">
              Combine multiple design styles
              <br />
              Uniquely designed MixSwitch.
            </p>
          </div>
          <div className="img1">
            <img src={photo6} alt="" />
          </div>
          <div className="img2">
            <img src={photo7} alt="" />
          </div>
        </div>
        <div className="sec_super5-1 sec">
          <h2 className="title">
            Free definition, intelligent life controlled by one button
          </h2>
          <p className="desc">
            With other smart devices, you can freely define richer and more
            practical scene-based controls according to your living habits,
            pioneering the realization of
            <br />a switch that meets the dual functions of basic lighting and
            scene panel control at the same time, bringing "wireless"
            possibilities to smart life.
          </p>
        </div>
        <div className="sec_super5">
          <img src={photo8} alt="" />{" "}
          <img className="active" src={photo9} alt="" />
          <div className="sh-one">
            <div className="sh-two" />
            <div className="sh-three" />
            <div className="sh-four" />
            <div className="sh-five" />
            <div className="sh-six" />
          </div>
        </div>

        <div className="sec_super6-1 sec">
          <h2 className="title">
            Experience the convenience brought by AI anytime, anywhere
          </h2>
        </div>
        <div className="sec_super6">
          <div className="content">
            <div className="case case1 caseText">
              <div className="txtWrapper">
                <p className="title">
                  Before going out
                  <br />
                  One key operation
                </p>
                <p className="desc">Easy-to-operate interface.</p>
              </div>
              <div>
                <img src={photo11} alt="" />
              </div>
            </div>
            <div className="case case2 caseText">
              <div>
                <img src={photo12} alt="" />
              </div>
              <div className="txtWrapper">
                <p className="title">
                  Mobile APP remote
                  <br />
                  control outdoor
                </p>
                <p className="desc">
                  In summer, turn on the air conditioner
                  <br />
                  remotely,Experience comfort
                  <br />
                  immediately when you arrive home.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sec_super7-1 sec">
          <h2 className="title">
            Moveable remote control switch makes intelligence everywhere
          </h2>
          <p className="desc">
            Small and exquisite smart remote control switch, six custom buttons,
            support for the free combination of smart items and scene
            <br />
            modes, no wiring, free placement, and you want to experience
            efficient and comfortable smart home life.
          </p>
        </div>
        <div className="sec_super7">
          <div className="content sec">
            <div className="sec_super7_1">
              <div>
                <b className="triangle-left" />
                <span>Bedside</span>
              </div>
              <img src={photo13} alt="" />
            </div>
            <div className="sec_super7_2 delay-2">
              <div>
                <b className="triangle-up" />
                <span>Coffee table</span>
              </div>
              <img src={photo14} alt="" />
            </div>
          </div>
          <div className="content">
            <div className="sec_super7_3">
              <div>
                <b className="triangle-up" />
                <span>Desktop</span>
              </div>
              <img src={photo15} alt="" />
            </div>
            <div className="sec_super7_4 delay-2">
              <div>
                <b className="triangle-down" />
                <span>Wall</span>
              </div>
              <img src={photo16} alt="" />
            </div>
          </div>
          <div className="after">
            * Battery life of remote control panel: more than one year. (Under
            normal temperature and humidity)
          </div>
        </div>
        <div className="sec_super8 sec">
          <h2 className="title">0.1mm Frame</h2>
          <p className="desc">
            The millimeter frame is a special installation accessory for
            MixSwitch and MixPad Mini used by ORVIBO. The
            <br />
            size is accurate to 0.1 mm to ensure uniform installation gaps and
            exquisite beauty.
          </p>
          <div className="sec_super8_ani">
            <div className="sec_super8_1" />
            <div className="sec_super8_2" />
            <div className="sec_super8_3" />
          </div>
        </div>
        <div className="sec_super9">
          <div className="sec_super">
            <h2 className="title">Free combination, free match</h2>
          </div>
        </div>
        <div className="sec_super10">
          <div className="sec_super">
            <h2 className="title">
              Hardcore black technology once again breaks the life limit
            </h2>
            <p className="desc">
              Using RelayPro-Tech ™ patented technology, it has passed the 2000V
              lightning surge test to effectively protect the relay; the number
              <br />
              of opening and closing times exceeds 60,000, the service life
              exceeds 15 years, and the industrial-grade standards are used to
              <br />
              create household products.
            </p>
          </div>
          <div className="content sec">
            <div className="product">
              <div className="icon four sec10animated" />
              <div className="icon five sec10animated" />
              <div className="icon six sec10animated" />
              <div className="icon one sec10animated" />
              <div className="icon two sec10animated" />
              <div className="icon three sec10animated" />
              <div className="icon seven" />
            </div>
            <div className="animated fadeInUp line-delay-1">
              <div className="line1 line">
                <p>
                  Fully isolated
                  <br />
                  Structural design
                </p>
              </div>
              <div className="line2 line">
                <p>
                  Fire-proof level
                  <br />
                  Up to UL94V-0
                </p>
              </div>
              <div className="line3 line">
                <p>
                  Covestro fire protection
                  <br />
                  PC material
                </p>
              </div>
              <div className="line4 line">
                <p>
                  National CQC
                  <br />
                  safety certification
                </p>
              </div>
            </div>
          </div>
          <div className="after">
            The above data is obtained through ORVIBO's internal experimental
            test, the actual use
            <br />
            effect may be slightly different due to environmental factors.
          </div>
        </div>
        <div className="sec_super11">
          <div className="sec_super">
            <h2 className="title">
              Equipped with Zigbee 3.0 protocol
              <br />
              Large apartment wireless linkage is super stable
            </h2>
            <p className="desc">
              The Zigbee 3.0 protocol allows faster transmission speed,
              increased stability, and a smooth experience
              <br />
              with almost zero delay. It can work stably even if the network is
              disconnected, and meets the efficient
              <br />
              connection of multiple devices.
            </p>
          </div>
          <div className="logo sec">
            <div className="animated fadeInUp delay-1">
              <img alt="Home Alone" src="img/sec11_1-2d98852cf6.png" />
              <p>
                More stable
                <br />
                network
              </p>
            </div>
            <div className="animated fadeInUp delay-2">
              <img alt="Home Alone" src="img/sec11_2-f7f3d08ace.png" />
              <p>
                Faster
                <br />
                response
              </p>
            </div>
            <div className="animated fadeInUp delay-3">
              <img alt="Home Alone" src="img/sec11_3-c9d4887656.png" />
              <p>
                Lower power
                <br />
                consumption
              </p>
            </div>
            <div className="animated fadeInUp delay-4">
              <img alt="Home Alone" src="img/sec11_4-71b2624ffe.png" />
              <p>
                Higher
                <br />
                security
              </p>
            </div>
            <div className="animated fadeInUp delay-5">
              <img alt="Home Alone" src="img/sec11_5-82a8115fd7.png" />
              <p>
                Higher openness
                <br />
                and compatibility
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
