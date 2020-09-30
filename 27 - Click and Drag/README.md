# 27 - Click and Drag

**Recaps provided by yhabib, edited by me.*


### Notes
The logic to get this effect is based on getting the position of the mouse relative to the left edge(startX) as well the value of the amount of scroll of the scrollable container(scrollLeft) when a clickdown event is fired. We also set a flag letting know that the mouse is down.

The more challenging handler is the one that takes care of the mousemove effect. Here we have to calculate the walk or amount of scroll, when the users moves the mouse:

```javascript
slider.addEventListener('mousemove', e => {
	if(!isDown) return;
			
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 3;

	slider.scrollLeft = scrollLeft - walk;
});
```
**Worth a look**: In the CSS file there are some nice effects, like perspectives and zooms.

**Note**: In the CSS file, we use the [will-change](https://developer.mozilla.org/en/docs/Web/CSS/will-change) property whose mission is to let the browser know that a transformation will be performed so this way the browser can set up appropriate optimizations ahead of time.

### Events
* **mouseup**
* **mouseleave**
* **mousemove**
* **mousedown**



Also found this cool set of code for applying multiple event handlers to one element

### Version 1
```javascript
function addMultipleListeners(element,events,handler,useCapture,args){
  if (!(events instanceof Array)){
    throw 'addMultipleListeners: '+
          'please supply an array of eventstrings '+
          '(like ["click","mouseover"])';
  }
  //create a wrapper to be able to use additional arguments
  var handlerFn = function(e){
    handler.apply(this, args && args instanceof Array ? args : []);
  }
  for (var i=0;i<events.length;i+=1){
    element.addEventListener(events[i],handlerFn,useCapture);
  }
}

function handler(e) {
  // do things
};

// usage
addMultipleListeners(
    document.getElementById('first'),
    ['touchstart','click'],
    handler,
    false);
```

### version 2
```javascript
['click','ontouchstart'].forEach( function(evt) {
    element.addEventListener(evt, dosomething, false);
});
```
