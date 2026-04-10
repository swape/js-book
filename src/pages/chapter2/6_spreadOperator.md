---
layout: ../../layouts/normal.astro
title: 'Spread Operators'
---

# Spread Operator & Rest Parameters

The three-dot syntax `...` is used in two different situations and has two different names depending on where you use it.

## Rest Parameters

When `...` appears in a **function's parameter list**, it is called a **rest parameter**. It collects all the arguments passed to the function into an array.

```javascript
const a = (...values) => {
  values.forEach((i) => {
    console.log(':' + i)
  })
}

a(1, 2)
a('x', 'y', 'z')
```

When you don't know how many arguments you are going to pass into a function, you use a rest parameter. Let's make a sum function using this.

```javascript
const sum = (...values) => {
  let output = 0
  values.forEach((i) => {
    output += parseInt(i)
  })
  return output
}

const val1 = sum(1, 2)       // 3
const val2 = sum(1, 2, 3, 4, 5) // 15
```

## Spread Syntax

When `...` appears in an **array literal or function call**, it is called **spread syntax**. It expands an array (or object) into individual elements.

You can use this to concat arrays:

```javascript
const arr1 = [0, 1, 2]
const arr2 = [3, 4, 5]

const arr3 = [...arr1, ...arr2]
```

Now arr3 contains both arr1 and arr2.

This is same as using the old concat function:

```javascript
const arr1 = [0, 1, 2]
const arr2 = [3, 4, 5]

const arr3 = arr1.concat(arr2)
```

## Destructuring with rest

You can use the rest syntax in **destructuring** to capture the remaining elements of an array or object.

```javascript
const [head, ...tail] = [1, 2, 3, 4]
console.log(head) // 1
console.log(tail) // [2, 3, 4]
```

The `head` variable contains the first element and `tail` contains the rest.

You can use this for objects too.

```javascript
const myObj = {
  a: 1,
  b: 2,
  c: 3,
  x: 'some other things',
  hello: 'some text here',
}

const { x, ...others } = myObj

console.log(x)      // 'some other things'
console.log(others) // { a: 1, b: 2, c: 3, hello: 'some text here' }
```

Now the `x` variable contains value of `x` from `myObj` and `others` contains the rest of the value pairs.

This is a good trick to omit some variables from other objects. `others` variable have a copy of all the elements from `myObj` except the `x` variable.

**Summary:**
- `...args` in function parameters → **rest parameter** (collects arguments into an array)
- `...arr` in array/object literals or calls → **spread syntax** (expands an array/object)
