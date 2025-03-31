import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import typescript from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    {
        ignores: [
            'eslint.config.mjs',
            'node_modules/*',
            'dist/**/*.*',
        ],
        files: ['src/**/*.ts', 'app/**/*.js'],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            typescript,
            stylistic,
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
        rules: {
            'typescript/no-explicit-any': 'warn',
            'typescript/no-unused-vars': 'warn',
            'stylistic/indent': ['error', 4],
            'stylistic/quotes': ['error', 'single'],
            'stylistic/semi': ['error', 'always', { 'omitLastInOneLineBlock': true}],
            'stylistic/object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
            'stylistic/object-curly-spacing': ['error', 'always'],
            'stylistic/comma-dangle': ['error', 'always-multiline'],
            'stylistic/eol-last': ['error', 'always'],
        },
    },
];
