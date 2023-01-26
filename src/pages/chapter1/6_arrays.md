---
layout: ../../layouts/normal.astro
title: "Array"
---
# Array

A collection of stuff.

Arrays are a collection of values. It can be a set of numbers, strings or objects. It is common that it holds only one of the types.

```javascript
let myArr = [] // empty array

let myArr2 = [1, 5, 8, 2, 5, 2, 4, 3, 1] // array of numbers

let myArr3 = ['a', 'b', 'c', 'z', 'foo'] // array of strings

let myArr = [1, 0, 'x', 19, 'f', '22', 'some other stuff'] // array of mixed values
```

Arrays are declared with brackets `[ ]`. All the values goes inside the brackets and are separated by comma `,`.

## push

```javascript
let myArr = []

myArr.push(1)
myArr.push(10)
myArr.push(11)
myArr.push(13)
myArr.push(6)

console.log(myArr)
```

This should output the values: [ 1, 10, 11, 13, 6 ].

We use the array method called push to push new values to the end of the array.

We can now get the values one by one, by using the index position of that value.

```javascript
let myArr = ['one', 2, 3, 'four']
//             0    1  2     3
console.log(myArr[0]) // this outputs 'one'
console.log(myArr[2]) // this outputs 3
console.log(myArr[3]) // this outputs 'four'
```

Array indexes starts with 0. So if we want to get the first value, we have to use index position 0 to get that value.

## IndexOf

By using `indexOf`, we can find the index position of that element in the array.

```javascript
let myArr = ['one', 2, 3, 'four']
console.log(myArr.indexOf('four')) // this outputs 3
```

Since array indexes starts with 0, the string 'four' have the index of 3.

If the `indexOf` method can not find the value in array, it just returns `-1`.

## Length

Now that we know how to add stuff to our array, we can count them by using the `length` property.

```javascript
let myArr = ['one', 2, 3, 'four']
console.log(myArr.length) // this outputs 4
```

Let us combine the if statement and arrays.

```javascript
let myArr = []

function isItEnough(inputArr) {
  let returnValue = 'No'
  if (inputArr && inputArr.length >= 3) {
    returnValue = 'Yes we have 3 or more values'
  }
  return returnValue
}

console.log(isItEnough(myArr)) // this outputs 'No'

myArr.push(1)
myArr.push('x')

console.log(isItEnough(myArr)) // this outputs 'No'

myArr.push('y')

console.log(isItEnough(myArr)) // this outputs 'Yes we have 3 or more values'
```

As you can see in the code above, we declare and array on line 1. Then we made a function `isItEnough` and passed the array as input to check if we have 3 or more values. If you look at the line 5 in the if statement expression, we use `&&`. That means AND. So first we check if we have some value in `inputArr` and then by using the AND operator we ask if it also has the length of 3 or more. If we don't have any value for `inputArr`, the rest of the checks inside the if statement expression is not called, and we jump right out of the if scope.

Array have a lot more methods like `push` and properties. But let us not go too fast. I'm going to explain more about them in combination of other parts in this book later on.
