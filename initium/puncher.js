// ==UserScript==
// @name         Puncher
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Punches d00ds for you!
// @author       Dell
// @match        *http://www.playinitium.com/*
// @match        *https://www.playinitium.com/*
 
// ==/UserScript==

(function() {
  'use strict';
  window.setTimeout(function(){
    var [hp,maxhp] = $('#hitpointsBar p').first()
                                         .text()
                                         .split('/');
    if (hp/maxhp >= 0.8) {
      var buttonOne = $('.main-buttonbox a')[0];
      var re = /Attack with/;
      if (buttonOne.textContent.match(re)){
          buttonOne.click();
      }
    }
  }, 600);
})();