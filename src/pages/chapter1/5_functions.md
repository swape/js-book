---
layout: ../../layouts/normal.astro
title: "Functions"
---
# Functions

We have already started to use functions like console.log and parseInt. But what is a function?
Think of it as a set of instructions grouped together and named something. There are many built-in functions in JavaScript but let us make our own function.

```javascript
function myFunc() {
  return 'hello'
}
```

This function doesn't do anything special. It just returns the text **hello**. The `return` keyword should be the last thing in a function scope.

`myFunc` is the name of the function. After the name, there is `()`. This is where all the parameters (arguments) go. And the rest of the functions content go between `{` and `}`.
We can call the function to get the result back.

```javascript
function myFunc() {
  return 'hello'
}

console.log( myFunc() + ' world' )
```

This should log hello world in the console.
Now let us do this function better by passing an argument to it.

```javascript
function myFunc(myArg) {
  return 'hello ' + myArg
}

console.log( myFunc('John') )
```

As you can see on line 5 we pass the name John to `myFunc`. And on line 1 we assign that to the variable called `myArg`.

We don't need to use `let`, `var` or `const` here to declare the variable. So this function return hello John. Let us pass several arguments in to our function.

```javascript
function myFunc(myName, myGreetings) {
  return myGreetings + ' ' + myName
}

console.log(myFunc('John', 'Greetings'))
```

This should log Greetings John in console.
If you don't pass the second argument "Greetings" at all, you should get undefined John.
This happens when JavaScript can not find that value. Instead, it is setting the keyword `undefined` for that variable.

Functions can access variables outside the scope but variables declared inside the function is only accessible within that function. Let us try one.

```javascript
let myName = 'John'

function greet() {
  return 'Hello ' + myName
}

console.log( greet() )
// let us change the myName value here
myName = 'Rob'
console.log( greet() )
```

This should first log Hello John and then when we call `greet` again on line 10, it is changed to Hello Rob.

This is not the best practice. We should try to avoid getting variables from outside the function scope unless we pass that as argument. This function is _un-pure_. To make this function _pure_, we have to make a function argument to pass the value.

Arguments (sometimes called parameters) are inputs for function.
Think of it as microphone input to your music system.
What you put in that function can now be renamed and be used inside the function scope.

```javascript
let myName = 'John'

function greet(myArg) {
  return 'Hello ' + myArg
}

console.log( greet(myName) )
// let us change the myName variable here
myName = 'Rob'
console.log( greet(myName) )
```

This is better. When we write JavaScript we can encounter some codes that run in the background (async) and then we never know if the variable myName is changed or not in the time we need that. So to avoid future errors and endless hours of debugging, try not to access variables outside the function scope unless it has come from argument list.

Let us make a function that does the addition with parseInt built in.

```javascript
function add(a, b) {
  return parseInt(a) + parseInt(b)
}

console.log( add('1', 8) )
```

Now we can send text or number to our add function, and it converts them to number and return the sum back.

You can assign functions to variable.

```javascript
let myFunc = function() {
  return 'hello'
}

// we can call the function as normal
myFunc()
```

This is an anonymous function. We assign that to `myFuncvariable`.
It is anonymous because we don't specify a name for that function and after the keyword function we start the () without the name.

You have to be careful with this kind of function declaration. If you define the function like this after you call them, you get an error. But normal functions can be declared after you call them.

Let us try that.

```javascript
myFunc()

function myFunc() {
  return 'something'
}

// this is ok to do it like this
```

But the next example is going to generate error.

```javascript
myFunc()

let myFunc = function() {
  return 'something'
}

// this is not ok
```

This is because JavaScript put every function at top of the script and after that variables, right before it runs the script.
And when we declare the variable and assign a function to it, it is not being declared when we call the function.

There are more ways to declaring a function, but we can come back to it later.
