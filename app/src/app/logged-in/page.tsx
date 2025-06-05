'use client'

import 'aws-amplify/auth/enable-oauth-listener'
import Link from 'next/link'
export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="h-16">
        <h1 className="mt-10 text-3xl font-bold">提出サイトメニュー</h1>
      </div>
      <div className="m-10 flex flex-wrap justify-around">
        <div className="w-1/2 p-4">
          <Link href="/user-pool">
            <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
              <h2 className="title-font text-3xl font-medium text-white">
                ユーザー管理
              </h2>
              <p className="leading-relaxed text-white">
                ログイン方法など設定できる
              </p>
            </div>
          </Link>
        </div>
        <div className="w-1/2 p-4">
          <Link href="/file-upload">
            <div className="rounded-md px-4 py-6" />
          </Link>
        </div>
        <div className="w-1/2 p-4">
          <Link href="/file-upload">
            <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
              <h2 className="title-font text-3xl font-medium text-white">
                データアップロード
              </h2>
              <p className="leading-relaxed text-white">
                データファイルをアップロードしてください
              </p>
            </div>
          </Link>
        </div>
        <div className="w-1/2 p-4">
          <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
            <h2 className="title-font text-3xl font-medium text-white">
              🚧過去データダウンロード
            </h2>
            <p className="leading-relaxed text-white">
              過去のデータファイルをダウンロードできます
            </p>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
            <h2 className="title-font text-3xl font-medium text-white">
              🚧提出履歴確認
            </h2>
            <p className="leading-relaxed text-white">
              過去の提出履歴を確認できます
            </p>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
            <h2 className="title-font text-3xl font-medium text-white">
              🚧取得ツールダウンロード
            </h2>
            <p className="leading-relaxed text-white">
              取得ツールダウンロード画面へ
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
