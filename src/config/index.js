let config = {}

if (__ENV__ === 'development') {
  config.api = 'localhost:3000'
}
if (__ENV__ === 'production') {
  config.api = 'localhost:3000'
}
export default config
