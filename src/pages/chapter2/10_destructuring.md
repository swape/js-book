---
layout: ../../layouts/normal.astro
title: 'Destructuring'
---

# Destructuring

Destructuring lets you unpack values from arrays and objects into individual variables in a single line. It is extremely common in modern JavaScript.

## Array Destructuring

Instead of accessing elements by index, you can name them directly:

```javascript
const colors = ['red', 'green', 'blue']

// without destructuring
const first = colors[0]
const second = colors[1]

// with destructuring
const [first, second, third] = colors

console.log(first) // 'red'
console.log(second) // 'green'
console.log(third) // 'blue'
```

You can skip elements using an empty comma:

```javascript
const [, second, , fourth] = [1, 2, 3, 4]
console.log(second) // 2
console.log(fourth) // 4
```

You can combine array destructuring with rest syntax to capture the remaining items:

```javascript
const [head, ...rest] = [1, 2, 3, 4]
console.log(head) // 1
console.log(rest) // [2, 3, 4]
```

## Object Destructuring

You can pull properties out of an object by name:

```javascript
const user = {
  name: 'Alice',
  age: 30,
  city: 'Oslo',
}

// without destructuring
const name = user.name
const age = user.age

// with destructuring
const { name, age } = user

console.log(name) // 'Alice'
console.log(age) // 30
```

## Renaming variables

If the property name clashes with something in scope, you can rename it:

```javascript
const { name: userName, age: userAge } = user

console.log(userName) // 'Alice'
console.log(userAge) // 30
```

## Default values

You can provide a default if the property does not exist:

```javascript
const { name, country = 'Norway' } = user

console.log(country) // 'Norway'  — user has no 'country' property
```

## Destructuring in function parameters

A very common use is to destructure directly in the function signature:

```javascript
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`)
}

greet({ name: 'Alice', age: 30 })
```

This is often seen in React components where a `props` object is passed in.
