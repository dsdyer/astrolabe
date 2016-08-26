buster.spec.expose();

var assert = buster.referee.assert;
var refute = buster.referee.refute; 

describe("textedit", function () {
    it("has a textarea element", function () {
      assert(document.querySelector('textarea'), 'Text area not found. That\'s kind of a big one.');
    });
});