# 27 Click and Drag

Using scrollLeft and 4 different mouse events
- mouseup
- mousedown
- mousemove
- mouseleave

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
