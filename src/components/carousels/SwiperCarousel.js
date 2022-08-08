import React from "react";
import { useEffect } from "react";
import "./Autoslider.css";
import { useTranslation } from "react-i18next";

import * as $ from 'jquery';
export const SwiperCarousel = () => {
  const { t } = useTranslation();

  useEffect(() => {
    $('.slider').each(function() {
      var $this = $(this);
      var $group = $this.find('.slide_group');
      var $slides = $this.find('.slide1');
      var bulletArray = [];
      var currentIndex = 0;
      var timeout;
      
      function move(newIndex) {
        var animateLeft, slideLeft;
        
        advance();
        
        if ($group.is(':animated') || currentIndex === newIndex) {
          return;
        }
        
        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');
        
        if (newIndex > currentIndex) {
          slideLeft = '100%';
          animateLeft = '-100%';
        } else {
          slideLeft = '-100%';
          animateLeft = '100%';
        }
        
        $slides.eq(newIndex).css({
          display: 'block',
          left: slideLeft
        });
        $group.animate({
          left: animateLeft
        }, function() {
          $slides.eq(currentIndex).css({
            display: 'none'
          });
          $slides.eq(newIndex).css({
            left: 0
          });
          $group.css({
            left: 0
          });
          currentIndex = newIndex;
        });
      }
      
      function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        }, 4000);
      }
      
      $('.next_btn').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      });
      
      $('.previous_btn').on('click', function() {
        if (currentIndex !== 0) {
          move(currentIndex - 1);
        } else {
          move(3);
        }
      });
      
      $.each($slides, function(index) {
        var $button = $('<a class="slide_btn1">&bull;</a>');
        
        if (index === currentIndex) {
          $button.addClass('active');
        }
        $button.on('click', function() {
          move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
      });
      
      advance();
    });
  });
  return (
    <>
    <div className="single-div" style={{ marginTop: 10 }}>
            <h1
              className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer"
              style={{ textTransform: "capitalize" }}
            >
              {t("HomeController")}
            </h1>
          </div>
      <div class="slider">
        <div class="slide_viewer">
          <div class="slide_group">
            <div class="slide1"></div>
            <div class="slide1"></div>
            <div class="slide1"></div>
            <div class="slide1"></div>
          </div>
        </div>
      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    </>
  );
};
