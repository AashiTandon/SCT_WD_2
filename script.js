const timer = document.getElementById("StopWatch");
let seconds = 0;
let minutes = 0;
let hours = 0;
let stopTimer = true;

function start() {
    if (stopTimer) {
        stopTimer = false;
        timerCycle();
    }
}

function stop() {
    if (!stopTimer) {
        stopTimer = true;
    }
}

function timerCycle() {
    if (!stopTimer) {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        let displaySeconds = seconds < 10 ? '0' + seconds : seconds;
        let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        let displayHours = hours < 10 ? '0' + hours : hours;

        timer.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;

        setTimeout(timerCycle, 1000);
    }
}

function reset() {
    timer.innerHTML = "00:00:00";
    stopTimer = true;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("lap_list").innerHTML = '';
}

function lap() {
    if(timerCycle) {
        var lap_record = timer.innerHTML;
        var lapItem = document.createElement("li");
        lapItem.textContent = lap_record;
        document.getElementById("lap_list").appendChild(lapItem);
    }
        
}
document.getElementById("start").onclick = start;
document.getElementById("stop").onclick = stop;
document.getElementById("reset").onclick = reset;
document.getElementById("lapBtn").onclick = lap;

