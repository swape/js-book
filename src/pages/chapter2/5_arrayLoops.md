---
layout: ../../layouts/normal.astro
title: 'Array Loops'
---

# Array Loops

## Map

You can iterate or loop through an array by using the `.map()`.

```javascript
const myArr = [1, 2, 3, 6, 8, 9, 3, 2]

myArr.map((i) => {
  console.log(i)
})
```

The `map` method calls the function inside with each element as `i`.
This is same as having the function outside the map like this:

```javascript
const myArr = [1, 2, 3, 6, 8, 9, 3, 2]

const myFunc = (i) => console.log(i)

myArr.map(myFunc)
```

You can also use the map function to return a new array.

```javascript
const myArr = [1, 2, 3, 6, 8, 9, 3, 2]
const myFunc = (i) => i * 2
const newArr = myArr.map(myFunc) // [ 2, 4, 6, 12, 16, 18, 6, 4 ]
```

On line 3 we map through `myArr` with the `myFunc` function that returns new value `i * 2` and the result is stored in `newArr`.

## Foreach

```javascript
const myArr = ['C', 'A', 'T']
const myFunc = (v, i) => {
  console.log('index nr.' + i + ' have value ' + v)
}
myArr.forEach(myFunc)
```

`.forEach` do the same job as `.map`, but it is not returning anything.
In this example `myFunc` is accepting 2 parameters, `v` and `i`. `v` is the value and `i` is the index.

## Filter

```javascript
const myArr = [5, 4, 8, 9, 11, 4, 6]

const newArr = myArr.filter((i) => {
  return i > 5
})
```

`filter` is returning new array that is filtered through the callback function. On line 4 it returns a boolean value (true or false) based on if it is bigger than 5. So in here we should get a new array with [ 8, 9, 11, 6 ].

There are more array methods that can loop through the all the items, but This should be enough to get most of the jobs done.

You can also **chain** map and filter together.

```javascript
const myArr = [20, 11, 1, 0, 15, 7, 8]

const newArr = myArr
  .filter((i) => {
    return i < 10
  })
  .map((i) => {
    return i + 2
  })
```

As you can see here on line 4 that we filter numbers less than 10 and then in the `.map` function we add 2 to each element. This should output [ 3, 2, 9, 10 ].

You can also shorten the example above like this:

```javascript
const myArr = [20, 11, 1, 0, 15, 7, 8]

const newArr = myArr.filter((i) => i < 10).map((i) => i + 2)
```

Remember that in arrow function you can shorten things like this. But if you do a lot of stuff inside the function you should use the extended one. It is better to have a longer code that is easier to read than compact code that is harder to debug or understand.
