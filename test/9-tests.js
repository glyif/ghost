const Nightmare = require('nightmare');
const assert = require('assert');
const request = require('request');


describe('========= Checks Assignment 9 ========', function() {
  this.timeout('10s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare()
  });

  const selector = '.checkThis';

  describe('Does 8-index.html load', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/9-main.html')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  });

  describe('Wind Speed', () => {
    it('wind speed should be loaded as 22', done => {
      nightmare.goto('http://localhost:3000/9-main.html')
        .wait(5000)
        .inject('js', 'jquery-3.2.1.js')
        .evaluate(() => {
          return $('DIV#sf_wind_speed').text()
        }, selector)
        .end()
        .then((windSpeed) => {

          assert.equal(windSpeed, 22);
          done();
        })
        .catch(done)
    })
  });
});
