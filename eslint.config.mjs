// import {dirname} from 'path';
// import {fileURLToPath} from 'url';
// import {FlatCompat} from '@eslint/eslintrc';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends('next/core-web-vitals', 'next/typescript'),
// ];

// export default eslintConfig;
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['.prettierrc.cjs'],
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {globals: globals.browser},
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
