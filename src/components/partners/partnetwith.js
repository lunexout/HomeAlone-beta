import React from "react";
import "./Partners.css";
import "./Partners.scss";

import IMG14 from "./../../assets/7th heaven.jpg";
import IMG2 from "./../../assets/Alley palace.jpg";
import IMG3 from "./../../assets/aquamarine.jpg";
import IMG4 from "./../../assets/arfi group.jpg";
import IMG5 from "./../../assets/Batumi palace.jpg";
import IMG6 from "./../../assets/Black sea panorama.jpg";
import IMG7 from "./../../assets/citron.jpg";
import IMG8 from "./../../assets/gumbati group.jpg";
import IMG9 from "./../../assets/guru holding.jpg";
import IMG10 from "./../../assets/like house.jpg";
import IMG11 from "./../../assets/calligraphy tower.jpg";
import IMG12 from "./../../assets/mjm group.jpg";
import IMG13 from "./../../assets/nbg.jpg";
import IMG1 from "./../../assets/al mare batumi.jpg";
import IMG15 from "./../../assets/premium group.jpg";
import IMG16 from "./../../assets/real palace.jpg";
import IMG17 from "./../../assets/star palace.jpg";
import IMG18 from "./../../assets/sunrise development.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import { Footer } from './../footer/Footer'

const imageJSON = [
  { src: IMG1 },
  { src: IMG2 },
  { src: IMG3 },
  { src: IMG4 },
  { src: IMG5 },
  { src: IMG6 },
  { src: IMG7 },
  { src: IMG8 },
  { src: IMG9 },
  { src: IMG10 },
  { src: IMG11 },
  { src: IMG12 },
  { src: IMG13 },
  { src: IMG14 },
  { src: IMG15 },
  { src: IMG16 },
  { src: IMG17 },
  { src: IMG18 },
];

export const PartnerWith = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="partners-div" style={{ marginTop: 100 }}>
        <h1 className="abouttitlewidth2 marginizer font-bold leading-tight text-center colorizer">
          {t("Partners")}
        </h1>
        <div className="flex-row">
          {imageJSON.map((img, index) => {
            return (
              <Link to={`/about/partners/${index}`}>
                <div className="cardn">
                  <img
                    src={img.src}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div style={{ marginTop: 40 }}></div>
    </>
  );
};

export default PartnerWith;
