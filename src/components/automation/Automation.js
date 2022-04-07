import React, { useEffect } from "react";
import "./Automation.css";
import { Autslides } from "./Autslides";
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
export const Automation = () => {
  useEffect(() => {});

  return (
    <div>
      <div>
        <Autslides
          ProductList={[
            { mainImage: logoprod1, 
              name: "Audio Products", 
            },
            {
              mainImage: logoprod2,
              name: "Interaction Center",
            },
            {
              mainImage: logoprod3,
              name: "Smart Lighting",
            },
            {
              mainImage: logoprod4,
              name: "Home Security",
            },
            { mainImage: logoprod5, 
              name: "Smart Curtain", 
            },
            {
              mainImage: logoprod6,
              name: "Temperature Control",
            },
            {
              mainImage: logoprod7,
              name: "Home Entertaiment",
              type: "Home_Entertaiment",
            },
            {
              mainImage: logoprod8,
              name: "Domestic Appliances",
            },
            {
              mainImage: logoprod9,
              name: "Hotel System",
            },
            {
              mainImage: logoprod10,
              name: "Hotel System",
              type: "hotel_system",
            },
            { mainImage: logoprod11, 
              name: "Audio Products", 
            },
            {
              mainImage: logoprod12,
              name: "Interaction Center",
            },
            {
              mainImage: logoprod13,
              name: "Smart Lighting",
            },
            {
              mainImage: logoprod14,
              name: "Home Security",
            },
            { mainImage: logoprod15, 
              name: "Smart Curtain", 
            },
            {
              mainImage: logoprod16,
              name: "Temperature Control",
            },
            {
              mainImage: logoprod17,
              name: "Home Entertaiment",
            },
            {
              mainImage: logoprod18,
              name: "Domestic Appliances",
            }
          ]}
        />
      </div>
    </div>
  );
};
