import type { ResourcesConfig } from 'aws-amplify'

export const configPoolA: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'ap-northeast-1_fVGVH0WsZ',
      userPoolClientId: '1d27eld0o3b5onl981729npi0s',
      // identityPoolId: "ap-northeast-1:bb11347a-a89d-42c5-a6f3-078322d19843",
      // signUpVerificationMethod: "code",
      // userAttributes: {
      //   email: {
      //     required: true,
      //   },
      // },
      // allowGuestAccess: true,
      loginWith: {
        oauth: {
          domain:
            'ap-northeast-1fvgvh0wsz.auth.ap-northeast-1.amazoncognito.com',
          scopes: ['email', 'openid'],
          redirectSignIn: ['http://localhost:3000/logged-in'],
          redirectSignOut: ['http://localhost:3000'],
          responseType: 'code',
        },
      },
    },
  },
}

export const configPoolB: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'ap-northeast-1_h59Uj2q34',
      userPoolClientId: '7jtbu9ifgk78onlqeajgnv8rvj',
      loginWith: {
        oauth: {
          domain:
            'ap-northeast-1h59uj2q34.auth.ap-northeast-1.amazoncognito.com',
          scopes: ['email', 'openid'],
          redirectSignIn: ['http://localhost:3000'],
          redirectSignOut: ['http://localhost:3000'],
          responseType: 'code',
        },
      },
    },
  },
}
