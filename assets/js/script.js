var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var optionList = document.querySelector(".optionList");
var i = 0;
var messageText = "";
var timeLeft = 75;

function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}

let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Many Logos",
      "Hyper Text Markup Language",
      "Hyper Text Market Lingo",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Corresponding Style Sheet",
      "Collaborative Simple Sheet",
      "Computer Set Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What is a function that is passed into another function as an argument called?",
    answer: "Callback function",
    options: [
      "Callback function",
      "On-call function",
      "Double function",
      "Repeated function"
    ]
  },
    {
    numb: 4,
    question: "Which of the following is NOT a falsy value?",
    answer: "true",
    options: [
      "0",
      "false",
      "true",
      "null"
    ]
  },
    {
    numb: 5,
    question: "Which of the following is the CSS property that sets how flex items are placed in the flex container defining the main axis and the direction?",
    answer: "flex-direction",
    options: [
      "align-content",
      "flex-direction",
      "flex-wrap",
      "justify-content"
    ]
  },
];

function showQuestion() {
    var quizContainerEl = document.createElement("div");
    quizContainerEl.className = "quiz-container";
    document.getElementById("page").append(quizContainerEl);

    var submitMessage = document.createElement("div");
    submitMessage.className = "submit-message";
    submitMessage.innerHTML = messageText;
    quizContainerEl.append(submitMessage);

    var questionEl = document.createElement("div");
    questionEl.className = "question-element";
    questionEl.innerHTML = questions[i].question;
    quizContainerEl.append(questionEl);

    for (j=0; j < questions[i].options.length; j++) {
        var optionEl = document.createElement("li");
        optionEl.className = "option-element";
        optionEl.innerHTML = questions[i].options[j];
        quizContainerEl.append(optionEl);
        optionEl.onclick = nextQuestion;
    }

   

    function nextQuestion(event) {
        if (event.target.innerText === questions[i].answer) {
            console.log("true");
            messageText = "Correct!";
        } else {
            console.log("false");
            messageText = "Incorrect :( ";
            timeLeft = timeLeft - 5;
        }

        i++;
        quizContainerEl.remove();
        showQuestion();
        console.log(i);
    }
}



function startQuiz() {
    var startPage = document.getElementById("start-page");
    startPage.remove();
    countdown();
    showQuestion();

}

function endQuiz() {
    console.log("done");

    var endPage = document.createElement("div");
    endPage.className = "end-page";
    document.getElementById("page").append(endPage);

    var endPageHeader = document.createElement("h1");
    endPageHeader.innerText = "All Done!";
    endPage.append(endPageHeader);

    var endPageText = document.createElement("p");
    endPageText.innerHTML = "Your score is " + timeLeft;

}

startBtn.onclick = startQuiz;

