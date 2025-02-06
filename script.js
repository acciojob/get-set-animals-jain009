// Define the Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Define the Cat class inheriting from Animal
class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    console.log("purr");
  }
}

// Define the Dog class inheriting from Animal
class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log("woof");
  }
}

// // Example usage
// const myCat = new Cat("Siamese");
// myCat.makeSound(); // Expected Output: The Siamese makes a sound
// myCat.purr();      // Expected Output: purr

// const myDog = new Dog("Golden Retriever");
// myDog.makeSound(); // Expected Output: The Golden Retriever makes a sound
// myDog.bark();      // Expected Output: woof
