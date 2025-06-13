import 'aws-amplify/auth/enable-oauth-listener'
import { headers } from 'next/headers'
import ClientSample from './clientSample'

const header = await headers()
const requestId = header.get('x-request-id') || 'unknown-request-id'

export default function Page() {
  return (
    <>
      <ClientSample requestId={requestId} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        ログインしてください
      </div>
    </>
  )
}
