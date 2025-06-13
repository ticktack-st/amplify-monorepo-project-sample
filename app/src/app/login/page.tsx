import 'aws-amplify/auth/enable-oauth-listener'
import { headers } from 'next/headers'
import ClientSample from './clientSample'

export default async function Page() {
  const header = await headers()
  const requestId = header.get('x-request-id') || 'unknown-request-id'

  return (
    <>
      <ClientSample requestId={requestId} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        ログインしてください
      </div>
    </>
  )
}
