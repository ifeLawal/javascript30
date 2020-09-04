var countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // if any other timers are active clear them
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);

    }, 1000);

}


function displayTimeLeft(seconds) {
    const mins = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${mins}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
    console.log(seconds);
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours() % 12;
    const minutes = end.getMinutes();
    endDisplay.textContent = `Be back at ${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
}

function setTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', setTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const minutes = this.minutes.value;
    timer(minutes * 60);
    this.reset();
})