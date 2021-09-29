import React from "react";
import './TemperatureHumiditySensor.css'
import styles from './all.module.css'

export const TemperatureHumiditySensor = () => {
    return (
        <div className={styles.thismedia}>
            <section className="temp_sec_1 first_page">
                <div className="fp_content">
                    <p className="tit">
                        TEMPERATURE &amp;
                        <br />
                        HUMIDITY SENSOR
                    </p>
                    <p>
                        Real-time detection and viewing on the phone
                        <br />
                        Link with air conditioner to adjust the temperature automatically
                    </p>
                </div>
            </section>
            <section className="temp_sec2 clear">
                <div className="bg_shadow" style={{ filter: "grayscale(1)" }}>
                    COMMON ISSUES IN OUR DAILY LIFE
                </div>
                <div className="temp_sec2_bg1 bg" style={{ filter: "grayscale(1)" }}>
                    <div className="shadow">
                        <p>
                            Chest&nbsp;distress and&nbsp;shortness&nbsp;of
                            <br />
                            breath caused by high
                            <br />
                            temperature?
                        </p>
                    </div>
                </div>
                <div className="temp_sec2_bg2 bg" style={{ filter: "grayscale(1)" }}>
                    <div className="shadow">
                        <p>
                            Didn't replace the
                            <br />
                            dehumidifier in time?
                        </p>
                    </div>
                </div>
                <div className="temp_sec2_bg3 bg" style={{ filter: "grayscale(1)" }}>
                    <div className="shadow" style={{}}>
                        <p>
                            Got a cold as the air conditioner
                            <br />
                            temperature is too low?
                        </p>
                    </div>
                </div>
                <div className="temp_sec2_bg4 bg" style={{ filter: "grayscale(1)" }}>
                    <div className="shadow">
                        <p>
                            Kid got nosebleed as
                            <br />
                            the air indoor is too dry?
                        </p>
                    </div>
                </div>
            </section>
            <section className="temp_sec3">
                <p>TAKE CARE OF YOU AND YOUR FAMILY</p>
                <img
                    id="product"
                    src="https://static.orvibo.com/guanwang_second/front/en/images/temp_hum_sensor/product_img-97705255ff.png"
                />
                <div className="logos">
                    <ul className="clear">
                        <li>
                            <div className="icon icon1" />
                            <p>Real-time detection</p>
                        </li>
                        <li>
                            <div className="icon icon2" />
                            <p>
                                Link with home
                                <br />
                                appliances
                            </p>
                        </li>
                        <li style={{ marginRight: 0 }}>
                            <div className="icon icon3" />
                            <p>
                                Sensor with high
                                <br />
                                precision
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="temp_sec4">
                <p className="tit">
                    DETECT THE INDOOR TEMPERATURE AND
                    <br />
                    HUMIDITY IN A REAL TIME,
                </p>
                <p className="cont">
                    Link the sensor with home appliances to adjust the environment
                    according to the detection. For
                    <br />
                    example, enable the humidifier if it detects the humidity is lower
                    than the comfortable range.
                </p>
                <img
                    id="iphone6_1"
                    src="https://static.orvibo.com/guanwang_second/front/en/images/temp_hum_sensor/iphone_1-6c94c7034c.png"
                />
            </section>
            <section className="temp_sec5">
                <p className="tit">
                    LINK WITH HOME APPLIANCES TO MAKE YOUR HOME
                    <br />
                    SMARTER AND COZIER
                </p>
                <p className="cont">
                    Put this sensor in the bedroom, adjust the air conditioner to set at
                    appropriate temperature,
                    <br />
                    create more comfortable indoor environment, and take care of every
                    family member.
                </p>
                <img
                    id="iphone6_2"
                    src="https://static.orvibo.com/guanwang_second/front/en/images/temp_hum_sensor/iphone_2-fcc309c0d3.png"
                />
            </section>
            <section className="temp_sec6">
                <p className="tit">CARE ABOUT DETAILS IN YOUR DAILY LIFE</p>
                <div className="temp_sec6_left">
                    <p className="s_p">
                        Automatically open the air conditioner when it detects the
                        temperature is high in the living room.
                    </p>
                    <img
                        className="app_show"
                        src="https://static.orvibo.com/guanwang_second/front/en/images/temp_hum_sensor/temp_img-330bd74bfd.png"
                    />
                    <div className="ani_img">
                        <img
                            className="pro"
                            src="https://static.orvibo.com/guanwang_second/front/en/images/temp_hum_sensor/product_small-a85dc41eac.png"
                            style={{ left: "49px", top: "52px" }}
                        />
                    </div>
                </div>
                <div className="temp_sec6_right">
                    <p className="s_p">
                        Remind you to replace the dehumidifier when it detects the humidity
                        is high in your wardrobe.
                    </p>
                    <img
                        className="app_show"
                        src="https://static.orvibo.com/guanwang_second/front/en/images/temp_hum_sensor/temp_img2-fb38feef7e.png"
                    />
                    <div className="ani_img">
                        <img
                            className="pro"
                            src="https://static.orvibo.com/guanwang_second/front/en/images/temp_hum_sensor/product_small-a85dc41eac.png"
                            style={{ left: "49px", top: "52px" }}
                        />
                    </div>
                </div>
            </section>
            <section className="temp_sec7">
                <p>MORE FEATURES</p>
                <div className="content">
                    <ul id="icons" className="clear">
                        <li>
                            <div className="icon icon1" />
                            <p>Low power consumption</p>
                        </li>
                        <li style={{ marginRight: "66px" }}>
                            <div className="icon icon2" />
                            <p>Low battery warning</p>
                        </li>
                        <li>
                            <div className="icon icon3" />
                            <p>Tool-free installation</p>
                        </li>
                        <li style={{ marginRight: 0 }}>
                            <div className="icon icon4" />
                            <p>APP alarm</p>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="fixed">
                <div
                    className="getTop"
                    id="getTop"
                    style={{ right: "0px", display: "none" }}
                >
                    <img
                        src="https://static.orvibo.com/guanwang_second/front/images/2020/footer/arrowUp-28992f3e82.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
