const Nightmare = require('nightmare');
const assert = require('assert');


describe('========= Checks Assignment 4 ========', function() {
  this.timeout('10s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare()
  });

  const selector = '.checkThis';

  describe('Does 4-index.html load', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/4-main.html')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  });

  describe('Color on load', () => {
    it('color on load should be green', done => {
      nightmare.goto('http://localhost:3000/4-main.html')
        .inject('js', 'jquery-3.2.1.js')
        .evaluate(() => {
          return $('header').hasClass('green') && !$('header').hasClass('red');
        }, selector)
        .end()
        .then((text) => {
        if (text) {
          assert.equal(1, 1);
        } else {
          assert.equal(text, 2);
        }
          done();
        })
        .catch(done)
    })
  });

  describe('Color after one click', () => {
    it('color should be green', done => {
      nightmare.goto('http://localhost:3000/4-main.html')
        .click("#toggle_header")
        .inject('js', 'jquery-3.2.1.js')
        .evaluate(() => {
          return $('header').hasClass('red') && !$('header').hasClass('green');
        }, selector)
        .end()
        .then((text) => {
          if (text) {
            assert.equal(1, 1);
          } else {
            assert.equal(text, 2);
          }
          done();
        })
        .catch(done)
    })
  });

  describe('Color after two clicks', () => {
    it('color should be green again', done => {
      nightmare.goto('http://localhost:3000/4-main.html')
        .click("#toggle_header")
        .click("#toggle_header")
        .inject('js', 'jquery-3.2.1.js')
        .evaluate(() => {
          return $('header').hasClass('green') && !$('header').hasClass('red');
        }, selector)
        .end()
        .then((text) => {
          if (text) {
            assert.equal(1, 1);
          } else {
            assert.equal(text, 2);
          }
          done();
        })
        .catch(done)
    })
  });
});
