// ==UserScript==
// @name         Farmer
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Looks around for you!
// @author       Dell
// @match        *http://www.playinitium.com/*
// @match        *https://www.playinitium.com/*
// @grant GM_setValue
// @grant GM_getValue

// ==/UserScript==

(function() {
  'use strict';

  var hpLimit = 0.8; // Change this to any number between 0 and 1. 
                     // That is the fraction of your max hp where 
                     //auto-exploring turns off Default is 80%

  var count = 0;

  var farming = GM_getValue('farming', true);    

  window.addEventListener('keypress', function(e) {
    if (e.key === 'z') {
      count++;
      console.log('count: ', count);

      if (count > 2) {
        farming = !farming;

        GM_setValue('farming', farming);
        window.clearTimeout(x);
      }
  } else {
      count = 0;
    }
  });



  if (!farming) return;

    
  var x = window.setTimeout(function(){

    var [hp,maxhp] = $('#hitpointsBar p').first()
                                         .text()
                                         .split('/');

    if (hp/maxhp >= hpLimit) {
      var buttonOne = $('.main-buttonbox a')[0];
      var buttonTwo = $('.main-buttonbox a')[1];

      var re = /Attack with/;
      var re2 = /Explore Combat/;

      if (buttonOne.textContent.match(re)){
          return;
      } else if (buttonTwo.textContent.match(re2)){
          return;
      }
      doExplore(true);
    }
  }, 600);


})();