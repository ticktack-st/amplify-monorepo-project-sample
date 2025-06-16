import eslint from '@eslint/js'
import vitestlint from '@vitest/eslint-plugin'
import eslintCdkPlugin from 'eslint-cdk-plugin'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  // global設定
  {
    ignores: [
      '.amplify/**/*',
      '.next/**/*',
      '.vscode/**/*',
      'node_modules/**/*',
      'prisma/**/*',
      'coverage/**/*',
      'cypress/**/*',
      'storybook-static/**/*',
      '**/dist/**/*',
      'eslint.config.mjs',
    ],
  },
  {
    // @typescript-eslintに関する設定
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
        ...globals.builtin,
      },
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        project: './tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // ルール適用
  {
    // 基本ルール適用
    files: [
      'src/**/*.{js,mjs,jsx,ts,tsx}',
      'tests/**/*.{js,mjs,jsx,ts,tsx}',
      '.storybook/**/*.{js,mjs,jsx,ts,tsx}',
      'next-env.d.ts',
      'next.config.mjs',
      'postcss.config.mjs',
      'stylelint.config.mjs',
      'vitest.config.ts',
    ],
    plugins: {
      eslint: eslint,
      tseslint: tseslint,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.strict.rules,
      ...tseslint.configs.stylistic.rules,
    },
  },
  {
    // srcにのみUnicornを適用
    files: ['src/**/*.{js,mjs,jsx,ts,tsx}'],
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      ...eslintPluginUnicorn.configs.recommended.rules,
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            kebabCase: true,
          },
        },
      ],
    },
  },
  {
    // vitestには専用のプラグインを適用
    files: ['tests/**'],
    plugins: {
      vitest: vitestlint,
    },
    rules: {
      ...vitestlint.configs.recommended.rules,
    },
  },
  {
    // CDKには専用のプラグインを適用
    files: ['amplify/backend.ts', 'amplify/**/*.{js,mjs,jsx,ts,tsx}'],
    plugins: {
      cdk: eslintCdkPlugin,
    },
    rules: {
      ...eslintCdkPlugin.configs.strict.rules,
      'cdk/require-passing-this': 'off', // amplify特有の仕様によりoff
    },
  },
]

// https://zenn.dev/hisho/articles/23c39e18282687
// https://zenn.dev/ikemo/scraps/ad6a3dcdf90055
// https://astris.design/atcl/next15-eslint9-prettier/
// https://zenn.dev/yu_ta_9/articles/7001d66779ff3a#%40next%2Feslint-plugin-next
// https://zenn.dev/kazukix/articles/eslint-config-2024-09
// https://qiita.com/masakinihirota/items/b61d595e4ea746adef57
