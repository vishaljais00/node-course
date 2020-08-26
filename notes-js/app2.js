const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs');

/*const command = process.argv[2];

if (command === 'add') {

    console.log('Adding note! ')

} else if (command === 'remove') {

    console.log('Removing notes!')

} */

// customize yargs version




// create command 
yargs.version('1.1.0')
yargs.command({

    command: 'add',
    describe: ' add a note',

    builder: {

        body: {

            describe: ' my body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {

        console.log('body: ' + argv.body)
    }
})

yargs.command({

    command: 'remove',
    describe: ' Remove a note',
    handler: () => {

        console.log('removing a note')
    }

})
yargs.command({

    command: 'Listen',
    describe: ' listen a note',
    handler: () => {

        console.log('Listining a note')
    }

})
yargs.command({

    command: 'read',
    describe: ' read a note',

    builder: {

        title: {
            describe: 'Note title ',
            demandOption: true,
            type: 'string'
        },

        body: {

            describe: ' Body notes',
            demandOption: true,
            type: 'string'
        }
    },

    handler: (argv) => {

        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.parse()