module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb/base',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'function-paren-newline': 0,
    'no-confusing-arrow': 0,
    'implicit-arrow-linebreak': 0,


    // setting to warning for param reassignment.  In cases with req and
    // res for express apps.  It's good to alter the param
    'no-param-reassign': ['warn', { props: true }],

    // node 6.* will not run if commas are left at the end of functions
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never', //deviation from airbnb - 6.9.4 will not run
    }],

    // max-len set to 120 based on team poll
    'max-len': ['error', {
      code: 99999,
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // Allow using functions before they are defined
    'no-use-before-define': ['error', {
      'functions': false,
      'classes': true,
    }],
  }
};
