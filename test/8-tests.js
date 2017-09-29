const Nightmare = require('nightmare');
const assert = require('assert');


describe('========= Checks Assignment 8 ========', function() {
  this.timeout('10s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare()
  });

  const selector = '.checkThis';

  describe('Does 8-index.html load', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/8-main.html')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  });

  describe('Starwars movie list', () => {
    it('should have 7 movies in the list', done => {
      nightmare.goto('http://localhost:3000/8-main.html')
        .wait(5000)
        .inject('js', 'jquery-3.2.1.js')
        .evaluate(() => {
          return $('ul li').length
        }, selector)
        .end()
        .then((numberCount) => {
          assert.equal(numberCount, 7);
          done();
        })
        .catch(done)
    })
  });
});
