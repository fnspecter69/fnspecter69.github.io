'use strict';

$(function(){
    //configuration
    var width = 1366;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    //cache DOM
    var $slider = $('#slider');
    var $slideContainer = $slider.find('slides');
    var $slides = $slideContainer.find('.slide');

    setInterval(function(){
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
          currentSlide++;
          if(currentSlide === $slides.length){
              currentSlide = 1;
              $slideContainer.css('margin-left', 0);
          }
      });
    }, pause);
    //setInterval
      //animate margin-left
      //if it's last slide, go to position 1 (0px);

    //listen for mouseenter and pause
    //resume on mouseenter
});

var main = function(){
  console.log(new Date());
  console.log("Welcome to my GitHub page");
  console.log("Still in development getting real functionallity soon.");

  /*display date of last build and use either grunt or gulp to do it*/
  /*adding selecter to change color*/
};

$(document).ready(main);
