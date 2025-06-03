import { createAuthRouteHandlers } from '@/lib/amplifyServerUtils'

export const GET = createAuthRouteHandlers({
  redirectOnSignInComplete: '',
  redirectOnSignOutComplete: '/login',
})
