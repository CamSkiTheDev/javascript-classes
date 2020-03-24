# JavaScript Classes | Why & How To Use Them

## What is a JavaScript Class.

JavaScript classes are special functions and were introduced in ECMAScript 2015. Classes have a special inheritance model often used in Object Oriented Programing. Classes can be defined just liked functions, as class _*expressions*_ or class _*declarations*_. Unlike function declarations, class declarations are not hoisted, you must first declare your class then access it. Otherwise your code will throw a reference error. Below are examples of both class declarations and class expressions.

### Class Declaration

```javascript
class Animal {
  constructor(name) {
    this._name = name;
    this._age = Math.floor(Math.random() * 15) + 1;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set name(name) {
    this._name = name;
  }

  eat() {
    return `${this._name} - Om Nom Nom Nom!`;
  }
}
```

### Class Expression

```javascript
const Animal = class {
  constructor(name) {
    this._name = name;
    this._age = Math.floor(Math.random() * 15) + 1;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set name(name) {
    this._name = name;
  }

  eat() {
    return `${this._name} - Om Nom Nom Nom!`;
  }
};
```

## The Constructor Method

The constructor method is a special method used to create and initialize an object created with a class. The constructor can take multiple arguments to aid in the creation of the object created by the class. A constructor can use the super keyword to call the constructor of the super or parent class.

## Getter & Setters

The get syntax binds an object property to a function that will be called when that property is looked up. This is useful for getting a property from an object without directly getting the property. This allows you to do many operations on the property before returning it, without mutating the original property.

```javascript
class Animal {
  constructor(name) {
    this._name = name;
    this._age = 3;
  }

  get age() {
    return this._age * 11;
  }
}

const Buddy = new Animal("Buddy");

console.log(Buddy._age); // Returns 3

console.log(Buddy.age); // Returns 33
```

The set syntax binds an object property to a function to be called when there is an attempt to set that property. This is useful for setting a property of an object without directly mutating the property. This allows you to do many operations on the property before mutating it.

```javascript
class Animal {
  constructor(name) {
    this._name = name;
    this._age = 3;
  }

  get age() {
    return this._age * 11;
  }

  set age(age) {
    this._age = age * 11;
  }
}

const Buddy = new Animal("Buddy");

Buddy.age = 5; // Sets the age to 55
```

## Method definitions

You can define a method within the class body. Methods allows you to do many operations on the data before returning it. You can also get any property within the class as well.

```javascript
class Animal {
  constructor(name, locationTag) {
    this._name = name;
    this._locationTag = Buffer.from(locationTag).toString("base64");
    this._age = Math.floor(Math.random() * 15) + 1;
  }

  eat() {
    return `${this._name} - Om Nom Nom Nom!`;
  }

  sleep() {
    return `${this._name} - Zzzzzzzz!`;
  }
}
```

## Sub-classing with Extends

You can use the extends keyword to create a class as a child of another class. The child class will inherit all of the properties and methods of its parent class. If the sub or child class contains the constructor method it must call the _*super*_ keyword before using _*this*_. If the sub or child class contains a method with the same name as its parent the child's method takes precedence over the parent's method. Below is an example of a sub or child class of the animal class.

```javascript
class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  speak() {
    return console.log("Bark Bark");
  }
}
```

## The Conclusion

I hope this helped you to understand how to use and create javascript classes. Unfortunately we didn't cover everything about classes. If you would like to learn more I have left the link to the mozilla docs on javascript classes [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
