import fs from "fs";
import chalk from "chalk";

export const getNotes = () => {
  const notes = loadNotes();
  notes.forEach((note, index) =>
    console.log(`${index}- Title: ${note.title}. Description: ${note.body}`)
  );
};

export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.find((note) => note.title === title);
  debugger;
  if (!duplicate) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.bold.inverse(`New note added: ${title}`));
  } else {
    console.log(
      chalk.red.bold.inverse(
        "Note title already exists. Please choose a different title."
      )
    );
  }
};

export const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (!note) {
    console.log(chalk.red.bold.inverse("Note not found."));
    return;
  }
  console.log(`Title: ${note.title}. Description: ${note.body}`);
};

export const deleteNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.bold.inverse(`Note Deleted: ${title}`));
  } else {
    console.log(
      chalk.red.bold.inverse(
        "No note with that title found. Please choose a different title."
      )
    );
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes, null, 2);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = () => {
  // without the try/catch the console will throw an error and will break the code
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};
