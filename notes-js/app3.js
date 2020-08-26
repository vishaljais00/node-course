const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const utility = require("./utills");

yargs.command({
    command: "add",
    describe: "add a note",

    builder: {
        title: {
            describe: "Note title ",
            demandOption: true,
            type: "string",
        },

        body: {
            describe: " my body",
            demandOption: true,
            type: "string",
        },
    },

    handler: (argv) => {
        utility.addnotes(argv.title, argv.body);
    },
});

yargs.command({
    command: "remove",
    describe: " remove a note",

    builder: {
        title: {
            describe: "my title",
            demandOption: true,
            type: "string",
        },
    },

    handler: (argv) => {
        utility.removenotes(argv.title);
    },
});

yargs.command({
    command : "list",
    describe: "listen a note",
    handler: () =>{

         utility.listnotes()
    }
})

yargs.command({

    command : "read",
    describe : "reading the title",
    builder : {

        title : {
            describe : "my title",
             demandOption : true,
            type : "string"
        }
    },

    handler : (argv) =>{
            utility.readnote( argv.title)        
    }
})
yargs.parse();