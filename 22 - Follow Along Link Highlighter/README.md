# 22 - Follow Along Link Highlighting

**Recaps provided by yhabib, edited by me.*

Worked with get bounding rect of an object to grab it's height and width. Did some nice smooth transition animations using transform (transform really is king for these type of things)

This is the first part of a project where we want to build a replica of the navigation bar from [Stripe](https://stripe.com/). So in this first exercise, we build a **link highlighter** which will transition from one link to another with a smooth effect adding a class to the link.

### Notes
* We start creating an span element, adding it the highlight class and [appending](https://developer.mozilla.org/en/docs/Web/API/Node/appendChild) it to the body.

* Then when the event is triggered we have to calculate the position of the trigger and add these values to the ```highlight``` class.

```javascript
 function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    const coords = {
 		width: linkCoords.width,
 		height: linkCoords.height,
 		top: linkCoords.top + window.scrollY,
 		left: linkCoords.left + window.scrollX
 	};

 	highlight.style.width = `${coords.width}px`;
 	highlight.style.height = `${coords.height}px`;
 	highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
 }
```
What is important about the ```function``` above is:

* How we calculate the position of the trigger(```this```) represented by a a with [getBoundingClientRect](https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect).
* How we add the amount of scrolled screen with ```.scrollX``` and ```scrollY```, to position correctly the 'span' element.
* How we use ```translate``` instead of defining directly the ```top``` and ```left``` properties. Doing it this way we achieve a smoother effect when we move from a link to another one.


### Events
* *mouseenter*: user enters with the mouse inside the trigger element