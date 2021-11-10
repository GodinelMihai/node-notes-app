const  lk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

//costumize yargs version

yargs.version('1.1.0')

//add, remove, read, list

//create add comand
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

//create remove comand
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//create list comand
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler() {
        notes.listNotes()
    }
})

//create read comand
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)