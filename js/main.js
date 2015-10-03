'use strict';
function jsTest(){
  var index = 0;
  var counter = 0;
  var obj = {};

  obj.index = index;
  var func = function(){
      for(index = 0; index < 10; index++){
        counter += 2;
      }
      obj.index++;
  };

  obj.func = func;
  this.index++;
  return index;
};

var main = function(){
  console.log(new Date());
  console.log("Welcome to my GitHub page");
  console.log("Still in development getting real functionallity soon.");

  /*display date of last build and use either grunt or gulp to do it*/
  /*adding selecter to change color*/
  console.log(jsTest());
};

$(document).ready(main);
