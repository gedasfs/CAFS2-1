class Animal {
    constructor(name, sound = null) {
        this.name = name;
        this.sound = sound;

        this.created = Date.now();
    }

    getSound() {
        return this.sound;
    }
}

class Rabbit extends Animal {

}

class Cat extends Animal {
    constructor(name) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
        super(name, 'Miau');
    }
}

class Dog extends Animal {
    constructor(name) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
        super(name, 'Au au au');
    }
}

let animals = [
    new Rabbit('White Rabbit', 'tttttt'),
    new Cat('Pukis'),
    new Dog('Reksas'),
];

for (let a of animals) {
    console.log(a.name, a.getSound());
}