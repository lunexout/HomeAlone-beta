import React from "react";
import { ProductTypesCarousel } from "../carousels/ProductTypesCarousel";

import logoprod1 from "./images/audio.png";
import logoprod2 from "./images/interact.png";
import logoprod3 from "./images/light.png";
import logoprod4 from "./images/security.png";
import logoprod5 from "./images/Curtain_4ae1b6b39b529.png";
import logoprod6 from "./images/hvac.png";
import logoprod7 from "./images/Iynque-Flurry-Extras-9-Apple-Remote-1_80x80.png";
import logoprod8 from "./images/home.png";
import logoprod9 from "./images/hotel.png";
export const ProductBann = () => {
  return (
    <div>
      <div>
        <ProductTypesCarousel
          ProductList={[
            { mainImage: logoprod1, name: "Audio Products", type: "all-Audio" },
            {
              mainImage: logoprod2,
              name: "Interaction Center",
              type: "Interaction_Center",
            },
            {
              mainImage: logoprod3,
              name: "Smart Lighting",
              type: "Smart_Lighting",
            },
            {
              mainImage: logoprod4,
              name: "Home Security",
              type: "Home_Security",
            },
            { mainImage: logoprod5, name: "Smart Curtain", type: "Smart_R+T" },
            {
              mainImage: logoprod6,
              name: "Temperature Control",
              type: "Smart_HVAC",
            },
            {
              mainImage: logoprod7,
              name: "Home Entertaiment",
              type: "Home_Entertaiment",
            },
            {
              mainImage: logoprod8,
              name: "Domestic Appliances",
              type: "Domestic_Appliances",
            },
            {
              mainImage: logoprod9,
              name: "Hotel System",
              type: "hotel_system",
            },
          ]}
        />
      </div>
    </div>
  );
};
