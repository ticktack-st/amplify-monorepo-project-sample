import Link from 'next/link'
import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>提出サイト的なもの</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        {/* <!-- ヘッダ --> */}
        <header className="w-full border-b border-gray-200 bg-gray-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* <!-- ロゴ部分 --> */}
              <div className="flex-shrink-0">
                <Link className="text-xl font-semibold text-gray-900" href="#">
                  弊社
                </Link>
              </div>

              {/* <!-- アクションボタン --> */}
              <div className="flex items-center space-x-4">
                <Button className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600">
                  ログイン
                </Button>
              </div>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}
