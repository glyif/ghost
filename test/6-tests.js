const Nightmare = require('nightmare');
const assert = require('assert');


describe('========= Checks Assignment 6 ========', function() {
  this.timeout('10s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare()
  });

  const selector = '.checkThis';

  describe('Does 6-index.html load', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/6-main.html')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  });

  describe('Text on load', () => {
    it('Text should be "Update the header"', done => {
      nightmare.goto('http://localhost:3000/6-main.html')
        .inject('js', 'jquery-3.2.1.js')
        .evaluate(() => {
          return $('header').text()
        }, selector)
        .end()
        .then((text) => {
          assert.equal(text.trim(), "First HTML page");
          done();
        })
        .catch(done)
    })
  });

  describe('Text after click', () => {
    it('Text should be "New Header!!!"', done => {
      nightmare.goto('http://localhost:3000/6-main.html')
        .click("#update_header")
        .inject('js', 'jquery-3.2.1.js')
        .evaluate(() => {
          return $('header').text()
        }, selector)
        .end()
        .then((text) => {
          assert.equal(text.trim(), "New Header!!!");
          done();
        })
        .catch(done)
    })
  });

});
