import React from 'react'
import { useTranslation } from "react-i18next";

export const Swiperpages = () => {
    const { t } = useTranslation();
  return (
    <div className="backer">
            <div className="container1">
              <div className="layout1">
                <div className="widther">
                  <span style={{ fontSize: "4vmin", fontWeight: "bold" }}>
                    {t("prodiskr12")}
                  </span>
                  <p className="clean" style={{ fontSize: "3vmin" }}>
                    {t("prodiskr13")}
                  </p>
                </div>
                <div class="col1 col-complementary1" role="complementary">
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src="https://static.orvibo.com/guanwang_second/front/images/products/mixpad_switch/sec6_1-9453ebf6fd.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="container1">
              <div className="layout1">
                <div class="col1 col-complementary1" role="complementary">
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src="https://static.orvibo.com/guanwang_second/front/images/products/mixpad_switch/sec6_3_en-3f2cce9470.png"
                    alt=""
                  />
                </div>
                <div className="widther2">
                  <span style={{ fontSize: "4vmin" }}>{t("prodiskr14")}</span>
                  <p className="clean" style={{ fontSize: "3vmin" }}>
                    {t("prodiskr15")}
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
} 
/*
          <div className="backer">
            <div className="container1">
              <div className="layout1">
                <div className="widther">
                  <span style={{ fontSize: "4vmin", fontWeight: "bold" }}>
                    {t("prodiskr12")}
                  </span>
                  <p className="clean" style={{ fontSize: "3vmin" }}>
                    {t("prodiskr13")}
                  </p>
                </div>
                <div class="col1 col-complementary1" role="complementary">
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src="https://static.orvibo.com/guanwang_second/front/images/products/mixpad_switch/sec6_1-9453ebf6fd.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="container1">
              <div className="layout1">
                <div class="col1 col-complementary1" role="complementary">
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src="https://static.orvibo.com/guanwang_second/front/images/products/mixpad_switch/sec6_3_en-3f2cce9470.png"
                    alt=""
                  />
                </div>
                <div className="widther2">
                  <span style={{ fontSize: "4vmin" }}>{t("prodiskr14")}</span>
                  <p className="clean" style={{ fontSize: "3vmin" }}>
                    {t("prodiskr15")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          */
