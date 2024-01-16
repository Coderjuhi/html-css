const quizData = [
    {
        question: "Which language runs in a web browser ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What is full form of CSS ?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What is full form of HTML ?",
        a: "Hypertext Markup Languag",
        b: "Hypertext Markup Textdown",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborgini",
        correct: "a"
    },

];
const question = document.querySelector('.question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showscore');


let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizData[questionCount];
    question.innerText = questionList.question;

    a_text.innerText = questionList.a;
    b_text.innerText = questionList.b;
    c_text.innerText = questionList.c;
    d_text.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer()
    console.log(checkedAnswer);

    if (checkedAnswer == quizData[questionCount].correct) {
        score++;
    };
    questionCount++;
    if (questionCount < quizData.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
        <h3>Hey! You played well <br>You scored ${score} / ${quizData.length} </h3>
        <button class ="btn" onclick = "location.reload()">Play Again</button>
        `;
        showScore.classList.remove('.scorearea');
    }


});







