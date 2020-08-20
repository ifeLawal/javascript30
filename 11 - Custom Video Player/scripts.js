// Get our elements
let player = document.querySelector(".player");
let video = document.querySelector(".viewer");;
let progress = document.querySelector(".progress");
let progressBar = document.querySelector(".progress__filled");
let toggle = document.querySelector(".toggle");
let skipButtons = document.querySelectorAll("[data-skip]");
let ranges = document.querySelectorAll(".player__slider");

let isClicked = false;

// build functions
function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    toggle.innerHTML = this.paused ? "►" : "❚❚";
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    let percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => {
    button.addEventListener("click", skip);
});

ranges.forEach(slider => {
    return slider.addEventListener("change", handleRangeUpdate);
});

ranges.forEach(slider => {
    return slider.addEventListener("mousemove", handleRangeUpdate);
});

// window.addEventListener("mousedown", function() {
//     isClicked = true;
// });

// window.addEventListener("mouseup", function() {
//     isClicked = false;
// });

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);


// final challenge, make video go full screen