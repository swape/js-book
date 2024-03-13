---
layout: ../../layouts/normal.astro
title: 'Modules'
---

# Modules

There are some built-in modules in Node.js that you can use.

Let's take a look at some of them.

## OS module

Let's find out some info about your operating system.

In your `index.js` file, write this code:

```javascript
import os from 'os'

console.log(os.platform())
console.log(os.arch())
console.log(os.cpus())
console.log(os.freemem())
console.log(os.totalmem())
```

When you run the `index.js` file you should see some info about your operating system in your terminal.

As you can see, we are using the `import` keyword to import the `os` module.
But this time we are not using curly braces `{}` because `os` module is a default export.

## Named exports

When you write your own modules, you can use the `export` keyword to export a function or a variable from a file. This is called a named export.

It is better to export only the things you want to be public and accessible from other files.

This also helps to keep your code clean and easy to read. And bundlers like Webpack, Rollup and Vite can optimize your code better.

Example of named exports:

```javascript
// utils.js
export const add = (a, b) => a + b

export function subtract(a, b) {
  return a - b
}

export const PI = 3.14
```

These are the named exports from the `utils.js` file.

Now let us import these functions in our `index.js` file.

```javascript
// index.js
import { add, subtract, PI } from './utils.js'

console.log(add(1, 2))
console.log(subtract(3, 1))
console.log(PI)
```

When you run the `index.js` file you should see the numbers `3`, `2` and `3.14` in your terminal.

## Default exports

In some cases you want to export only one thing from a file. This is called a default export.

You can use the `export default` keyword to export a function or a variable from a file.

Example of default exports:

```javascript
// math.js
export default function add(a, b) {
  return a + b
}
```

This is the default export from the `math.js` file.

Now let us import this function in our `index.js` file.

```javascript
// index.js
import add from './math.js'

console.log(add(1, 2))
```

When you run the `index.js` file you should see the number `3` in your terminal.

But you can also call the imported function anything you want.

```javascript
// index.js
import sum from './math.js'

console.log(sum(1, 2))
```

This is not possible with named exports unless you use the `as` keyword.

```javascript
// index.js
import { add as sum } from './utils.js'

console.log(sum(1, 2))
```

## FS module

Let's read a file using the `fs` module.

First make a file called `file.txt` and write some text in it.

In your `index.js` file, write this code:

```javascript
import fs from 'fs'

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
```

When you run the `index.js` file you should see the content of the `file.txt` in your terminal.

You can read more about the built-in modules in the [Node.js documentation](https://nodejs.org/api/).
