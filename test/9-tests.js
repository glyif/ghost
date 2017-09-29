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
        request ('https://query.yahooapis.com/v1/public/yql?q=select%20wind%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22San%20Francisco%2C%20CA%22)&format=json',
          function(err, response, body) {
            assert.equal(windSpeed, JSON.parse(body.query.results.channel.wind.speed));
          });
          done();
        })
        .catch(done)
    })
  });
});
