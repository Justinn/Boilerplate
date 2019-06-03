const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');

console.log(chalk.yellow('Opening database connection'));

const db = new Sequelize(
  `postgres://postgres:admin@localhost:5432/${pkg.name}`,
  {
    logging: false, // so we don't see all the SQL queries getting made
  }
);

module.exports = { db };
