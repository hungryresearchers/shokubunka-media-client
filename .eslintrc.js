module.exports = {
  parser: 'babel-eslint',
  extends: [
    'react-app',
    'eslint:recommended',
    'standard',
    'plugin:react/recommended',
  ],
  plugins: [
    'flowtype',
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'warn',
    'no-multi-spaces': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'brace-style': ['error', 'stroustrup'],
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-typos': 'error',
    'react/no-unused-state': 'error',
    'react/no-unused-prop-types': 'error',
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'no-unused-vars': 'warn',
  },
}
