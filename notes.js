const fs = require('fs');

const fetchNotes = () => {
    const fileContent = fs.readFileSync('notes.txt');

    if (fileContent.length > 0) {
        return JSON.parse(fileContent);
    } else return [];
}

const addingNote = (title, body) => {
    const notes = fetchNotes();


    const note = {
        title,
        body
    };
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));

    console.log("notes list:", notes);
}

const removeNote = (title) => {
    let notes = fetchNotes();

    const filteredNotes = notes.filter((note) =>  note.title !== title );

    fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));

    console.log("notes list:", filteredNotes);
}

module.exports = { addingNote, removeNote }