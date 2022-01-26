import React from "react";
import "./TouchClassicZigbeeSwitchSeries.css";

import photo1 from "./img/bg8-8a217b8d8b.jpg";
import photo2 from "./img/bg9-c4418b7818.jpg";
import photo3 from "./img/bg5_1-f369faa914.png";
import photo4 from "./img/bg6-4268f08482.jpg";
// import { Footer } from './../footer/Footer'

export const TouchClassicZigbeeSwitchSeries = () => {
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
      <section className="sectczcs1">
        <h1>
          INNOVATION REQUIRES COURAGE
          <br />
          RETURN IS ANOTHER KIND OF CONFIDENCE
        </h1>
        <p>Touch Classic Smart Switch</p>
      </section>
      <section className="index_sec2">
        <div className="slider_box" style={{ height: "665.366px" }}>
          <ul
            className="ib_slider"
            style={{ height: "665.366px", overflow: "hidden" }}
          >
            <div
              className="slidesjs-container"
              style={{
                overflow: "hidden",
                position: "relative",
                width: "1098px",
                height: "777.204px",
              }}
            >
              <div
                className="slidesjs-control"
                style={{
                  position: "relative",
                  left: "0px",
                  width: "1098px",
                  height: "777.204px",
                }}
              >
                <li
                  className="ibs1 slidesjs-slide"
                  slidesjs-index={0}
                  style={{
                    listStyleType: "none",
                    height: "665.366px",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    zIndex: 0,
                    backfaceVisibility: "hidden",
                  }}
                ></li>
              </div>
            </div>
          </ul>
          <ul className="ib_mark slidesjs-pagination clear">
            <li
              className="slidesjs-pagination-item"
              style={{ overflow: "hidden" }}
            >
              <a href="http://homealone.ge/" data-slidesjs-item={0} html={1}>
                <div className="im_active" style={{ width: "0px" }} />
                <div className="im_progress" style={{ width: "50px" }} />
              </a>
            </li>
            <li
              className="slidesjs-pagination-item"
              style={{ overflow: "hidden" }}
            >
              <a href="http://homealone.ge/" data-slidesjs-item={1} html={2}>
                <div className="im_active" style={{ width: "50px" }} />
                <div className="im_progress" style={{ width: "0px" }} />
              </a>
            </li>
            <li
              className="slidesjs-pagination-item"
              style={{ marginRight: 0, overflow: "hidden" }}
            >
              <a href="http://homealone.ge/" data-slidesjs-item={2} html={3}>
                <div className="im_active" style={{ width: "50px" }} />
                <div className="im_progress" style={{ width: "0px" }} />
              </a>
            </li>
          </ul>
        </div>
        <ul className="is_tips clearfix">
          <li style={{ overflow: "hidden" }}>
            <h1>3D Toughened Glass Panel</h1>
            <p>prevent from scratches</p>
          </li>
          <li style={{ overflow: "hidden" }}>
            <h1>3ms Fast Response</h1>
            <p>C-Touch technology</p>
          </li>
          <li style={{ overflow: "hidden" }}>
            <h1>Smart Lighting Control</h1>
            <p>control by APP, voice, panel</p>
          </li>
          <li style={{ overflow: "hidden" }}>
            <h1>Smart Scene Customization</h1>
            <p>work with multiple devices</p>
          </li>
        </ul>
      </section>
      <section className="sectczcs3" style={{ position: "relative" }}>
        <h1>SOLID SWITCH PANEL WITH 3D TOUGHENED GLASS MATERIAL</h1>
        <p>
          Adopt the toughened glass of 6.5 mohs hardness, which is 3~5 times
          stronger than ordinary glass.
          <br />
          It efficiently prevents scratches and looks more exquisite and smooth.
        </p>
      </section>
      <section className="sectczcs4">
        <div className="s4_mainbox main_content1">
          <div className="s4m_title">
            <h1>3 MILLISECOND RESPONSE WITH C-TOUCH TECHNOLOGY</h1>
            <p>
              Adopt the C-Touch technology to achieve the fast response of 3ms.
              <br />
              And with the soft indicator in the night, locate the switch
              without any bother for your sleep.
            </p>
          </div>
          <div className="text_box clearfix">
            <div className="stb_item1">
              <h2 className="stbi_title">
                Sensitive Capacitive Touch Technology
              </h2>
              <p className="stbi_txt">C-Touch™</p>
            </div>
            <div className="stb_item2">
              <h2 className="stbi_title">Response Time</h2>
              <p className="stbi_txt">
                3<span>&nbsp; ms</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sectczcs5">
        <h1>LONGER SERVICE LIFE WITH PATENT TECHNOLOGY</h1>
        <p>
          The switch relay is well protected by the RelayPro-Tech™ technology.
          <br />
          Enable over 120 thousand of On/Off operations and 30 years of service
          life.
        </p>
        <div className="main_content1">
          <div className="s5mc_data clear">
            <div className="s5mcd_times">
              <p>Operation</p>
              <p>
                <span>120000+</span>times
              </p>
            </div>
            <div className="s5mcd_life">
              <p>Service Life</p>
              <p>
                <span>30+</span>years
              </p>
            </div>
          </div>
        </div>
        <p className="s5_tips">
          * Data is calculated based on the premise of 10 operations a day with
          normal temp.and humidity.
          <br />
          Actual effect may vary with environment.
        </p>
      </section>
      <section className="sectczcs6">
        <div className="s6_txtbox">
          <h1>RELIABLE DESIGN ON SAFETY AND PROTECTION</h1>
          <p>
            Adopt superior V-0 fire-proof material, and passed the tests of
            anti-thunder,
            <br />
            anti-surge and high temperature protection.
          </p>
        </div>
        <img src={photo1} alt="bg5_1.png" />
      </section>
      <section className="sectczcs7">
        <div className="s7_txtbox">
          <h1>3 STEPS TO MAKE THE LIGHTING SMART</h1>
        </div>
        <img src={photo2} alt="bg6.jpg" />
      </section>
      <section className="sectczcs8">
        <h1>REMOTE CONTROL ALL THE LIGHTING IN THE HOUSE</h1>
        <p>
          Improve the traditional lighting control by Touch Classic smart
          switches which are controlled by HomeMate APP,
          <br />
          and enable users to control the lighting anytime and anywhere.
        </p>
      </section>
      <section className="sectczcs9">
        <div className="s9_txtbox main_content1">
          <h1>
            ONE-CLICK TO CONTROL ALL THE LIGHTING
            <br />
            BY SMART PHONE
          </h1>
          <p>
            Just a simple click in the bed to turn off all the lighting via
            phone
            <br />
            APP without any bother to get up to turn off lights.
          </p>
        </div>
        <img src={photo3} alt="bg8.jpg" />
      </section>
      <section className="sectczcs10">
        <div className="s10_txtbox main_content1">
          <h1>VOICE CONTROL THE LIGHTING IN YOUR HOME</h1>
          <p>
            Support Amazon Alexa and Google Home to enable the lighting voice
            control just
            <br />
            by speaking out the commands.
          </p>
        </div>
        <div className="chat1" />
        <div className="chat2 animate" />
        <img src={photo4} alt="bg9.jpg" />
      </section>
      <section className="sectczcs11">
        <h1>CONNECT AND WORK WITH MULTIPLE SMART HOME DEVICES</h1>
        <p>
          Touch Classic series in HomeMate smart home system can work with
          hundred of smart devices to
          <br />
          enable the timer control, devices interaction and scene control.
        </p>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html:
            '!(function($){var w_width = $(window).width();var target_height = 947/1920*w_width;$(".slider_box").height(target_height);$(".ib_slider").height(target_height);$(".ib_slider li").height(target_height);function startAnimate(index,page,className1,className2){var speed = 4500;if (index == undefined || className1 == undefined || className2 == undefined){return false;}if (typeof index != "number" && typeof index != "string"){        return false;}      if (typeof index == "string"){        index = parseInt(index);        if (index == NaN){          return false;        }      }      var ele1 = $("."+page+" .ib_mark .slidesjs-pagination-item").eq(index).find("."+className1);      var ele2 = $("."+page+" .ib_mark .slidesjs-pagination-item").eq(index).find("."+className2);      if (ele1 == undefined || ele2 == undefined){return false;   } ele1.stop(true,true).animate({width:"50px"}, speed);    }    var isAnimate = false;var slider1 = new $(\'.index_sec2 .ib_slider\').slidesjs({        height: target_height,        event:"click",        play: {            active: false,            auto: true,            interval: 5000,            restartDelay: 5000,            swap: true,            effect: "fade"        },        navigation: {            active: false,            effect: "fade"        },pagination: {            active: true,            effect: "fade"        },        effect: {            fade: {                speed: 500,                crossfade: true            }        },        callback:{          complete:function(index){            var bef = 0;            if (isAnimate){              if (index == 1){                bef = $(".index_sec2 .ib_mark .slidesjs-pagination-item").length - 1              } else {bef = index - 2              }              $(".index_sec2 .ib_mark .slidesjs-pagination-item").eq(bef).find(".im_progress").css({"width":"0"})              $(".index_sec2 .ib_mark .slidesjs-pagination-item").each(function(){                var aEle = $(this).find("a");                if (parseInt(aEle.attr("html")) == index){                  startAnimate(index-1,"index_sec3","im_progress","im_active");                }              });            } else {              var ele1 = $(".index_sec2 .slidesjs-pagination-item a").find(".im_progress");              var ele2 = $(".index_sec2 .slidesjs-pagination-item a").find(".im_active");              ele1.stop(true,true).css({"width":"0"});              ele2.css({"width":"50px"});              $(".index_sec2 .ib_mark .slidesjs-pagination-item").eq(index-1).find(".im_progress").stop(true,true).css({"width":"50px"});              $(".index_sec2 .ib_mark .slidesjs-pagination-item").eq(index-1).find(".im_active").css({"width":"0"});            }} }    });    $(".index_sec2 .slidesjs-pagination-item a").click(function(){      isAnimate = false;    });    $(window).scroll(function(){        var top = $(window).scrollTop()        var distance = $(\'.sec10\').offset().top        if(top >= distance - 500 && top < distance + 500){$(".sec10 .chat1").addClass("animate")          setTimeout(function(){            $(".sec10 .chat2").addClass("animate")          },1000);         }else{          $(".sec10 .chat1").removeClass("animate")          $(".sec10 .chat2").removeClass("animate")        }})})(jQuery)',
        }}
      ></script>
      {/* <Footer /> */}
    </div>
  );
};
