/* 
// LOAD CORE MODULES

const fs = require("fs");

//fs.writeFileSync("notes.txt", "My name is valentina");
fs.appendFileSync("notes.txt", ". This is data to append");
*/
// IMPLEMENTATION OF NPM VALIDATOR PACKAGE

//import validator from "validator";
//const validator = require("validator");

//console.log(validator.isEmail("vjss05@gmail.com")); //true
//console.log(validator.isURL("http/testpage.com")); //false

// LOAD OTHER FILES AND IMPLEMENT CHALK PACKAGE TO HAVE COLORS IN THE TERMINAL

import chalk from "chalk";
import yargs from "yargs"; // to parse arguments send in the command line
import { hideBin } from "yargs/helpers"; // yargs doesn't directly export the argv property. Instead, you need to access it using .hideBin() to parse the arguments.
import { getNotes, addNote, deleteNote, readNote } from "./notes.js";
//const getNotes = require("./notes.js"); // without type module

//const command = process.argv; // ACCESING PARAMS IN THE COMMAND LINE (the info provided is a little messy so we use yargs to parse it)
const yargs2 = yargs(hideBin(process.argv));

// create the add commands
yargs2.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "Note content",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    console.log(chalk.green.bold("Adding a new note..."));
    addNote(argv.title, argv.body);
  },
});

// create the delete commands
yargs2.command({
  command: "delete",
  describe: "Delete a note",
  builder: {
    title: {
      describe: "Title note to delete",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    console.log(chalk.red.bold("Deleting a note..."));
    deleteNote(argv.title);
  },
});

// create the listing command
yargs2.command({
  command: "list",
  describe: "List all notes",
  handler() {
    console.log(chalk.cyan.bold("Your notes..."));
    getNotes();
  },
});

// create the read command
yargs2.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Title of the note to read",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    console.log(chalk.magenta.bold("Reading a note..."));
    readNote(argv.title);
  },
});

//console.log(yargs2.argv); to replace this we use the one below
yargs2.parse();
