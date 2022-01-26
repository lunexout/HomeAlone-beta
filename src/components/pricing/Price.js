import React from "react";
import { NavLink } from "react-router-dom";
import "./price.css";
import { useTranslation } from "react-i18next";

export const Price = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div id="generic_price_table">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="generic_content clearfix">
                  <div className="generic_head_price clearfix">
                    <div className="generic_head_content clearfix">
                      <div className="head_bg" />
                      <div className="head">
                        <span>{t("Basic Pack")}</span>
                      </div>
                    </div>
                    <div className="generic_price_tag clearfix"></div>
                  </div>
                  <div className="generic_feature_list">
                    <ul>
                      <li>
                        <span>1</span> Zigbee Mini Hub
                      </li>
                      <li>
                        <span>1</span> In-wall Switch
                      </li>
                      <li>
                        <span>1</span> Magic Cube
                      </li>
                      <li>
                        <span>1</span> Smart Door Lock
                      </li>
                      <li>
                        <span>1</span> Water Leakage Sensor
                      </li>
                      <li>
                        <span>1</span> Pipe Open/Close
                      </li>
                      <li className="genericx">
                        <span></span>
                      </li>
                      <li className="genericx">
                        <span></span>
                      </li>
                      <li className="genericx">
                        <span></span>
                      </li>
                    </ul>
                  </div>
                  <div className="generic_price_btn clearfix">
                    <NavLink to="/contact">{t("Contact Us")}</NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="generic_content active clearfix">
                  <div className="generic_head_price clearfix">
                    <div className="generic_head_content clearfix">
                      <div className="head_bg" />
                      <div className="head">
                        <span>{t("Business Pack")}</span>
                      </div>
                    </div>
                    <div className="generic_price_tag clearfix"></div>
                  </div>
                  <div className="generic_feature_list">
                    <ul>
                      <li>
                        <span></span>Comfort Pack items
                      </li>
                      <li>
                        <span>1</span> Mixpad S Panel
                      </li>
                      <li>
                        <span>1</span> Door/Window Sensor
                      </li>
                      <li>
                        <span>1</span> temperaturi./Humadity Sensor
                      </li>
                      <li>
                        <span></span> Smart Door Lock T1
                      </li>
                      <li>
                        <span className="genericx"></span>
                      </li>
                      <li>
                        <span className="genericx"></span>
                      </li>
                      <li>
                        <span className="genericx"></span>
                      </li>
                      <li>
                        <span className="genericx"></span>
                      </li>
                      <li>
                        <span className="genericx"></span>
                      </li>
                    </ul>
                  </div>
                  <div className="generic_price_btn clearfix">
                    <NavLink to="/contact">{t("Contact Us")}</NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="generic_content clearfix">
                  <div className="generic_head_price clearfix">
                    <div className="generic_head_content clearfix">
                      <div className="head_bg" />
                      <div className="head">
                        <span>{t("Comfort Pack")}</span>
                      </div>
                    </div>
                    <div className="generic_price_tag clearfix"></div>
                  </div>
                  <div className="generic_feature_list">
                    <ul>
                      <li>
                        <span></span> Basic Pack Items
                      </li>
                      <li>
                        <span>1</span> Motion Sensor
                      </li>
                      <li>
                        <span>1</span> Zigbee Water Leakage Sensor
                      </li>
                      <li>
                        <span>1</span> Smart Curtain System
                      </li>
                      <li>
                        <span>1</span> Wi-Fi Router
                      </li>
                      <li>
                        <span>1</span> Speaker
                      </li>
                      <li>
                        <span>1</span> Intelligent Mini Music Player
                      </li>
                      <li>
                        <span>1</span> A/C controller
                      </li>
                    </ul>
                  </div>
                  <div className="generic_price_btn clearfix">
                    <NavLink to="/contact">{t("Contact Us")}</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Price;
