# 14 Javascript References VS Copy

Learned doing deep copys in array and objects.

Arrays
- arr.slice()
- [].concat(arr)
- [...arr]
- Array.from(arr)

Objects
- Object.assign({}, obj, {key:value})
- [...object]

Lodash for copys that are more than 1 layer deep
or the poor mans deep copy
JSON.parse(JSON.stringify(object))
