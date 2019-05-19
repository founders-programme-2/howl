const path = require('path');
const request = require('supertest');
const assert = require('assert');
const faker = require('faker');
const app = require('../src/app');

// eslint-disable-next-line no-undef
describe('Test create story route', () => {
  // eslint-disable-next-line no-undef
  test('Error response', () => request(app)
    .post('/posts/create')
    .send({
      owner: faker.name.firstName, title: faker.lorem.word, body: faker.lorem.paragraphs, date: faker.date.between('1960-01-01', '1980-01-01'),
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, { success: false, err: 'There\'s been an error in saving the data to Airtable' }));
});

// eslint-disable-next-line no-undef
describe('Test upload image route', () => {
  // eslint-disable-next-line no-undef
  test('Success response', () => request(app)
    .post('/upload')
    .attach('uploadedImg', path.join(__dirname, 'assets', 'wood.jpg'))
    .expect('Content-Type', /json/)
    .expect(200)
    .then((res) => {
      // eslint-disable-next-line no-undef
      assert(res.body.success, true);
      assert(res.body.hasOwnProperty('image'), true);
    }), 40000);

  test('Uploading image error', () => request(app)
    .post('/upload')
    .attach('uploadedImg', path.join(__dirname, 'assets', 'textFile.txt'))
    .expect('Content-Type', /json/)
    .expect(400, { success: false, err: { message: 'Invalid image file', http_code: 400 }}),
  40000);

  // eslint-disable-next-line no-undef
  test('Request without image attached', () => request(app)
    .post('/upload')
    .expect('Content-Type', /json/)
    .expect(400, { success: false, err: 'something went wrong while processing your request, please try again' }),
  40000);
});
