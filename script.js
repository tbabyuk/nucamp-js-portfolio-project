const image = document.getElementById("note_img");
const answers = document.querySelectorAll(".answer");
console.log(answers);

const notesArray = ["/assets/treble-note-a.png", "/assets/treble-note-b.png", "/assets/treble-note-c.png", "/assets/treble-note-d.png", "/assets/treble-note-e.png", "/assets/treble-note-f.png", "/assets/treble-note-g.png"];

function newNote(array) {
    const noteIndex = Math.floor(Math.random() * array.length);
    console.log(noteIndex);
    const noteIMG = array[noteIndex];
    console.log(noteIMG);
    image.src = noteIMG;
    console.log(image.src);
    displayAnswers(noteIndex);
}

function displayAnswers(index) {
    for(let i = 0; i < 3; i++) {
        answers[i].innerHTML = answerOptions[index][i + 1];
    }
}

const answerOptions = [
    {
        1: "A",
        2: "B",
        3: "C"
    },
    {
        1: "B",
        2: "C",
        3: "D"
    },
    {
        1: "C",
        2: "D",
        3: "E"
    },
    {
        1: "D",
        2: "E",
        3: "F"
    },
    {
        1: "E",
        2: "F",
        3: "G"
    },
]

/* answers.forEach(item => {
    item.innerHTML = answerOptions[0][1]
}); */



newNote(notesArray);
