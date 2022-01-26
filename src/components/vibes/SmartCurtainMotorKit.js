import React from "react";
import "./SmartCurtainMotorKit.css";

// import { Footer } from './../footer/Footer'

export const SmartCurtainMotorKit = () => {
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
      <section className="sec1">
        <h1 style={{ color: "#000000" }}>SMART CURTAIN MOTOR KIT</h1>
        <p>
          Remote Control | Voice Control | Silent Design | Easy Installation
        </p>
      </section>
      <section className="sec2">
        <div className="block1">
          <h2>LIFE COULD BE SO SMART WITH VOICE CONTROL</h2>
          <p>
            Already compatible with Amazon Alexa and Google Assistant.
            <br />
            Speak out the commands to easily control the curtains as your wish.
          </p>
          <div className="pic" />
          <div className="view_port">
            <div className="content">
              <h2>“Hey Google, turn on the curtain in the bedroom”</h2>
              <h2>“Alexa, turn off the curtain in the bedroom”</h2>
              <h2>“OK Google, turn off the curtain in the living room”</h2>
              <h2>“Hey Google, turn on the curtain in the bedroom”</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="sec_add1">
        <h2>A COMPLETE CURTAIN MOTOR KIT FOR SMART LIFE</h2>
        <p>
          Includes the curtain motor, track, remote controller and lithium
          battery.
        </p>
      </section>
      <section className="sec3">
        <h2>STRENGTH AND IMPROVEMENT</h2>
      </section>
      <section className="sec5">
        <div className="container">
          <h2>
            MULTIPLE CONVENIENT AND ENERGY-SAVING WAYS TO CONTROL THE CURTAINS
          </h2>
          <div className="right">
            <p className="title">One-click Remote Control</p>
            <p className="txt">
              Support phone app and remote controller( &lt;30m) to open
              <br />
              and close the curtains by one click.
            </p>
          </div>
        </div>
      </section>
      <section className="sec6">
        <div className="container">
          <div className="icon1 icon" />
          <div className="icon2 icon" />
          <div className="text">
            <p className="title">Soft Touch Start</p>
            <p className="txt">
              Pull the curtain down gently, smart curtain motor will be
              activated
              <br />
              to work, and support manually control when power off.
            </p>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};
