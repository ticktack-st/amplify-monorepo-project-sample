import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  // global設定
  {
    ignores: ['node_modules/**/*', 'eslint.config.mjs', 'cypress.config.mjs'],
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
    files: ['src/**/*.{js,mjs,jsx,ts,tsx}'],
    plugins: {
      eslint: eslint,
      tseslint: tseslint,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.strict.rules,
      'no-undef': 'off',
    },
  },
]
