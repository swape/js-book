---
layout: ../../layouts/normal.astro
title: 'First Node.js project'
---

# Your first Node.js project

You have installed Node.js and created a new project with `npm init`.
Now let's create a file called `index.js` and write some code.

Place the index.js file in the root of your project.

This is how the project structure should look like:

```
/my-project
  index.js
  package.json
```

Open up the package.json file and at the scripts object, add a new command called "start".

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My first project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Your Name",
  "license": "MIT"
}
```

Now open up the index.js file and write some code.

```javascript
console.log('Hello World')
```

Now you can run the project by typing `npm start` in your terminal.
Make sure you are in the root of your project when you run the command.

You should see the text "Hello World" in your terminal.
