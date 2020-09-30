# 18 Adding Up Times With Reduce

**Recaps provided by yhabib, edited by me.*

Worked with math time calculations map and reduce.

An ul representing a playlist where each li represents a video and it has a *data-time* attribute with its duration(string). Calculate the total time in *hours:minutes:seconds*

### Notes:

* Two implementations, one uses a dual map, which if you understand map is pretty clear to understand, and the other utilizes the fact that you are mapping over the same array and performing operations on the same starting data set, and simple performs those operations in the reduce operation.

```javascript
    const timeAttributes = Array.from(document.querySelectorAll('[data-time]'));

    const totalSeconds = timeAttributes
        .map(node => node.dataset.time)
        .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return mins * 60 + secs;
        })
        .reduce((a, b) => a + b);
    const timeAttributes = Array.from(document.querySelectorAll('[data-time]'));

    const totalSeconds = timeAttributes
        .reduce((a, b) => {
            b = b.dataset.time.split(':').map(parseFloat);
            return a + b[0]*60 + b[1];
        }, 0);
```

* There is also a function that converts from seconds to a hours:minutes:seconds format.

