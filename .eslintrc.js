module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "rules": {
    "indent": [ "error", 2, { "SwitchCase": 1 } ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "single" ],
    "semi": [ "error", "always" ],
    "no-trailing-spaces": [ "error" ],
    "no-multiple-empty-lines": [ "error", { "max": 1 } ],
    "eol-last": [ "error", "always" ]
  }
};