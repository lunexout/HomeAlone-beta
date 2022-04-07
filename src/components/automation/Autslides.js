import React from "react";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import "./Automation.css";
import Marquee from "react-fast-marquee";
import logoprod1  from '../partners/images/al mare batumi.jpg'
import logoprod2  from '../partners/images/Alley palace.jpg'
import logoprod3 from '../partners/images/aquamarine.jpg'
import logoprod4  from '../partners/images/arfi group.jpg'
import logoprod5 from '../partners/images/Batumi palace.jpg'
import logoprod6  from '../partners/images/Black sea panorama.jpg'
import logoprod7 from '../partners/images/citron.jpg'
import logoprod8  from '../partners/images/gumbati group.jpg'
import logoprod9 from '../partners/images/guru holding.jpg'
import logoprod10  from '../partners/images/like house.jpg'
import logoprod11 from '../partners/images/calligraphy tower.jpg'
import logoprod12  from '../partners/images/mjm group.jpg'
import logoprod13 from '../partners/images/nbg.jpg'
import logoprod14 from '../partners/images/7th heaven.jpg'
import logoprod15 from '../partners/images/premium group.jpg'
import logoprod16  from '../partners/images/real palace.jpg'
import logoprod17  from '../partners/images/star palace.jpg'
import logoprod18  from '../partners/images/sunrise development.jpg'
// const options = {
//   0: {
//     items: 2,
//   },
//   450: {
//     items: 2,
//   },
//   800: {
//     items: 9,
//   },
//   1200: {
//     items: 9,
//   },
//   1400: {
//     items: 9,
//   },
// };
export const Autslides = ({ ProductList }) => {
  // const { t } = useTranslation();
  // const RenderItemList = ProductList.map((el, index) => {
  //   return (
  //     <>
  //     <style
  //       dangerouslySetInnerHTML={{
  //         __html: `
  //         .nav-item12{
  //           width: 110px;
  //           height: 110px;
  //           border-radius: 50%;
  //           padding: 20px;
  //           display: flex;
  //           justify-content: center;
  //           align-items: center;
  //           transition: 0.5s ease all;
  //         }
  //         .slider-img12 {
  //           width: 200px !important;
  //           height: 160px !important;
  //       }
  //         `,
  //       }}
  //     />
       
  //         {/* <div
  //           className="prod-circle"
  //           key={el.mainImage + el.name + index}
  //           style={{
  //             display: "flex",
  //             justifyContent: "center",
  //             alignItems: "center",
  //             flexDirection: "column",
  //           }}
  //         > */}
  //           <div className="prod-item">
  //             <img alt={el.name} className="slider-img12" src={el.mainImage} />
  //           </div>
  //           <div>
              
  //           {/* </div> */}
  //         </div>
  //     </>
  //   );
  // });

  return (
    <>
      <div className="owl-prod-cont">
        {/* <marquee width="100%" direction="left"> */}
        {/* <OwlCarousel className="owl-theme" responsive={options}>
          {RenderItemList}
        </OwlCarousel> */}


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



        {/* </marquee> */}
      </div>
    </>
  );
};


