import { logger } from '@/lib/logger'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  console.log('log request %o', request)
  logger.info({ message: 'Logging request' })

  const data = await request.json()
  logger.error({ message: data.messages })

  return Response.json(
    { message: 'logged successfully' },
    {
      status: 200,
    }
  )
}
