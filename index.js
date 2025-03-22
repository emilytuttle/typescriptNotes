"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline");
// Make interface to read from the console so users can write
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Gets the current date and time so when a note is submitted the date and time is known
function getCurrentDate() {
    var date = new Date();
    return "".concat(date.toLocaleDateString(), " ").concat(date.toLocaleTimeString());
}
// puts the not in the file. It passes the new note to the function, which calls the load notes function.
function writeNoteToFile(note) {
    // pulls all of the current notes 
    var notes = loadNotes();
    // adds the new note to the end of the array of past notes
    notes.push(note);
    // rewrites the file, with the notes all there, put into json format
    fs.writeFileSync('notes.txt', JSON.stringify(notes, null, 2), 'utf8');
}
// loads notes from the notes.txt file into an arrray of notes
function loadNotes() {
    //checks to make sure the file actually exists
    if (fs.existsSync('notes.txt')) {
        // reads all lines of the file
        var data = fs.readFileSync('notes.txt', 'utf8');
        // takes the data from JSON format to list format so there is a list of notes
        return JSON.parse(data);
    }
    //returns the notes array that was created
    return [];
}
// Deletes note based off of the user input on index
function deleteNoteFromFile(index) {
    var notes = loadNotes();
    // Remove the note at the specified index, the index passed in will already check to see if it is valid and it will subtract to show the user starting at 1 while the array index starts at 0
    notes.splice(index, 1);
    // Rewrites the file with the old note deleted
    fs.writeFileSync('notes.txt', JSON.stringify(notes, null, 2), 'utf8');
    console.log("Your note ".concat(index + 1, " was deleted."));
}
// Main function, gives options to the user for what to do
function main() {
    // //clears the console so it's easier to see what's going on
    // console.clear()
    // makes the question that will be read from the terminal line, listens for answers that will determine more output
    rl.question("\n  Please choose an option:\n  1. Write an entry\n  2. See entries\n  3. Delete an entry\n  4. Quit\n  ", function (choice) {
        // if the user types one in the terminal when the app is running, they get the option to write notes
        if (choice === '1') {
            // Will print the enter your note part, then will read the input
            rl.question('Enter your note: ', function (entry) {
                // creates a new note object. Gets the date in the format received earlier, also passes the entry that comes from user input
                var note = { date: getCurrentDate(), entry: entry };
                //calls the writeNoteToFile function and passes the current note. It doesn't need a different name bcause it is recalled whenever choice 1 is chosen
                writeNoteToFile(note);
                //Write a message so the user knows what happened
                console.log('Your note was saved.');
                //use the main function again (recursion) so that it is a loop. If not, it would need if then statements or when statements
                main();
            });
            // returns this if the user chooses 2 and presses enter
        }
        else if (choice === '2') {
            // Lets the user see entries, calls the loadNotes functio nto read the file
            var notes = loadNotes();
            if (notes.length === 0) {
                console.log('No entries found.');
            }
            else {
                // checks the number of entries and tells the user how many they have
                console.log("You have ".concat(notes.length, " total entries"));
                notes.forEach(function (note, index) {
                    console.log("Note ".concat(index + 1, ":"));
                    console.log("Date: ".concat(note.date));
                    console.log("Note: ".concat(note.entry, "\n"));
                });
            }
            //use the main function again (recursion) so that it is a loop. If not, it would need if then statements or when statements
            main();
            // Chekcs the user input in the terminal for a 4
        }
        else if (choice == '3') {
            // Pulls all of the notes in again into this current if block
            var notes_1 = loadNotes();
            notes_1.forEach(function (note, index) {
                console.log("Note ".concat(index + 1, ":"));
                console.log("Date: ".concat(note.date));
                console.log("Note: ".concat(note.entry, "\n"));
            });
            rl.question('Enter the number of the note you want to delete: ', function (deleteIndex) {
                var index = parseInt(deleteIndex) - 1; // Adjust user input from 1-based to 0-based index
                if (index >= 0 && index < notes_1.length) {
                    // Call deleteNoteFromFile to delete the note
                    deleteNoteFromFile(index);
                    // if the index isn't in there it can't be deleted, so it will tell the user
                }
                else {
                    console.log('Not a note number in your list. Please try again.');
                }
                main();
            });
        }
        else if (choice === '4') {
            console.log('Thanks for using our notes app!');
            // Quit whole app, close readline function that looks at the user input
            rl.close();
            // if the user does anything other than the options listed, it tells them to try again and recalls the main function again.
        }
        else {
            console.log('Not an option, sorry. Please look at the list and try again.');
            main();
        }
    });
}
// Start the program
main();
//conpime with watching: npx tsc -w
// npx tsc index.ts
// node index.js
