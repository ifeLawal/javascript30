# 23 - Speech Synthesis

**Recaps provided by yhabib, edited by me.*

In this cool mini-project we build a speech-synthesis app making use of an API that comes in most of the browsers, the [SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).

### Notes
So we start listening for the voices changed event that will be fired once the browser, knows all the available voices. When it's fired we populate the voices dropdown:

```javascript
function populateVoices() {
	voices = this.getVoices();
	voicesDropdown.innerHTML = voices
		.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
		.join('');
}
```

Then we listen for the change event in any of the input elements when they are fired we update the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) options:

```javascript
function setVoice() {
	msg.voice = voices.find(voice => voice.name === this.value);
	toggle();
}

function setOption() {			
	msg[this.name] =this.value;
	toggle();
}
```
**NOTE:** To pass a value to a function inside an event with [bind](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind):

```javascript
stopButton.addEventListener('click', toggle.bind(null, false));
```

### Events
* **click**
* **change**: *input* element's value changes
* **voiceschanged**: list of SpeechSynthesisVoice objects that would be returned by the ```SpeechSynthesis.getVoices()``` method has changed. After the browsers initializes this event is fired
