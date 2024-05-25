const noteImage = document.getElementById("note_img");
const answers = document.querySelectorAll(".answer");
const answerOptions = document.querySelectorAll(".radio_btn");
const answerLabels = document.querySelectorAll(".note_label");
const form = document.getElementById("answers_form");


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
    const randomNoteIndex = Math.floor(Math.random() * array.length);
    if (!notesDisplayed.includes(randomNoteIndex)) {
        const currentNote = notesArray[randomNoteIndex];
        // set current note image
        noteImage.src=currentNote.noteImage;

        // set current note answer options
        answerOptions.forEach((option, index) => {
            option.value = currentNote.answerOptions[index];
            const associatedLabel = option.nextElementSibling;
            console.log("sibling:", associatedLabel)
            associatedLabel.innerText = currentNote.answerOptions[index];
        })
        // do not display same question twice
        notesDisplayed.push(randomNoteIndex); 
        console.log(notesDisplayed);
    } else {
        showNote(array);
    }
}

// next button to cycle through questions


form.addEventListener("submit", recordUserAnswer);


const userAnswersArray = [];

function recordUserAnswer(e) {
    e.preventDefault();
    // const selectedOption = form[]
    const userSelection = form.querySelector('input[type="radio"]:checked');
    console.log(userSelection.value);
    userAnswersArray.push(userSelection.value);
    // call check answer function
    console.log(userAnswersArray);
    if (userAnswersArray.length === 7) {
        showResults();
        return;
    }
    showNote(notesArray);
}

function showResults() {
    console.log(`answers ${userAnswersArray}`);
}
// function to check answer and hold answers in an array
