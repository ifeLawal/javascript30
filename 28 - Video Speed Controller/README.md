# 28 - Video Speed Controller

**Recaps provided by yhabib, edited by me.*

HTML5 Video and mousemove events

In this one, we build a hover-able video speed controller, with a speed range between 0.4 and 4.

### Notes
The main thing to comment on is how we calculate the position of the mouse inside the speed-bar as it moves up and down(aka the ```y``` variable for changing the speed value).

* The ```e.pageY``` returns the position of the mouse relative to the top edge of the document.
* The ```this.offsetTop``` returns the offset of the ```.speed-bar``` to the top of the document.

```javascript
function handleMove(e) {
	// this === .speed-bar
	const y = e.pageY - this.offsetTop,
		   percent = y / this.offsetHeight,
		   min = 0.4,
		   max = 4,
		   height = Math.round(percent * 100) + '%',
		   playbackRate = percent * (max - min) + min;

	bar.style.height = height;
	bar.textContent = `${playbackRate.toFixed(2)} X`;
	video.playbackRate = playbackRate;
}
```
### Events
* **mousemove**