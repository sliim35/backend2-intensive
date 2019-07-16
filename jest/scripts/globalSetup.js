/* Global setup modle.
 **
 ** This module exports an async function that is triggered
 ** once before all test suites.
 **
 */

import { config } from 'dotenv';
import chalk from 'chalk';
config();

module.exports = async function() {
    console.log(chalk.green('λ'));
    global.t = 'hello';
};
