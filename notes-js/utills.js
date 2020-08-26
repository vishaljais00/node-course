const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");

const getnotes = () => {
    return "this is my notes";
};
// ***************************************************************************************************
const loadnote = () => {
    try {
        const databuffer = fs.readFileSync("notes.json");
        const Jsondata = databuffer.toString();
        return JSON.parse(Jsondata);
    } catch (error) {
        return [];
    }
};
// ***************************************************************************************************
const addnote = (title, body) => {
    const notes = loadnote();
    // const duplicatenotes = notes.filter((note) => {
    //     return note.title === title;
    // });
    const duplicatenote = notes.find((note) => {

        return note.title === title
    })
    debugger
    

    if (!duplicatenote) {
        notes.push({
            title: title,
            body: body,
        });

        savenotes(notes);
        const msg = chalk.bgGreen.bold('new note added')
        console.log(msg)
    } else {
        const msg = chalk.bgRed.bold('note already taken')
        console.log(msg);
    }
};

//***************************************************************************************************
const removenote = (title) => {
    const notes = loadnote();
    const notestokeep = notes.filter((note) => {

        return note.title !== title

    })
    if (notes.length > notestokeep.length) {

        const msg = chalk.bgGreen.bold('note deleted')
        console.log(msg)
        savenotes(notestokeep)
    } else {
        const msg = chalk.bgRed.bold('No note found')
        console.log(msg)
    }
};
// ***************************************************************************************************
const listnotes = () => {

    const notes = loadnote()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
        console.log(note.body)
        console.log(chalk.inverse('**************************'))
    });

}
// ***************************************************************************************************
const savenotes = (notes) => {
    const Jsondata = JSON.stringify(notes);
    fs.writeFileSync("notes.json", Jsondata);
};
// ***************************************************************************************************
const readnote = (title) => {

    const notes = loadnote()
  const note =  notes.find((note) => {
      
    return note.title === title
  })
        if(note){

            console.log(note.title)
            console.log(note.body)
        }
        else{

            console.log(chalk.red('no note found'))
        }

}
// ***************************************************************************************************
module.exports = {
    getnotes: getnotes,
    addnotes: addnote,
    removenotes: removenote,
    loadnote: loadnote,
    savenotes: savenotes,
    listnotes: listnotes,
    readnote : readnote
};