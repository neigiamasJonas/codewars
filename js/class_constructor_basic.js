// CLASS / CONSTRUCTOR / GET following by METHOD (jei reikia)

// PILNAS / ILGAS //
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info() {
        return this.getInfo()
    }
    getInfo() {
        return `${this.name}s age is ${this.age}`;
    }
}

const john = new Person('John', 34);
console.log(john.info);

// Biski Trumpesnis be METHOD //

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info() {
        return `${this.name}s age is ${this.age}`;
    }
}
const john2 = new Person2('John', 34);
console.log(john2.info);

// //////////////////////////

  class Skaiciuoju {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    get info() {
        return this.suma()
    }
    suma(){
        return this.a + this.b
    }
  }

  const atsakymas = new Skaiciuoju(21, 1)
  console.log(atsakymas.info);
