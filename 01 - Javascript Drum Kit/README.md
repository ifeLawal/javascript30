# 01 - JavaScript Drum Kit

**Recaps provided by yhabib, edited by me.*

The idea behind this first project is to imitate the functionality of a keyboard. Through audio tags we will allow the user to reproduce up to 9 different sounds.

# Notes

We make use of two new concepts of HTML5:

- The HTML [data-\*](https://developer.mozilla.org/en/docs/Web/Guide/HTML/Using_data_attributes) attribute allows us to store custom data on any HTML element. Each div.key and audio element have a data-key attribute that binds them together.
- The [audio](https://developer.mozilla.org/en/docs/Web/HTML/Element/audio) tag offers an API that makes simpler to reproduce audio files in the browser.

The logic behind it, is very simple, we listen for two events:

- User presses a key: get audio element, add class to the key and play it:

```javascript
function keyPressed(e) {
  const audio = document.querySelector(`audio[data-key="${e.charCode}"]`),
    key = document.querySelector(`div[data-key="${e.charCode}"]`);
  if (!audio) return; // Not a valid key
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
```

- css-transition-end: We remove the style previously added:

```javascript
function removeStyle(e) {
  if (e.type !== "transitionend") return;
  e.target.classList.remove("playing");
}
```

# Events

- keypress: user presses a key
- transitioned: a css transition has completed.
