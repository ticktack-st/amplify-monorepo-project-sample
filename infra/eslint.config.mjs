import eslint from '@eslint/js'
import vitestlint from '@vitest/eslint-plugin'
import eslintCdkPlugin from 'eslint-cdk-plugin'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  // global設定
  {
    ignores: [
      'node_modules/**/*',
      'coverage/**/*',
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
      'vitest.config.ts',
    ],
    plugins: {
      eslint: eslint,
      tseslint: tseslint,
      cdk: eslintCdkPlugin,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.strict.rules,
      ...tseslint.configs.stylistic.rules,
      ...eslintCdkPlugin.configs.strict.rules,
      'cdk/require-jsdoc': 'off',
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
]
