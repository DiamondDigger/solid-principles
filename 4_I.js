//Interface segregation principle

class Animal{
    constructor(name){
        this.name = name
    }
}

class Dog extends Animal{
}
class Eagle extends Animal{
}
class Whale extends Animal{
}

const walker = {
    walk(){
        console.log(`${this.name} can walk`)
    }
}
const flier = {
    fly(){
        console.log(`${this.name} can fly`)
    }
}
const swimmer = {
    swim(){
        console.log(`${this.name} can swim`)
    }
}

Object.assign(Dog.prototype,walker,swimmer)
Object.assign(Eagle.prototype,walker,flier)
Object.assign(Whale.prototype,swimmer)

const dog = new Dog('Jimbo')
const eagle = new Eagle('Desert Eagle')
const whale = new Whale('Big Brother')

dog.walk()
dog.swim()

eagle.walk()
eagle.fly()

whale.swim()
