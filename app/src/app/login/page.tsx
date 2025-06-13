'use client'

import { clientLogger } from '@/lib/logger'
import 'aws-amplify/auth/enable-oauth-listener'
import type { NextRequest } from 'next/server'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    const requestId =
      NextRequest.headers.get('x-request-id') ?? 'unknown-request-id'
    clientLogger.error('コンポーネントが表示されました。', { requestId })
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      ログインしてください
    </div>
  )
}
