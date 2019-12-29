# Boolean

On or off, true or false.

In JavaScript we can make true or false values in many different ways. Let us use some of them here.

```javascript
let isAdmin = true
let isPoor = false

if (isAdmin) {
    // some secret code to excecute here
}

if (isPoor) {
    // oh no, Here is some money
}
```

Since `isAdmin` is set to be `true`, line number 4 is going to pass and we can run the code for that `if` statement. But line 8 is not going to pass and the code inside that `if` statement is not going to run.

```javascript
let x = 1
let y = 5

let answer = (x >= y) // if x is equal or bigger than y

if (answer) {
    cosnole.log('Correct answer')
}
```

Here you can see that variable `answer` is going to contain the value false since x is not equal or bigger than y.
And the if statement is not going to pass.

But if we wanted to make this run if the `answer` was wrong, then we can use `!` to reverse the `true` / `false` value.

```javascript
let x = 1
let y = 5

let answer = (x >= y) // if x is equal or bigger than y

if (!answer) {
    cosnole.log('Wrong answer')
}
```

When you work with `if` statement, you have to be careful not to be confused by "Falsy" values.

```javascript
if ('') {
    // not going to run
}

if (0) {
    // not going to run
}

if ("") {
    // not going to run
}
```

And here are some more ways to make `true` or `false` values.

```javascript
let a = !1 // false
let b = !0 // true
let c = ![] // false
let d = !!0 // false
let e = !"" // true
let f = !'' // true
let g = !false // true
let h = !true // false
let i = "false" // true
```

But let us just use `true` or `false` and not confuse our heads with these values.

But it is important to know what can produce true or false values.

Remember that you are reading the code a lot more than you writing it so it is really important to be clear and keep the code as simple as we can.
