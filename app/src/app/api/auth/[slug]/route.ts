import { createAuthRouteHandlers } from '@/lib/amplifyServerUtils'

export const GET = createAuthRouteHandlers({
  redirectOnSignInComplete: '/logged-in',
  redirectOnSignOutComplete: '/login',
})

export const dynamic = 'force-dynamic'
