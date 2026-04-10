---
layout: ../../layouts/normal.astro
title: 'Import'
---

# Importing other files

In your project you might want to split your code into multiple files.

This is a good practice to keep your code clean and easy to read.

## Enable ES module imports in Node.js

Before you can use the `import` syntax in Node.js, you need to tell Node that your project uses ES modules. Open your `package.json` file and add `"type": "module"`:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "type": "module"
}
```

Without this line, Node.js will treat your files as CommonJS and throw a `SyntaxError` when it sees `import`.

## Importing functions from another file

Lets make another file called `utils.js` and write some code.

```javascript
// utils.js
export const add = (a, b) => a + b
```

Now we can import the `add` function in our `index.js` file.

```javascript
// index.js
import { add } from './utils.js'

console.log(add(1, 2)) // 3
```

When you run the `index.js` file you should see the number `3` in your terminal.

`export` keyword is used to export a function or a variable from a file.
and `import` keyword is used to import a function or a variable from another file.
