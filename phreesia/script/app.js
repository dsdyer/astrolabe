var loadCode = function() {
  "use strict";
  // I'm an application!

  
}

if (typeof window.onload === 'function') {
  oldOnLoad = window.onload;
  window.onload = function() {
    oldOnLoad();
    loadCode();
  }
} else {
  window.onload = loadCode;
}