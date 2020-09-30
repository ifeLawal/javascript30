# 29 - Countdown Timer

**Recaps provided by yhabib, edited by me.*

Using Date.now, time conversion math, clearinterval, and very thought out function declarations we have different interactions use the same functions to build a countdown timer.

### Notes
The main function takes care of most of the logic of this exercise. Some comments about it:

* We don't implement it through decrementing a variable inside a setInterval, because we cannot be sure if it's going to work as expected, because sometimes the browser will shut it down due performance.

```javascript
 let leftSeconds = 15;
 setInterval(() => leftSeconds--, 1000);
```
* At the beginning, we clean the last ```setInterval``` defined in order to always have only one reference.
 
* ```setInterval``` always returns a value that identifies the timer and allows you to clear it at some point in the future.
 
* The ```Date.now()``` returns a value in milliseconds

```javascript
function timer(seconds) {
	clearInterval(countDown);

	const now = Date.now();		
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);
	displayEndTime(then);

	countDown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		if(secondsLeft < 0) {
			clearInterval(countDown);
			return;
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}
```
The other two functions implemented have the mission to generate the HTML code to be inserted into the corresponding HTML elements:

```javascript
function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	
	document.title = display;
	timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hours = end.getHours();
	const minutes = end.getMinutes();
	
	endTimeDisplay.textContent = `Be back at ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}
```

**Note**: When getting values from HTML elements either through data attributes or input values, the return value will be always be a string so in this case if we are working with numbers we have to cast it to Number:

```javascript
const dataAttribute = parseInte(this.dataset.time);
// or
const dataAttribute = +this.dataset.time;
```
**Note**: All HTML elements that have a name attribute can be accessed directly from the document object, without using the querySelector method:

```HTML
<form name="customForm" id="custom">
	<input type="text" name="minutes" placeholder="Enter Minutes">
</form>
```
```javascript
const minuteValue = document.customForm.minutes.value;
```
### Events
* **click**
* **submit**