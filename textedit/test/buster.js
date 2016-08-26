var config = module.exports;

config["textedit"] = {
  environment: "browser",  // or "node"
  rootPath: "../",
  // autoRun: false,
  sources: [
    "js/textedit.js",      // Paths are relative to config file
    "js/**/*.js"        // Glob patterns supported
  ],
  libs: [
    "js/bliss.js"
  ],
  resources: [
  	'/css/textedit.css',
  	'textedit.html'
  ],
  tests: [
    "test/*-test.js"
  ],
  testbed: 'textedit.html'
};

// Add more configuration groups as needed