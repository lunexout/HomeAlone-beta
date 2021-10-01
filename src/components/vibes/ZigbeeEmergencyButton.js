import React from 'react'
import './ZigbeeEmergencyButton.css'
import styles from './all.module.css'

export const ZigbeeEmergencyButton = () => {
    return (
        <div className={styles.thismedia}>
            <section className="sos_sec1">
                <h1>SMART EMERGENCY BUTTON</h1>
                <p>One-key alarm&nbsp;&nbsp;|&nbsp;&nbsp;APP alarm message&nbsp;&nbsp;|&nbsp;&nbsp;Low power consumption</p>
            </section>
            <section className="sos_sec2 clear">
                <div className="shadow_bg">GET ALERTED IMMEDIATELY IF ANY ACCIDENT</div>
                <div className="bg1 bg">
                    <div className="shadow">
                        <p>Old people fall down in home when<br />family members are not at home</p>
                    </div>
                </div>
                <div className="bg2 bg" style={{ width: '33.4%' }}>
                    <div className="shadow">
                        <p>Kid doesn't remember the phone<br />number of parents when there's<br />an urgent thing</p>
                    </div>
                </div>
                <div className="bg3 bg">
                    <div className="shadow">
                        <p>Emergency happened to your family<br />outside when you are not around</p>
                    </div>
                </div>
            </section>
            <section className="sos_sec_3">
                <div className="ani_div"><img alt="Home Alone" id="pro" src="img/sec3-a70c9766cb.png" /></div>
                <p>ALARM AT FIRST TIME WITH THE EMERGENCY BUTTON</p>
                <div className="row">
                    <div className="circle cir_1">
                        <p>One-key alarm</p>
                    </div>
                    <div className="circle cir_2">
                        <p>APP alarm message</p>
                    </div>
                    <div className="circle cir_3" style={{ margin: 0 }}>
                        <p>Low power consumption</p>
                    </div>
                </div>
            </section>
            <section className="sos_sec_4">
                <div className="container">
                    <p className="tit">ONE-KEY TO ASK FOR HELP WHEN THE OLD PEOPLE<br />FALL DOWN AND GET INJURED</p>
                    <p className="cont">Some accidents may occur when old people are alone at home, and it maybe hard for<br />them to
                        find cellphone to call for help. Now just one press on the button, family member<br />will get alarm
                        message and take action at once.</p><img alt="Home Alone" src="img/sec4_phone-2471198216.png" id="iphone6_1" />
                </div>
            </section>
            <section className="sos_sec_5">
                <p className="tit">ALARM IN TIME WHEN AN EMERGENCY<br />HAPPENED TO CHILDREN</p>
                <p className="cont">There may be some emergencies when children are alone at home, and they may don’t<br />know how to
                    call parents. Now just one press on the button, parents will get alarm<br />message and take action at once.
                </p><img alt="Home Alone" src="img/sec5_phone-c7d104ef99.png" id="iphone6_2" />
            </section>
            <section className="sos_sec6 clear">
                <div className="sos_sec6_left bg1 bg" id="sec6_left" />
                <div className="sos_sec6_right">
                    <p>APPLIED AT MULTIPLE<br />PLACES</p>
                    <div className="buts">
                        <ul className="clear">
                            <li className="f_li">
                                <div id="button1" className="outer active">
                                    <div className="but" id="but_1" />
                                </div>
                                <p>Kindergarten</p>
                            </li>
                            <li className="s_li">
                                <div id="button2" className="outer">
                                    <div className="but" id="but_2" />
                                </div>
                                <p>Hospital</p>
                            </li>
                            <li className="t_li">
                                <div id="button3" className="outer">
                                    <div className="but" id="but_3" />
                                </div>
                                <p>Retirement</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}