const Nightmare = require('nightmare');
const assert = require('assert');


describe('========= Checks Assignment 1 ========', function() {
  this.timeout('10s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare()
  });

  const selector = '.checkThis';

  describe('Does 1-index.html load', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/1-main.html')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  });

  describe('header should be red', () => {
    it('header text on page load', done => {
      nightmare.goto('http://localhost:3000/1-main.html')
        .evaluate((selector) => {
          return document.querySelector(selector).style.color;
        }, selector)
        .end()
        .then((color) => {
          assert.equal(color, "rgb(255, 0, 0)");
          done();
        })
        .catch(done)
    })
  });

});
