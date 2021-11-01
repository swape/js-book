# Class

Classes in JavaScript is not like classes in other languages.
It is more like objects and functions had a baby with easier syntax.
If you know other languages like Java or C#, forget all you know about classes and let us re-learn all in JavaScript.

```javascript
class MyClass {}
```

This is how you make a class.

```javascript
class MyClass {
  constructor(_myVal) {
    this.myVal = _myVal
  }
}

const myClassInstance = new MyClass(123)
```

On line 7 we can use the keyword `new` to make a new `class`.
The `constructor` function inside the class is called when you make a new copy of that class.
Inside a class you don't need the keyword `function` in front of the functions.

```javascript
class Car {
  constructor(color, name) {
    this.color = color
    this.name = name
  }
}

const toyota = new Car('red', 'Prius')
const tesla = new Car('black', 'Model X')
```

Think of classes as a prototype for something that can be reused later.

Here in this example we made a class called Car and on line 8 and 9 we made a 2 new instance of Car class and initiated with color and name.

Now let us make some another function inside the `Car` class to tell us something about that car.

```javascript
class Car {
  constructor(color, name) {
    this.color = color
    this.name = name
  }

  info() {
    console.log('My name is ' + this.name + ' and I am ' + this.color)
  }
}

const toyota = new Car('red', 'Prius')
const tesla = new Car('black', 'Model X')

toyota.info() // This outputs: My name is Prius and I am red
tesla.info() // This outputs: My name is Model X and I am black
```

Since you don't have a private values inside the class like in other languages, you can access the color and name of the instances like this:

```javascript
console.log(toyota.name) // This outputs: Prius
```

You can not call the Car class functions directly like this: `Car.info()`.
You have to make a new class objects like we did with toyota and tesla.

## Getter

You can also make a getter to get the info. Let us make another class with a getter.

```javascript
class Human {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }
  get fullname() {
    return this.firstname + ' ' + this.lastname
  }
}

const bruce = new Human('Bruce', 'Banner')
console.log(bruce.fullname) // Bruce Banner
```

This is a getter but you can not add new value to the `fullname` variable like this: `bruce.fullname = 'something else'`

## Setter

Let us use the last example and add a setter so we can change the fullname value.

```javascript
class Human {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }
  get fullname() {
    return this.firstname + ' ' + this.lastname
  }
  set fullname(newName) {
    const arrValues = newName.split(' ')
    this.firstname = arrValues[0]
    this.lastname = arrValues[1]
  }
}

const bruce = new Human('Bruce', 'Banner')
console.log(bruce.fullname) // Bruce Banner

bruce.fullname = 'Peter Parker'

console.log(bruce.fullname) // Peter Parker
console.log(bruce.lastname) // Parker
```

On line 10 we use the function `split` to split the `newName` string to an array.
Split function argument decide what keyword we use to split it into smaller chunks.

And in this example we used one space `split(' ')` to split the string into an array.
And then on line 11 and 12 we assign the right array element to the right variable.

## Extending class

You can extend classes with other classes.

```javascript
class Animal {
  constructor(name) {
    this.name = name
  }
  hello() {
    return 'Hi, I am ' + this.name
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name)
  }
  sound() {
    return 'Meow'
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }
  sound() {
    return 'Woff'
  }
}

const myCat = new Cat('Tiger')
const myDog = new Dog('Max')

console.log(myCat.sound()) // Meow
console.log(myDog.sound()) // Woof
console.log(myDog.hello()) // Hi, I am Max
```

By using the keyword `extends` we can extend our Dog and Cat classes with Animal class.

The `super()` function is calling the constructor from the extended class and passing the name parameter.

`super` is the same as `this` from the extended class.
If you want to call some function in the parent class, you could use the `super`.

Let us say you want to call the hello in `Animal` class from `sound` function in `Cat class`, then you could do something like this:

```javascript
class Dog extends Animal {
  constructor(name) {
    super(name)
  }
  sound() {
    return super.hello() // calling hello() from extended Animal class
  }
}
```
