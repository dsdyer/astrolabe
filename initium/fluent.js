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
    var chatInput = document.getElementById('chat_input') || null;
    var text = sessionStorage.fluentChatValue || null;

    if (text) {
      chatInput.value = text;
      chatInput.focus();
    }

  	chatInput.addEventListener('keyup', function(e) {
      sessionStorage.fluentChatValue = chatInput.value || '';
  	});
  } catch(e){}
})();