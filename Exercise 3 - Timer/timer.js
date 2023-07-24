let count = 0;
let timerInterval;
let isCountRunning = false;

function timerDisplay() {
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('time').textContent = formattedTime;
}

function countdown() {
    if (!isCountRunning && count > 0) {
        isCountRunning = true;
        document.getElementById('startnStopBtn').textContent = 'STOP';
        document.getElementById('decreaseBtn').disabled = true;
        document.getElementById('incrementBtn').disabled = true;
        document.getElementById('reset').disabled = true;

        timerInterval = setInterval(() => {
            count--;
            timerDisplay();

            if (count === 0) {
                countdown();
            }
        }, 1000);
    } else {
        countdown();
    }
}

function stopCount(){
    clearInterval(timerInterval);
    runningCount = false;

    startBtn.textContent = 'START';
    decreaseBtn.disabled = true;
    addBtn.disabled = true;
    reset.disabled = true;
}


function resetTime() {
    stopCount();
    count = 0;
    timerDisplay();
}

function adjustTime(seconds) {
    if (!isCountRunning) {
        count += seconds;
        if (count < 0) {
            count = 0;
        }
        timerDisplay();
    }
}


function toggleTime() {
    if (isCountRunning) {
        stopCount();
    } else {
        countdown();
    }
}
