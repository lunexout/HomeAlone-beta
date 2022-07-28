import React from "react";
import "./home.css";

import { BannerCarousel } from "./../carousels/BannerCarousel";
import { Footer } from "./../footer/Footer";
import { Spinner } from "./../spinner/Spinner";
import { ProductBann } from "../products/ProductBann";
import { Mainservices } from "../services/Mainservices";
import { SwiperCarousel } from "../carousels/SwiperCarousel";
import { Shower } from "./Shower";
import Autoslider from "../carousels/Autoslider";
import { Helmet } from "react-helmet";
import { Automation } from "../automation/Automation.js";
import { Swiperpages } from "./Swiperpages";
import { Gifslider } from "./Gifslider";


export const Home = () => {
  const [spinner, setSpinner] = React.useState(false);

  React.useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 700);
  }, []);

  window.scrollTo(0, 100);

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="smart home, home alone, smart security, smart sensors, smart audio, Smart Curtain, Automatic, Home Entertaiment, Modern, Colors, Sensor, Sensors, Robot, Leak, Detection, Smart, Lightning, vacuum cleaner, lighting control, window sensors, Alexa, domestic appliance, motion detection, AI, Iot Temperature Control, Curtain, RGB, camera monitoring, appliance control, modern home, door sensors, smart tech, control, smoke sensors, smart light, co sensors, smart lighting, door access, მტვერსასრუტი, მარტო სახლში, რობოტი, მართვა, სმარტი, განათება, ფარდა, კონტროლი, ნათელი, ჭკვიანი სახლი, სენსორი, თანამედროვე ფერები, სენსორები, ჭკვიანი, ჭკვიანი სენსორი, Iot სისტემები, wifi კამერით სახლის მონიტორინგი, ალექსა, აუტომატური, გაზის co სენსორი, განათების კონტროლი, გართობის სისტემა, თანამედროვე სახლი, კარის დაშვების სისტემა, კარის სენსორები, კვამლის სენსორი, მსოფლიოს ნებისმიერი წერტილიდან, საყოფაცხოვრებო ტექნიკის კონტროლი, სახლის კინო თეატრი, სახლის ტექნიკა, სახლის ტექნოლოგია, ტემპერატურის მართვა, ფანჯრების სენსორები, ფერადი განათება, შუქის დეტექტორი, წყლის გაჟონვის სენსორი, ჭკვიანი აუდიო, ჭკვიანი განათება, ჭკვიანი დაცვა, ჭკვიანი დაცვის სისტემა, ჭკვიანი დინამიკი, ჭკვიანი სისტემები, ჭკვიანი ტექნოლოგია, ჭკვიანი ფარდა, ჭკვიანი ფარდის სისტემა"
        />
      </Helmet>

      {spinner ? (
        <>
          <div
            style={{
              height: "100vh",
              backgroundColor: "#20232A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTop: "4px solid #32363E",
            }}
          >
            <Spinner />
          </div>
        </>
      ) : (
        <>
          <BannerCarousel />

          <ProductBann />

          <Mainservices />

          <Gifslider />

          <Autoslider />

          <SwiperCarousel />

          <Swiperpages />

          <Shower />

          <Automation />

          <Footer />
        </>
      )}
    </>
  );
};
