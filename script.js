const image = document.getElementById("note_img");
const answers = document.querySelectorAll(".answer");
console.log(answers);

const notesArray = ["https://picsum.photos/id/237/200/300", "https://picsum.photos/seed/picsum/200/300", "https://picsum.photos/200/300/", "https://picsum.photos/id/870/200/300/", "https://picsum.photos/200/300?grayscale"];

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
