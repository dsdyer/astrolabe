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
    var $chatInput = $('#chat_input');

  	$chatInput.on('keyup', function(e){
        sessionStorage.fluentChatValue = chatInput.value || '';
  		console.log(sessionStorage.fluentChatValue);
  	});
  } catch(e){
      console.log('Fluent error: ', e);
    }


})();