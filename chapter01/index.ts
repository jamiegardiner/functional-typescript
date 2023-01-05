import { avg, lazyFind, mapProp, sum } from "./functions";
import { ImmutableList } from "./ImmutableList";

interface Result {
    id: number;
    result: number;
}

const results: Result[] = [
    { id: 1, result: 64 },
    { id: 2, result: 87 },
    { id: 3, result: 89 }
]

const result = avg(mapProp("result", results));
console.info(result)

interface Hero {
    name: string;
    powers: string[];
}
const heroes = [
    {
        name: "Spiderman",
        powers: [
            "wall-crawling",
            "enhanced strength",
            "enhanced speed",
            "spider-Sense"
        ]
    },
    {
        name: "Superman",
        powers: [
            "flight",
            "superhuman strength",
            "x-ray vision",
            "super-speed"
        ]
    }
];

const hulk = {
    name: "Hulk",
    powers: [
        "superhuman strength",
        "superhuman speed",
        "superhuman Stamina",
        "superhuman durability"
    ]
};

const myList = new ImmutableList<Hero>(heroes);
const myList2 = myList.add(hulk);
const result1 = myList.find((h => h.name === "Hulk"));
const result2 = myList2.find((h => h.name === "Hulk"));
const areEqual = myList2 === myList;
const myList3 = myList2.remove(hulk);
console.log(result1); // undefined
console.log(result2); // { name: "Hulk", powers: Array(4) }
console.log(areEqual); // false
console.log(myList2);
console.log(myList3);

console.log("A");
const spiderman = lazyFind(heroes, (h) => h.name === "Spiderman");
console.log("B");
console.log(spiderman.name);
console.log("C");