---
layout: ../../layouts/normal.astro
title: "Concatenating"
---
# Concatenating

1 + 1

Yes it is time to do one plus one. JavaScript do not have a strong typing like many other languages. It is dynamic, and it tries to do the best it can to convert string to number and other way around.

```javascript
let number1 = 5
let num2 = 3

console.log(number1 + num2)
```

This should output 8. The plus sign `+` is concatenating what is on left `number1` with what is on the right `num2`. JavaScript tries to do the math here and return the value.

You can do the same thing but with text **(String)**

```javascript
let greetings = 'hello'
let name = 'John'

console.log(greetings + ' ' + name)
```

This should output **hello John**. Since greetings nor **name** is a number, JavaScript tries to put the strings together.

But when you have mixed types with a plus sign in the middle, weird things happen. JavaScript tries to convert them to string.

```javascript
let a = 1
let b = '7'

console.log(a + b)
```

This is outputting 17. JavaScript have converted `a` to a string and this is same if it was `'1' + '7'`.

This is awful. This is where a lot of programmers use endless ours trying to figure out what and where the issue is.

But don't worry we have solution for that.

```javascript
let myNumber = 11
let someText = ' 22 '

console.log(parseInt(myNumber) + parseInt(someText))
```

Notice the `parseInt` function. This function converts the input to number.
If you know that you are going to do the mathematical operation on some variables, make sure you convert them to numbers before you do the operation. This saves you a lot of trouble.

Never trust the data. Let us do some more but this time we do that in a way that is more clear and more readable.

```javascript
let myNumber = 33
let myText = '44'

// converting to number
myNumber = parseInt(myNumber)
myText = parseInt(myText)

let mySum = myNumber + myText
console.log(mySum)
```

Now this is more readable code with comments in the code.
