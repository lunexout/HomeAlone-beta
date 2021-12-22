import React from 'react'
import './About.css'
// import $ from 'jquery'
import { FaGlobe } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import CountUp from 'react-countup';

import { FaSuitcaseRolling } from "react-icons/fa";

import { FaHeadSideVirus } from "react-icons/fa";
export const Statist = () => {
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
 
    const counters = document.querySelectorAll('.counter675');
    const speed = 200; // The lower the slower
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
    
            // Lower inc to slow and higher to slow
            const inc = target / speed;
    
            // console.log(inc);
            // console.log(count);
    
            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + inc;
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
    
        updateCount();
    });
    
    return (
        <>

<div className="single-div" style={{ marginTop: 40 }}>
            <h1 className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer" style={{ textTransform: 'capitalize' }}>
              Our Project Statistics
            </h1>
          </div>

        <div class="grid-container23">
  <div>

  <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="counter">
                        <div class="counter-icon">
                            <FaGlobe />
                        </div>
                        <h3>Web Designing</h3>
                        <span class="counter-value"><CountUp duration={20} end={100} /></span>
                    </div>
                </div>
                </div></div>

  </div>
  <div>



  <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="counter blue">
                        <div class="counter-icon">
                            <FaRocket />
                        </div>
                        <h3>Web Development</h3>
                        <span class="counter-value"><CountUp duration={20} end={100} /></span>
                    </div>
                </div>
                </div></div>

  </div>
  <div>
      
      
  <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="counter orange">
                        <div class="counter-icon">
                            <FaSuitcaseRolling />
                        </div>
                        <h3>Brand Building</h3>
                        <span class="counter-value"><CountUp duration={20} end={100} /></span>
                    </div>
                </div>
                </div></div>
      </div>  
  <div>
  <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="counter green">
                        <div class="counter-icon">
                            <FaHeadSideVirus />
                        </div>
                        <h3>Responsive Design</h3>
                        <span class="counter-value"><CountUp duration={20} end={100} /></span>
                    </div>
                </div>
            </div>
        </div>
  </div>
</div>
        </>
        
    )
}


