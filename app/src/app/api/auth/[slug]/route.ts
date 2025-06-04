import { createAuthRouteHandlers } from '@/lib/amplifyServerUtils'

export const GET = createAuthRouteHandlers({
  redirectOnSignInComplete: '',
  redirectOnSignOutComplete: '/login',
})

export const dynamic = 'force-dynamic'
