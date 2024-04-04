const button = document.getElementById("button");
const app = document.getElementById("app");

function saveNote(note) {
    localStorage.setItem("note-app", JSON.stringify(note));

}

function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]")
}

getNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    app.insertBefore(noteEl, button);
});

function addNote() {
    const notes = getNotes();
    const Note = {
        id: Math.floor(Math.random() * 10000),
        content: ""
    }
    const noteElement = createNoteEl(Note.id, Note.content);
    app.insertBefore(noteElement, button);
    notes.push(Note);
    saveNote(notes)
}

function createNoteEl(id, content){
    const noteText = document.createElement("textarea");
    noteText.classList.add("textarea")
    noteText.classList.add("notes");
    noteText.placeholder = "Enter a note..";
    noteText.value = content;

    noteText.addEventListener("dblclick", () => {
        const warning = confirm("Are you sure you want to delete this note?");
        if (warning) {
            deleteNote(id, noteText);
        }

       
    })

    noteText.addEventListener("input", () => {
        updateNote(id, noteText.value)
    })

    return noteText;
}

function deleteNote(id, noteEl){
    const notes = getNotes().filter((note) => note.id != id)
    saveNote(notes);
    app.removeChild(noteEl);
}

function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);
}


button.addEventListener("click", addNote);
  










document.getElementById("new-note").addEventListener("click", function() {
    window.location.href = "../simple note/index.html";
});

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}
// const noteInput = document.getElementById('noteInput');
// const saveButton = document.getElementById("saveBu

// // Load saved notes from local storage on page load
// window.onload = () => {
//     const notes = JSON.parse(localStorage.getItem('notes')) || [];
//     displayNotes(notes);
// };

// function displayNotes(notes) {
//     savedNotes.innerHTML = '';
//     notes.forEach(note => {
//         const noteElement = document.createElement('div');
//         noteElement.textContent = note;
//         noteElement.classList.add('note');
//         noteElement.addEventListener('click', () => openNote(note));
//         savedNotes.appendChild(noteElement);
//     });
// }

// // Function to save a note
// function saveNote() {
//     const note = noteInput.value.trim();
//     if (note) {
//         let notes = JSON.parse(localStorage.getItem('notes')) || [];
//         notes.push(note);
//         localStorage.setItem('notes', JSON.stringify(notes));
//         displayNotes(notes);
//         noteInput.value = '';
//     }
// }

// // Function to open a saved note
// function openNote(note) {
//     alert(note); // You can replace alert with your desired action to open the note
// }

// // Event listener for save button
// saveButton.addEventListener('click', saveNote);
