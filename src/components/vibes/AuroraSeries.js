import React from 'react'
import './AuroraSeries.css'

export const ZigbeeWaterLeakageSensor = () => {
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
            <section className="jg_sec1"><img src="https://static.orvibo.com/guanwang_second/front/images/new/products/jiguang/bg1-28694389df.jpg" alt="" /><div className="s1_con"><h1>SMART SWITCHES - AURORA SERIES</h1><p className="s1_text1">Elegant glass panel with elaborate metal frame</p><p className="s1_text2">Touch sensing| Remote control | Scene control</p></div></section>
            <section className="jg_sec2"><h2>CAPACITIVE TOUCH SENSING BUTTONS</h2><p>Bring users the brand-new interaction experience with sensitive touch control feeling.</p></section>
            <section className="jg_sec3"><h2>EXQUISITE CRAFT AND STRICT QUALITY CONTROL</h2><p>Stress on every process, create the excellent smart switches for every home.</p><div className="s3_con clear"><p className="s3_t1">3mm thin and solid crystal glass</p><p className="s3_t2">Impeccable polishedaluminum</p></div></section>
            <section className="jg_sec5"><h2>MORE FEATURED DETAILS</h2><div className="s5_con"><p className="s5_title">Sensitive Touch Without Any Delay</p><div className="s5_container"><div className="left"><p><span>C-Touch（TM）</span><br />Capacitive touch sensing technology</p></div><div className="right"><p><span>100</span>ms<br />Shortened response time</p></div></div></div></section>
            <section className="jg_sec6"><h2>Extraordinary Protection Mechanism</h2><div className="s6_con"><p className="s6_t1">PCBA Board<br /><span>Anti-thunder protection</span></p><p className="s6_t2">Waterproof Panel<br /><span>Humid operation is available</span></p></div></section>
            <section className="jg_sec7"><div className="s7_con"><h2>Backlight Indicator</h2><p>Soft blue light to indicate the location in darkness</p></div></section>
        </div>
    )
}


