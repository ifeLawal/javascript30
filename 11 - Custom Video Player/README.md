# 11 - Hold Shift and Check Checkboxes

**Recaps provided by yhabib, edited by me.*

### Notes:

- HTML5 video tag:
    - Variables: duration, currentTime
    - Events: Click, play, pause and timeupdate
- Our events are called through the on screen icons: ►, ❚❚, ...

***

- Pause and play video

```javascript
let video = document.querySelector(".viewer");
let toggle = document.querySelector(".toggle");

// use the built in video play and pause functions
function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Toggle button between play and pause
function updateButton() {
    toggle.innerHTML = this.paused ? "►" : "❚❚";
}

// use click to toggle the play
// we use the video play pause to update the button since this is more reliable of a state
//ie if the window is first opening the video could be in either play or pause mode, and the pause play event listener can handle this appropriately vs a click
video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
```

- Video scrub functionality

```javascript
let progress = document.querySelector(".progress");
let video = document.querySelector(".viewer");

function scrub(e) {
    let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// use mousedown, mouseup, and click to check we are actually in a scrubbing state
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
```

### Events
- **click**
- **mousedown**
- **mouseup**
- **mousemove**


