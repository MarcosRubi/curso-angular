function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T
){
    return class extends constructor{
        newProperty = 'New property';
        hello = "Hello"
    }
}
@classDecorator
export class SuperClass{
    public myProperty: string = 'abc123'

    print(){
        console.log('Hola');
    }
}
console.log(SuperClass)

const myClass= new SuperClass()
console.log(myClass)