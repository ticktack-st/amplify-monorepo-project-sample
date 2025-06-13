import { logger } from '@/lib/logger'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  console.log('log request %o', request)
  const requestId =
    request.headers.get('x-middleware-request-x-request-id') ??
    'unknown-request-id'
  logger.info({ message: 'Logging request', requestId: requestId })

  const data = await request.json()
  logger.error({ message: data.messages, requestId: requestId })

  return Response.json(
    { message: 'logged successfully' },
    {
      status: 200,
    }
  )
}
