import outputs from '@/../amplify_outputs.json'
import { createServerRunner } from '@aws-amplify/adapter-nextjs'

// export const { runWithAmplifyServerContext, createAuthRouteHandlers } =
export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
  runtimeOptions: {
    cookies: {
      domain: 'localhost',
      sameSite: 'strict',
      maxAge: 60 * 60, // 1 hour
    },
  },
})
