class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is: ${this.name}`);
  }

  sayAge() {
    console.log(`I'm ${this.age} years old`);
  }
}

const shanshe = new Human("Shanshe", 28);

shanshe.sayName();
shanshe.sayAge();

export const a = 1;
export const b = 5;

const c = a + b;
console.log(c);
