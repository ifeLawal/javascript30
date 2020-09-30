# 12 - Key Sequence Detection

**Recaps provided by yhabib, edited by me.*

### Konami Code
The Konami Code(コナミコマンド) is a cheat code that appears in many Konami video games, although the code also appears in some non-Konami games. The Konami code allowed users to enter a god-like mode when the following sequence of buttons on the game controller were pressed: ↑↑↓↓←→←→ba. Expanding beyond games and entering the general internet zeitgeist, the Konami code can now be found to activate effects on websites like [BuzzFeed](https://www.buzzfeed.com/), enabling a [Super Amazon Alexa Mode](https://trustedsmarthomes.com/what-is-super-alexa-mode/), design websites like [CSSLine](https://cssline.com/) and much more. Here is a [quick list](https://www.the-sun.com/lifestyle/tech/457150/typing-this-konami-code-into-websites-unlocks-loads-of-hidden-features-and-jokes/) for those who are interested.

### Notes
Key Sequence Detection

Using the splice functionality that negative number starts at the end, we can wrap the array of values someone has pressed to just the right amount of keystrokes that make our Konami code.

```javascript
let maxKeys = 11;

keysPressed.splice(-1 * maxKeys, keysPressed.length - maxKeys);
```

We implement the Konami code and use the cornify JS library to add unicorns on our website whenever the keycode is pressed. 

```javascript

let secretCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter";

if(keysPressed.join("").includes(secretCode)) {
    console.log("We did it");
    cornify_add();
}
```


### Events

* **Keyup**
* **Keydown**