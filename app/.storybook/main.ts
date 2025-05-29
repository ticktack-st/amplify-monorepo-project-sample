import type { StorybookConfig } from '@storybook/experimental-nextjs-vite'

const config: StorybookConfig = {
  stories: [
    '../tests/stories/**/*.mdx',
    '../tests/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  core: {
    disableTelemetry: true, // Disable telemetry to avoid sending data to Storybook
  },
}
export default config
