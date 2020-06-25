const {assert} = require('chai')
const request = require('supertest');

const app = require('../app.js')

describe('/api/ShadowoftheDemonLord',  () => {
  describe('GET request', () => {
      it('returns a 200 status', async () => {
        const response = await request(app).get('/api/ShadowoftheDemonLord').send()
        assert.equal(response.status, 200)
      })
  })
})

describe('/api/Roll20CharSheets',  () => {
  describe('GET request', () => {
      it('returns a 200 status', async () => {
        const response = await request(app).get('/api/Roll20CharSheets').send()
        console.log(response)
        assert.equal(response.status, 200)
      })
  })
})

describe('/api/send',  () => {
  describe('GET request', () => {
      it('returns a 200 status', async () => {
        const response = await request(app).post('/api/send').send()
        assert.equal(response.status, 200)
      })
  })
})