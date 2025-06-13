import 'aws-amplify/auth/enable-oauth-listener'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function Page() {
  const cookieStore = await cookies()
  const tenant = cookieStore.get('tenant')?.value ?? 'default'

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="h-16">
        <h1 className="mt-10 text-3xl font-bold">{tenant}の提出サイト</h1>
      </div>
      <div className="m-10 flex flex-wrap justify-around">
        <div className="w-1/2 p-4">
          <Link href="/login">
            <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
              <h2 className="title-font text-3xl font-medium text-white">
                ログイン
              </h2>
              <p className="leading-relaxed text-white">ログインしましょう</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
