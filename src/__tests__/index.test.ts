// const { protos, GoogleAdsServiceClient } = require("../build/src/index");
import DataForSeoClient from '../client/client'
// // TODO: Use tests generated within package/googleads-nodejs
const username = process.env.DATA_SEO_LOGIN || ''
const password = process.env.DATA_SEO_PASSWORD || ''

test('get account info', async () => {
  const client = new DataForSeoClient(username, password, 'sandbox')
  const res = await client.getAccountInfo()
  console.log(res)
  expect(res).toHaveProperty('status_code')
  expect(res.status_code).toBe(20000)
})

test('Get Google locations', async () => {
  const client = new DataForSeoClient(username, password, 'sandbox')
  const res = await client.getGoogleLocations()

  console.log(res)
  expect(res).toHaveProperty('status_code')
  expect(res.status_code).toBe(20000)
})
test('Get Google languages', async () => {
  const client = new DataForSeoClient(username, password, 'sandbox')
  const res = await client.getGoogleLanguages()

  console.log(res)
  expect(res).toHaveProperty('status_code')
  expect(res.status_code).toBe(20000)
})
