import React, { useEffect } from "react";
import { Autslides } from "./Autslides";
import logoprod1  from './../../assets/al mare batumi.jpg'
import logoprod2  from './../../assets/Alley palace.jpg'
import logoprod3 from './../../assets/aquamarine.jpg'
import logoprod4  from './../../assets/arfi group.jpg'
import logoprod5 from './../../assets/Batumi palace.jpg'
import logoprod6  from './../../assets/Black sea panorama.jpg'
import logoprod7 from './../../assets/citron.jpg'
import logoprod8  from './../../assets/gumbati group.jpg'
import logoprod9 from './../../assets/guru holding.jpg'
import logoprod10  from './../../assets/like house.jpg'
import logoprod11 from './../../assets/calligraphy tower.jpg'
import logoprod12  from './../../assets/mjm group.jpg'
import logoprod13 from './../../assets/nbg.jpg'
import logoprod14 from './../../assets/7th heaven.jpg'
import logoprod15 from './../../assets/aliance.jpg'
import logoprod16  from './../../assets/real palace.jpg'
import logoprod17  from './../../assets/star palace.jpg'
import logoprod18  from './../../assets/sunrise development.jpg'
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
