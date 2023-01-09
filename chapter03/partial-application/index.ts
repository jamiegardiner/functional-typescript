const trim = (str: string) => str.trim();
const capitalize = (str: string) => str.toUpperCase();
const replace = (f: string, r: string) => (s: string) => s.split(f).join(r);

const compose = <T>(...fns: Array<(x: T) => T>) => (x: T) => fns.reduce((acc, fn) => fn(acc), x);


const trimAndCapitalizeAndReplace = compose(trim, capitalize, replace("/", "-"));

const res = trimAndCapitalizeAndReplace("  /  hello world  /  ");

console.log(res);