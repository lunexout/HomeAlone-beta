import React from 'react'
import './About.css'
import $ from 'jquery'
import { FaGlobe } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

import { FaSuitcaseRolling } from "react-icons/fa";

import { FaHeadSideVirus } from "react-icons/fa";
export const Statist = () => {
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>

    $(document).ready(function () {
        $('.counter-value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="counter">
                        <div class="counter-icon">
                            <FaGlobe />
                        </div>
                        <h3>Web Designing</h3>
                        <span class="counter-value">1963</span>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="counter blue">
                        <div class="counter-icon">
                            <FaRocket />
                        </div>
                        <h3>Web Development</h3>
                        <span class="counter-value">1854</span>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="counter orange">
                        <div class="counter-icon">
                            <FaSuitcaseRolling />
                        </div>
                        <h3>Brand Building</h3>
                        <span class="counter-value">1756</span>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="counter green">
                        <div class="counter-icon">
                            <FaHeadSideVirus />
                        </div>
                        <h3>Responsive Design</h3>
                        <span class="counter-value">1823</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


