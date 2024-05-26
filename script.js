const noteImage = document.getElementById("note_img");
const answers = document.querySelectorAll(".answer");
const answerOptions = document.querySelectorAll(".radio_btn");
const answerLabels = document.querySelectorAll(".note_label");
const form = document.getElementById("answers_form");
const submitBtn = document.getElementById("submit_btn");
const resultsBtn = document.getElementById("results_btn");


class Note {
    constructor(noteImage, noteName, answerOptions) {
        this.noteImage = noteImage;
        this.noteName = noteName;
        this.answerOptions = answerOptions;
    }
}


const noteA = new Note("/assets/treble-note-a.png", "A", ["A", "D", "C"]);
const noteB = new Note("/assets/treble-note-b.png", "B", ["G", "B", "D"]);
const noteC = new Note("/assets/treble-note-c.png", "C", ["C", "F", "E"]);
const noteD = new Note("/assets/treble-note-d.png", "D", ["D", "A", "F"]);
const noteE = new Note("/assets/treble-note-e.png", "E", ["C", "E", "G"]);
const noteF = new Note("/assets/treble-note-f.png", "F", ["D", "C", "F"]);
const noteG = new Note("/assets/treble-note-g.png", "G", ["G", "B", "A"]);


const notesArray = [noteA, noteB, noteC, noteD, noteE, noteF, noteG];

const notesDisplayed = [];

showNote(notesArray);


function showNote(array) {

    // if the array lengths are the same, that means all notes have already been shown to the user
    if(notesDisplayed.length === array.length) {
        console.log("All notes have been displayed!")
        showResults();
        form.style.display = "none";
        resultsBtn.style.display = "block";
        return;
    }

    const randomNoteIndex = Math.floor(Math.random() * array.length);
    const currentNote = array[randomNoteIndex];


    if(!notesDisplayed.includes(currentNote.noteName)) {

        noteImage.src=currentNote.noteImage;

        notesDisplayed.push(currentNote.noteName);

        answerOptions.forEach((option, index) => {
            option.value = currentNote.answerOptions[index];
            const associatedLabel = option.nextElementSibling;
            associatedLabel.innerText = currentNote.answerOptions[index];
        })
    } else {
        showNote(notesArray);
    }
}



form.addEventListener("submit", submitAndRecordUserAnswer);

const userAnswersArray = [];

function submitAndRecordUserAnswer(e) {
    e.preventDefault();
    if (userAnswersArray.length === 7) {
        return;
    }
    const userSelection = form.querySelector('input[type="radio"]:checked');
    userAnswersArray.push(userSelection.value);
    console.log(userAnswersArray);
    showNote(notesArray);
}

function showResults() {
    console.log("show Results fired", userAnswersArray);
}

// function to check answer and hold answers in an array



