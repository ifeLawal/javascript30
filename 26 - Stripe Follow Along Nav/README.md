# 26 - Stripe Follow Along Nav

**Recaps provided by yhabib, edited by me.*

A cool demo using getBoundingClientRect(), and classes to animate a background box behind the drop down menu.

This is the second and final part of the project where we wanted to build a replica of the navigation bar from [Stripe](https://stripe.com/). The way it works this effect is through sharing a background for all the dropdowns. For this we have to calculate the size of the background according to the content of the dropdown as well as its position.

### Notes
The process is very similar to the one showed in the Follow [Along Link Highlighter](https://github.com/ifeLawal/javascript30/tree/master/22%20-%20Follow%20Along%20Link%20Highlighter) exercise with the particularity that now our background element belongs to the navigation element instead of a direct child of the body. This affects the way we calculate the coordinates of the background.

When the mouse hovers one of the hover-able elements, we add the styles and calculate the size and new coordinates for the background:

```javascript
function handleEnter() {
	this.classList.add('trigger-enter');
	setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active') , 150);
		
	background.classList.add('open');

	const dropdown = this.querySelector('.dropdown');
	const dropdownCoords = dropdown.getBoundingClientRect();
	const navCoords = nav.getBoundingClientRect();
		
	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: dropdownCoords.top - navCoords.top,
		left: dropdownCoords.left - navCoords.left
	}		

	background.style.setProperty('width', `${coords.width}px`);
	background.style.setProperty('height', `${coords.height}px`);
	background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}
```
And once the mouse leaves the element we remove the classes:
```javascript
	function handleLeave() {
		this.classList.remove('trigger-enter', 'trigger-enter-active');
		background.classList.remove('open');
	}
```
### Event
* **mouseenter**
* **mouseleave**