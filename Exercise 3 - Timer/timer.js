 let startBtn = document.getElementById('startBtn');
 let decreaseBtn = document.getElementById('decreaseBtn');
 let  addBtn = document.getElementById('addBtn');
 let reset=  document.getElementById('reset');
let interval;
let count = 0;
let runningCount = false;

function timeDisplay (){
    let hours = Math.floor(count / 3600);
let min = Math.floor((count % 3600) /60);
let  secs = count % 60 ;
    let finalTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
document.getElementById('timer').textContent = finalTime;
}

function countDown(){
    if(runningCount && count> 0){
        runningCount = true;
        startBtn.textContent = 'STOP';
        decreaseBtn.disabled = true;
        addBtn.disabled = true;
        reset.disabled = true;

        timeInterval = setInterval(() => {
            count--;
            timeDisplay();

            if (count === 0){
                stopCount();
            }
        },1000);
    } else {
        stopCount();
    }
}

function stopCount(){
    clearInterval(timeInterval);
    runningCount = false;

    startBtn.textContent = 'START';
    decreaseBtn.disabled = true;
    addBtn.disabled = true;
    reset.disabled = true;
}


function resetTimer(){
    stopCount();
    count = 0;
    timeDisplay();
}

function timeAdjust (secs){
    if(!runningCount){
        count +=secs;
        if (count < 0){
            count = 0;
        }
        timeDisplay();
    }
}

