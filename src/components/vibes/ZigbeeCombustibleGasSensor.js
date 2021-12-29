import React from 'react'
import './ZigbeeCombustibleGasSensor.css'
import { Footer } from './../footer/Footer'

export const ZigbeeCombustibleGasSensor = () => {
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
                    }   ul{
                        list-style-type: none;
                    }       `
                }}
            />
            <section className="gas_sensor_sec1">
                <h1>SMART COMBUSTIBLE GAS SENSOR</h1>
            </section>
            <section className="gas_sensor_sec2">
                <h1>SO MANY ACCIDENTS AROUND US COULD BE AVOIDED</h1>
                <p>Every year, there are over 2.5 million people that died from gas poisoning;<br />The proportion of gas leakage
                    accident is over 50%.</p>
            </section>
            <section className="gas_sensor_sec3">
                <h1>PREVENT FROM COMBUSTION WITH THE SMART<br />COMBUSTIBLE GAS ALARM</h1>
            </section>
            <section className="gas_sensor_sec4">
                <h1>SENSITIVE CONCENTRATION DETECTION ON THE<br />COMBUSTIBLE GAS TO AVOID POTENCIAL HAZARD</h1>
                <p>It will alarm loudly when the concentration of the combustible gas is beyond the normal range, and
                    push<br />the message to you via phone app.</p>
            </section>
            <section className="gas_sensor_sec5">
                <h1>DETECTS, THINKS AND ALERTS TO YOU IMMEDIATELY</h1>
                <p>Loud buzzing alarm with 75dB and instant APP message to remind you to take actions<br />in advance to protect
                    your home and family.</p>
            </section>
            <section className="gas_sensor_sec6">
                <div className="gas_sensor_container">
                    <div className="txtbox">
                        <h1>REMOTE MONITOR THE<br />COMBUSTIBLE GAS<br />CONCENTRATION VIA<br />SMART PHONE</h1>
                        <p>With the HomeMate APP, you can check the real-time<br />status of the combustible gas from anywhere. No
                            worry<br />about forgetting to turn off the gas stove any more.</p>
                    </div>
                </div>
            </section>
            <section className="gas_sensor_sec7">
                <div className="gas_sensor_container">
                    <h1>MORE FEATURES</h1>
                    <ul className="clear">
                        <li><i className="gss7_icon1" />
                            <p>Low power consumption</p>
                        </li>
                        <li><i className="gss7_icon2" />
                            <p>Low battery warning</p>
                        </li>
                        <li><i className="gss7_icon3" />
                            <p>Tool-free installation</p>
                        </li>
                        <li><i className="gss7_icon4" />
                            <p>Delicate design</p>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />

        </div>
    )
}