
const a = "leave";
// console.log(a);

class Person {
  constructor(name, age) {
    this.Name = name;
    this.Age = age;

    // console.log(`My name is ${this.Name} and I am ${this.Age} years old`);
  }
  
};

const person1 = new Person("Adeola", 35);

// console.log(person1.Name);


class Car {
  constructor(name, index, contestantId, image) {
    this.name = name;
    this.index = index;
    this.contestantId = contestantId;
    this.image = image;
  }

};

const car1 = new Car("Toyota", +1, "001", "images/contestant1.jpeg");

console.log(car1);

const car2 = new Car("Hunda", +1, "002", "images/contestant2.jpeg");
console.log(car2);

console.log(Car);

console.log(app);