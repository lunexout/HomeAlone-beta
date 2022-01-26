import React from "react";
import img1 from "./images/Bank-of-Georgia-1280x720.jpg";
import img2 from "./images/TBC.png";

import "./../news/News.css";
import { Footer } from "../footer/Footer";

import { useTranslation } from "react-i18next";

export const Installment = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <div class="we-are-block">
          <div id="about-us-section">
            <div class="about-us-image">
              <img src={img1} width="808" height="458" alt="" />
            </div>

            <div class="about-us-info">
              <h2>{t("bankname1")}</h2>

              <p>{t("banktext1")}</p>
            </div>
          </div>

          <div id="history-section">
            <div class="history-image">
              <img src={img2} width="808" height="460" alt="Building Pic" />
            </div>

            <div class="history-info">
              <h2>{t("bankname2")}</h2>

              <p>{t("banktext2")}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
