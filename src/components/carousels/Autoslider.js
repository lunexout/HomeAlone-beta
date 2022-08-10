import React from "react";
import "./Autoslider.css";
import { useEffect } from "react";
import * as $ from "jquery";
import { useTranslation } from "react-i18next";
import { BrowserView, MobileView } from "react-device-detect";

import IMG1 from "./../../assets/sec2_2-3d2d369dc4.jpg";
import IMG2 from "./../../assets/sec2_1-a63e90a5e2.jpg";
import IMG3 from "./../../assets/752287_middle.jpg";
import IMG4 from "./../../assets/sec6_5-fdaf076235.png";

const Autoslider = () => {
  const { t } = useTranslation();

  useEffect(() => {
    $(".slider").each(function () {
      var $this = $(this);
      var $group = $this.find(".slide_group");
      var $slides = $this.find(".slide");
      var bulletArray = [];
      var currentIndex = 0;
      var timeout;

      function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        if ($group.is(":animated") || currentIndex === newIndex) {
          return;
        }

        bulletArray[currentIndex].removeClass("active");
        bulletArray[newIndex].addClass("active");

        if (newIndex > currentIndex) {
          slideLeft = "100%";
          animateLeft = "-100%";
        } else {
          slideLeft = "-100%";
          animateLeft = "100%";
        }

        $slides.eq(newIndex).css({
          display: "block",
          left: slideLeft,
        });
        $group.animate(
          {
            left: animateLeft,
          },
          function () {
            $slides.eq(currentIndex).css({
              display: "none",
            });
            $slides.eq(newIndex).css({
              left: 0,
            });
            $group.css({
              left: 0,
            });
            currentIndex = newIndex;
          }
        );
      }

      function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          if (currentIndex < $slides.length - 1) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        }, 4000);
      }

      $(".next_btn").on("click", function () {
        if (currentIndex < $slides.length - 1) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      });

      $(".previous_btn").on("click", function () {
        if (currentIndex !== 0) {
          move(currentIndex - 1);
        } else {
          move(3);
        }
      });

      $.each($slides, function (index) {
        var $button = $('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
          $button.addClass("active");
        }
        $button
          .on("click", function () {
            move(index);
          })
          .appendTo(".slide_buttons");
        bulletArray.push($button);
      });

      advance();
    });
  });
  return (
    <>
      <MobileView>
        <div className="single-div" style={{ marginTop: 10 }}>
          <h1
            className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer"
            style={{ textTransform: "capitalize" }}
          >
             {t("Smart Door Lock")}
          </h1>
        </div>
        <div class="boxgif">
          <img
            src={IMG1}
            alt="Example"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="single-div" style={{ marginTop: 10 }}>
          <h1
            className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer"
            style={{ textTransform: "capitalize" }}
          >
             {t("Mixpad")}
          </h1>
        </div>
        <div class="boxgif">
          <img
            src={IMG2}
            alt="Example"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="single-div" style={{ marginTop: 10 }}>
          <h1
            className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer"
            style={{ textTransform: "capitalize" }}
          >
            {t("Magic Cube")}
          </h1>
        </div>
        <div class="boxgif">
          <img
            src={IMG3}
            alt="Example"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="single-div" style={{ marginTop: 10 }}>
          <h1
            className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer"
            style={{ textTransform: "capitalize" }}
          >
            {t(" MixPad Genie")}
          </h1>
          <div class="boxgif">
          <img
            src={IMG4}
            alt="Example"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        </div>
      </MobileView>
      <BrowserView>
        <div className="single-div" style={{ marginTop: 10 }}>
          <h1
            className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer"
            style={{ textTransform: "capitalize" }}
          >
            {t("TOP PRODUCT")}
          </h1>
        </div>
        <div class="slider">
          <div class="slide_viewer">
            <div class="slide_group">
              <div class="slide"></div>
              <div class="slide"></div>
              <div class="slide"></div>
              <div class="slide"></div>
            </div>
          </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

      </BrowserView>

    </>
  );
};

export default Autoslider;
