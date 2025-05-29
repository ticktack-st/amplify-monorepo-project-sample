'use client'
import 'aws-amplify/auth/enable-oauth-listener'
import { useEffect } from 'react'

import { Amplify } from 'aws-amplify'
import {
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
} from 'aws-amplify/auth'
import { Hub } from 'aws-amplify/utils'

import { configPoolA } from '../configure'
console.log('configPoolA')

Amplify.configure(configPoolA, { ssr: true })
console.log('configPoolAA')

Hub.listen('auth', async ({ payload }) => {
  console.log('Hub listen auth')
  switch (payload.event) {
    case 'signInWithRedirect': {
      const user = await getCurrentUser()
      const userAttributes = await fetchUserAttributes()
      console.log({ user, userAttributes })
      break
    }
    // /* eslint-disable-next-line unicorn/switch-case-braces */
    case 'signInWithRedirect_failure': {
      console.log('signInWithRedirect_failure')
      // handle sign in failure
      break
    }
    case 'customOAuthState': {
      console.log('customOAuthState')
      const state = payload.data // this will be customState provided on signInWithRedirect function
      console.log(state)
      break
    }
  }
})

export default function AuthCallback() {
  console.log('configPoolAAA')
  // const user = await getCurrentUser();
  // console.log("Current user:");
  // console.log("Current user:", user);
  // const session = await fetchAuthSession();
  // console.log("session", session);

  console.log('a')
  useEffect(() => {
    const getSession = async () => {
      try {
        console.log('b')
        const user = await getCurrentUser()
        console.log('Current user:')
        console.log('Current user:', user)
        const session = await fetchAuthSession()
        console.log('session', session)
        const idToken = session.tokens?.idToken
        const accessToken = session.tokens?.accessToken
        console.log('c')

        console.log('ID Token:', idToken)
        console.log('Access Token:', accessToken)

        // トークンを使用して必要な処理を行う
      } catch (error) {
        console.error('Error fetching auth session:', error)
      } finally {
        console.log('d')
      }
    }

    getSession()
  }, [])

  return <p>Redirecting...</p>
}
