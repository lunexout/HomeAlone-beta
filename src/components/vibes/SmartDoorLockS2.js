import React from 'react'
import './SmartDoorLockS2.css'

// import { Footer } from './../footer/Footer'

import photo1 from './img/sec1-295ad1a8b1.png'
import photo2 from './img/sec2-74daa2d6eb.png'
import photo3 from './img/sec3-a9957962ea.png'
import photo4 from './img/sec4-bdbeb69dc8.png'
import photo5 from './img/sec5-5c056f2923.png'
import photo6 from './img/sec6-5d122effcc.png'
import photo7 from './img/sec7-aa643b4242.png'
import photo8 from './img/sec8-87609f8c4e.png'
import photo9 from './img/sec9-566accef9e.png'
import photo10 from './img/sec10-73ebbc05d6.png'
import photo11 from './img/sec11-2ca85e3974.png'
import photo12 from './img/sec12-09486da6d0.png'
import photo13 from './img/sec14-053f13edbe.png'

export const SmartDoorLockS2 = () => {
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
            <div className="mixpad__s2">
                <div className="s2__banner s__bg">
                    <div className="banner__content">
                        <div className="banner__title">MORE SAFE &amp;<br />MORE ADVANCED</div>
                        <div className="banner__subtitle">ORVIBO Smart Door Lock S2</div>
                        <div className="banner__list s__bg" />
                        <div className="banner__desc">Technology and Art<br />iF International Gold Award Team 2020 New Work</div>
                    </div>
                </div>
                <div className="sec1 s__bg lazy" style={{ backgroundImage: `url(${photo1})` }}>
                    <div className="sec__title  ">Fierce Black Gold Battlegear, Tough And Fearless</div>
                </div>
                <div className="sec1 s__bg lazy" style={{ backgroundImage: `url(${photo2})` }}>
                    <div className="sec2__content  ">
                        <div className="sec__title">Cool Black Tempered Armor</div>
                        <div className="sec__desc">Highly tempered glass to prevent violent disassembly</div>
                    </div>
                </div>
                <div className="sec3 s__bg lazy" style={{ backgroundImage: `url(${photo3})` }}>
                    <div className="sec3__content ">
                        <div className="sec__title">Armor Gold Solid Handle</div>
                        <div className="sec__desc">Real gold plating integrated into armor elements,<br />edges and corners are
                            looming</div>
                    </div>
                </div>
                <div className="sec4 s__bg lazy" style={{ backgroundImage: `url(${photo4})` }}>
                    <div className="sec4__content ">
                        <div className="sec__title">Smart Lock Cylinder Watershed Of High-End Smart door Locks</div>
                        <div className="sec__desc">The key to an advanced smart fingerprint lock is the lock cylinder. ORVIBO S2
                            selects the Auto smart lock cylinder integrated with electromechanics to ensure home safety from the
                            inside to the outside. A good lock cylinder is the core of safety.</div>
                    </div>
                </div>
                <div className="sec5 s__bg lazy" style={{ backgroundImage: `url(${photo5})` }}>
                    <div className="">
                        <div className="sec__title">Dual-Core Operation, Double Security</div>
                    </div>
                </div>
                <div className="sec6 s__bg lazy" style={{ backgroundImage: `url(${photo6})` }}>
                    <div className="">
                        <div className="sec__title">Built-in 8 Kinds Of Sensors</div>
                        <div className="sec__desc">In order to achieve a full range of defensive effects, the S2 door lock is
                            equipped with a total of 8 sets of sensors,<br />which can accurately sense the state of the door
                            lock. When the door lock is abnormal, it will feedback immediately<br />and be optimistic about the
                            door at all times.</div>
                    </div>
                </div>
                <div className="sec7 s__bg lazy" style={{ backgroundImage: `url(${photo7})` }}>
                    <div className=" sec__title">Find Abnormalities And Respond Immediately</div>
                </div>
                <div className="sec8 s__bg lazy" style={{ backgroundImage: `url(${photo8})` }}>
                    <div className="">
                        <div className="sec__title">Adopt A New Generation Of Ulpc™ Technology<br />To Add Another Full Year Of
                            Battery Life</div>
                        <div className="sec__desc">Adopting a new generation of Ultra Low Power Consumption™, the function becomes
                            stronger and the power consumption is<br />reduced. It also expanded the capacity of the power storage
                            warehouse, breaking through the 18-month power replacement<br />dilemma in the door lock industry,
                            with a battery life of up to two and a half years. Not afraid of the short battery life of
                            the<br />door lock, but the battery is not durable.</div>
                    </div>
                </div>
                <div className="sec9 s__bg lazy" style={{ backgroundImage: `url(${photo9})` }}>
                    <div className="sec9__content ">
                        <div className="sec__title">German Pure Copper C-Class Lock Cylinder<br />Bank-level Security Protection</div>
                        <div className="sec__desc">The German anti-drilling C-grade pure copper lock cylinder with built-in key
                            unlocking sensor is<br />matched with austenitic 304 stainless steel lock body to achieve bank-level
                            anti-riot and anti-<br />pry functions.</div>
                    </div>
                </div>
                <div className="sec10 s__bg lazy" style={{ backgroundImage: `url(${photo10})` }}>
                    <div className="sec10__content ">
                        <div className="sec__title">Encrypted Main Control Processor, Fingerprint Unlocking Is Safe And Fast</div>
                        <div className="sec__desc">It adopts mature semiconductor fingerprint recognition technology, selects
                            Swedish FPC fingerprint chip with 2020 new AI algorithm,<br />and uses asymmetric encrypted
                            communication processing to lock the primary line of defense for door lock security.</div>
                    </div>
                </div>
                <div className="sec11 s__bg lazy" style={{ backgroundImage: `url(${photo11})` }}>
                    <div className=" sec__title">6 Ways To Open The Door For The Whole Family</div>
                </div>
                <div className="sec12 s__bg lazy" style={{ backgroundImage: `url(${photo12})` }}>
                    <div className="sec12__content ">
                        <div className="sec__title">0.8S Fast Internet Access, Unlike Wi-Fi Smart Door Locks</div>
                        <div className="sec__desc">Door lock with Wi-Fi = slow? nonexistent. Oribo Black Warrior upgraded Wi-Fi
                            networking technology,<br />which can wake up and connect to the network within 0.8S to achieve data
                            communication.</div>
                    </div>
                </div>
                <div className="sec14 s__bg lazy">
                    <div className="sec__title ">Passed 50+ professional quality control tests</div>
                    <div className="sec14__bg s__bg lazy" style={{ backgroundImage: `url(${photo13})` }}>
                    </div>
                </div>
            </div>        
              {/* <Footer /> */}

        </div>
    )
}
