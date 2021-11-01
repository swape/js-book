# Object

A collection of values/functions.

Think of objects as a collection of values and functions with unique names/keys.

```javascript
let myObj = {} // Empty object

let myObj2 = {
  name: 'Bob',
  age: 20,
  level: 8,
}

console.log(myObj2.name) // This outputs 'Bob'
```

You can access the objects properties with dot notation.

If you want to get the value of the property "age" from `myObj2` in example above, you can get it like this: `myObj2.age`.

Properties `name`, `age` and `level` is the keys you can access their values from and these must be unique.
So you can't have duplicates.

You can also use functions inside an object.

```javascript
let myObj = {
  name: 'KVN',
  sayHi() {
    console.log('Hi there')
  },
}

myObj.sayHi() // Outputs 'Hi there'
```

Objects are very common in JavaScript and is used very often to have a place to store data in and it is used in modern API's to interact with frameworks/libraries.

## this

The keyword this is very useful but mostly misused keyword that makes a lot of issues.

```javascript
let myObj = {
  name: 'KVN',
  sayHi() {
    console.log('Hi there ' + this.name)
  },
}

myObj.sayHi() // Outputs 'Hi there KVN'
```

At line 4, I'm getting the value of `name` by using `this.name`. In here `this` refers to the parent object `myObj`.
There are some cases this refers to completely other objects if you use it without understanding where you call this from.

To avoid issues with `this`, you can use this string `'use strict'` at top of your script or inside your function to tell the browser that it should follow the "strict mode" that was introduced in version 5 of JavaScript/ECMAScript.

::: tip
JavaScript is sometimes called ECMAScript. You can read more about it [here](https://en.wikipedia.org/wiki/ECMAScript).
:::

## Attaching new variables

In the past prototype was used to attach new stuff to objects but there are easier and better way of doing that.

```javascript
let myObj = {}
myObj.name = 'Rob'
myObj.adr = 'North'

console.log(myObj) // This outputs the object with all the properties
```

As you can see we can attach new values directly to our object by using the dot notation.

```javascript
let myObj = {}
myObj.name = 'Rob' // Add the key 'name' with value 'Rob'
console.log(myObj.name) // Outputs 'Rob'
myObj.name = 'Stark' // Change the name value
console.log(myObj.name) // Outputs 'Stark'

// TODO: name of the keys in "" and []
```

You can also use space or other signs as a key but you have to use quote sign `'` around the key.

```javascript
let myObj = {
  'something here': 'my value',
}

// Getting the value from a key with space
console.log(myObj['something here'])

// Adding a new shitty key
myObj['💩'] = 5

console.log(myObj['💩']) // Outputs 5
```

## Object Copy

Unlike the normal variables, you can not copy objects by using a `=` sign. This only making a new reference to the old object.

```javascript
let objA = {
  name: 'Jack',
}

let objB = objA

objA.name = 'Eli'

console.log(objB.name) // This outputs Eli
console.log(objA.name) // This also outputs Eli
```

As you can see here, since `objA` is pointing to the same place in the memory as `objB` , we can change the property of `objB` by changing it on `objA`.

So you have to be careful if you want to copy and not create another reference to the same object.
If you know that you don't have any functions inside your object, you can use this trick to copy objects.

```javascript
let objA = { name: 'Eli' }
let objB = JSON.parse(JSON.stringify(objA))
objA.name = 'Noah'

console.log(objB.name) // This outputs Eli
console.log(objA.name) // This outputs Noah
```

You can also use [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to copy like this.

```javascript
let objA = { name: 'Eli' }
let objB = { ...objA } // 3 dots is spread syntax
objA.name = 'Noah'

console.log(objB.name) // This outputs Eli
console.log(objA.name) // This outputs Noah
```

But **spread syntax** `...` is not supported on old browsers, so you have to be careful when to use it.
