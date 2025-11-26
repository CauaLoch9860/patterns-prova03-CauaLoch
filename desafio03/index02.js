
class Shape {
    area() {
      throw new Error("Você deve implementar o método area()");
    }
  }
  

  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class AreaCalculator {
    totalArea(shapes) {
      return shapes.reduce((sum, shape) => sum + shape.area(), 0);
    }
  }
  

  const shapes = [
    new Rectangle(3, 4),
    new Circle(2)
  ];
  
  const calculator = new AreaCalculator();
  console.log("Área total:", calculator.totalArea(shapes));

  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    area() {
      return 0.5 * this.base * this.height;
    }
  }
  
  shapes.push(new Triangle(4, 5));
  
  console.log("Área total com triângulo:", calculator.totalArea(shapes));
  