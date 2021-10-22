import React from 'react'
import './MagicCubeWifiIRController.css'

import photo1 from './img/xiaofang_en.jpg'
import photo2 from './img/xf_wind.png'
import photo3 from './img/xf_light.png'
import photo4 from './img/xf_logo_default.png'
import photo5 from './img/xf_logo_active.png'
import photo6 from './img/xf_dot.png'
import photo7 from './img/xf_circle.png'
import photo8 from './img/xf_music.png'
import photo9 from './img/new1-73e9d8f842.jpg'
import photo10 from './img/new2-5142243776.jpg'
import { Footer } from './../footer/Footer'



export const MagicCubeWifiIRController = () => {
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
                  }        `
        }}
      />
      <section className="free_model clear">
        <section className="xf_page xf_first_en">
          <div className="xf_container">
            <p className="xfe_title">SMART WIFI IR BLASTER MAGIC CUBE</p>
            <p className="xfe_txt">Remote control almost IR home appliances via smart phone.<br />It`s time to get rid of
              all kinds of controllers in your house.</p>
          </div>
        </section>
        <section className="xf_page xf_second_en">
          <div className="xfe_container">
            <p className="xc_title">ONE SMART PHONE CAN CONTROL MOST OF IR APPLIANCES</p>
            <p className="xc_txt">Support more than 8000 different brands of IR appliances<br />(TV, A/C, Fan, TV Box,
              Projector, DVD, Home Speaker, etc..) in the market.</p>
            <div className="xc_content"><img alt="Home Alone" src={photo1} />
              <div className="xc_air"><img alt="Home Alone" src={photo2} className="xa_wind" /> &nbsp; &nbsp; &nbsp; &nbsp; <img alt="Home Alone" src={photo3} className="xa_light" />
              </div>
              <div className="xc_tv"><img alt="Home Alone" src={photo4} className="xt_logo" /> &nbsp; &nbsp; &nbsp; &nbsp; <img alt="Home Alone" src={photo5} className="xt_logo_active" /> &nbsp; &nbsp; &nbsp; &nbsp; <img alt="Home Alone" src={photo3} className="xt_light" />
              </div>
              <div className="xc_stb"><img alt="Home Alone" src={photo6} className="xs_dot" /> &nbsp; &nbsp; &nbsp; &nbsp; <img alt="Home Alone" src={photo7} className="xs_circle" /></div>
              <div className="xc_box"><img alt="Home Alone" src={photo3} className="xb_light" /> &nbsp; &nbsp; &nbsp; &nbsp; <img alt="Home Alone" src={photo7} className="xb_circle" /></div>
              <div className="xc_sound">
                <div className="xs_left"><img alt="Home Alone" src={photo8} className="xs_music" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img alt="Home Alone" src={photo3} className="xs_light" /></div>
                <div className="xs_right"><img alt="Home Alone" src={photo8} className="xs_music" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img alt="Home Alone" src={photo3} className="xs_light" /></div>
              </div>
              <div className="xc_fan"><img alt="Home Alone" src={photo2} className="xf_wind" /> &nbsp; &nbsp; &nbsp; &nbsp; <img alt="Home Alone" src={photo6} className="xf_dot" />
              </div>
            </div>
            <div className="mouse_img" />
          </div>

        </section>
        <br /><br /><br /><br />
        <section className="xf_page xf_third xf_third_en">
          <div className="xf_container">
            <p className="xt_title">WE ARE IMPROVING YOUR WAY OF LIFE.</p>
            <p className="xt_txt">A magic cube instead of all your remote controllers</p>
            <div className="xt_content">
              <div className="xc_item one">
                <div />
                <p>Phone Control</p>
              </div>
              <div className="xc_item two">
                <div />
                <p>Smart Timer</p>
              </div>
              <div className="xc_item four">
                <div />
                <p>Scene Set</p>
              </div>
              <div className="xc_item five">
                <div />
                <p>Code-storage</p>
              </div>
            </div>
          </div>
        </section><img alt="Home Alone" src={photo9} style={{ width: '100%', height: 'auto' }} /> <img alt="Home Alone" src={photo10} style={{ width: '100%', height: 'auto', marginTop: '-4px' }} />
        <section className="xf_page xf_eighth" style={{ marginTop: '-4px' }}>
          <div className="xf_container">
            <p className="xe_title">CONCISED DESIGN AND POWERFUL FUNCTION</p>
            <div className="xe_icon" />
            <div className="xe_items">
              <div className="xe_item one">
                <div />
                <p className="xi_title">Ⅰ</p>
                <p className="xi_txt">With the scattering cone design to powerful 360°infrared signaling.</p>
              </div>
              <div className="xe_item two">
                <div />
                <p className="xi_title">Ⅱ</p>
                <p className="xi_txt">Support more than 8000 different brands of IR appliances(TV, A/C, fan, TV box,
                  DVD, etc..) in the market.</p>
              </div>
              <div className="xe_item three">
                <div />
                <p className="xi_title">Ⅲ</p>
                <p className="xi_txt">uper power infrared transmitter,launch distance at least 10 metres.</p>
              </div>
              <div className="xe_item four">
                <div />
                <p className="xi_title">Ⅳ</p>
                <p className="xi_txt">The top shell adopts special infrared transmitting material,Transmittance as
                  high as 95%,stronger signal.</p>
              </div>
              <div className="xe_item five">
                <div />
                <p className="xi_title">Ⅴ</p>
                <p className="xi_txt">Open the home theater mode,all linkage appliances automatically open.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="xf_page xf_ninth xf_ninth_en">
          <div className="xf_container">
            <p className="xn_title">EASY TO USE,EASY TO INSTALL.</p>
            <div className="xn_item one">
              <div />
              <p>Download HomeMate APP</p>
            </div>
            <div className="xn_line" />
            <div className="xn_item two">
              <div />
              <p>Power-on And Configure</p>
            </div>
            <div className="xn_line" />
            <div className="xn_item three">
              <div />
              <p>Controlling Appliance</p>
            </div>
          </div>
        </section>
        <section className="xf_page xf_ten">
          <div className="xf_container">
            <p className="xt_title">PRODUCT PARAMETERS</p>
            <div className="xt_line" />
            <div className="xt_content_title">
              <p>Appearance:</p>
              <div className="icon">
                <div />
                <p>「 CT10 」</p>
              </div>
              <div className="xt_line" />
            </div>
            <div className="xt_table">
              <div className="xt_left">
                <p className="xt_item left">Appearance: <em>Magic Cube Infrared Remote</em></p>
              </div>
              <div className="xt_right">
                <p className="xt_item right">Wireless Type: <em>WiFi 2.4GHz</em></p>
              </div>
              <div className="xt_line" />
            </div>
            <div className="xt_table">
              <div className="xt_left">
                <p className="xt_item left">Wireless Standard: <em>IEEE 802.11 b/g/n</em></p>
              </div>
              <div className="xt_right">
                <p className="xt_item right">Infrared &nbsp;Frequency: <em>20~60KHz</em></p>
              </div>
              <div className="xt_line" />
            </div>
            <div className="xt_table">
              <div className="xt_left">
                <p className="xt_item left">Case Material: <em>PC + ABS + TPU</em></p>
              </div>
              <div className="xt_right">
                <p className="xt_item right">Product Size: <em>53x53x54mm</em></p>
              </div>
              <div className="xt_line" />
            </div>
            <div className="xt_table">
              <div className="xt_left">
                <p className="xt_item left">Infrared Transmittance: <em>93%</em></p>
              </div>
              <div className="xt_right">
                <p className="xt_item right">Infrared Remote Distance: <em>8m+</em></p>
              </div>
              <div className="xt_line" />
            </div>
            <div className="xt_table">
              <div className="xt_left">
                <p className="xt_item left">Infrared Remote Angle: &nbsp; <em>360°</em></p>
              </div>
              <div className="xt_right">
                <p className="xt_item right">Supported IR Appliances Brand: <em>8000+</em></p>
              </div>
              <div className="xt_line" />
            </div>
          </div>
        </section>
      </section>          <Footer />

    </div>
  )
}