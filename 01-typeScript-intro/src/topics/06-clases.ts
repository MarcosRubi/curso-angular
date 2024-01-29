export class Person{
    // public name: string
    // public country: string

    constructor(
        public name: string, 
        public country: string = 'No country'
        ){
        this.name = name
        this.country = country
    }
}

export class Hero{
    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person:Person
    ){
        this.person = new Person(realName)
    }
}
const person = new Person('Tony a', 'USA')
const ironman = new Hero('Ironman', 45, 'Tony', person)
console.log(ironman);