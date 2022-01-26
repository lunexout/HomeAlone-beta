import React from "react";
import "./MixPadSAllinoneGatewayPanel.css";
// import { Footer } from './../footer/Footer'

export const MixPadSAllinoneGatewayPanel = () => {
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
      <div className="page_mixpads">
        <div
          className="banner lazy sec1"
          data-original="https://static.orvibo.com/guanwang_second/front/en/images/mixpads/sec1-84b3c35c9f.jpg"
          style={{
            backgroundImage:
              'url("https://static.orvibo.com/guanwang_second/front/en/images/mixpads/sec1-84b3c35c9f.jpg")',
          }}
        >
          <div className="w">
            <div className="subtitle white">
              MixPad S All-in-one Gateway Panel
            </div>
            <div className="title white">One Panel All Smart</div>
          </div>
        </div>
        <div
          className="sec2 banner lazy"
          data-original="https://static.orvibo.com/guanwang_second/front/en/images/mixpads/sec2-7c1899be4c.jpg"
          style={{
            backgroundImage:
              'url("https://static.orvibo.com/guanwang_second/front/en/images/mixpads/sec2-7c1899be4c.jpg")',
          }}
        >
          <div className="title white">
            All-in-one Panel to Control Smart Devices
            <br />
            And Scenes With New Interaction Way
          </div>
          <div className="desc white op8">
            Smart hub is the gateway of the smart home system, connect multiple
            devices and
            <br />
            build the stable and secure home network.
          </div>
        </div>

        <div className="sec5mixp banner">
          <div className="title black">
            The Full House Smart Home Operating System HOME AI 2.0
          </div>
          <div className="desc black">
            The new AI image, comprehensively upgraded colors, graphics,
            interaction and motion
            <br />
            effects, create the ultimate home visual interaction.
          </div>
          <div className="video w">
            <div className="bg" id="mixpads">
              <img
                src="https://static.orvibo.com/guanwang_second/front/images/2019/conference/8-aa50159609.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className="sec7 banner lazy"
          data-original="https://static.orvibo.com/guanwang_second/front/en/images/mixpads/sec7-f9905e388e.jpg"
        >
          <div className="title black">
            Actively Search Smart Devices For
            <br />
            Quick Network Configuration
          </div>
          <div className="desc black">
            The MixPad S is equipped with a “Flash Dog”function, which can
            automatically discover
            <br />
            new smart devices at home, realize one-step quick network
            configuration, and enable the
            <br />
            smart devices at home to be paired with the MixPad S.
          </div>
          <div className="video">
            <video
              poster="https://static.orvibo.com/guanwang_second/front/en/images/mixpads/video-9475d433e4.jpg"
              loop
              width="100%"
              src="http://1251222210.vod2.myqcloud.com/8f4239b1vodgzp1251222210/9f628f4952858907977/CkodF93JTAEA.mp4"
              autoPlay
              preload="auto"
              muted
            />
          </div>
        </div>
      </div>
      <div className="install">
        <div className="block">
          <div className="title">Specifications</div>
          <ul className="list">
            <li>
              Main control: Quad-core ARM Cortex-A35 architecture processor
            </li>
            <li>Storage combination: 2GB RAM + 8GB ROM</li>
            <li>Display: 4 inches, 480 * 480P resolution</li>
            <li>
              Touch layer: multi-touch capacitive screen, AF hydrophobic
              anti-fouling anti-fingerprint coating
            </li>
            <li>Speaker: AAC 1813 speaker</li>
            <li>
              Microphone: dual microphone array, symmetrical noise reduction, 7
              meters far-field recognition
            </li>
            <li>Light sensor: Screen brightness adapts to ambient light</li>
            <li>
              Distance sensor: automatic wake-up, 10 ~ 15cm gesture sensing
            </li>
            <li>Body material: V0 fire-resistant PC + 30% glass fiber</li>
            <li>Temperature sensor accuracy: ± 0.5 ℃</li>
            <li>Humidity sensor accuracy: ± 0.1%</li>
            <li>Power supply: 220V zero fire wire power supply</li>
            <li>Number of supported devices: 350</li>
            <li>Number of supported scenarios: unlimited</li>
            <li>Support network standards: Wi-Fi, Bluetooth, zigbee3.0</li>
            <li>Zigbee networking: built-in gateway</li>
          </ul>
        </div>
        <div className="block">
          <div className="title">Functions</div>
          <ul className="list">
            <li>Button function customization</li>
            <li>Fine control of individual devices</li>
            <li>Scene-based multi-device control</li>
            <li>Device scene local control</li>
            <li>Voice control（Alexa，Google home，Siri）</li>
            <li>ZigBee networking</li>
          </ul>
          <ul className="list">
            <li>Intelligent temperature and humidity detection</li>
            <li>Intelligent detection of ambient light</li>
            <li>Outdoor environmental detection</li>
            <li>Arming and disarming</li>
            <li>Password Disarm</li>
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
