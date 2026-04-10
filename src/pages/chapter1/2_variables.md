---
layout: ../../layouts/normal.astro
title: 'Variables'
---

# Variables

Variables are like _drawers_ we put stuff in.

## let

These variables can have different forms, and we are going to learn them all. We can start by making a variable to store a number in.

```javascript
let myVar = 3
```

We use the special keyword `let` to store number 3 to our own variable called `myVar`. The keyword `let` tells the script that we are going to store something. The word `myVar` is our own variable and can be whatever we want it to be.

```javascript
let mySuperNumber = 42
let otherNumber = 1
```

A variable name can not contain space, and it can not start with a number. It is very usual to name the variable something that describes the value it stores so that we remember what it is supposed to contain. We can later on add more value to the ones we created. Let us write something to console to see how it works. Open up the JavaScript console to see the result.

```javascript
let firstVar = 10
let anotherNumber = 5

console.log(firstVar + anotherNumber)
```

This should log 15 to console. We use `console.log` to print something to the console.

The keyword console has other logging methods too like `console.info` or `console.warn`.
Let us try them all to see how they show up in our console.

```javascript
let firstVar = 10
let anotherNumber = 5

console.info('My numbers are', firstVar, 'and', anotherNumber)
console.log('I am some text')
console.warn('This can be some error message')
```

We can re-use variables. But we only need to use the keyword `let` the first time we declare the variable.

```javascript
let firstVar = 10
console.log('number is ', firstVar)

firstVar = 3
console.log('number is changed to', firstVar)
```

## var

It was very usual to use var instead of let before. But with the new JavaScript version that are supported on all modern browsers like Chrome and Firefox, it is better to use `let`.

`let` have some smart advantages over `var`. It is scoped. But don't worry. We are getting back to this later on.

## const

The `const` keyword is like `let` and `var` but you can only assign a value to this only once. And if you try to override it later on in the script, it is going to complain about it.

```javascript
const myName = 'Alice'
myName = 'Bob' // TypeError: Assignment to constant variable.
```

**Best practice:** use `const` by default. Only switch to `let` when you know the variable needs to be reassigned later. This makes your code easier to read because anyone who sees `const` immediately knows the value will not change.

```javascript
const PI = 3.14 // never changes — use const
const greeting = 'Hello' // never changes — use const

let score = 0 // will be updated — use let
score = score + 10

let userInput = '' // will be overwritten — use let
userInput = 'Alice'
```

## Scope

Variables declared with `let` and `const` are **block-scoped**, meaning they only exist inside the `{ }` block where they were created.

```javascript
if (true) {
  let message = 'inside block'
  console.log(message) // 'inside block'
}
console.log(message) // ReferenceError: message is not defined
```

`var` does not follow block scope, which is one of the main reasons it was replaced by `let` and `const`.
