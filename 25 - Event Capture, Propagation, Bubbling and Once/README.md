# 25 - Event Capture, Propagation, Bubbling and Once

**Recaps provided by yhabib, edited by me.*

A foundational demo of how event bubbling works showing that parent nodes are captured in the DOM and events bubble up to them as well when a child node has an event called.

### Notes
This exercises uses a set of nested **divs** with a **click** event attached to each of them:

```javascript
<div class="one">
	<div class="two">
		<div class="three">
		</div>
	</div>
</div>
```
```javascript
divs.forEach(div => div.addEventListener('click', logText));
```
### So, how does it work when an event is fired???
1. The user clicks the ```<div class="three">```.

2. Then the browser ripples down, so it goes from the most external element to the deepest one and captures all of the events to bind  them. This process is called **Event Capture**. This process has the aim to figure out what the user has clicked on:

```javascript
// The browser stores the events in this order
// Event attached to <div class="one">
// Event attached to <div class="two">
// Event attached to <div class="three">
```
3. At this moment the events are not fired yet. So starting from the bottom, the browser does something called **bubble up** and fires each of these events:
```javascript
// The browser fires the events in this order
// Event attached to <div class="three">
// Event attached to <div class="two">
// Event attached to <div class="one">
```
But we can change the way this works using the ```capture``` property:
```javascript
divs.forEach(div => div.addEventListener('click', logText, {
	capture: true   	// by default is false
}));
```
So now when the browser captures each of the events, it will immediately fire them. That means that the handler for the event is not going to get run on the *bubble up* but rather on the *capture down*:
```javascript
// The browser fires the events in this order
// Event attached to <div class="one">
// Event attached to <div class="two">
// Event attached to <div class="three">
```

4. We can also call **stop propagation** in the event handler, this way it will stop a **bubble up** process, firing only the deepest event, or vice-versa:

```javascript
function logText(e) {
	console.log(this.classList.value);
	e.stopPropagation();
}
// now the the browser only fires the one event because capture=true
// Event attached to <div class="one">
```

5. Last but not least, **Once** is a very new feature in the browser, that allows to listen for an event and then unbinds itself, so the event will never be triggered again:

```javascript
 	divs.forEach(div => div.addEventListener('click', logText, {
 		capture: false,
 		once: true
 	}));

 	// this is like doing 
 	divs.forEach(div => div.removeEventListener('click', logText));
```