import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://nextjs:3000',
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
