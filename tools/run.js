function run (task, options) {
  task.func(options)
}
if (require.main === module && process.argv.length > 2) {
  let task = require(`./${process.argv[2]}.js`).default

  run(task, process.argv)
}
export default run
