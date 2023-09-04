
const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: " Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"

    },
    {
        question: " Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: " Q4: What is the full form of JS?",
        a: "Javascript",
        b: "Javasuper",
        c: "JustScript",
        d: "Jordanshoes",
        ans: "ans1"
    }

];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showscore = document.querySelector(".showscore");

let questioncount = 0;
let score = 0;

const loadq = () => {

    const questionlist = quizDB[questioncount];
    question.innerText = questionlist.question;
    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
}
loadq();

const getcheckans = () => {
    let answer;
    answers.forEach((curanslem) => {
        if (curanslem.checked) {
            answer = curanslem.id;
        }
    });
    return answer;
};

let displaynext = () => {
    questioncount++;
    if (questioncount == quizDB.length) {
        document.getElementById("showscore").innerHTML = `
        <h3>you scored ${score}/${quizDB.length}👍</h3>
        <button class="btn" onclick="location.reload()">play again</button>
        `;
        document.getElementById("showscore").classList.remove("scorearea");

        // inner_div.setAttribute("style","display:none");
    }

    else {
        deselectall();
        loadq();
        count = 11;
        clearInterval(end);
        timerc()
    }
}

const deselectall = () => {
    answers.forEach((curanslem) =>
        curanslem.checked = false);
}
let count = 11;
let timerc = () => {
     end = setInterval(() => {
        count--;
        console.log(count)
        document.getElementById("timer-left").innerHTML = count + "s";
        if (count == 0) {
            clearInterval(end)
            displaynext();
        }
    }, 1000);
}
timerc();

submit.addEventListener("click", () => {
    const checkedans = getcheckans();
    console.log(checkedans);

    if (checkedans === quizDB[questioncount].ans) {
        score++;
    };

    // questioncount++;
    clearInterval(end);
    displaynext()

    deselectall();


    if (questioncount < quizDB.length) {
        loadq();
    } else {

        document.getElementById("showscore").innerHTML = `
        <h3>you scored ${score}/${quizDB.length}👍</h3>
        <button class="btn" onclick="location.reload()">play again</button>
        `;

        document.getElementById("showscore").classList.remove("scorearea");
    }
});