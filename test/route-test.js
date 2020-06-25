const {assert} = require('chai')
const request = require('supertest');

const app = require('../app.js')

describe('root page',  () => {
  describe('GET request', () => {
      it('returns a 200 status', async () => {
        const response = await request(app).get('/').send();

        assert.equal(response.status, 200)
      })
  })
})