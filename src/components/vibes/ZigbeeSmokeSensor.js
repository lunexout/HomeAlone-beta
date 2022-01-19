import React from 'react'
import './ZigbeeSmokeSensor.css'
// import { Footer } from './../footer/Footer'

export const ZigbeeSmokeSensor = () => {
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
            <section className="smoke_sensor_sec1">
                <h1>SMART SMOKE SENSOR</h1>
            </section>
            <section className="smoke_sensor_sec2">
                <h1>SO MANY ACCIDENTS AROUND US COULD BE AVOIDED</h1>
                <p>According to the statistics, there were 338 thousand domestic fire hazards<br />reported last year, which
                    resulted 1,742 deaths and 1112 injuries, and the 60 % to 80% of<br />the deaths were related to smoke in the
                    fire.</p>
            </section>
            <section className="smoke_sensor_sec3">
                <h1>PREVENT FROM SMOKE AND FIRE WITH THE SMART<br />SMOKE SENSOR</h1>
            </section>
            <section className="smoke_sensor_sec4">
                <h1>SENSITIVE DETECTION ON THE SMOKE TO AVOID PO-<br />TENCIAL HAZARD</h1>
                <p>It will alarm loudly when it detects smoke in your house, push the message to you via phone app, and
                    remotely<br />remind you to take actions.</p>
            </section>
            <section className="smoke_sensor_sec5">
                <h1>FLASHING RED INDICATOR AND BUZZING ALARM<br />REMIND YOU THE RISK IN TIME</h1>
                <p>Once it detects the smoke and fire hazard, the flashing red LED indicator and the loud<br />buzzing alarm with
                    85dB will immediately remind you to take actions to protect your<br />home and family.</p>
            </section>

            <section className="smoke_sensor_sec7">
                <div className="smoke_sensor_container">
                    <h1>MORE FEATURES</h1>
                    <ul className="clear">
                        <li><i className="gss7_icon1" />
                            <p>Remote mute mode</p>
                        </li>
                        <li><i className="gss7_icon2" />
                            <p>Low battery warning</p>
                        </li>
                        <li><i className="gss7_icon3" />
                            <p>Delicate design</p>
                        </li>
                        <li><i className="gss7_icon4" />
                            <p>Low power consumption</p>
                        </li>
                    </ul>
                </div>
            </section>
            {/* <Footer /> */}

        </div>
    )
}