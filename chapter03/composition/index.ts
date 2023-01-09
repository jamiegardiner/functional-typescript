const trim = (str: string) => str.trim();
const capitalize = (str: string) => str.toUpperCase();

const trimAndCapitalize = (str: string) => capitalize(trim(str));

const res = trimAndCapitalize('  hello world  '); // HELLO WORLD

console.log(res);

// const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));
const compose = <T1, T2, T3>(f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x));

const composeMany = <T>(...fns: Array<(x: T) => T>) => (x: T) => fns.reduce((acc, fn) => fn(acc), x);

const trimAndCapitalize2 = composeMany(capitalize, trim);

console.log(trimAndCapitalize2('  hello world  ')); // HELLO WORLD