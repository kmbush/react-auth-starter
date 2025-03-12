// src/config/amplify/config.ts
const amplifyConfig = {
    Auth: {
      Cognito: {
        userPoolId: 'xxxxxxxxxxxxxxxx',
        userPoolClientId: 'xxxxxxxxxxxxxxxxxxx',
        region: 'xxxxxxxxxxx',
        loginWith: {
          username: true,
          email: true
        }
      }
    }
  } as const
  
  export default amplifyConfig
  