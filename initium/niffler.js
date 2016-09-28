// ==UserScript==
// @name         Niffler
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Picks up gold for you!
// @author       Dell
// @match        *http://www.playinitium.com/*
// @match        *https://www.playinitium.com/*
 
// ==/UserScript==

(function() {
  'use strict';
  $(window).load(function(){
      console.log('niffler is definitely running');
      var gold = $('a').filter(function(i) {
          var re = /^Collect\s\d+\sgold$/;
          if (this.textContent.match(re)) {
              console.log(this.textContent.match(re));
          }
          return this.textContent.match(re);
      });
  });
})();