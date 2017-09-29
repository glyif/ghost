const Nightmare = require('nightmare');
const assert = require('assert');


describe('========= Checks Assignment 5 ========', function() {
  this.timeout('10s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare()
  });

  const selector = '.checkThis';

  describe('Does 5-index.html load', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/5-main.html')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  });

  describe('List on load', () => {
    it('header should remove .green and add .red class to classList', done => {
      nightmare.goto('http://localhost:3000/5-main.html')
        .inject('js', 'jquery-3.2.1.js')
        .evaluate(() => {
          return $('ul li').length
        }, selector)
        .end()
        .then((numberCount) => {
          assert.equal(numberCount, 1);
          done();
        })
        .catch(done)
    })
  });

  describe('List after one click', () => {
    it('list should have 2 elements', done => {
      nightmare.goto('http://localhost:3000/5-main.html')
        .click("#add_item")
        .inject('js', 'jquery-3.2.1.js')
        .evaluate(() => {
          return $('ul li').length
        }, selector)
        .end()
        .then((numberCount) => {
          assert.equal(numberCount, 2);
          done();
        })
        .catch(done)
    })
  });

  describe('List after 10 clicks', () => {
    it('list should have 11 items', done => {
      nightmare.goto('http://localhost:3000/5-main.html')
        .click("#add_item")
        .click("#add_item")
        .click("#add_item")
        .click("#add_item")
        .click("#add_item")
        .click("#add_item")
        .click("#add_item")
        .click("#add_item")
        .click("#add_item")
        .click("#add_item")
        .inject('js', 'jquery-3.2.1.js')
        .evaluate(() => {
          return $('ul li').length
        }, selector)
        .end()
        .then((numberCount) => {
          assert.equal(numberCount, 11);
          done();
        })
        .catch(done)
    })
  });
});
