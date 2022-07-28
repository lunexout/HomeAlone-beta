import React from "react";
import { useTranslation } from "react-i18next";
import df from "./../../assets/lhajWAwgNDMA.gif";

export const Gifslider = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <SmartBanner /> */}
      <div className="single-div" style={{ marginTop: 40 }}>
        <h1
          className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer"
          style={{ textTransform: "capitalize" }}
        >
          {t("Only")}
        </h1>
      </div>
      <div class="boxgif">
        <img
          src={df}
          alt="Example gif"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </>
  );
};
