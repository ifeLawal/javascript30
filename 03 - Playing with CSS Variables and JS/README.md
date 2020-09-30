# 03 - Playing with CSS Variables with JS

**Recaps provided by yhabib, edited by me.*

The purpose of this challenge is to learn about the **css variables**. Most programmers work with them in **LESS or SASS** which functions closer to programming languages by providing variables, loops, and to a slight degree closure. The focus however on this is understanding how css affects what is visually shown to users.

## Notes
In LESS or SASS you can find something like this:

```css
// Variables
@link-color:        #428bca; // sea blue
@link-color-hover:  darken(@link-color, 10%);
```

But once they go through the preprocessor they will be assigned to their fixed variable declarations, aka all uses of @link-color will become #428bca. With css variables you can change its value during the lifecycle of your program.

#### So how do we work with them?

1. We have to assign them to a component:

```css
:root {
    --spacing: 10px;
    --blur: 10px;
    --base: white;
}
```

2. Then we use them through our styles:

```css
img {
    width: 95%;
    max-width: 900px;
    height: auto;
    background-color: var(--base);
    padding: var(--spacing);
    filter: blur(var(--blur));
  }
```

3. And we also access them in our JS:

```javascript
const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    const data = this.value,
          suffix = this.dataset.sizing || '',
          type = this.name;
    document.documentElement.style.setProperty(`--${type}`, data + suffix);
}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
```

**NOTE:** Calling .querySelectorAll(), .getElementsByClassName(), and .childNodes gives a data structure that looks like an Array, but it isn't. Depending on the browser, that structure is a NodeList Object. The NodeList object has less functionality than an Array class. In instances that you  need to work with arrays functions on your node elements, there are two ways to convert your NodeList object to an Array:

```javascript
const inputs = document.querySelectorAll('.controls input');
const inputsArr1 = Array.from(inputs);         // built in Array declaration
const inputsArr2 = [...inputs];                // ES6 spread operator
```

# Events

- change: input element's value changes