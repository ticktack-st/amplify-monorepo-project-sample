import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // ローカル用環境変数CYPRESS_BASE_URLが設定してある場合はそちらを使用
      if (process.env.CYPRESS_BASE_URL) {
        config.baseUrl = process.env.CYPRESS_BASE_URL
      }
      return config
    },
    baseUrl: 'http://localhost:3000',
    downloadsFolder: '/results/downloads',
    screenshotsFolder: '/results/screenshots',
    videosFolder: '/results/videos',
    video: true,
    videoCompression: false,
    trashAssetsBeforeRuns: true,
    specPattern: 'src/**/*.cy.ts',
    supportFile: false,
  },
})
