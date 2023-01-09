const either = <T1>(f: (x: T1) => boolean, g: (x: T1) => boolean) => (x: T1) => f(x) || g(x);
const both = <T1>(f: (x: T1) => boolean, g: (x: T1) => boolean) => (x: T1) => f(x) && g(x);

interface Person {
    age: number;
    birthCountry: string;
    naturalizationDate?: Date;
}

const OUR_COUNTRY = "USA";
const wasBornInCountry = (person: Person) => person.birthCountry === OUR_COUNTRY;
const wasNaturalized = (person: Person) => Boolean(person.naturalizationDate);
const isOver18 = (person: Person) => person.age >= 18;

const isCitizen = either(wasBornInCountry, wasNaturalized);
const isEligibleToVote = both(isOver18, isCitizen);

const person1: Person = {
    age: 19,
    birthCountry: "USA",
    naturalizationDate: new Date()
}

const person2: Person = {
    age: 19,
    birthCountry: "Canada"
}

const person1IsCitizen = isCitizen(person1);
const person2IsCitizen = isCitizen(person2);

console.log(person1IsCitizen); // true
console.log(person2IsCitizen); // false