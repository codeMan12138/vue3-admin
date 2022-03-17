module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "quotes":["error", "double"],
    "@typescript-eslint/no-var-requires":'off',
    "import/extensions":'off',
    "import/no-unresolved":'off',
    "linebreak-style":["off","windows"],
    "import/order":'off'
  },
};
