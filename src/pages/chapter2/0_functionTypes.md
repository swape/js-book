---
layout: ../../layouts/normal.astro
title: 'Function types'
---

# Function Types

Now that we know how to define a function and how to use a function, we can take a look at other ways we can make functions.

There are 3 kinds of functions.

- [Function Types](#function-types)
  - [Function Declaration](#function-declaration)
  - [Function Expression](#function-expression)
  - [Arrow Function](#arrow-function)

## Function Declaration

This is also called **Function Statement**

```javascript
function myFunc() {
  return 'some value'
}
```

This is the most normal way of declaring functions, and you are going to use most of these.

## Function Expression

This is also called **Function Literal**

```javascript
const myFunc = function optionalName() {
  return 'some value'
}
```

A function expression have to be declared first before you can call them.
These can be without a name like the example bellow. These are called anonymous function expression.

```javascript
const myFunc = function () {
  return 'some value'
}
```

## Arrow Function

Arrow functions are a part of the **new** ES6 JavaScript.

```javascript
const myFunc = () => {
  return 'some value'
}

const myFunc2 = (name, age) => {
  return 'My name is ' + name + ' and my age is ' + age
}
```

These are the same as the anonymous function expression but instead of having a keyword function before the parentheses, they have the arrow sign after `=>`.

But if you are going to only return just some value back you can skip the `{ }` curly brackets and the return keyword.

```javascript
const myFunc2 = (name, age) => {
  return 'My name is ' + name + ' and my age is ' + age
}

// is the same as

const myFunc2 = (name, age) => 'My name is ' + name + ' and my age is ' + age
```

There are some differences between these 3 way of declaring the functions.

I like to use the arrow function as much as I can when I bind them to an object, and I like the function declaration when is just alone.
