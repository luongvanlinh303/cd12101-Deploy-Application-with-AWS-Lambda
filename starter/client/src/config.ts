// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'h8x20s05i4'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/test`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-ok70tca8qfagptnf.us.auth0.com',            // Auth0 domain
  clientId: 'bI3eCudTszmVTC9Y0WxAHuW2BdMjNsAL',          // Auth0 client id
  callbackUrl: 'http://localhost:3000'
}
