const chalk = require('chalk');

const getRandomSum = () => [Math.random(), Math.random()].reduce((a, b) => a + b, 0);

console.log(chalk.yellow(getRandomSum()));
