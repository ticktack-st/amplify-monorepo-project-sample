interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-red-600">エラー</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          予期しないエラーが発生しました
        </h2>
        <p className="mb-8 max-w-md text-gray-600">
          申し訳ございませんが、処理中にエラーが発生しました。
          下のボタンをクリックして再試行してください。
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
          >
            再試行
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-md bg-gray-600 px-4 py-2 font-medium text-white transition-colors hover:bg-gray-700"
          >
            ホームに戻る
          </a>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              エラー詳細（開発環境のみ）
            </summary>
            <pre className="mt-2 max-w-md overflow-auto rounded-md bg-gray-100 p-4 text-xs">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}
