module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 8
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': 1,
    'space-before-function-paren': 0
  },
  globals: {
    $: true,
    __ENV__: true
  }
}
