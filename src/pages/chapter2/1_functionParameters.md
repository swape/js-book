---
layout: ../../layouts/normal.astro
title: 'Function Parameters'
---

# Function Parameters

When we make functions, we can pass some parameters.
But we can also set the default values so if the parameters are not given, it uses the default values.

```javascript
const myFn = (a = 1, b = 2) => console.log(a, b)

myFn(3) // 3, 2

myFn() // 1, 2

myFn(4, 5) // 4, 5
```

On the first line we have an arrow function that have `a` and `b` as parameters.
It returns `console.log(a, b)`.
On line 3 we call this function with only one parameter, and it returns 3, 2.

On line 5 there are no parameters, and it uses the default values as we set it to be on line 1.

And on line 7 we have both parameters.

If we don't give it a default value it returns `undefined` as value for that parameter.

If you get confused on the arrow function, here is the same function in other forms.

```javascript
const myFn = function (a = 1, b = 2) {
  return console.log(a, b)
}

// or

function myFn(a = 1, b = 2) {
  return console.log(a, b)
}

// or

const myFn = (a = 1, b = 2) => console.log(a, b)
```

All 3 ways of declaring `myFn` is the same.
