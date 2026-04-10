---
layout: ../../layouts/normal.astro
title: 'Scope & Closures'
---

# Scope & Closures

## Scope

**Scope** is the area of the code where a variable is accessible. Variables declared with `let` and `const` are block-scoped — they only exist inside the `{ }` block they were created in.

```javascript
function greet() {
  const message = 'Hello!'
  console.log(message) // 'Hello!'
}

greet()
console.log(message) // ReferenceError: message is not defined
```

Each function creates its own scope. Variables inside a function are not visible outside of it.

## Nested scope

Inner scopes can read variables from outer scopes, but not the other way around.

```javascript
const greeting = 'Hello'

function greet(name) {
  // can read 'greeting' from the outer scope
  console.log(greeting + ', ' + name)
}

greet('Alice') // 'Hello, Alice'
```

## Closures

A **closure** is when a function remembers the variables from the scope where it was created, even after that outer function has finished running.

```javascript
function makeCounter() {
  let count = 0

  return function () {
    count = count + 1
    console.log(count)
  }
}

const counter = makeCounter()
counter() // 1
counter() // 2
counter() // 3
```

`makeCounter` returns a new function. That inner function still has access to `count`, even though `makeCounter` already finished. The inner function has _closed over_ the `count` variable — that is what a closure is.

Each call to `makeCounter()` creates its own independent `count`:

```javascript
const counterA = makeCounter()
const counterB = makeCounter()

counterA() // 1
counterA() // 2
counterB() // 1  — counterB has its own separate count
```

Closures are used all the time in JavaScript for things like event handlers, timers, and keeping state private.
