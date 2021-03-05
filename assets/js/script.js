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

startBtn.onclick = countdown;