# Variables

Variables are like "drawers" we put stuff in.

## let

These variables can have different forms and we are going to learn them all. We can start by making a variable to store a number in.

```javascript
let myVar = 3
```

We use the special keyword `let` to store number 3 to our own variable called `myVar`. The keyword `let` tells the script that we are going to store something. The word `myVar` is our own variable and can be whatever we want it to be.

```javascript
let mySuperNumber = 42
let otherNumber = 1
```

A variable name can not contain space and it can not start with a number. It is very usual to name the variable something that describes the value it stores so that we remember what it is suppose to contain. We can later on add more value to the ones we created. Let us write something to console to see how it works. Open up the JavaScript console to see the result.

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

console.info('My numbers are' , firstVar, 'and', anotherNumber)
console.log('I am some text')
console.warn('This can be some error message')
```

We can re-use variables. But we only need to use the keyword `let` the first time we declare the variable.

```javascript
let firstVar = 10
console.log('number is ' , firstVar)

firstVar = 3
console.log('number is changed to' , firstVar)
```

## var

It was very usual to use var instead of let before. But with the new JavaScript version that are supported on all modern browsers like Chrome and Firefox, it is better to use `let`.

`let` have some smart advantages over `var`. It is scoped. But don't worry. We are getting back to this later on.

## const

The `const` keyword is like `let` and `var` but you can only assign a value to this only once. And if you try to override it later on in the script, it is going to complain about it.

If you know that you are setting the value only once it is better to use `const`. But in most cases we just stick to `let`.
