import React  from "react";
import "./Partners.css";
import options from './PartnerInfo'

import { Footer } from '../footer/Footer';
export const PartnerPage = ({match}) => {  
  React.useEffect(() => {
    window.scrollTo(0,0)
},[])  
  return (
    <>
      <div class="we-are-block">
        <div id="about-us-section">
          <div class="about-us-image">
            <img
              src={options[match.params.id].img1}
              width="808"
              height="458"
              alt=""
            />
          </div>

          <div class="about-us-info">      
             <h2>{options[match.params.id].CompanyName}</h2>

            <p>
            {options[match.params.id].describtion}
            </p>
          </div>
        </div>

        <div id="history-section">
          <div class="history-image">
            <img
              src= {options[match.params.id].img2}
              width="951"
              height="471"
              alt="Building Pic"
            />
          </div>

          <div class="history-info">
            <h2>Cooperation</h2>

            <p>
            Ltd “Home alone” and building company “{options[match.params.id].CompanyName}” have signed a cooperation, 
            which allows the residents of {options[match.params.id].CompanyName} to use the services of a smart home, 
            remotely manage and smarten up any home appliances in the house. We offer a fast,
             easy and ideal solution for the comfort of your home.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
