export const add = (a: number, b: number) => a + b;
export const divide = (a: number, b: number) => a / b;
export const sum = (...args: number[]) => args.reduce(add, 0)
export const mapProp = <T>(k: keyof T, arr: T[]) => arr.map(a => a[k])
export const avg = (arr: number[]) => divide(sum(...arr), arr.length);

export function lazyFind<T>(arr: T[], filter: (i: T) => boolean): T {
    let hero: T | null = null;
    const proxy = new Proxy(
        {},
        {
            get: (obj, prop) => {
                console.log("Filtering...");
                if (!hero) {
                    hero = arr.find(filter) || null;
                }
                return hero ? (hero as any)[prop] : null;
            }
        }
    );
    return proxy as any;
}