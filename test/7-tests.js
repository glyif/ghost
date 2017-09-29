const Nightmare = require('nightmare');
const assert = require('assert');


describe('========= Checks Assignment 7 ========', function() {
  this.timeout('10s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare()
  });

  const selector = '.checkThis';

  describe('Does 7-index.html load', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/7-main.html')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  });

  describe('Swapi person name', () => {
    it('name should be "Leia Organa"', done => {
      nightmare.goto('http://localhost:3000/7-main.html')
        .wait(5000)
        .inject('js', 'jquery-3.2.1.js')
        .evaluate(() => {
          return $('DIV#character').text()
        }, selector)
        .end()
        .then((text) => {
          assert.equal(text.trim(), "Leia Organa");
          done();
        })
        .catch(done)
    })
  });
});
