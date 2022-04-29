const quizData = [
    {
        Qus: "Qus 1: JavaScript is a ___ -side programming language ?",
        ans1: "Client",
        ans2: "Server",
        ans3: "Client & Server",
        ans4: "None",
        ans: "c"
    },
    {
        Qus: "Qus 2: Javascript is an _______ language ?",
        ans1: "Object-Oriented",
        ans2: "Object-Based",
        ans3: "Procedural",
        ans4: "None of the above",
        ans: "a"
    }, 
    {
        Qus: "Qus 3: Which of the following methods is used to access HTML elements using Javascript ?",
        ans1: "getElementById()",
        ans2: "getElementsByClassName",
        ans3: "Both above",
        ans4: "None of the Above",
        ans: "c"
    },
    {
        Qus: "Qus 4: What keyword is used to check whether a given property is valid or not ?",
        ans1: "in",
        ans2: "is in",
        ans3: "exists",
        ans4: "lies",
        ans: "a"
    },
    {
        Qus: "Qus 5: Which are the correct ' if ' statements to execute certain code if “x” is equal to 2 ?",
        ans1: "if(x 2)",
        ans2: "if(x=2)",
        ans3: "if(x==2)",
        ans4: "if(!x=2)",
        ans: 'c'
    },
    {
        Qus: "Qus 6: What will the code return? Boolean(3 < 7) ?",
        ans1: "true",
        ans2: "false",
        ans3: "Nan",
        ans4: "SyntaxError",
        ans: "a"
    },
    {
        Qus: "Que 7: What does the Javascript “debugger” statement do ?",
        ans1: "It will debug all the errors in the program at runtime",
        ans2: "It acts as a breakpoint in a program",
        ans3: "It will debug current statement if any",
        ans4: "All the above",
        ans: "b"
    }
]

const btn = document.querySelector(".btn");
const nextQueBtn = document.getElementById("nextQueBtn");
const resultBtn = document.querySelector(".resultBtn");
const playagainBtn = document.querySelector(".playagainBtn")
const queAndoptions = document.querySelector(".queAndoptions");
const first = document.querySelector(".first");
const head = document.getElementById("head")
const ques = document.querySelector(".ques");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
let option = document.querySelectorAll(".option")


let questions = 0;

function show() {
    let quizQuestions = quizData[questions];

    ques.innerHTML = quizQuestions.Qus;

    opt1.innerText = quizQuestions.ans1;
    opt2.innerText = quizQuestions.ans2;
    opt3.innerText = quizQuestions.ans3;
    opt4.innerText = quizQuestions.ans4;
}

btn.addEventListener("click", function () {
    queAndoptions.style.display = "block";
    first.style.display = "none"
    show();
})

// For getting out selected option id
let answer = '';
let score = '';
const getAns = () => {
    option.forEach((element) => {
        if (element.checked) {
            answer = element.id
        }
    })
    return answer;
}

const deselectAll= ()=>{
    option.forEach((element)=>{
        element.checked = false;
    })
}

nextQueBtn.addEventListener("click", function () {
    let checkAnswer = getAns()
    console.log(checkAnswer);

    if (checkAnswer == quizData[questions].ans) {
        score++;
    }
    questions++;
    if (questions < quizData.length) {
        show();
        deselectAll();
    }
    else {
        queAndoptions.style.display = "none";
        first.style.display = "block"
        head.innerText = "Great! Quiz has been over."
        btn.style.display = "none"
        resultBtn.style.display = "block"

        resultBtn.addEventListener("click", () => {
            queAndoptions.style.display = "block";
            queAndoptions.innerHTML = `<h2>You have scored ${score}/${quizData.length}</h2>`
            resultBtn.style.display = "none"
            playagainBtn.style.display = "block"
            head.style.display = "none"
        })
        playagainBtn.addEventListener("click", () => {
            location.reload();
        })
    }
})