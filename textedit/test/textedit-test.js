buster.spec.expose();

var assert = buster.referee.assert;
var refute = buster.referee.refute; 
// var expect = buster.referee.expect; 

// var q;
// var page = $.fetch('textedit.html', {
//   method: "GET",
//   responseType: "document"
// }).then(function(value) {
//   var q = value.response;
//   q = q.querySelector('body');

  // console.log(q.innerHTML);

  // describe("textedit", function () {
  //   it("has a textarea element", function () {
  //     assert.match(q, {
  //         tagName: "div",
  //         className: "content",
  //         innerHTML: "<div>Gourd</div>"
  //     });
  //   });
  // });

// document.querySelector('body').innerHTML = q.innerHTML;

// console.log('q.innerHTML: ', q.innerHTML);
// console.log('document.querySelector(\'body\').innerHTML: ', document.querySelector('body').innerHTML);

// }, function(reason) {
//   console.log(reason);
// });


// console.log('outer q: ', q);


var textarea = document.querySelector('textarea');


describe("textedit", function () {
    it("has a textarea element", function () {

      assert(textarea, 'Text area not found. That\'s kind of a big one.');


      // console.log(page.status);

    });
});