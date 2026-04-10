---
layout: ../../layouts/normal.astro
title: 'Error Handling'
---

# Error Handling

Things go wrong. A server does not respond, a user types unexpected input, a file does not exist. Good code handles these situations gracefully instead of crashing.

## try / catch

Wrap code that might throw an error in a `try` block. If an error occurs, execution jumps to the `catch` block.

```javascript
try {
  const data = JSON.parse('this is not valid JSON')
  console.log(data)
} catch (error) {
  console.log('Something went wrong:', error.message)
}
```

Without `try / catch` the invalid `JSON.parse` call would crash your script. With it, you can handle the error and keep going.

## finally

The `finally` block runs no matter what — whether the code succeeds or throws.

```javascript
try {
  const result = riskyOperation()
  console.log(result)
} catch (error) {
  console.log('Error:', error.message)
} finally {
  console.log('This always runs — good place for cleanup')
}
```

Use `finally` to release resources, stop a loading spinner, or close a database connection.

## throw

You can throw your own errors using `throw`. This lets you signal problems from inside your functions.

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero')
  }
  return a / b
}

try {
  console.log(divide(10, 0))
} catch (error) {
  console.log(error.message) // 'Cannot divide by zero'
}
```

## The Error object

`new Error(message)` creates an error object with two important properties:

- `error.message` — the text you passed in
- `error.name` — the type of error (defaults to `'Error'`)

```javascript
const err = new Error('Something broke')
console.log(err.name)    // 'Error'
console.log(err.message) // 'Something broke'
```

JavaScript also has built-in error types for specific situations:

```javascript
throw new TypeError('Expected a string')      // wrong type
throw new RangeError('Value out of range')    // value outside allowed range
throw new ReferenceError('Variable not found') // accessing undefined variable
```

## Error handling with async / await

When using `async` / `await` you catch errors the same way with `try / catch`:

```javascript
async function loadData() {
  try {
    const response = await fetch('https://api.example.com/data')
    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`)
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log('Failed to load data:', error.message)
  }
}

loadData()
```

This is cleaner than attaching `.catch()` to every Promise chain.
