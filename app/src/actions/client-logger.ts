'use server'

import { logger } from '@/lib/logger'

export async function setClientLogger(message: string, requestId: string) {
  logger.error({ message: message, requestId: requestId })
}
