//Open close principle
class Square {
    constructor(size){
        this.type = 'square'
        this.size = size
    }
}

class Circle{
    constructor(radius){
        this.type = 'circle'
        this.radius = radius
    }
}

class Rectangle{
    constructor(height, width){
        this.type = 'rectangle'
        this.height = height
        this.width = width
    }
}

class Calculator{
    constructor(shapes = []){
        this.shapes = shapes
    }

    sum(){
        return this.shapes.reduce((acc, shape)=>{
            switch (shape.type) {
                case 'square':
                    acc += shape.size ** 2
                    break
                case 'circle':
                    acc += (shape.radius ** 2) * Math.PI
                    break
                case 'rectangle':
                    acc += shape.height * shape.width
                    break
            }
            return acc
        },0)
    }
}

const calculator = new Calculator([
    new Square(10),
    new Circle(1),
    new Rectangle(20,5)
])

console.log(calculator.sum())