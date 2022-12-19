---
layout: ../../layouts/normal.astro
title: "Return"
---
# Return

If you are coming from other languages (c/java/php), you are used to the curly brackets on its own line.
This is something you should avoid in JavaScript.

```javascript
// Bad code
function someFunc() {
    return
     {
      key1: 'value 1',
      key2: 'value 2'
     }
}

someFunc() // This is going to return undefined instead of our object.

// Good code
function someFunc() {
    return {
      key1: 'value 1',
      key2: 'value 2'
     }
}

someFunc() // This is going to return the object
```

If you have a good linter in your editor, you should get a warning about this.

Try to install (jshint / jslint) plugins. It helps you write a nice code without these issues.

I would also recommend a code beautifier too to help you format the code the way it should be written automatically.
