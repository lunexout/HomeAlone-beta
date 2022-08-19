import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Marquee from "react-fast-marquee";
import logoprod1 from "./../../assets/al mare batumi.jpg";
import logoprod2 from "./../../assets/Alley palace.jpg";
import logoprod3 from "./../../assets/aquamarine.jpg";
import logoprod4 from "./../../assets/arfi group.jpg";
import logoprod5 from "./../../assets/Batumi palace.jpg";
import logoprod6 from "./../../assets/Black sea panorama.jpg";
import logoprod7 from "./../../assets/citron.jpg";
import logoprod8 from "./../../assets/gumbati group.jpg";
import logoprod9 from "./../../assets/guru holding.jpg";
import logoprod10 from "./../../assets/like house.jpg";
import logoprod11 from "./../../assets/calligraphy tower.jpg";
import logoprod12 from "./../../assets/mjm group.jpg";
import logoprod13 from "./../../assets/nbg.jpg";
import logoprod14 from "./../../assets/7th heaven.jpg";
import logoprod15 from "./../../assets/aliance.jpg";
import logoprod16 from "./../../assets/real palace.jpg";
import logoprod17 from "./../../assets/star palace.jpg";
import logoprod18 from "./../../assets/sunrise development.jpg";

export const Autslides = ({ ProductList }) => {
  return (
    <>
      <div className="owl-prod-cont">
        <Marquee behavior="slide" direction="left" speed="100">
          <img src={logoprod1} width="300" height="200" alt="Natural" />
          <img src={logoprod2} width="300" height="200" alt="Natural" />
          <img src={logoprod3} width="300" height="200" alt="Natural" />
          <img src={logoprod4} width="300" height="200" alt="Natural" />
          <img src={logoprod5} width="300" height="200" alt="Natural" />
          <img src={logoprod6} width="300" height="200" alt="Natural" />
          <img src={logoprod7} width="300" height="200" alt="Natural" />
          <img src={logoprod8} width="300" height="200" alt="Natural" />
          <img src={logoprod9} width="300" height="200" alt="Natural" />
          <img src={logoprod10} width="300" height="200" alt="Natural" />
          <img src={logoprod11} width="300" height="200" alt="Natural" />
          <img src={logoprod12} width="300" height="200" alt="Natural" />
          <img src={logoprod13} width="300" height="200" alt="Natural" />
          <img src={logoprod14} width="300" height="200" alt="Natural" />
          <img src={logoprod15} width="300" height="200" alt="Natural" />
          <img src={logoprod16} width="300" height="200" alt="Natural" />
          <img src={logoprod17} width="300" height="200" alt="Natural" />
          <img src={logoprod18} width="300" height="200" alt="Natural" />
        </Marquee>

      </div>
    </>
  );
};
