// ==UserScript==
// @name         Niffler
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Picks up gold for you!
// @author       Dell
// @match        *http://www.playinitium.com/*
// @match        *https://www.playinitium.com/*
 
// ==/UserScript==

(function() {
  'use strict';
    var safety = 0;
    var intervalID = window.setInterval(function() {
      if (safety > 10) {
        window.clearInterval(intervalID);
      }
      $('.main-item-controls a').each(function(i) {
        var re = /^Collect\s(\d+)\sgold$/;
        var g = this.textContent.match(re) || [];
        if (this.textContent.match(re)) {
          this.click();
          
          $(this).after($('<p>Niffler collected ' + g[1] + ' gold for you!</p>'));
          window.clearInterval(intervalID);
        }
      });
      safety++;
    }, 200);
})();