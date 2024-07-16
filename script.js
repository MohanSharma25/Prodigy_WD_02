let startTime;
let updatedTime;
let difference;
let timerId;
let running = false;
let lapCounter = 1;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function startStopwatch() {
    startTime = new Date().getTime();
    timerId = setInterval(updateDisplay, 10);
    running = true;
    startStopBtn.textContent = 'Pause';
}

function stopStopwatch() {
    clearInterval(timerId);
    running = false;
    startStopBtn.textContent = 'Start';
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor(difference / 3600000);
    const minutes = Math.floor((difference % 3600000) / 60000);
    const seconds = Math.floor((difference % 60000) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);

    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

function resetStopwatch() {
    stopStopwatch();
    display.textContent = '00:00:00';
    laps.innerHTML = '';
    lapCounter = 1;
    difference = 0;
}

function recordLap() {
    const lapTime = display.textContent;
    const li = document.createElement('li');
    li.textContent = `Lap ${lapCounter}: ${lapTime}`;
    laps.appendChild(li);
    lapCounter++;
}

startStopBtn.addEventListener('click', () => {
    if (running) {
        stopStopwatch();
    } else {
        startStopwatch();
    }
});

resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', recordLap);
