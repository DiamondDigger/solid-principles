//Liskov substitution principle

class Person{
    name = 'person'
    access(name){
        console.log(`${name} - You have access!`)
    }
}

class MemberOfCompany{

}

class FrontendDeveloper extends Person{
    name = 'frontend developer'
}

class BackendDeveloper extends Person{
    name = 'backend developer'
}

class Enemy extends Person{
    name = 'I am an enemy, give me your access and I gonna destroy your system!!'
    access() {
        console.log('I am technical director now! You all fired!')
    }
}

const front = new FrontendDeveloper()
const back = new BackendDeveloper()
const enemy = new Enemy()

front.access(front.name)
back.access(back.name)
enemy.access(enemy.name)