export const oktaConfig ={
    clientId: '0oa9f4h3gisShNVK55d7',
    issuer: 'https://dev-71938686.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsClient: true, 
}