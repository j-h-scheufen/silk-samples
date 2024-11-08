import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  { settings: { react: { version: '18.3.1' } } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  eslintPluginPrettierRecommended,
  {
    ignores: [
      'coverage',
      '**/public',
      '**/dist',
      'pnpm-lock.yaml',
      'pnpm-workspace.yaml',
    ],
  },
];
