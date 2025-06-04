import { createServerRunner } from '@aws-amplify/adapter-nextjs'

const cognitoSetting = JSON.parse(
  process.env.COGNITO_DEFINITIONS ||
    '{"Auth":{"Cognito":{"userPoolId":"ap-northeast-1_h59Uj2q34","userPoolClientId":"7jtbu9ifgk78onlqeajgnv8rvj","loginWith":{"oauth":{"domain":"ap-northeast-1h59uj2q34.auth.ap-northeast-1.amazoncognito.com","scopes":["email","openid"],"redirectSignIn":["http://localhost:3000"],"redirectSignOut":["http://localhost:3000"],"responseType":"code"}}}}}'
)
export const { runWithAmplifyServerContext, createAuthRouteHandlers } =
  createServerRunner({
    config: cognitoSetting,
    runtimeOptions: {
      cookies: {
        domain: 'localhost',
        sameSite: 'strict',
        maxAge: 60 * 60, // 1 hour
      },
    },
  })
