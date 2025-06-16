import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  test: {
    workspace: [
      {
        test: {
          name: 'node',
          include: ['tests/**/*.test.{js,mjs,jsx,ts,tsx}'],
          environment: 'node',
          alias: {
            '@': path.resolve(dirname, './src'),
          },
        },
      },
    ],
  },
})
