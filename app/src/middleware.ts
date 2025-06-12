import { runWithAmplifyServerContext } from '@/lib/amplifyServerUtils'
import { logger } from '@/lib/logger'
import { fetchAuthSession } from 'aws-amplify/auth/server'
import { NextRequest, NextResponse, userAgent } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const requestId = uuidv4()
  response.headers.set('x-request-id', requestId)

  writeRequestInfoLog(request, requestId)

  // 未ログイン時のリダイレクト先ページは除外する
  if (request.nextUrl.pathname.startsWith('/login')) {
    return response
  }

  // Cognito認証済みかどうかを確認
  const authenticated = await confirmAuthenticated(request, response)
  logger.info({
    message: 'Authentication check completed',
    authenticated: authenticated,
  })

  // 認証済みであれば、リクエストをそのまま通す
  if (authenticated) {
    return response
  }

  // 認証されていない場合は、ログインページにリダイレクト
  return NextResponse.redirect(new URL('/login', request.url))
}

// private ///////////////////

function writeRequestInfoLog(request: NextRequest, requestId: string) {
  const agent = userAgent(request)
  const requestInfo = {
    ip: request.headers.get('x-forwarded-for') ?? '',
    method: request.method,
    pathname: request.nextUrl.pathname,
    searchParams: Object.fromEntries(request.nextUrl.searchParams),
    device: agent.device,
    browser: agent.browser,
    userAgent: request.headers.get('user-agent'),
  }
  logger.info({
    message: 'middleware started',
    requestId: requestId,
    requestInfo,
  })
}

async function confirmAuthenticated(
  request: NextRequest,
  response: NextResponse
): Promise<boolean> {
  return runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec, {
          forceRefresh: true,
        })
        return (
          session.tokens?.accessToken !== undefined &&
          session.tokens?.idToken !== undefined
        )
      } catch (error) {
        logger.warn({ message: 'Error fetching auth session', error })
        return false
      }
    },
  })
}
