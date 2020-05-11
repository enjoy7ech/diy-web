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
    semi: ['error', 'never'], //禁止使用分号
    'linebreak-style': ['error', 'unix'], //使用一致的换行符
    'no-extra-parens': 1, //禁止不必要的括号
    indent: ['error', 2, { SwitchCase: 1 }],
    'new-cap': [2, { newIsCap: false, capIsNew: false }],
    camelcase: 2,
    'no-console': 1,
    'space-before-function-paren': 0
  },
  globals: {
    $: true,
    __ENV__: true
  }
}
