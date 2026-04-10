---
layout: ../../layouts/normal.astro
title: 'Types'
---

# Types

JavaScript has several built-in types. Knowing what type a value is helps you avoid bugs.

## typeof

You can check the type of any value with the `typeof` operator:

```javascript
console.log(typeof 42)          // 'number'
console.log(typeof 3.14)        // 'number'
console.log(typeof 'hello')     // 'string'
console.log(typeof true)        // 'boolean'
console.log(typeof undefined)   // 'undefined'
console.log(typeof null)        // 'object'  ← a known quirk in JavaScript
console.log(typeof {})          // 'object'
console.log(typeof [])          // 'object'
console.log(typeof function(){}) // 'function'
```

`typeof` returns a string. Notice that `typeof null` returns `'object'` — this is a long-standing quirk in JavaScript, not a real object.

## null vs undefined

These two values both mean "no value", but they are used differently.

**`undefined`** means a variable has been declared but has not been given a value yet. JavaScript sets it automatically.

```javascript
let myVar
console.log(myVar) // undefined
```

**`null`** is a value you assign on purpose to say "this is empty" or "no result".

```javascript
let user = null // no user yet
```

Quick comparison:

```javascript
console.log(null == undefined)  // true  (loose equality ignores the type difference)
console.log(null === undefined) // false (strict equality — different types)
```

Use `null` when you want to intentionally set something to empty. Let JavaScript use `undefined` for uninitialised variables.

## Checking for null or undefined

A common pattern is to check whether a value exists before using it:

```javascript
let name = null

if (name === null || name === undefined) {
  console.log('no name provided')
} else {
  console.log('Hello', name)
}
```

You will see a shorter way to write this in the Optional Chaining chapter.
