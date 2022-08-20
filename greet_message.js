/* import greet from './greet.js'

// call the function & print the result on the screen
  console.log(greet('Xola')) */

//EXTERNAL NPM MODULES

import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js';
import figlet from 'figlet';

const styledMessage = chalk.bgGreen.black(greet('Nasiphi'));
console.log(styledMessage);

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bgGreen.black(data));
});
