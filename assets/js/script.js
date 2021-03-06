var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');

function countdown() {
    var timeLeft = 75;

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

startBtn.onclick = countdown;

