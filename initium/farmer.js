// ==UserScript==
// @name         Farmer
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Looks around for you!
// @author       Dell
// @match        *http://www.playinitium.com/*
// @match        *https://www.playinitium.com/*
// @grant GM_setValue
// @grant GM_getValue

// ==/UserScript==

(function() {
  'use strict';
  var count = 0;

  var farming = GM_getValue('farming', true);
  console.log('farming: ', farming);
    

  window.addEventListener('keypress', function(e) {
    	// console.log('w is down');
    	// console.log(e.key);

    if (e.key === 'z') {
    	// console.log(e.key);

     //  var y = window.setTimeout(function(){
     //    farming = !farming;
     //    console.log('farming: ', farming);

     //    GM_setValue('farming', farming);
     //    window.clearTimeout(x);
     //  }, 1000);

     //  window.addEventListener('keyup', function() {
     //  	console.log('w is up');
     //  	window.clearTimeout(y);
     //  });


      count++;
      console.log('count: ', count);


    if (count > 2) {
      farming = !farming;
      console.log('farming: ', farming);

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

    if (hp/maxhp >= 0.8) {
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