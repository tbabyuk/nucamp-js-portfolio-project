const noteImage = document.getElementById("note_img");
const answers = document.querySelectorAll(".answer");
const answerOptions = document.querySelectorAll(".radio_btn");
const answerLabels = document.querySelectorAll(".note_label");
const form = document.getElementById("answers_form");
const submitBtn = document.getElementById("submit_btn");
// const resultsBtn = document.getElementById("results_btn");
const resultsContainer = document.getElementById("display_results");
const questionsDiv = document.getElementById("display_questions");


class Note {
    constructor(noteImage, noteName, answerOptions, answerSubmitted = null) {
        this.noteImage = noteImage;
        this.noteName = noteName;
        this.answerOptions = answerOptions;
        this.answerSubmitted = answerSubmitted;
    }
}


const noteA = new Note("assets/treble-note-a.png", "A", ["A", "D", "C"]);
const noteB = new Note("assets/treble-note-b.png", "B", ["G", "B", "D"]);
const noteC = new Note("assets/treble-note-c.png", "C", ["C", "F", "E"]);
const noteD = new Note("assets/treble-note-d.png", "D", ["D", "A", "F"]);
const noteE = new Note("assets/treble-note-e.png", "E", ["C", "E", "G"]);
const noteF = new Note("assets/treble-note-f.png", "F", ["D", "C", "F"]);
const noteG = new Note("assets/treble-note-g.png", "G", ["G", "B", "A"]);


const notesArray = [noteA, noteB, noteC, noteD, noteE, noteF, noteG];
const notesDisplayed = [];
const notesDisplayedIndex = [];
let currentNote = null;

showNote(notesArray);


function showNote(array) {
    // if the array lengths are the same, that means all notes have already been shown to the user
    if(notesDisplayed.length === array.length) {
        console.log("All notes have been displayed!")
        showResults();
        form.style.display = "none";
        // resultsBtn.style.display = "block";
        return;
    }

    const randomNoteIndex = Math.floor(Math.random() * array.length);
    currentNote = array[randomNoteIndex];

    if(!notesDisplayed.includes(currentNote.noteName)) {

        noteImage.src=currentNote.noteImage;

        notesDisplayed.push(currentNote.noteName);
        notesDisplayedIndex.push(randomNoteIndex);

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

// const userAnswersArray = [];

function submitAndRecordUserAnswer(e) {
    e.preventDefault();
    // if (userAnswersArray.length === 7) {
    //     return;
    // }
    const userSelection = form.querySelector('input[type="radio"]:checked');
    currentNote.answerSubmitted = userSelection.value;
    console.log(currentNote.answerSubmitted);

    // userAnswersArray.push(userSelection.value);
    // console.log(userAnswersArray);
    showNote(notesArray);
    answerOptions.forEach(button => button.checked = false);
    
}

function showResults() {
    questionsDiv.style.display = 'none';
    let score = checkAnswers();
    const finalScore = document.createElement('h1');
    finalScore.innerText = `You got ${score} answers correct!`;
    resultsContainer.insertBefore(finalScore, resultsContainer.firstChild);
    console.log(finalScore);

}

// function to check answer
function checkAnswers() {
    
    let score = 0;
    let resultMessage = "";
    for (const index of notesDisplayedIndex) {
        const question = notesArray[index];
        console.log(question);
        const resultCard = document.createElement('div');
        const resultImg = document.createElement('img');
        const resultP = document.createElement('p');

        if (question.noteName === question.answerSubmitted) {
            resultMessage = `Correct! You chose ${question.answerSubmitted}.`;
            console.log(resultMessage);
            resultP.style.backgroundColor = 'green';
            score++;
        } else {
            resultMessage = `Incorrect. The correct answer is ${question.noteName}. You chose ${question.answerSubmitted}.`;
            console.log(resultMessage);
            resultP.style.backgroundColor = 'red';
        }

        resultImg.src = question.noteImage;
        resultP.innerText = resultMessage;
        resultP.classList.add('result-message');
        resultCard.classList.add('result-card');
        resultsContainer.appendChild(resultCard);
        resultCard.appendChild(resultImg);
        resultCard.appendChild(resultP);

    }

    return score;
}



