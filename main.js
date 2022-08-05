let timeSelector = document.getElementById("timeSelect")

let minA = document.getElementById("min-A")
let secA = document.getElementById("sec-A")
let minB = document.getElementById("min-B")
let secB = document.getElementById("sec-B")

let startBtn = document.getElementById("startBtn")
let resetBtn = document.getElementById("resetBtn")

let swapBtn = document.getElementById("swapBtn");

let timerA = document.getElementById("timer-A")
let timerB = document.getElementById("timer-B")

let lightA = document.getElementById("disA")
let lightB = document.getElementById("disB")

lightA.style.visibility = "hidden"
lightB.style.visibility = "hidden"

let endScreen = document.getElementById("endBG")
endScreen.style.visibility = "hidden"


function disableBtns() {
    startBtn.disabled = true;
    resetBtn.disabled = true;
    swapBtn.disabled = true;
}

disableBtns()

function enableBtns() {
    startBtn.disabled = false;
}

// handle time

function getTime() {
    let period = timeSelector.value;
    console.log(period);
    timerA.minutes = timeSelector.value;
    timerB.minutes = timeSelector.value;
    enableBtns()
    if (period == 0) {
        disableBtns();
        timerA.minutes = 0
        timerB.minutes = 0
    }

    timerA.seconds = 0;
    timerB.seconds = 0;

    timerA.isRunning = true;
    timerB.isRunning = false;


    if (timerA.minutes < 10) {
        minA.innerText = "0" + timerA.minutes;
    } else {
        minA.innerText = timerA.minutes;
    }

    secA.innerText = "0" + timerA.seconds;



    if (timerB.minutes < 10) {
        minB.innerText = "0" + timerB.minutes;
    } else {
        minB.innerText = timerB.minutes;
    }

    secB.innerText = "0" + timerB.seconds;
}

timeSelector.addEventListener("change", getTime)

// start btn

function startTimer() {

    resetBtn.disabled = false;
    swapBtn.disabled = false;
    startBtn.disabled = true;
    timeSelector.disabled = true;

    if (timerA.isRunning == true) {
        if (timerA.minutes == 0 && timerA.seconds == 0) {
            endScreen.style.visibility = "visible"
            resetBtn.click()
        }

        if (timerA.seconds == 0) {
            timerA.seconds = 60
            timerA.minutes--
        }

        timerA.seconds--

        lightA.style.visibility = "visible"
        lightB.style.visibility = "hidden"

    }

    if (timerA.minutes < 10) {
        minA.innerText = "0" + timerA.minutes;
    } else {
        minA.innerText = timerA.minutes;
    }

    if (timerA.seconds < 10) {
        secA.innerText = "0" + timerA.seconds;
    } else {
        secA.innerText = timerA.seconds;
    }

    // secA.innerText = timerA.seconds;

    if (timerB.isRunning == true) {
        if (timerB.minutes == 0 && timerB.seconds == 0) {
            endScreen.style.visibility = "visible"
            resetBtn.click();
        }

        if (timerB.seconds == 0) {
            timerB.seconds = 60
            timerB.minutes--
        }

        timerB.seconds--

        lightB.style.visibility = "visible"
        lightA.style.visibility = "hidden"
    }

    if (timerB.minutes < 10) {
        minB.innerText = "0" + timerB.minutes;
    } else {
        minB.innerText = timerB.minutes;
    }

    if (timerB.seconds < 10) {
        secB.innerText = "0" + timerB.seconds;
    } else {
        secB.innerText = timerB.seconds;
    }

    // secB.innerText = timerB.seconds;
    // minB.innerText = timerB.minutes;
}

let a;

function start() {
    startTimer()
    a = setInterval(startTimer, 1000)
}

startBtn.addEventListener("click", start)


//swap Button

function swap() {
    timerA.isRunning = !timerA.isRunning;
    timerB.isRunning = !timerB.isRunning;
}

swapBtn.addEventListener("click", swap)

// reset btn
function reset() {
    clearInterval(a)
    swapBtn.disabled = true;
    startBtn.disabled = true;
    timeSelector.disabled = false;
    resetBtn.disabled = true;
    timeSelector.value = 0

    lightA.style.visibility = "hidden"
    lightB.style.visibility = "hidden"

    minA.innerText = "00"
    minB.innerText = "00"
    secA.innerText = "00"
    secB.innerText = "00"
}

resetBtn.addEventListener("click", reset)

// End

let endBtn = document.getElementById("endBtn")

endBtn.addEventListener("click", () => {
    resetBtn.click();

    lightA.style.visibility = "hidden"
    lightB.style.visibility = "hidden"

    minA.innerText = "00"
    minB.innerText = "00"
    secA.innerText = "00"
    secB.innerText = "00"
    endScreen.style.visibility = "hidden"
})