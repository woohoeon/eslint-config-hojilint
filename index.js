module.exports = {
  parser: 'babel-eslint',
  extends: ['google'],
  plugins: ['prettier'],
  rules: {
    quotes: ['error', 'single', {avoidEscape: true}],
    indent: ['error', 2],
  },
}
