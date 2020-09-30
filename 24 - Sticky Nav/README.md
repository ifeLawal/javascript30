# 24 - Sticky Nav

**Recaps provided by yhabib, edited by me.*

Using offsetTop, classList.add & remove, css parenting, and automatic paddingTop to set a sticky nav and animate a logo.

This exercise is about building a fixed nav, that adds some effects when the user scrolls and hits the top of the browser with it.

### Notes
It is important to know that when an element's position changes to *fixed*, this element no longer takes space in the document. Also it is worth mentioning that we define it programmatically because it is the only way to calculate the height of the header. If we instead had it defined in the CSS file, we would have to hard coded its value.

```javascript
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;	// relative distance to the top of the node parent

function fixNav() {
	if (window.scrollY > topOfNav) {
		document.body.classList.add('fixed-nav');
		document.body.style.paddingTop = nav.offsetHeight + 'px';
	} else	{
		document.body.classList.remove('fixed-nav');
		document.body.style.paddingTop = 0;
	}
}
```
This time the CSS file is where almost all of the magic happens. We add three effects:

* Position fixed and a subtle shadow:
```javascript
 .fixed-nav nav {
 	position: fixed;
 	box-shadow: 0 5px rgba(0, 0, 0, 0);
 }
 ```
* When the nav is fixed, it shows a logo.
```javascript
 li.logo {
 	max-width: 0;
 	overflow: hidden;
 	background: white;
 	transition: all 1s;
 	font-weight: 600;
 	font-size: 30px;
 }

 .fixed-nav li.logo {
 	max-width: 500px;		// Width doesn't allow the transition effect		
 }
 ```
* A nice scaling of the content:
```javascript
 site-wrap {
 	max-width: 700px;
 	margin: 70px auto;
 	background: white;
 	padding: 40px;
 	text-align: justify;
 	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
 	transform: scale(0.98);
 	transition: transform 0.5s;
 }

 .fixed-nav .site-wrap {
 	transform: scale(1);
 }
```
### Events
* **scroll**