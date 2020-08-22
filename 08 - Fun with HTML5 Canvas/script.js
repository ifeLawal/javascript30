  let canvas = document.querySelector("#draw");
  let ctx = canvas.getContext('2d');
  let brushCircle = document.querySelector("#brush-circle");
  let clearCanvas = document.querySelector("#clr-canvas");
  let clickHere = document.querySelector("#click-message");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight-100;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.strokeStyle = "#BADA55";
  ctx.globalCompositeOperation = "multiply";
  

  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let direction = true;

  let isDrawing = false;

  function draw(e) {
    if(isDrawing) {
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      console.log("Still moving on canvas");
      // ctx.lineWidth = hue;

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();

      [lastX, lastY] = [e.offsetX, e.offsetY];

      hue = hue % 360 + 1;

      if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
      }
      if(direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
    }
    
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue = 0;
    clickHere.style.display = "none";
  });

  canvas.addEventListener("mousemove", draw);

  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);


  function wipeCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
  }

  clearCanvas.addEventListener("click", wipeCanvas)

  const addStylesOnElement = function(elem, styles) {
    Object.assign(elem.style, styles)
  }

  brushCircle.addEventListener("mousedown", function(e) {
    if(e.offsetX > 0 && e.offsetY > 0) {
      isDrawing = true;
    }
  })


  function followMouse(e) {
    
    child = e.target.getBoundingClientRect();

    console.log(brushCircle.style.top);    
    
    brushCircle.style.top = `${e.clientY - brushCircle.offsetHeight/2}px`;
    brushCircle.style.left = `${e.clientX - brushCircle.offsetWidth/2}px`;
  }

  window.addEventListener("mousemove", followMouse);
  