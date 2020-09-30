# 10 - Hold Shift and Check Checkboxes

**Recaps provided by yhabib, edited by me.*

In this exercise we recreate a gmail like email checkbox selection. When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes in-between those two checkboxes will be checked. If the user were to keep holding shift and go back to the initial checkbox, all the checkboxes in-between will toggle to unchecked.

### Notes
We start selecting all the inputs that are checkboxes, and binding them to the click event.

```javascript
// select all the checkboxes on the screen
let checkboxes = document.querySelectorAll("input[type=checkbox]");

 // pressed down
function handleCheck(e) {
    let inBetween = false;

    // see if shift key down and checked
    if(e.shiftKey) {
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {

            // turn on inbetween to capture checkboxes in the middle
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                
                // set the beginning and end edge checks
                checkbox.checked = this.checked;        // use this.checked to handle turning on and off based on what the user last clicked
            }

            // turn on/off everything inbetween
            if(inBetween) {
                checkbox.checked = this.checked;
            }
        })
    }

    lastChecked = this;
}
```



### Events
- **click**