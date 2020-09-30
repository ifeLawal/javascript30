# 08 - Fun with HTML5 Canvas

**Recaps provided by yhabib, edited by me.*

Making use of **HTML5 Canvas** we convert the browser into a a very basic photoshop clone 👨🏿‍🎨 

### Notes
We start defining two objects that will represent the [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and the [context](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D):

```javascript
const canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d');
```
       
Then we define some properties of our canvas and context:

```javascript
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.globalCompositeOperation = 'multiply';
```

When the ```mousedown``` event is fired, the handler is called. It takes care of saving the position where the user clicked making use of the [ES6](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) destructuring arrays:

```javascript
function mouseDown(e) {
  isDrawing = true;
  // cretes two variables 
  [lastX, lastY] = [e.offsetX, e.offsetY];
}
```
When the ```mousemove``` event is fired, the handler is called. It takes care of drawing the line, updates the position of the mouse and giving a nice effect through the *hue* and the *lineWidth*:

```javascript
function draw(e) {
  if(!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // where the drawing takes place
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
  
  // effects
  hue++; 
  if(ctx.lineWidth === 80 || ctx.lineWidth === 1)
      direction = !direction;
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}
```
### Events
- **mousemove**
- **mousedown**
- **mouseup**
- **mouseout**