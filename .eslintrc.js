module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": "airbnb-base",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018
  },
  "rules": {
      "no-console": 0,
      "no-debugger": 0,
      "func-names": 0
  }
};
