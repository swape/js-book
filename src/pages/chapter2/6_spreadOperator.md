---
layout: ../../layouts/normal.astro
title: 'Spread Operators'
---

# Spread Operator

```javascript
const a = (...values) => {
  values.forEach((i) => {
    console.log(':' + i)
  })
}

a(1, 2)
a('x', 'y', 'z')
```

When you don't know how many arguments you are going to pass into a function, you can use the spread operator. This is by adding 3 dots before the variable.

Let's make sum function using this.

```javascript
const sum = (...values) => {
  let output = 0
  values.forEach((i) => {
    output += parseInt(i)
  })
  return output
}

const val1 = sum(1, 2) // 3
const val2 = sum(1, 2, 3, 4, 5) // 15
```

You can use this to concat arrays.

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

You can use spread syntax to do some **destructuring**.

```javascript
const [head, ...tail] = [1, 2, 3, 4]
console.log(tail) // [2, 3, 4]
```

The head variable contains the first argument and tail variable contains the rest.

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

console.log(x) // 'some other things'
```

Now the `x` variable contains value of `x` from `myObj` and `others` contains the rest of the value pairs.

This is a good trick to omit some variables from other objects. `others` variable have a copy of all the elements from `myObj` except the `x` variable.
