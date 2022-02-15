import React from "react";
import "./DoorWindowSensor.css";
// import { Footer } from './../footer/Footer'

export const DoorWindowSensor = ({ match }) => {
  return (
    <div>
      <html>
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
        <section className="free_model clear">
          <div className="dw_sec_1">
            <div className="container">
              <h1>Door &amp; Window Sensor</h1>
            </div>
          </div>
          <div className="dw_sec_2">
            <h1>
              Compatible with ZigBee Home automation system
              <br />
              to transition your home to a Smart Home
            </h1>
            <p className="normal_p">
              ZigBee is the wireless language that harnesses the power of the
              mesh to connect
              <br />
              every product in the network. All your imagination can happen.
            </p>
            <div className="dt_pic" />
          </div>
          <div className="dw_sec_3">
            <h1>
              Remote control to close the windows in a<br />
              suddenly rainy day.
            </h1>
            <p className="normal_p">
              Linkage each appliance to easily control your house.
              <br />
              Save your time and effort and worry.
            </p>
            <div className="dt_pic" />
            <div className="txt clearfix">
              <p style={{ marginRight: "52px" }}>Rainy day</p>
              <p style={{ marginRight: "20px" }}>Window linkage</p>
              <p>Close the window</p>
            </div>
          </div>
          <div className="dw_sec_4">
            <h1>
              Be notified if children access off-limit areas
              <br />
              or someone breaks into unexpected.
            </h1>
            <p style={{ fontSize: "16px" }}>
              Using Orvibo Zigbee motion and window &amp; door sensors with
              wireless camera to monitor your home .
            </p>
            <div className="dt_icons" />
            <div className="txt clearfix">
              <p style={{ marginRight: "30px" }}>Doors/windows opened</p>
              <p style={{ marginRight: "30px" }}>Camera linkage</p>
              <p style={{ marginRight: "20px" }}>Alert triggered</p>
              <p>Have information</p>
            </div>
          </div>
          <div className="dw_sec_5">
            <h1>
              The Door＆Window sensor is designed for a<br />
              quick do-it-yourself installation.
            </h1>
            <p className="normal_p">
              It consists of the sensor and the magnet.
              <br />
              The sensor and the magnet are mounted on the door / window and the
              frame.
              <br />
              When the two parts separately, an alert is triggered.
            </p>
          </div>
          <div className="dw_sec_6">
            <h1>Bring a cost-effective security home.</h1>
            <p className="normal_p">
              The refrigerator door is opened.The door&amp;window sensor will
              remind you.
              <br />
              This will let you save a lot of electricity to buy another
              door&amp;window sensor to save more electricity
            </p>
            <div className="dt_pic" />
          </div>
          <div className="dw_sec_7">
            <h2>
              Our secure Zigbee security system provides you a true peace of
              mind.
            </h2>
            <div className="dn_icons clearfix">
              <div className="dn_icon one">
                <div />
                <p>ZigBee Mini Hub</p>
              </div>
              <div className="dn_icon two">
                <div />
                <p>Door＆Window sensor</p>
              </div>
              <div className="dn_icon three">
                <div />
                <p>Motion Sensor</p>
              </div>
            </div>
            SEE MORE
          </div>
          <div className="dw_sec_8">
            <div className="dt_container clearfix">
              <h1 className="dt_title">Product parameters</h1>
              <div className="dt_line" />
              <div className="dt_content_title">
                <p>Appearance：</p>
                <div className="icon" />
                <div className="dt_line" />
              </div>
              <div className="dt_table">
                <div className="dt_left">
                  <p className="dt_item left">
                    Product Name：<em>Door/Window Sensor</em>
                  </p>
                </div>
                <div className="dt_right">
                  <p className="dt_item right">
                    Wireless frequency：<em>2.4GHz</em>
                  </p>
                </div>
                <div className="dt_line" />
              </div>
              <div className="dt_table">
                <div className="dt_left">
                  <p className="dt_item left">
                    Power supply：<em>CR2032 button battery</em>
                  </p>
                </div>
                <div className="dt_right">
                  <p className="dt_item right">
                    Wireless standard：<em>IEEE 802.15.4</em>
                  </p>
                </div>
                <div className="dt_line" />
              </div>
              <div className="dt_table">
                <div className="dt_left">
                  <p className="dt_item left">
                    Case Material：<em>PC+ABS</em>
                  </p>
                </div>
                <div className="dt_right">
                  <p className="dt_item right">
                    Transmitter dimensions：<em>61.5x30.3x11.7mm</em>
                  </p>
                </div>
                <div className="dt_line" />
              </div>
              <div className="dt_table">
                <div className="dt_left">
                  <p className="dt_item left">
                    Operating environment：<em>-10 - 50°C</em>
                  </p>
                </div>
                <div className="dt_right">
                  <p className="dt_item right">
                    Magnet dimensions：<em>44.8x10.9x7.9mm</em>
                  </p>
                </div>
                <div className="dt_line" />
              </div>
              <div className="dt_table">
                <div className="dt_left">
                  <p className="dt_item left">
                    Infrared Remote Angle：<em>Operating humidity</em>
                  </p>
                </div>
                <div className="dt_right">
                  <p className="dt_item right">
                    Communication protocol：<em>ZigBee HA</em>
                  </p>
                </div>
                <div className="dt_line" />
              </div>
            </div>
          </div>
          <div className="dw_sec_9">
            <h1>LIFE WITH ORVIBO</h1>
            <p className="normal_p">
              You can install more smart home products of &nbsp;ORVIBO ,they can
              all
              <br />
              controlled by "HOMEMATE"APP.
            </p>
            <p className="normal_p" style={{ marginBottom: "10px" }}>
              Now,bring yours home .
            </p>
            <p className="normal_p">Your private customized.</p>
          </div>
        </section>
      </html>
      {/* <Footer /> */}
    </div>
  );
};
