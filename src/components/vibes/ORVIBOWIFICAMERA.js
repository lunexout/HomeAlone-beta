import React from "react";
import "./ORVIBOWIFICAMERA.css";
import photo1 from "./../../assets/bg_01-51b38d595a.jpg";

import photo2 from "./../../assets/phone_01-ac8ab80fa7.png";

import photo3 from "./../../assets/phone2-b1680b2e66.png";
import photo4 from "./../../assets/phone3-9dc2d3477b.png";
import photo5 from "./../../assets/phone4-3d04649908.png";
import photo6 from "./../../assets/sc_w-4808566ebf.png";

import photo7 from "./../../assets/sc_b-8789132710.png";

// import { Footer } from './../footer/Footer'

export const ORVIBOWIFICAMERA = () => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                    @media screen and (min-width :320px) and (max-width:1013px) {
                        html {
                            font-size: 6px
                        }
                    }
                    
                    @media screen and (min-width :360px) and (max-width:1013px) {
                        html {
                            font-size: 6.5px
                        }
                    }
                    
                    @media screen and (min-width :360px) and (max-height:530px) {
                        html {
                            font-size: 6px
                        }
                    }
                    
                    @media screen and (min-width :414px) and (max-width:1013px) {
                        html {
                            font-size: 7px
                        }
                    }
                    
                    @media screen and (min-width :480px) {
                        html {
                            font-size: 7.5px
                        }
                    }
                    
                    @media screen and (min-width :640px) {
                        html {
                            font-size: 8px
                        }
                    }
                    
                    @media screen and (min-width :1024px) {
                        html {
                            font-size: 12px
                        }
                    } ul{
                        list-style-type: none;
                    }         `,
        }}
      />

      <section className="free_model clear">
        <div className="xo_sec_1">
          <img alt="Home Alone" classclassName="bg_left" src={photo1} />
          <div className="bg_right" />
          <div className="f_content">
            <h1 className="font_sans" style={{ color: "#000000" }}>
              ORVIBO &nbsp;Wi-Fi CAMERA
            </h1>
            <p className="f_p" style={{ color: "#000000" }}>
              ( Black / White )
            </p>
            <p className="cont" style={{ color: "#000000" }}>
              This is an indoor security camera which can not only make your
              home more secure,but also closer to the family
            </p>
          </div>
        </div>
        <div className="xo_sec_2">
          <div className="content">
            <img
              alt="Home Alone"
              classid="p1"
              className="phone animateUp"
              src={photo2}
            />
            <div className="cont">
              <p className="font_sans descrip">
                Captures an expansive area
                <br />
                of your property for high-level security
              </p>
            </div>
          </div>
        </div>
        <div className="xo_sec_3">
          <div className="content">
            <div className="cont">
              <p className="font_sans descrip">
                Always pay close attention to baby
              </p>
            </div>
            <img alt="Home Alone" classid="p2" className="phone" src={photo3} />
          </div>
        </div>
        <div className="xo_sec_4">
          <div className="content">
            <img alt="Home Alone" classid="p3" className="phone" src={photo4} />
            <div className="cont">
              <p className="font_sans descrip">
                Never miss precious time with my family
              </p>
            </div>
          </div>
        </div>
        <div className="xo_sec_5">
          <div className="content">
            <h1 style={{ color: "#000000" }}>Put your home in your phone</h1>
            <p className="font_sans" style={{ color: "#000000" }}>
              Communicate and focus on your family
              <br />
              Do not always leave her alone
            </p>
            <img alt="Home Alone" classid="p4" className="phone" src={photo5} />
          </div>
        </div>
        <div className="xo_sec_6">
          <h1>
            Super night vision，No light pollution，
            <br />
            Shooting at night is as perfect as the day
          </h1>
          <p>
            Built-in IR-Cut
            <br />
            Night shooting is far to six meters
            <br />
            No light pollution
          </p>
        </div>
        <div className="xo_sec_7">
          <p className="tp_title upper">Sound detection，Night security</p>
          <div className="tp_content">
            <div className="tp_item one">
              <div className="ti_circle" />
              <div className="tc_img" />
              <p className="upper">Night vision</p>
            </div>
            <div className="tp_item two">
              <div className="ti_circle" />
              <div className="tc_img" />
              <p className="upper">Motion-activated</p>
            </div>
            <div className="tp_item three">
              <div className="ti_circle" />
              <div className="tc_img" />
              <p className="upper">113° field of view</p>
            </div>
            <div className="tp_item four">
              <div className="ti_circle" />
              <div className="tc_img" />
              <p className="upper">Two-way Audio</p>
            </div>
            <div className="tp_item five">
              <div className="ti_circle" />
              <div className="tc_img" />
              <p className="upper">Cloud &nbsp;recording</p>
            </div>
          </div>
        </div>
        <div className="xo_sec_8" id="xo_sec_8">
          <div className="dt_container clearfix">
            <h1 className="dt_title">Product parameters</h1>
            <div className="dt_content_title">
              <p>Appearance：</p>
              <div className="product clearfix">
                <div style={{ marginRight: "158px" }}>
                  <img alt="Home Alone" src={photo6} />
                  <p>[WHITE SC10W]</p>
                </div>
                <div>
                  <img alt="Home Alone" src={photo7} />
                  <p>[BLACK SC10B]</p>
                </div>
              </div>
              <div className="dt_line" />
            </div>
            <div className="dt_table clearfix">
              <div className="dt_left">
                <p className="dt_item left">
                  Name：<em>Smart WiFi Camera</em>
                </p>
              </div>
              <div className="dt_right">
                <p className="dt_item right">
                  Input：<em>5 VDC @ 1 A</em>
                </p>
              </div>
              <div className="dt_line" />
            </div>
            <div className="dt_table clearfix">
              <div className="dt_left">
                <p className="dt_item left">
                  Infrared LED：
                  <em>10 pcs IR LED offer 6m sight distance in darkness</em>
                </p>
              </div>
              <div className="dt_right">
                <p className="dt_item right">
                  Applicable Temperature：<em>-20° ~ 50°C</em>
                </p>
              </div>
              <div className="dt_line" />
            </div>
            <div className="dt_table clearfix">
              <div className="dt_left">
                <p className="dt_item left">
                  Chip model：<em>Hi3518E V200</em>
                </p>
              </div>
              <div className="dt_right">
                <p className="dt_item right">
                  Size：<em>68*68*125mm</em>
                </p>
              </div>
              <div className="dt_line" />
            </div>
            <div className="dt_table clearfix">
              <div className="dt_left">
                <p className="dt_item left">
                  FPS：<em>30fps (adjustable)</em>
                </p>
              </div>
              <div className="dt_right">
                <p className="dt_item right">
                  Compressed image format：
                  <em style={{ fontSize: "16px" }}>H.264 MP/ HP Level4.0</em>
                </p>
              </div>
              <div className="dt_line" />
            </div>
            <div className="dt_table clearfix">
              <div className="dt_left">
                <p className="dt_item left">
                  Camera Lens：<em>113°</em>
                </p>
              </div>
              <div className="dt_right">
                <p className="dt_item right">
                  <em>/ H.264 / MJPEG/&nbsp;JPEG compress standard</em>
                </p>
              </div>
              <div className="dt_line" />
            </div>
            <div className="dt_table clearfix">
              <div className="dt_left">
                <p className="dt_item left">
                  Night vision ：<em>Switch optical filter auto</em>
                </p>
              </div>
              <div className="dt_right">
                <p className="dt_item right">
                  Resolution：<em>720P/VGA/QVGA</em>
                </p>
              </div>
              <div className="dt_line" />
            </div>
            <div className="dt_table clearfix">
              <div className="dt_left">
                <p className="dt_item left">
                  DDR：<em>128M</em>
                </p>
              </div>
              <div className="dt_right">
                <p className="dt_item right">
                  Audio：<em>Tow way</em>
                </p>
              </div>
              <div className="dt_line" />
            </div>
            <div className="dt_table clearfix">
              <div className="dt_left">
                <p className="dt_item left">
                  <br />
                </p>
              </div>
              <div className="dt_right">
                <p className="dt_item right">
                  Sensors：<em>1/4” OV9732 1MP CMOS</em>
                </p>
              </div>
              <div className="dt_line" />
            </div>
            <div className="dt_line" />
          </div>
        </div>
        <div className="xo_sec_9">
          <h1>LIFE WITH ORVIBO</h1>
          <p>
            You can install more smart home products of &nbsp;ORVIBO ,they can
            all control by "HOME MATE"APP.
            <br />
            Now,bring yours home .Your private customized.
          </p>
        </div>
      </section>
      <section className="pd_buy clear">
        <div className="pdbuy_center">
          <span className="pdbc_buyLeft">IP Camera</span>
          <div className="pdbc_buyRight" />
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};
