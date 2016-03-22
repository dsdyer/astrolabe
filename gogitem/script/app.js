"use strict";
// I'm an application!
var re = /lang=(.*)&?/ig;
var language = encodeURIComponent(re.exec(window.location.href.substring(window.location.href.indexOf('?')))[1]);

var lastWeek = new Date();
lastWeek.setDate(lastWeek.getDate() - 7); // add -7 days to your date variable 
var year = String(lastWeek.getFullYear());
var month = String(lastWeek.getMonth() + 1);
var day = String(lastWeek.getDate());

if (month.length === 1) month = "0" + month;
if (day.length === 1) day = "0" + day;

var dateRange = year + '-' + month + '-' + day;

var topFive = document.getElementById('top-five');

var requestRepos = new XMLHttpRequest();
var params = "?q=lang:" + language +  "%20created:>" + dateRange + "&sort=stars&order=desc";
var url = "https://api.github.com/search/repositories";

requestRepos.responseType = "json";
requestRepos.open("GET", url + params);
requestRepos.send();

var reposResponse = new Promise(function(resolve,reject) {
  var checkResponse = function(count) {
    var count = count || 0;
    if (count > 10) {
      reject('no response!');
    };

    if (requestRepos.response) {
      resolve(requestRepos.response);
    } else {
      window.setTimeout(checkResponse, 1000, count +1);
    }
  };

  checkResponse(0);
});

reposResponse.then(function(val) {
  var repos = [];
  var contributors = [];
  var contriElems = document.getElementsByClassName('contributors');

  val.items.sort(function(a,b) {
    var a = a.stargazers_count;
    var b = b.stargazers_count;
    return b-a;
  });

  var list = topFive.appendChild(document.createElement('ol'));

  for (var i = 0, l = Math.min(val.items.length, 5); i < l; i++) {
    var repo = val.items[i];
    repos.push([repo, []]);

    var requestContrib = new XMLHttpRequest();
    var url = repo.contributors_url;

    requestContrib.open("GET", url);
    requestContrib.send();

    var contribResponse = new Promise(function(resolve,reject) {
      var checkResponse = (function(requestContrib) {
              return function(count) {
              var count = count || 0;
                if (count > 10) {
                  reject('no response!');
                };
        
                if (requestContrib.response) {
                  resolve(requestContrib.response);
                } else {
                  window.setTimeout(checkResponse, 1000, count +1);
                }
              }
            })(requestContrib);

      checkResponse(0);
    },
    function(reason) {
      console.log(reason);
    });
    
    contribResponse.then(function(val) {

      var cont = JSON.parse(val);

      cont.sort(function(a,b) {
        var a = a.contributions;
        var b = b.contributions;
        return b-a;
      });

      for (var i = 0, l = repos.length; i<l; i++) {
        if (repos[i][1].length === 0) {
          for (var j = 0, jl = Math.min(cont.length, 3); j < jl; j++) {
            repos[i][1].push(cont[j]);
            // Add contributors to the DOM
            if (contriElems[i].innerHTML === '') contriElems[i].innerHTML += " Top contributors: ";
            contriElems[i].innerHTML += ' <a href=' +
                                     cont[j]["html_url"] + 
                                      '>' + cont[j]["login"] + ' (' + cont[j]["contributions"] + ' contributions)</a>';
          }
            if (contriElems[i].innerHTML === '') contriElems[i].remove();
          break;
        }
      }
    });
    // Add repos to the DOM

    var item = list.appendChild(document.createElement('li'));
    var link = item.appendChild(document.createElement('a'));
    var conNames = item.appendChild(document.createElement('span'));

    link.href = repos[i][0].html_url;
    link.text = repos[i][0].name + ": " + repos[i][0].stargazers_count + " stars";
    conNames.className = 'contributors';
  };
},
function(reason) {
  console.log(reason);
});
