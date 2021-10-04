import React from 'react'
import './AirMasterCentralACControlKit.css'
import styles from './all.module.css'

import photo1 from './img/sec2_bg1-9739666538.jpg'

import photo2 from './img/sec2_bg2-9609be2471.jpg'

import photo3 from './img/sec2_bg3-cfcda3ebb8.jpg'
import dataJSON from "./../../API.json"

export const AirMasterCentralACControlKit = ({ match, item }) => {
  return (
    <div className={styles.thismedia}>
      {console.log(item.images[0].url)}
      <div className="body_content" style={{ fontSize: '42.8125px' }}>
        <section className="air_sec1">
          <div className="as1_bg">
            <h1>Make Central Air Conditioner Smarter<br />and More Energy-saving</h1>
            <p>AirMaster Central A/C Control Kit</p>
          </div>
          <div className="as1_iconbox">
            <ul className="clear">
              <li><i className="as1i_icon1" />
                <p className="as1i_text1">Save 30% energy charge</p>
              </li>
              <li><i className="as1i_icon2" />
                <p className="as1i_text2">Phone App control</p>
              </li>
              <li><i className="as1i_icon3" />
                <p className="as1i_text3">Voice control</p>
              </li>
              <li><i className="as1i_icon4" />
                <p className="as1i_text4">Support 90% main central A/C</p>
              </li>
              <li><i className="as1i_icon5" />
                <p className="as1i_text5">Devices interaction</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="air_sec2">
          <h1>It`s Time to Improve the Control Way<br />of Traditional Central A/C</h1>
          <div className="as2_imgbox clear">
            <div className="as2i_img"><img src={`${dataJSON.API_URL}public/images/` + item.images[2].url} alt="sec2_bg" />
              <p>Forgot to turn off the a/c</p>
            </div>
            <div className="as2i_img"><img src={`${dataJSON.API_URL}public/images/` + item.images[0].url} alt="sec2_bg" />
              <p>Inconvenient operation</p>
            </div>
            <div className="as2i_img"><img src={photo3} alt="sec2_bg" />
              <p>Unable to start a/c until getting home</p>
            </div>
          </div>
        </section>
        <section className="air_sec3">
          <h1>Upgrade Central A/C into Smart<br />Version by One AirMaster Kit</h1>
          <p>More convenient for users to control Central A/C</p>
        </section>
        <section className="air_sec4">
          <h1>Make Central A/C Smarter<br />by multiple core technologies</h1>
          <p>Based on the AI, big data, cloud service technologies, integrate the central air conditioner<br />into ORVIBO
            smart system through the AirMaster kit, achieve functions such as<br />environment detecting, smart control,
            temperature remote adjustment,one-key scene<br />control, etc..</p>
        </section>
        <section className="air_sec5">
          <h1>Save Energy Up to 30%<br />More Efficient and Less Waste</h1>
          <p>Analyse and optimize by big data computing,<br />smart adjust and timer control to save the energy efficiently.
          </p>
        </section>
        <section className="air_sec7">
          <h1>Remote Control by Mobile Phone<br />Pre-set Everything Before Getting Home</h1>
          <p>Homemate app enables you to control central A/C temperature easily<br />and timely enjoy the most comfortable
            home.</p>
        </section>
        <section className="air_sec9">
          <h1>Smart Timer Control<br />Easily Manage and Save Energy</h1>
          <p>Set up the schedule in advance according to your regular<br />daily life to save time and energy at home and
            office.</p>
        </section>
      </div>
    </div>
  )
}