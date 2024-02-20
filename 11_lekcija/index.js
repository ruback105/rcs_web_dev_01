class Animal {
  constructor(species, name, age, color) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.color = color;
  }

  walk() {
    console.log("I am walking", this);
  }
}

class Dog extends Animal {
  constructor(species, name, age, color) {
    super(species, name, age, color);
  }

  bark() {
    console.log(`Bark my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Cat extends Animal {
  constructor(species, name, age, color) {
    super(species, name, age, color);
  }

  meow() {
    console.log(`Meow my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const shibaInu = new Dog("shiba inu", "Hachiko", 0.5, "brown");
shibaInu.bark();

const bigls = new Dog("bigls", "Test", 0.25, "black");
bigls.bark();

const meinKun = new Cat("mein kun", "Rex", 0.25, "brown");

// const meinKun = {
//   species: "mein kun",
//   name: "Rex",
//   age: 0.25,
//   color: "brown",
//   walk: () => {
//     console.log("I am walking", this);
//   },
//   walk2: function () {
//     console.log("I am walking 2", this);
//   },
//   mew: function () {
//     console.log(`Mew my name is ${this.name}`);
//   },
// };

// console.log("window", this);

// // this = window
// shibaInu.walk();
// // this = window
// shibaInu.walk2();
// shibaInu.bark();
