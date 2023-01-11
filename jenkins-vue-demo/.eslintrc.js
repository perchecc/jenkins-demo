module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    eqeqeq: 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state', // for vuex state
        ],
      },
    ],
    'no-shadow': [
      'error',
      {
        allow: [
          'state', // for vuex state
        ],
      },
    ],
    'no-console': 'off',
  },
  globals: {
    AMap: true,
    echarts: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
  },
};

// /* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution');

// module.exports = {
//   root: true,
//   // "extends": [
//   //   "plugin:vue/essential",
//   //   "eslint:recommended",
//   //   "@vue/eslint-config-prettier"
//   // ],
//   extends: ['eslint:recommended', 'standard', 'plugin:prettier/recommended'],
// };
