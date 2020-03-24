class Animal {
    constructor(name) {
        this._name = name
        this._age = Math.floor(Math.random() * 15) + 1
    }

    get name() {
        return console.log(this._name)
    }

    get age() {
        return console.log(this._age)
    }

    set name(name) {
        this._name = name
    }

    speak() {
        return console.log(`${this._name} makes a noise`)
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age)
    }

    speak() {
        return console.log('Bark Bark')
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age)
    }

    speak() {
        return console.log('Meow')
    }
}

const Buddy = new Dog('Buddy')
const Sassy = new Cat('Sassy')

