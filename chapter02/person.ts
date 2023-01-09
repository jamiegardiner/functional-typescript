export class Person {
    public name: string
    public surname: string
    public age: number

    public constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    public greet(): string {
        let message = `Hi! my name is ${this.name} ${this.surname}\n`
        message += `I'm ${this.age}`;
        return message;
    }
}