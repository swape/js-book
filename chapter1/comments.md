# Comments

Comments are not doing anything in the code. It is just a nice way of leaving comments so that future you or other team members understand what is going on. The rule is that when you start the `//`, everything after that becomes a comment until it hits new line.

```javascript
// this is just a comment
```

And you can do a comment on multiple lines with opening `/*` and closing `*/`

```javascript
/*
   ------------------
   This is comment
   on multiple lines.
   -------------------
*/
```

Using a comments on the parts that are complicated is a good practice. I have TODO comments all over the code to remind myself to fix or improve the code later on.

```javascript
// variables
let x = 10 // my x
let y = 15 // but y
let text = 'my secret number is: '
text = text + (x+y)
// TODO: clean up this part later

// output to console
console.log(text)
```
