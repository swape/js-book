# Set

`set` is a type of collection like array.

## add()

```javascript
let mySet = new Set()

mySet.add({ name: 'John' })
mySet.add({ name: 'Eli' })
mySet.add({ name: 'Jack' })
mySet.add({ name: 'John' })

console.log(mySet)
// Set { { name: 'John' }, { name: 'Eli' }, { name: 'Jack' }, { name: 'John' }}
```

We can add new values to our set by using `add()` method, it also return the set with all the values.

```javascript
const myArray = [9, 0, 1, 2, 3, 4, 5, 4, 3, 2]

const mySet = new Set(myArray)
console.log(mySet)
// Set { 9, 0, 1, 2, 3, 4, 5 }
```

As you can see from example above, we can use set to remove duplicated values from an array list.

*Note that this is not the same for objects*

If you add objects as values, it is not removed if it is duplicated unless it is exactly the same object.
You can see this in `has()` example.

## delete()

```javascript
const myArray = [9, 0, 1, 2, 3, 4, 5, 4, 3, 2]

const mySet = new Set(myArray)

mySet.delete(0) // returns true
mySet.delete(3) // returns true
mySet.delete(30) // returns false

console.log(mySet)
// Set { 9, 1, 2, 4, 5 }
```

With delete method we can delete elements and it returns true or false based on if that value existed in our set.

## has()

```javascript
let mySet = new Set()
let myObject = { name: 'Eli' }

mySet.add({ name: 'John' })
mySet.add(myObject)

console.log(mySet.has('Eli')) // false
console.log(mySet.has({ name: 'Eli' })) // false
console.log(mySet.has(myObject)) // true
```

We can use `has()` method to check if that value exsists. But as you can see from this example on line 5 that we add the object `myObject` that looks like what we are trying to check on line 8.
But these are not the same value although they look the same.

On line 9 you can see that it returns true because we have the exact object we added on line 3.

## size

You can check the size of the set with `size`. *note this is not a method*

```javascript
let mySet = new Set()

mySet.add(5)
mySet.add(3)
mySet.add(2)
mySet.add(5)

console.log(mySet) // Set { 5, 3, 2 }

console.log(mySet.size) // 3

```

## clear()

And as you expected you can clear all the elements by using `clear()` method.

```javascript
const myArray = [9, 0, 1, 2, 3, 4, 5, 4, 3, 2]

const mySet = new Set(myArray)

console.log(mySet) // Set { 9, 0, 1, 2, 3, 4, 5 }
mySet.clear()
console.log(mySet) // Set {}
```

You can also use `set` in for loop.

```javascript
let mySet = new Set()

mySet.add({ name: 'John' })
mySet.add({ name: 'Eli' })
mySet.add({ name: 'Jack' })
mySet.add({ name: 'John' })

for(let friend of mySet){
  console.log(friend.name)
}
```

It outputs:

```javascript
'John'
'Eli'
'Jack'
'John'
```

You can also use methods `keys()` `values()` `entries()` on a set, but it makes more sense on `new Map()` that we can learn more about next.
