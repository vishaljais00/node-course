const validator = require('validator')
const chalk = require('chalk')
const getnotes = require('./utills')

const notes = getnotes()

console.log(notes);

console.log(validator.isEmail('vishal.jais00@gmail.com'))

const msg = chalk.blue.bold('welcome to node JS ')

console.log(msg)

console.log(process.argv[2])
    


//*************************************************************************************** *//

