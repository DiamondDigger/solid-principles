//Liskov substitution principle

class Person{
    iq = 3000
}

class MemberOfCompany extends Person{
    access(name = 'Unknown member'){
        console.log(`${name} - You have access!`)
    }
}

class Guest extends Person{
    access(name){
        console.error(`Dear - ${name} - Sorry, you have not root rights!`)
    }
}

class FrontendDeveloper extends MemberOfCompany{
    name = 'frontend developer'
}

class BackendDeveloper extends MemberOfCompany{
    name = 'backend developer'
}

class Enemy extends Guest{
    name = 'I am an enemy, give me your access and I gonna destroy your system!!'
}

const front = new FrontendDeveloper()
const back = new BackendDeveloper()
const enemy = new Enemy()

front.access(front.name)
back.access(back.name)
enemy.access(enemy.name)