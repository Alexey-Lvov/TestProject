module.exports = {
    extends: [
        'airbnb',
        'airbnb-typescript',
      ],
    parserOptions: {
      project: './tsconfig.json',
    },
    rules: {
        "no-param-reassign": 0,
    }
  };