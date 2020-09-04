//Interface segregation principle

class Animal{
    constructor(name){
        this.name = name
    }
    walk(){
        console.log(`${this.name} can walk`)
    }
    swim(){
        console.log(`${this.name} can swim`)
    }
    fly(){
        console.log(`${this.name} can fly`)
    }
}

class Dog extends Animal{
    fly() {
        return null
    }
}
class Eagle extends Animal{
    swim() {
        return null
    }
}
class Whale extends Animal{
    walk() {
        return null
    }
    fly() {
        return null
    }
}

const dog = new Dog('Jimbo')
const eagle = new Eagle('Desert Eagle')
const whale = new Whale('Big Brother')

dog.walk()
dog.swim()
dog.fly()

eagle.walk()
eagle.swim()
eagle.fly()

whale.walk()
whale.swim()
whale.fly()
