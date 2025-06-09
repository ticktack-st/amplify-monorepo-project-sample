import { Button } from '@/components/ui/button'
import { runWithAmplifyServerContext } from '@/lib/amplifyServerUtils'
import { fetchAuthSession } from 'aws-amplify/auth/server'
import { cookies } from 'next/headers'
import Link from 'next/link'
import type { ReactNode } from 'react'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec, {})
        return session.tokens !== undefined
      } catch {
        return false
      }
    },
  })
  console.log('Authenticated:', authenticated)

  return (
    <html lang="ja">
      <head>
        <meta charSet="utf8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>提出サイト的なもの</title>
      </head>
      <body className="text-gray-900">
        {/* <!-- ヘッダ --> */}
        <header className="w-full border-b border-gray-200 bg-(--tssite-primary)">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-30 items-center justify-between">
              <div className="flex items-center">
                <svg
                  width="50"
                  height="50"
                  className="px-2"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    points="10,30 20,48 45,30 58,48"
                    stroke="#666"
                    strokeWidth="3"
                    fill="none"
                    strokeLinejoin="round"
                  />
                </svg>
                <Link className="text-xl font-semibold text-gray-900" href="#">
                  JMDC 提出サイト
                </Link>
              </div>

              {/* <!-- アクションボタン --> */}
              <div className="flex items-center space-x-4">
                {authenticated ? (
                  <>
                    <Link href="/api/auth/sign-out">
                      <Button
                        size="header"
                        className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600"
                      >
                        ログアウト
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/api/auth/sign-in">
                      <Button
                        size="header"
                        className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600"
                      >
                        ログイン
                      </Button>
                    </Link>
                    <Link href="/api/auth/sign-up">
                      <Button
                        size="header"
                        className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600"
                      >
                        ユーザー登録
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}
