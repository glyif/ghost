const Nightmare = require('nightmare');
const assert = require('assert');


describe('========= Checks Assignment 3 ========', function() {
  this.timeout('10s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare()
  });

  const selector = '.checkThis';

  describe('Does 3-index.html load', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/3-main.html')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  });

  describe('Should not be red, or have red class', () => {
    it('header should not be red yet', done => {
      nightmare.goto('http://localhost:3000/3-main.html')
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

  describe('Click and turn red (add .red class)', () => {
    it('header should add .red class to classList', done => {
      nightmare.goto('http://localhost:3000/3-main.html')
        .inject('js', 'jquery-3.2.1.js')
        .click("#red_header")
        .evaluate(() => {
          return $('#red_header').hasClass("red")
        }, selector)
        .end()
        .then((ele) => {
        if (ele) {
          assert.equal(1, 1);
        } else {
          assert.equal(ele, "not equal")
        }

          done();
        })
        .catch(done)
    })
  })
});
