import React from "react";
import { useEffect } from "react";
import "./newcss.css";

import * as $ from 'jquery';
export const SwiperCarousel = () => {
  useEffect(() => {
    $('.slider1').each(function() {
      var $this = $(this);
      var $group = $this.find('.slide_group1');
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
      
      $('.next_btn1').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      });
      
      $('.previous_btn1').on('click', function() {
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
        }).appendTo('.slide_buttons1');
        bulletArray.push($button);
      });
      
      advance();
    });
  });
  return (
    <>
      {/* <div id="slidy-container">
        <figure id="slidy">
          <img src={photo0} alt="eyes" />
          <img src={photo1} alt="lou" />
          <img src={photo2} alt="lucie-2" />
          <img src={photo3} alt="lucie" />
        </figure>
      </div> */}

      <div class="slider1">
        <div class="slide_viewer1">
          <div class="slide_group1">
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
