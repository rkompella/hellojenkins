var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it ('respond with Hello IS Innovation', function(done) {
    request(app).get('/').expect('Hello IS Innovation', done);
  });
});
