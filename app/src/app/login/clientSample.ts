'use client'

// import { clientLogger } from '@/lib/logger'
import { setClientLogger } from '@/actions/client-logger'
import { useEffect } from 'react'

interface Props {
  requestId: string
}

export default function ClientSample({ requestId }: Props) {
  useEffect(() => {
    const clientLogger = async () => {
      await setClientLogger('Client component rendered', requestId)
      // clientLogger.info('Client component rendered', { requestId })
    }
    clientLogger().catch((error) => {
      console.log('Error in clientLogger:', error)
    })
  }, [])

  return null
}
