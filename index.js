class Animal {
    constructor(name, locationTag) {
        this._name = name
        this._locationTag = Buffer.from(locationTag).toString('base64')
        this._age = Math.floor(Math.random() * 15) + 1
    }

    get name() {
        return this._name
    }

    get age() {
        return this._age
    }

    get locationTag() {
        const decodedLocationTag = Buffer.from(this._locationTag, 'base64').toString()
        return `Location Tag: ${decodedLocationTag}`
    }

    set locationTag(locationTag) {
        const encodedLocationTag = Buffer.from(locationTag).toString('base64')
        this._locationTag = encodedLocationTag
    }

    set age(age) {
        this._age = age
    }

    eat() {
        return `${this._name} - Om Nom Nom Nom!`
    }

    sleep() {
        return `${this._name} - Zzzzzzzz!`
    }
}

class Dog extends Animal {
    constructor(name, locationTag) {
        super(name, locationTag)
    }

    speak() {
        return `Bark Bark`
    }
}

class Cat extends Animal {
    constructor(name, locationTag) {
        super(name, locationTag)
    }

    speak() {
        return 'Meow'
    }

    sleep() {
        return `${this._name} - Time for a nap, I've only slept 18 hours.`
    }
}

const Max = new Dog('Max', 'G18')
const Sassy = new Cat('Sassy', 'TT632')