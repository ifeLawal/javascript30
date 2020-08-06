function addAudio() {

    var pad = document.getElementsByClassName("keys")[0];
    var audio = document.getElementById("audio");

    return data.map(data => {
        let render = 
        `<div data-key="${data.key}" class="key">
        <kbd>${data.letter}</kbd>
        <span>${data.sound}</span></div>`;

        let audioTag = 
        `<audio data-key="${data.key}" src="sounds/${data.sound}.wav"></audio>`;

        pad.insertAdjacentHTML("beforeend", render);
        audio.insertAdjacentHTML("beforeend", audioTag);
    })
}

// function to chain window.onload events by calling old onload events before
// calling new ones
function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }

}

addLoadEvent(addAudio);
// window.onload = addAudio;

var data = [
    {
        key: 81,
        letter: "Q",
        sound: "clap"
    },
    {
        key: 87,
        letter: "W",
        sound: "tom"
    },
    {
        key: 69,
        letter: "E",
        sound: "tink"
    },
    {
        key: 65,
        letter: "A",
        sound: "hihat"
    },
    {
        key: 83,
        letter: "S",
        sound: "openhat"
    },
    {
        key: 68,
        letter: "D",
        sound: "ride"
    },
    {
        key: 90,
        letter: "Z",
        sound: "kick"
    },
    {
        key: 88,
        letter: "X",
        sound: "boom"
    },
    {
        key: 67,
        letter: "C",
        sound: "snare"
    }
]

