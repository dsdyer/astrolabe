// ==UserScript==
// @name         Fluent
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Preserves chatbox text across page loads
// @author       Dell
// @match        *http://www.playinitium.com/*
// @match        *https://www.playinitium.com/*
 
// ==/UserScript==

(function() {
  'use strict';

  try {
    var displayDiv = document.getElementById('displayDiv') || document.createElement('displayDiv');
    // var text = sessionStorage.fluentChatValue || null;


    $(window).on('keypress', function(e){
      var o = {};
      var a = Object.keys(e);
      for (let i = 0, l = a.length; i < l; i++) {
          if (typeof e[a[i]] === 'object') {
            var x = String(e[a[i]]);
          } else {
            x = e[a[i]];
          }
          o[a[i]] = x;
      }
      console.log(o);
    });


    console.log(displayDiv);
  } catch(e){}
})();