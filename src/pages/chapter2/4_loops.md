---
layout: ../../layouts/normal.astro
title: 'Loops'
---

# Loops

Sometimes we need to do the same job several times or loop through a list to do some checking.
There are many ways in JavaScript we could do that, but here is the most common ones.

## For loop

```javascript
for (let x = 0; x < 10; x++) {
  console.log(x)
}
```

Here you can see that inside the for parentheses `( )` we have 3 sections separated by semicolon `;`.

The first one is `let x = 0`.
This is the start point. We tell the for loop to start from `0`.

In the second section, we tell the for loop to repeat this until this expression is `false`.
So in this example we tell it to repeat until `x` is not bigger than `10`.

And in the last one we have to tell it to increase the `x` for each time it loops over it.
This should print out 0 to 9.

```javascript
for (let x = 9; x >= 0; x--) {
  console.log(x)
}
```

In this example we tell the loop to count from `9` down to `0` and **decrease** it with one each time.

## For of

There is another way to use the for loop.

```javascript
const myArr = [5, 10, 15, 20]

for (v of myArr) {
  console.log(v) // 5, 10, 15, 20
}
```

In here we assign `v` to each element of `myArr` array and loop though it.
This is easier than the first one. There is another type of for loop where you use `in` instead of `of`.
But "for of" is better since it iterate over arrays in right order.

## While loop

```javascript
let n = 0

while (n < 3) {
  n++
  console.log(n) // 1, 2, 3
}
```

Here we tell the `while` loop to repeat as long as `n` is less than 3.
And inside the `while` loop we increase the `n` by one and print it out.
But be careful. This can cause some issues when we increase the `n` inside some other if statements or something, and it never gets bigger than 3.
Then you get infinite loop where it never stops and the rest of the script freeze and your CPU overheat, and we all die. Not that bad :), but it feels like it though.

## Break

In both while and for loops you can use the keyword `break`. This breaks out of the loop.

```javascript
let n = 0

while (n < 5) {
  n++
  if (n === 3) {
    break
  }
  console.log(n) // 1, 2
}
```

Here you can see that on line 5 we have an if statement that breaks the loop if `n` is 3.
So it never gets to line 8, and we only get to print out 1 and 2.

```javascript
for (let x = 9; x >= 0; x--) {
  if (x === 5) {
    break
  }
  console.log(x) // 9, 8, 7, 6
}
```

And here it breaks if x is 5.

## Continue

```javascript
for (let x = 9; x >= 0; x--) {
  if (x === 5) {
    continue
  }
  console.log(x) // 9, 8, 7, 6, 4, 3, 2, 1, 0
}
```

`continue` keyword breaks the loop, but it doesn't stop it like the break does.
It just continues and skip the rest of the code that comes after the `continue`.

This script skips the nr 5 and continue to next iteration.

There are other ways to make a loop and iterate over some lists or arrays. But not all of them are easy or bug free. In the next chapter we can learn how to do the loops properly with `.map()`.
