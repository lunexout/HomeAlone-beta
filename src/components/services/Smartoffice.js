import React from "react";
import img1 from "./images/so_left1-660b28d697.jpg";
import img2 from "./images/so_left2-00979d4640.jpg";
import img3 from "./images/solution_bg7-f15c48d61f.jpg";
import img4 from "./images/solution_bg5-febe4b3d08.jpg";
import { BrowserView, MobileView } from "react-device-detect";

import "./../news/News.css";
// import { Footer } from '../footer/Footer';

import { useTranslation } from "react-i18next";

export const SmartOffice = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MobileView>
        <div className="wrap">
          <div className="blog">
            <div className="conteudo">
              <img alt="home alone" src={img2} />
              <hr />
              <p>{t("officesoltxt1")} </p>
            </div>

            <div className="conteudo">
              <img alt="home alone" src={img1} />
              <hr />
              <p>{t("officesoltxt2")}</p>
            </div>
          </div>
        </div>
      </MobileView>
      <BrowserView>
        <div>
          <section className="u-clearfix u-section-1" id="carousel_cceb">
            <div className="u-clearfix u-sheet u-sheet-1">
              <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
                <div className="u-gutter-0 u-layout">
                  <div className="u-layout-row">
                    <div className="u-size-26">
                      <div className="u-layout-col">
                        <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-60 u-layout-cell-1">
                          <div
                            className="u-container-layout u-valign-middle-md u-valign-middle-xl u-valign-top-sm u-valign-top-xs u-container-layout-1"
                            style={{ backgroundColor: "#009073 !important" }}
                          >
                            <div className="u-border-9 u-border-palette-1-base u-line u-line-vertical u-line-1" />
                            <h1
                              className="u-align-left-md u-text u-title u-text-1"
                              style={{
                                fontFamily: "Gowun Dodum",
                                fontWeight: "bold",
                              }}
                            >
                              {t("INTRODUCTION")}
                            </h1>
                            <p
                              className="u-align-left-md u-large-text u-text u-text-variant u-text-2"
                              style={{ fontFamily: "Gowun Dodum" }}
                            >
                              {t("officesoltxt1")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="u-size-34">
                      <div className="u-layout-col">
                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-2">
                          <div className="u-container-layout">
                            <img
                              src={img1}
                              alt="Myimage"
                              className="u-image u-image-default u-image-1"
                            />
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-3">
                          <div className="u-container-layout">
                            <img
                              src={img2}
                              alt="Myimage"
                              className="u-image u-image-default u-image-2"
                            />
                          </div>
                        </div>
                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-4">
                          <div className="u-container-layout">
                            <img
                              src={img3}
                              alt="Myimage"
                              className="u-expanded-height-lg u-expanded-height-md u-expanded-height-xl u-expanded-height-xs u-image u-image-default u-image-3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="u-clearfix u-section-4" id="carousel_207b">
            <div className="u-clearfix u-sheet u-sheet-1">
              <div className="u-opacity u-opacity-25 u-palette-2-light-1 u-shape u-shape-rectangle u-shape-1" />
              <div className="u-align-left u-left-0 u-palette-1-base u-shape u-shape-2" />
              <img
                src={img4}
                alt="Myimage"
                className="u-align-left u-image u-image-1"
              />
              <div className="u-align-left u-container-style u-expanded-width-sm u-group u-right-0 u-group-1">
                <div className="u-container-layout u-container-layout-1">
                  <h2
                    className="u-align-left-md u-text u-text-1"
                    style={{ fontFamily: "Gowun Dodum", fontWeight: "bold" }}
                  >
                    {t("Features")}
                  </h2>
                  <p className="u-align-left-md u-text u-text-2">
                    {t("officesoltxt2")}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </BrowserView>
    </>
  );
};
