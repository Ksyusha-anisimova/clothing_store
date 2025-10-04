const { FlatCompat } = require('@eslint/eslintrc')
const compat = new FlatCompat()

module.exports = {
    root: true,
    env: { browser: true, es2022: true, node: true },
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: 'detect' } },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier'
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off'
    }
}
