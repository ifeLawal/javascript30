# 04 - Array Cardio Day 1

**Recaps provided by yhabib, edited by me.*

In this first cardio day we make use of some of the Array built-in methods:

- map
- sort
- reduce

## Notes
When working with sort, there are two directions:

- Ascendent: 1 indicates your vales goes down in the array: aka [5,4,3,2,1]

```javascript
 const arr = [1,4,5,3,2];
 arr.sort((a, b) => a < b ? -1 : 1);
 console.log(arr);  // [1,2,3,4,5]
 ```

- Descendent: -1 indicates your values goes up in the array: aka [1,2,3,4,5]

```javascript
 const arr = [1,4,5,3,2];
 arr.sort((a, b) => a < b ? 1 : -1);
 console.log(arr);  // [5,4,3,2,1]
```

- One way to think of it is using a number line. When you have a < b ? -1 : 1, you are creating a number line and placing values from -1 (smallest) to 1 (largest) and you are doing the reverse with a < b ? 1 : -1

Reduce is very powerful and versatile depending on what the value type you are reducing to (a string, number, object, array, etc.)

```javascript
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const dataSummed = data.reduce((objOfInstanceCount,currString) => {
    if(objOfInstanceCount.hasOwnProperty(currString)) {
        objOfInstanceCount[currString] += 1;
        return objOfInstanceCount;
    } else {
        objOfInstanceCount[currString] = 1;
        return objOfInstanceCount;
    }
}, {});
console.log(dataSummed) // { car: 5, truck: 3, bike: 2, walk: 2, van: 2 }
```