const Nightmare = require('nightmare');
const assert = require('assert');


describe('========= Checks Assignment 2 ========', function() {
  this.timeout('10s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare()
  });

  const selector = '.checkThis';

  describe('Does 2-index.html load', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/0-main.html')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  });

  describe('Should not be red yet', () => {
    it('Red header should not be red yet', done => {
      nightmare.goto('http://localhost:3000/2-main.html')
        .evaluate((selector) => {
          return document.querySelector(selector).style.color;
        }, selector)
        .end()
        .then((color) => {
          assert.equal(color, "");
          done();
        })
        .catch(done)
    })
  });

  describe('Click and turn red', () => {
    it('Red header should turn red', done => {
      nightmare.goto('http://localhost:3000/2-main.html')
        .click("#red_header")
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
  })
});
