/** @type {import('stylelint').Config} */
export default {
  ignoreFiles: [
    //   '.amplify/**/*',
    //   '.next/**/*',
    //   '.vscode/**/*',
    //   'node_modules/**/*',
    //   'prisma/**/*',
    'coverage/**/*',
    'storybook-static/**/*',
    //   '**/dist/**/*',
    //   'next-env.d.ts',
    //   'next.config.mjs',
    //   'postcss.config.mjs',
    //   'stylelint.config.mjs',
    //   'eslint.config.mjs',
    'src/app/globals.css', // tailwindcss global stylesを設定しているため
  ],
  extends: [
    'stylelint-config-recommended',
    // 'stylelint-config-standard',
  ],
  overrides: [
    {
      files: ['src/**/*.{js,mjs,jsx,ts,tsx}', 'tests/**/*.{js,mjs,jsx,ts,tsx}'],
      customSyntax: 'postcss-lit',
    },
  ],
}
