const image = document.getElementById("note_img");
const answers = document.querySelectorAll(".answer");
const radioBtns = document.querySelectorAll(".radio_btn");


let answerChoice = "";
let noteIndex;

class Question {
    constructor(img, answerChoices, correctAnswer, wasDisplayed = false) {
        this.img = img;
        this.answerChoices = answerChoices;
        this.correctAnswer = answerChoices.indexOf(correctAnswer);
        this.wasDisplayed = wasDisplayed;
    }
}

const A = new Question("/assets/treble-note-a.png", ["A", "B", "C"], "A");
const B = new Question("/assets/treble-note-b.png", ["B", "C", "D"], "B");
const C = new Question("/assets/treble-note-c.png", ["D", "C", "E"], "C");
const D = new Question("/assets/treble-note-d.png", ["D", "E", "F"], "D");
const E = new Question("/assets/treble-note-e.png", ["E", "F", "G"], "E");
const F = new Question("/assets/treble-note-f.png", ["F", "G", "A"], "F");
const G = new Question("/assets/treble-note-g.png", ["G", "A", "B"], "G");

const questions = [A, B, C, D, E, F, G];

function newNote(questions) {
    noteIndex = Math.floor(Math.random() * questions.length);
    console.log(`Note index: ${noteIndex}`);
    const noteIMG = questions[noteIndex].img;
    image.src = noteIMG;
    displayAnswers(noteIndex);
}

function displayAnswers(index) {
    for(let i = 0; i < 3; i++) {
        answers[i].innerHTML = questions[index].answerChoices[i];
    }
}

function checkAnswer() {
    console.log({answerChoice});
    console.log(questions[noteIndex].correctAnswer);
    // console.log(index);
    if (Number(answerChoice) === questions[noteIndex].correctAnswer) { 
        console.log('Correct answer!');
    } else {
        console.log('Try again.');
    }
}

radioBtns.forEach(button => {
    button.addEventListener('click', () => {
        answerChoice = button.value;
        console.log(answerChoice);
        checkAnswer();
    });
});

newNote(questions);
