import React from "react";
import "./SmartLEDLight.css";

import photo5 from "./../../assets/bg_05-cb540fcb71.png";
import photo6 from "./../../assets/bg_06-e79e8f4af8.png";

import photo1 from "./../../assets/bg_08-51c68dff5a.png";

import photo2 from "./../../assets/bg_07-aa6b07e57a.png";

import photo3 from "./../../assets/bg_14-cd1fb40162.png";
import photo4 from "./../../assets/bg_15-a135483b7f.png";

import photo7 from "./../../assets/bg_16-a7dd153171.png";

// import { Footer } from './../footer/Footer'

export const SmartLEDLight = () => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                    @media screen and (min-width:1760px) {
                        html {
                            font-size: 100px
                        }
                    }
                    
                    @media (min-width:1360px) and (max-width:1760px) {
                        html {
                            font-size: calc((100vw - 160px)/ 16)
                        }
                    }
                    
                    @media screen and (max-width:1360px) {
                        html {
                            font-size: 75px
                        }
                    }
                    
                    @media screen and (min-width:1920px) {
                        html{
                            font-size: calc(83.34vw / 16)
                        }
                    }        `,
        }}
      />
      <div class="downlight">
        <div class="led__banner s__bgsll">
          <div class="secsll__subtitle">Full House Lighting Above 100㎡</div>
          <div class="secsll__title">Smart LED Light</div>
          <div class="banner__info s__bgsll"></div>
        </div>
        <div class="led__secsll1 d__secsll">
          <div class=" ">
            <div class="secsll__title">
              <p>A beam of light represents a mood,</p>
              <p>a beam of light is a time</p>
            </div>
            <div class="secsll__desc">
              <p>
                According to the application scenes, you can freely match
                different lighting schemes, reading,
              </p>
              <p>
                watching movies, and playing games, all have comfortable and
                exclusive home lighting effects.
              </p>
            </div>
          </div>
          <div class="led__secsll2 d__secsll">
            <div class=" secsll__title ">
              <p>Brightness and color temperature stepless adjustment</p>
              <p>let light bring you endless fun</p>
            </div>
            <div class="secsll2__content">
              <div class="secsll2__item">
                <img
                  alt="Home Alone"
                  class="item__img s__bgsll"
                  src={photo5}
                ></img>
                <div class="item__title">Color temperature</div>
                <div class="item__desc">
                  2700-6500K color temperature range, two-way adjustment of cold
                  and warm colors.
                </div>
              </div>
              <div class="secsll2__item">
                <img
                  alt="Home Alone"
                  class="item__img s__bgsll"
                  src={photo6}
                ></img>
                <div class="item__title">Brightness</div>
                <div class="item__desc">
                  1%-100% brightness adjustment，Light on/off slowly,support
                  state memory.
                </div>
              </div>
            </div>
          </div>
          <div class="led__secsll3 d__secsll">
            <div class="secsll__title">
              <p>Smart lighting</p>
              <p>improve the sleep quality of family</p>
            </div>
            <div class="secsll__desc">
              <p>
                The ORVIBO smart lighting system improves the sleep quality of
                family, whether it is an early
              </p>
              <p>
                day of energizing, or a more concentrated work and study, it can
                provide the most
              </p>
              <p>comfortable lighting experience.</p>
            </div>
            <div class="secsll3__content">
              <div class="secsll3__item">
                <img
                  alt="Home Alone"
                  class="item__img s__bgsll"
                  src={photo1}
                ></img>
                <div class="item__desc">
                  <p>In the morning, the cold color light wakes up the</p>
                  <p>body and fills it with energy.</p>
                </div>
              </div>
              <div class="secsll3__item">
                <img
                  alt="Home Alone"
                  class="item__img s__bgsll"
                  src={photo2}
                ></img>
                <div class="item__desc">
                  <p>At night, warm color light helps family enter a good</p>
                  <p>state of sleep.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="led__secsll7 d__secsll">
            <img
              alt="Home Alone"
              class="secsll7__logo s__bgsll"
              src={photo3}
            ></img>
            <div class="secsll7__content">
              <div class="secsll__title">
                zigbee full house smart interconnection
              </div>
              <div class="secsll__desc">
                <p>
                  Adopting industrial-grade zigbee communication protocol, with
                  strong reliability and scalability, with its own
                </p>
                <p>
                  routing function, suitable for a large number of lighting
                  applications at home, more stable than WiFi, and
                </p>
                <p>more farther than Bluetooth.</p>
              </div>
            </div>
            <img
              alt="Home Alone"
              class="secsll7__bg s__bgsll"
              src={photo4}
            ></img>
          </div>
          <div class="led__secsll8 d__secsll">
            <div class="secsll__title">
              R90 high rendering restores true colors
            </div>
            <div class="secsll__desc">
              <p>
                RA90 high rendering index, luminous flux as high as 350lm/450lm,
                makes the color of
              </p>
              <p>
                the illuminated object more real and restores the true colors of
                the home.
              </p>
            </div>
            <div>
              <img
                alt="Home Alone"
                class="secsll8__bg s__bgsll"
                src={photo7}
              ></img>
              <div class="img__desc">
                <div class="img__item">high rendering index</div>
                <div class="img__item">low rendering index</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
