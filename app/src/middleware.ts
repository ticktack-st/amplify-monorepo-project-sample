import { runWithAmplifyServerContext } from '@/lib/amplifyServerUtils'
import { fetchAuthSession } from 'aws-amplify/auth/server'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const subdomain = hostname.split('.')[0]
  // テナント情報を request header や cookie に付与するなど
  const response = NextResponse.next()

  const authenticated = await runWithAmplifyServerContext({
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
        console.log(error)
        return false
      }
    },
  })
  console.log('Authenticated_middle:', authenticated)

  // // テナント情報を request header や cookie に付与するなど
  // const response = NextResponse.next()
  // if (subdomain !== 'localhost:3000') {
  //   response.cookies.set('tenant', subdomain || '')
  // } else if (subdomain === 'test') {
  if (
    subdomain === 'test' &&
    request.nextUrl.pathname.startsWith('/logged-in')
  ) {
    return NextResponse.redirect(
      new URL('https://test.test.localhost:3000/file-upload', request.url)
    )
  }

  // const authenticated = await runWithAmplifyServerContext({
  //   nextServerContext: nextContext,
  //   operation: async (contextSpec) => {
  //     try {
  //       const session = await fetchAuthSession(contextSpec, {
  //         forceRefresh: true,
  //       })
  //       return (
  //         session.tokens?.accessToken !== undefined &&
  //         session.tokens?.idToken !== undefined
  //       )
  //     } catch (error) {
  //       return false
  //     }
  //   },
  // })
  // console.log('Authenticated_middle:', authenticated)

  if (authenticated) {
    return response
  }

  // return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login|file-upload).*)',
  ],
}
