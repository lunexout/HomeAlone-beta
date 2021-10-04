import React from 'react'
import './SmartDoorLockC1.css'


export const SmartDoorLockC1 = () => {
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
            <div className="c1Page">
                <div className="sec1">
                    <div className="content">
                        <div className="font48">More Smart And Safe</div>
                        <div className="font26">ORVIBO Smart Door Lock C1</div>
                    </div>
                </div>
                <div className="sec2">
                    <div className="font42">Keep Your Home Safe</div>
                </div>
                <div className="infoSec">
                    <div className="content">
                        <div className="case1">
                            <div className="up">
                                <p>NFC unlock</p>
                                <p>Phone unlock</p>
                            </div>
                            <div className="down">
                                <p>WiFi networking</p>
                                <p>No gateway required</p>
                            </div>
                        </div>
                        <div className="case2">
                            <div className="up">
                                <p>EMP Protect technology</p>
                            </div>
                            <div className="down">
                                <p>AI fingerprint recognition</p>
                                <p>Convenient and safe</p>
                            </div>
                        </div>
                        <div className="case3">
                            <div className="up">
                                <p>Aviation-grade material</p>
                                <p>Smarter and safer</p>
                            </div>
                            <div className="down">
                                <p>Six ways to unlock</p>
                                <p>More practical</p>
                            </div>
                        </div>
                        <div className="case4">
                            <div className="up">
                                <p>Financial-grade encryption chip</p>
                                <p>Defend data security</p>
                            </div>
                            <div className="down">
                                <p>Full house intelligent linkage</p>
                                <p>Open the door and the lights are on</p>
                            </div>
                        </div>
                        <div className="case5">
                            <div className="up">
                                <p>Network anti-theft alarm</p>
                                <p>Timely feedback</p>
                            </div>
                            <div className="down" />
                        </div>
                    </div>
                </div>
                <div className="sec3">
                    <div className="content">
                        <div className="font42">Phone NFC Unlock</div>
                        <div className="font24">Support mobile phone unlock，Suitable for<br />company, community and home.</div>
                    </div>
                </div>
                <div className="sec4">
                    <div className="font42">EMP Protect Technology</div>
                    <div className="font24">The EMP protect technology is used to shield electromagnetic interference to<br />prevent
                        the door lock from being opened abnormally.</div>
                </div>
                <div className="sec5">
                    <div className="font42">Financial-Grade Encryption Chip<br />To Defend Data Security</div>
                    <div className="font24">It is equipped with the Swiss main control chip STM32, which has strong non-tamperable
                        and non-<br />forgeable security attributes. Each unlocking has an unique key and certificate to ensure
                        the<br />security of communication data.</div>
                    <div className="infoLeft font26">APP encryption</div>
                    <div className="infoRight font26">Communication<br />encryption</div>
                </div>
                <div className="sec6">
                    <div className="content">
                        <div className="font42">WiFi Networking<br />No need topurchase<br />additional connected devices<br /></div>
                        <div className="font24">Wi-Fi direct connection, only need three steps<br />to realize remote security alarm.
                        </div>
                    </div>
                </div>
                <div className="sec7">
                    <div className="content">
                        <div className="font42">AI Fingerprint Recognition</div>
                        <div className="font24">The Swiss FPC fingerprint acquisition system is used to<br />effectively identify the
                            fingerprints of the majority of the age<br />group, and intelligently predict the fingerprint changes
                            without<br />the need for repeated entry. As the frequency of use increases,<br />so does the speed of
                            recognition.</div>
                    </div>
                </div>
                <div className="sec8">
                    <div className="content">
                        <div className="font42">No Need<br />To Change Batteries All Year</div>
                        <div className="font24">Adopting low-power intelligent algorithm, the<br />battery life is over 400 days,
                            making the protection<br />more durable.</div>
                    </div>
                </div>
                <div className="sec9">
                    <div className="content">
                        <div className="font42">Full House Intelligent Linkage<br />Open the door and the lights are on</div>
                        <div className="font24">Connect the door lock through Homemate APP. When the user<br />opens or closes the
                            door, it will automatically link with other smart<br />home devices to achieve the full house linkage
                            in different scene.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

