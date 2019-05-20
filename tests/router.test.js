const path = require('path');
const request = require('supertest');
const assert = require('assert');
const faker = require('faker');
const app = require('../src/app');

/* eslint-disable no-undef */

// A test group, all tests inside this function are to test create story route with all it's cases.
describe('Test create story route', () => {
  /*
    First test, to test the error response if it returns what it should return.
    request is the 'supertest' package used to create fake request to test the response.
   */
  test('Error response', () => request(app)
    .post('/posts/create')
    .send({
      owner: faker.name.firstName, title: faker.lorem.word, body: faker.lorem.paragraphs, date: faker.date.between('1960-01-01', '1980-01-01'),
    })
    .set('Accept', 'application/json') // To set headers
    .expect('Content-Type', /json/) // Expected response headers, if not matched will return a test error.
    .expect(200, { success: false, err: 'There\'s been an error in saving the data to Airtable' }));
  /* Prev line: first parameter is the response status expected,
     and second parameter is the reponse body expected
   */
});

describe('Test upload image route', () => {
  // Success case should be with no problems.
  test('Success response', () => request(app)
    .post('/upload')
    .attach('uploadedImg', path.join(__dirname, 'assets', 'wood.jpg'))
    .expect('Content-Type', /json/)
    .expect(200)
    .then((res) => {
      assert(res.body.success, true);
      assert(Object.prototype.hasOwnProperty.call(res.body, 'image'), true);
    }), 40000);
  /* The jest test is stop the test after 5 seconds (5000 milliseconds),
     but cloudinary response is too slow,
     so this 40000 is to overright the waiting time.
   */

  /* Test case with upload a text file instead of image,
     response status code should be 400 with special body.
   */
  test('Uploading image error', () => request(app)
    .post('/upload')
    .attach('uploadedImg', path.join(__dirname, 'assets', 'textFile.txt'))
    .expect('Content-Type', /json/)
    .expect(400, { success: false, err: { message: 'Invalid image file', http_code: 400 } }),
  40000);

  // If requested with no image attached, response should be 400 with special body.
  test('Request without image attached', () => request(app)
    .post('/upload')
    .expect('Content-Type', /json/)
    .expect(400, { success: false, err: 'something went wrong while processing your request, please try again' }),
  40000);
});
/* eslint-enable no-undef */
