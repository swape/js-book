---
layout: ../../layouts/normal.astro
title: 'Template Literals'
---

# Template Literals

When you want to add some dynamic text inside some other text, you have to concat some strings and some variables to make it happen like this:

```javascript
const myVar = 'Alireza'
const newString = 'Hi my name is ' + myVar
```

With template literals you can write this easier.

```javascript
const myVar = 'Alireza'
const newString = `Hi my name is ${myVar}`
```

By using backtick **`** instead of normal single quote or double quote, you make template literals. And inside the template literal you can use dollar sign and curly brackets to write your variable name.

You can also use normal javascript inside that too.

```javascript
const someName = 'John'
console.log(`I'm ${someName} and my number is ${2 + 40}`)
// I'm John and my number is 42

const x = `Some numbers ${[1, 2, 3, 4, 5].map((i) => i + 2)}`
// x = Some numbers 3,4,5,6,7
```

## Tagged template literals

```javascript
function highlight(strings, ...values) {
  let str = ''
  strings.forEach((string, i) => {
    str += string
    if (values[i]) {
      str += '(' + values[i] + ')'
    }
  })
  return str + ' -The end-'
}

const name = 'Ali'
const age = '42'
const sentence = highlight`My name is ${name} and I'm ${age} years old.`

// sentence = My name is (Ali) and I'm (42) years old. -The end-
```

On line 14 we assign the variable sentence with a template literal containing some text and variables and then just before the first backtick we use a function called `highlight`. This function is declared on line 1-10. `highlight` function accepts to parameters strings and values.

You can see the 3 dots before the values variable. This is spread operator.
That means it can be one or more arguments that is passed in. We can get back to this later on.
Both strings and values is now a list of values from the line 14 we passed in. `strings` is a list of the text and values are all the variables like name and age.

On line 3, we iterate (loop through) all the values stored inside the strings variable, and we add parentheses around them.
So the end result in sentence variable is **My name is(Ali) and I'm (42) years old. -The end-**.
