import concurrently from 'concurrently'
import chalk from 'chalk'
import chokidar from 'chokidar'

const exercise = process.env.EX

if (exercise === undefined || exercise.trim() === "") {
  console.error(chalk.yellow.bgRed.bold(" ⚠️  EX not defined "))
  console.error("Command usage : ")
  console.error("EX=1 node check")
}

if (isNaN(exercise)) {
  console.error(chalk.yellow.bgRed.bold(" ⚠️  EX not a number "))
  console.error("Command usage : ")
  console.error("EX=1 node check")
}

const success = () => {
  console.log('')
  console.log(
    "🎉 ",
    chalk.white.bgGreen.bold(" CONGRATULATIONS "),
    "All checks passed successfully, try next exercise."
  )
}

const failure = (result) => {

  console.error('')

  result
    .filter(error => error.exitCode !== 0)
    .map(error => console.error(
      chalk.yellow.bgRed.bold(" ⚠️  CHECK FAILS "),
      ":",
      error.command.name
    ))

  console.error(chalk.yellow.bgRed.bold(" Fix above issues and try again "))
}

const check = () => {
  const {result} = concurrently([
    'npm:test',
    'npm:lint',
  ])
  
  result.then(success, failure);
}

const watcher = chokidar.watch(`./src/ex${exercise}/*`).on('change', check);

process.on('SIGINT', function() {
  watcher.close();
});

check()