class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor() {
    super('cat');
  }

  purr() {
    console.log('purr');
  }
}

class Dog extends Animal {
  constructor() {
    super('dog');
  }

  bark() {
    console.log('woof');
  }
}