
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

const animal = new Animal();
animal.name = "dogi";
animal.legCount = 4;
console.log(animal.describe());


