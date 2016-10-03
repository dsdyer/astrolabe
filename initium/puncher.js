// ==UserScript==
// @name         Puncher
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Punches d00ds for you!
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
                     //auto-attacking turns off Default is 80%

  var count = 0;

  var punching = GM_getValue('punching', true);    

  window.addEventListener('keypress', function(e) {
    if (e.key === 'x') {
      count++;
      console.log('count: ', count);

      if (count > 2) {
        punching = !punching;

        GM_setValue('punching', punching);
        window.clearTimeout(x);
      }
  } else {
      count = 0;
    }
  });

  if (!punching) return;

  var x = window.setTimeout(function(){
    var [hp,maxhp] = $('#hitpointsBar p').first()
                                         .text()
                                         .split('/');
    if (hp/maxhp >= hpLimit) {
      var buttonOne = $('.main-buttonbox a')[0];
      var re = /Attack with/;
      if (buttonOne.textContent.match(re)){
          buttonOne.click();
      }
    }
  }, 600);
})();