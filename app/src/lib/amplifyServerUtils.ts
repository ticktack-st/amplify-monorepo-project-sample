import { createServerRunner } from '@aws-amplify/adapter-nextjs'

const cognitoSetting = JSON.parse(process.env.COGNITO_DEFINITIONS || '{}')
console.log('Cognito settings:', cognitoSetting)

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
