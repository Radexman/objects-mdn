// const person = {
//     name: {
//         first: 'Bob',
//         last: 'Smith'
//     },
//     age: 32,
//     bio() {
//         console.log(`${this.name.first} ${this.name.last} is ${this.age} years old`);
//     },
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     }
// };

// person.age = 42;
// person['name']['first'] = 'John';
// person['eyes'] = 'hazel';
// person.ferwell = function() {
//     console.log('Bye everybody');
// };

// const myDataName = 'height';
// const myDataValue = '1.75m';
// person[myDataName] = myDataName;

// const person1 = {
//     name: 'Chris',
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}`);
//     }
// }

// const person2 = {
//     name: 'Bob',
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}`);
//     }
// }

// person1.introduceSelf();
// person2.introduceSelf();

// console.log(person['myDataValue'])
// console.log(person.age);
// console.log(person['name']['first']);
// console.log(person['eyes']);
// person.ferwell();

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}`);
    };
}

const salva = new Person('Salva');
console.log(salva.name);
salva.introduceSelf();

const band = {
    name: 'Korn',
    nationality: 'USA',
    genere: 'Nu metal',
    members: 4,
    formed: 1994,
    split: false,
    albums: [
        {name: 'Korn', released: 1994},
        {name: 'Life is Peachy', released: 1996},
        {name: 'Follow the Leader', released: 1999},
        {name: 'Issues', released: 1999},
        {name: 'Untouchables', released: 2002},
        {name: 'Take a Look in the Mirror', released: 2003},
        {name: 'See You on the Other Side', released: 2005},
        {name: 'MTV Unplugged', released: 2007},
        {name: 'Untitled', released: 2007},
        {name: 'Remember Who You Are', released: 2010},
        {name: 'The Path of Totality', released: 2011},
        {name: 'The Paradigm Shifft', released: 2013},
        {name: 'The Serenity of Suffering', released: 2016},
        {name: 'The Nothing', released: 2019},
        {name: 'Requiem', released: 2022},
        {name: 'Requiem Mass', released: 2023}
    ]
}

const bandInfo = `This band's name is ${band.name} and they are from ${band.nationality}, they are active since ${band.formed}. ${band.name} is playing ${band.genere} and their albums are ${band.albums[1].name} realeased ${band.albums[1].released}.`
console.log(bandInfo);

function Cat(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function() {
      console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
  }
  
  const cat = new Cat('Bertie', 'Cymric', 'white');
  const cat2 = new Cat('Elfie', 'Aphrodite Giant', 'ginger');
  
  cat.greeting();
  cat2.greeting();