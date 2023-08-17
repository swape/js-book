---
layout: ../../layouts/normal.astro
title: 'Map'
---

# Map

Map is almost the same as `set` on previous page. It has all the methods like `has()` `delete()` `clear()` and `size`.

## set()

You can add new values using `set()` method. The first argument is the key and the second is the value.
The key can be number, string or even an object.

```javascript
let myMap = new Map()

myMap.set(1, 'Hello')
myMap.set(2, 'Hi')
myMap.set(5, 'Hei')
myMap.set(3, 'Oi')
myMap.set(4, '¡Hola')
```

## get()

```javascript
let myMap = new Map()

myMap.set(1, 'Hello')
myMap.set('2', 'Hi')
myMap.set(1, 'Hei')

console.log(myMap.size) // 2
console.log(myMap) // Map { 1 => 'Hei', '2' => 'Hi' }
console.log(myMap.get('2')) // 'Hi'
console.log(myMap.get(2)) // undefined
console.log(myMap.get(1)) // 'Hei'
```

You can overwrite old values if you use the same key, like here on line 3 and 5.

If you look at line 10 you can see that I'm trying to access the value with key **2**, since this is not as the same as the **string** `'2'`, it returns `undefined`.

```javascript
const myMap = new Map()

myMap.set('somethig', 'else')
myMap.set('other', 'stuff')
myMap.set(1, 'one').set(2, 'two') // chaining set methods

console.log(myMap)

console.log(myMap.keys()) // 'somethig', 'other', 1, 2
console.log(myMap.values()) // 'else', 'stuff', 'one', 'two'
console.log(myMap.entries())
/*
Output from myMap.entries():
{
  [ 'somethig', 'else' ],
  [ 'other', 'stuff' ],
  [ 1, 'one' ],
  [ 2, 'two' ]
}
*/
```

As you can see on line 5, that you can chain many `set()` methods together if you like. But I think it is nicer to add one at a time.

You can get all the keys or values by using `keys()` and `values()` method. And both with entries.
You can also use the built-in forEach to iterate every item.

```javascript
const myMap = new Map()

myMap.set('somethig', 'else')
myMap.set('other', 'stuff')
myMap.set(1, 'one').set(2, 'two') // chaining set methods

myMap.forEach((i, k) => {
  console.log(`${k} = ${i}`)
})
/*
Outputs:
'somethig = else'
'other = stuff'
'1 = one'
'2 = two'
*/
```

You can add an object to a map by using `Object.entries()`

```javascript
const myUser = {
  name: 'John',
  age: 50,
}

const myMap = new Map(Object.entries(myUser))

console.log(myMap.get('name')) // John
console.log(myMap.get('age')) // 50
```
