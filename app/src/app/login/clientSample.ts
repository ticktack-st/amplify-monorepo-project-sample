'use client'

import { clientLogger } from '@/lib/logger'
import { useEffect } from 'react'

interface Props {
  requestId: string
}

export default function ClientSample({ requestId }: Props) {
  useEffect(() => {
    clientLogger.info('Client component rendered', { requestId })
  }, [])

  return null
}
