// ESLint 10 flat config.
//
// eslint-config-next is deliberately NOT used here. It hard-depends on
// eslint-plugin-react@7.37.5 (last published 2025-04-03), whose peer range
// stops at eslint ^9.7 and which throws
// "TypeError: contextOrFilename.getFilename is not a function" on eslint 10.
// The blocks below reproduce that config's coverage from packages that do
// declare eslint 10 support:
//   @next/eslint-plugin-next   -> the 22 @next/next rules (zero peer deps)
//   eslint-plugin-react-hooks  -> the react-hooks rules
//   @eslint-react/eslint-plugin -> replaces eslint-plugin-react
//   typescript-eslint          -> TypeScript parsing and rules
//
// NOT replaced: eslint-plugin-jsx-a11y has no eslint 10 release, so the six
// jsx-a11y rules eslint-config-next enabled (alt-text, aria-props,
// aria-proptypes, aria-unsupported-elements, role-has-required-aria-props,
// role-supports-aria-props) are not enforced. See the PR body for detail.

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintReact from '@eslint-react/eslint-plugin';
import importX from 'eslint-plugin-import-x';

export default tseslint.config(
  // Ignore patterns
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'],
  },

  // Recommended bases
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Browser + Node globals
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Next.js rules (recommended + core-web-vitals)
  {
    name: 'next/core-web-vitals',
    ...nextPlugin.configs['core-web-vitals'],
  },

  // React rules, the eslint-plugin-react replacement
  eslintReact.configs['recommended-typescript'],

  // React Hooks rules.
  // NB: reactHooks.configs['recommended-latest'] and .configs.recommended are
  // both still the legacy eslintrc shape (plugins as an array of strings) and
  // eslint 10 rejects them. The flat shape lives under configs.flat.
  // flat.recommended is 16 rules, exactly what eslint-config-next enabled;
  // flat['recommended-latest'] would add a 17th (react-hooks/void-use-memo).
  {
    name: 'react-hooks/recommended',
    ...reactHooks.configs.flat.recommended,
  },

  // @eslint-react reimplements nine rules that eslint-plugin-react-hooks
  // already provides under the same short names, so both would run the same
  // check twice at different severities (react-hooks/purity is 'error' here,
  // @eslint-react/purity is 'warn'). eslint-plugin-react-hooks is the React
  // team's own plugin and was in the eslint 9 baseline at these severities,
  // so it wins and @eslint-react's copies are turned off.
  // Not using @eslint-react's own disable-conflict-eslint-plugin-react-hooks
  // preset: that resolves the clash the other way, disabling react-hooks/*.
  {
    name: 'eslint-react/drop-react-hooks-duplicates',
    rules: {
      '@eslint-react/rules-of-hooks': 'off',
      '@eslint-react/exhaustive-deps': 'off',
      '@eslint-react/static-components': 'off',
      '@eslint-react/use-memo': 'off',
      '@eslint-react/set-state-in-effect': 'off',
      '@eslint-react/error-boundaries': 'off',
      '@eslint-react/purity': 'off',
      '@eslint-react/set-state-in-render': 'off',
      '@eslint-react/unsupported-syntax': 'off',
    },
  },

  // recommended-typescript omits this one, but eslint-config-next had
  // react/display-name on, so restore the equivalent.
  {
    name: 'eslint-react/next-parity',
    rules: {
      '@eslint-react/no-missing-component-display-name': 'error',
    },
  },

  // The one import rule eslint-config-next enabled. eslint-plugin-import
  // itself caps at eslint ^9, so this comes from the maintained import-x fork.
  {
    name: 'import-x/next-parity',
    plugins: { 'import-x': importX },
    rules: {
      'import-x/no-anonymous-default-export': 'warn',
    },
  },

  // Project-specific overrides
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // 'warn', not 'error': eslint-config-next enabled no typescript-eslint
      // rules at all, so this rule is new here. Erroring on it would fail a
      // lint run that passed before the upgrade, on two dead imports this
      // change did not introduce. Reported, not auto-deleted.
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // typescript-eslint recommended ships this at 'error'. It fires zero
      // times today, but at 'error' it would turn a future edit into a red
      // CI run for a rule that never ran before this upgrade. Same reasoning
      // as no-unused-vars above.
      '@typescript-eslint/no-unused-expressions': 'warn',
    },
  },

  // CommonJS config files at the project root
  {
    files: ['*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
);
