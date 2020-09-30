# 16 - Mouse Move Shadow

**Recaps provided by yhabib, edited by me.*

When the user scrolls a text shadow effect is attached to the header inside a div component

### Notes

* HTML global attribute content-editable defines that the content of an element is editable.

```javascript
    <h1 contenteditable>🔥WOAH!</h1>

```
* Working with **events**:
    * **this** represents the the thing that you are listen on for the event (always the same)
    * **e.target** represents the thing that actually triggered on the event (the same element than above or also could be its children)

```javascript
    // When they are not the same we have to calculate
    if( this !== e.target) {                        
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
```

* Some properties for the measures:
    * **this.offsetHeight, this.offsetWidth**
    * **e.offsetX, e.offsetY**
    * **e.target.offsetLeft, e.target.offsetTop**

```javascript
    // Width & height properties of the 'hero' div in relation to the window object
    const { offsetWidth: width, offsetHeight: height } = this;
    // Distance of the mouse from the event's target on both axis
    let {offsetX: x, offsetY: y } = e;
    // If the element that is the current target of the event differs from the event's originating target, 
    // increment the values of the two previously declared variables by the distance between the originating target and the current target on both axis
    if( this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
```
* **walk** is used to calculate the stretch distance for the element's shadow on both axis.

```javascript
    const walk = 100; // 100px
    const xWalk = (x / width * walk) - (walk / 2);  // Normaliza and then rest half the walk
    const yWalk = (y / height * walk) - (walk / 2); 
```

* ES6 destructuring:

```javascript
    const width = this.offsetWidth,
          height = this.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero; 
```

### Events
* **mousemove**