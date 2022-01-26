import React from "react";
import "./TemperatureHumiditySensor.css";
import photo1 from "./img/iphone_1-6c94c7034c.png";

import photo2 from "./img/iphone_2-fcc309c0d3.png";

// import { Footer } from './../footer/Footer'

import photo3 from "./img/temp_img-330bd74bfd.png";
import photo4 from "./img/product_small-a85dc41eac.png";
import photo5 from "./img/temp_img2-fb38feef7e.png";
import photo6 from "./img/product_small-a85dc41eac.png";

import photo7 from "./img/arrowUp-28992f3e82.svg";
export const TemperatureHumiditySensor = () => {
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
                    }        `,
        }}
      />
      <section className="temp_sec_1 first_page">
        <div className="fp_content">
          <p className="tit">
            TEMPERATURE &amp;
            <br />
            HUMIDITY SENSOR
          </p>
          <p>
            Real-time detection and viewing on the phone
            <br />
            Link with air conditioner to adjust the temperature automatically
          </p>
        </div>
      </section>
      <section className="temp_sec2 clear">
        <div className="bg_shadow" style={{ filter: "grayscale(1)" }}>
          COMMON ISSUES IN OUR DAILY LIFE
        </div>
        <div className="temp_sec2_bg1 bg" style={{ filter: "grayscale(1)" }}>
          <div className="shadow">
            <p>
              Chest&nbsp;distress and&nbsp;shortness&nbsp;of
              <br />
              breath caused by high
              <br />
              temperature?
            </p>
          </div>
        </div>
        <div className="temp_sec2_bg2 bg" style={{ filter: "grayscale(1)" }}>
          <div className="shadow">
            <p>
              Didn't replace the
              <br />
              dehumidifier in time?
            </p>
          </div>
        </div>
        <div className="temp_sec2_bg3 bg" style={{ filter: "grayscale(1)" }}>
          <div className="shadow" style={{}}>
            <p>
              Got a cold as the air conditioner
              <br />
              temperature is too low?
            </p>
          </div>
        </div>
        <div className="temp_sec2_bg4 bg" style={{ filter: "grayscale(1)" }}>
          <div className="shadow">
            <p>
              Kid got nosebleed as
              <br />
              the air indoor is too dry?
            </p>
          </div>
        </div>
      </section>

      <section className="temp_sec4">
        <p className="tit">
          DETECT THE INDOOR TEMPERATURE AND
          <br />
          HUMIDITY IN A REAL TIME,
        </p>
        <p className="cont">
          Link the sensor with home appliances to adjust the environment
          according to the detection. For
          <br />
          example, enable the humidifier if it detects the humidity is lower
          than the comfortable range.
        </p>
        <img alt="Home Alone" id="iphone6_1" src={photo1} />
      </section>
      <section className="temp_sec5">
        <p className="tit">
          LINK WITH HOME APPLIANCES TO MAKE YOUR HOME
          <br />
          SMARTER AND COZIER
        </p>
        <p className="cont">
          Put this sensor in the bedroom, adjust the air conditioner to set at
          appropriate temperature,
          <br />
          create more comfortable indoor environment, and take care of every
          family member.
        </p>
        <img alt="Home Alone" id="iphone6_2" src={photo2} />
      </section>
      <section className="temp_sec6">
        <p className="tit">CARE ABOUT DETAILS IN YOUR DAILY LIFE</p>
        <div className="temp_sec6_left">
          <p className="s_p">
            Automatically open the air conditioner when it detects the
            temperature is high in the living room.
          </p>
          <img alt="Home Alone" className="app_show" src={photo3} />
          <div className="ani_img">
            <img
              alt="Home Alone"
              className="pro"
              src={photo4}
              style={{ left: "49px", top: "52px" }}
            />
          </div>
        </div>
        <div className="temp_sec6_right">
          <p className="s_p">
            Remind you to replace the dehumidifier when it detects the humidity
            is high in your wardrobe.
          </p>
          <img alt="Home Alone" className="app_show" src={photo5} />
          <div className="ani_img">
            <img
              alt="Home Alone"
              className="pro"
              src={photo6}
              style={{ left: "49px", top: "52px" }}
            />
          </div>
        </div>
      </section>
      <section className="temp_sec7">
        <p>MORE FEATURES</p>
        <div className="content">
          <ul id="icons" className="clear">
            <li>
              <div className="icon icon1" />
              <p>Low power consumption</p>
            </li>
            <li style={{ marginRight: "66px" }}>
              <div className="icon icon2" />
              <p>Low battery warning</p>
            </li>
            <li>
              <div className="icon icon3" />
              <p>Tool-free installation</p>
            </li>
            <li style={{ marginRight: 0 }}>
              <div className="icon icon4" />
              <p>APP alarm</p>
            </li>
          </ul>
        </div>
      </section>
      <div className="fixed">
        <div
          className="getTop"
          id="getTop"
          style={{ right: "0px", display: "none" }}
        >
          <img alt="Home Alone" src={photo7} />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
