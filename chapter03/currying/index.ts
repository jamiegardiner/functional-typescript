function curry2<T1, T2, T3>(fn: (a: T1, b: T2) => T3): (a: T1) => (b: T2) => T3 {
    return (a: T1) => (b: T2) => fn(a, b);
}

const compose = <T>(...fns: Array<(x: T) => T>) => (x: T) => fns.reduce((acc, fn) => fn(acc), x);


function add(a: number, b: number) {
    return a + b;
}

function multiply(a: number, b: number) {
    return a * b;
}

const curriedAdd = curry2(add);

const add5 = curriedAdd(5);
const addResult = add5(5);
console.log(addResult); // 10


const curriedMultiply = curry2(multiply);

const multiplyBy5 = curriedMultiply(5);
const multiplyResult = multiplyBy5(5);
console.log(multiplyResult); // 25

const composedMultiplyAndAdd = compose(multiplyBy5, add5);
const composedResult = composedMultiplyAndAdd(5);
console.log(composedResult); // 30


function curry3<T1, T2, T3, T4>(fn: (a: T1, b: T2, c: T3) => T4): (a: T1) => (b: T2) => (c: T3) => T4 {
    return (a: T1) => (b: T2) => (c: T3) => fn(a, b, c);
}

const trim = (str: string) => str.trim();
const capitalize = (str: string) => str.toUpperCase();
const replace = (f: string, r: string, s: string) => s.split(f).join(r);

const curriedReplace = curry3(replace);

const trimCapitalizeAndReplace = compose(trim, capitalize, curriedReplace("/")("-"));

const result = trimCapitalizeAndReplace(" // hello world // ");
console.log(result);

