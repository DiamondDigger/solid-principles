//Open close principle
class Shape {
    area() {
        throw new Error('area method has not been realized')
    }
}

class Square extends Shape{
    constructor(size) {
        super()
        this.size = size
    }

    area() {
        return this.size ** 2
    }
}

class Circle extends Shape{
    constructor(radius) {
        super()
        this.radius = radius
    }

    area() {
        return (this.radius ** 2) * Math.PI
    }
}

class Rectangle extends Shape{
    constructor(height, width) {
        super()
        this.height = height
        this.width = width
    }

    area() {
        return this.height * this.width
    }
}

class Triangle extends Shape{
    constructor(a, b) {
        super()
        this.a = a
        this.b = b
    }

    area() {
        return (this.a * this.b) / 2
    }
}

class Calculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area()
            return acc
        }, 0)
    }
}

const calculator = new Calculator([
    new Square(10),
    new Circle(1),
    new Rectangle(20, 5),
    new Triangle(50, 3)
])

console.log(calculator.sum())