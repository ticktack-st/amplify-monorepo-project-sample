import pino from 'pino'

const isProd = process.env.NODE_ENV === 'production'

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
      return {
        level: label,
      }
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  browser: {
    asObject: true,
    serialize: true,
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
