import pino from 'pino'

const isProd = process.env.NODE_ENV === 'production'
const isEdge = process.env.NEXT_RUNTIME === 'edge'
// const frontendOrigin = process.env.NEXT_PUBLIC_FRONTEND_ORIGIN
const frontendOrigin =
  process.env.NEXT_PUBLIC_FRONTEND_ORIGIN || 'http://localhost:3000'
const LOG_URL = `${frontendOrigin}/api/log`

// ログに含めないフィールドを指定
const redactParams = [
  'key',
  'path.to.key',
  'stuff.thats[*].secret',
  'path["with-hyphen"]',
]

// Pinoの共通設定
/**
 * 形式
 * {
 *  "level":"info",
 *  "time":"2025-06-12T03:22:19.233Z",
 *  "pid":1971,
 *  "hostname":"243413ab5ad5",
 *  "msg":"Middleware started",
 *  "requestId": '8ff871b5-5c99-4a6a-9e35-6a8153a7eaba',
 * }
 */
let n = 0
const pinoCommonConfig = {
  name: 'pino',
  nestedKey: 'context',
  mixin: () => {
    return { line: ++n }
  },
  formatters: {
    level: (label: string) => {
      return { logLevel: label.toUpperCase() }
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  browser: {
    ...(isEdge && {
      write: {
        info: (o: object) => {
          const { level } = o as Record<string, string>
          const logMessage = { ...o, logLevel: level?.toUpperCase() }
          console.log(JSON.stringify(logMessage))
        },
        error: (o: object) => {
          const { level } = o as Record<string, string>
          const logMessage = { ...o, logLevel: level?.toUpperCase() }
          console.error(JSON.stringify(logMessage))
        },
        warn: (o: object) => {
          const { level } = o as Record<string, string>
          const logMessage = { ...o, logLevel: level?.toUpperCase() }
          console.warn(JSON.stringify(logMessage))
        },
        debug: (o: object) => {
          const { level } = o as Record<string, string>
          const logMessage = { ...o, logLevel: level?.toUpperCase() }
          console.debug(JSON.stringify(logMessage))
        },
        trace: (o: object) => {
          const { level } = o as Record<string, string>
          const logMessage = { ...o, logLevel: level?.toUpperCase() }
          console.trace(JSON.stringify(logMessage))
        },
        fatal: (o: object) => {
          const { level } = o as Record<string, string>
          const logMessage = { ...o, logLevel: level?.toUpperCase() }
          console.error(JSON.stringify(logMessage))
        },
        critical: (o: object) => {
          const { level } = o as Record<string, string>
          const logMessage = { ...o, logLevel: level?.toUpperCase() }
          console.error(JSON.stringify(logMessage))
        },
      },
    }),
  },
  redact: redactParams,
}

// ログ出力設定
const pinoConfig = (() => {
  // 本番環境用
  if (isProd) {
    return {
      ...pinoCommonConfig,
      level: 'info',
    }
  }

  // 開発環境用
  return {
    ...pinoCommonConfig,
    level: 'debug',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
      },
    },
  }
})()

export const logger = pino(pinoConfig)

// クライアント側のログ出力設定
// ブラウザで発生したログをサーバーに送信するための設定
// ブラウザのコンソールには出力しない
export const clientLogger = pino({
  level: 'info',
  timestamp: pino.stdTimeFunctions.isoTime,
  browser: {
    write: () => {},
    transmit: {
      send: (level, logEvent) => {
        const messages = logEvent.messages
        // ミドルウェアではnavigator.sendBeaconは使用できないため、keepalive:true の fetch を使用
        // TODO: fetch laterも検討する
        void fetch(LOG_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ level, messages }),
          keepalive: true,
        })
      },
    },
  },
})
