const path = require('path');
const request = require('supertest');
const assert = require('assert');
const faker = require('faker');
const app = require('../src/app');
const { locations, tags, categories } = require('../client/src/Components/data');

/* eslint-disable no-undef */

// A test group, all tests inside this function are to test create story route with all it's cases.
describe('Test create story route', () => {
  /*
    First test, to test the error response if it returns what it should return.
    request is the 'supertest' package used to create fake request to test the response.
   */

  test('Success response', () => request(app)
    .post('/posts/create')
    .send({
      name: `${faker.name.firstName('female')} ${faker.name.lastName}`,
      email: faker.internet.email,
      phone: faker.phone.phoneNumber,
      locations: faker.random.arrayElement(locations),
      title: faker.lorem.word,
      year: faker.random.number({ min: 1960, max: 1980 }),
      month: faker.date.month,
      details: faker.lorem.paragraphs,
      imgLink: faker.image.imageUrl,
      imageCap: faker.name.title,
      wlmConnection: faker.lorem.words,
      additionalComments: faker.lorem.words,
      tags: tags.filter(() => faker.random.boolean),
      category: faker.random.arrayElement(categories),
    })
    .set('Accept', 'application/json') // To set headers
    .expect('Content-Type', /json/) // Expected response headers, if not matched will return a test error.
    .expect(200, { success: true }));
  /* Prev line: first parameter is the response status expected,
     and second parameter is the response body expected (succeeded)
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
