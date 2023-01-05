export class ImmutableList<T> {
    private readonly _list: ReadonlyArray<T>;
    private _deepCloneItem(item: T) {
        return JSON.parse(JSON.stringify(item)) as T;
    }

    constructor(initialValue?: Array<T>) {
        this._list = initialValue || [];
    }

    public add(newItem: T) {
        const clone = this._list.map(i => this._deepCloneItem(i));
        const newList = [...clone, newItem];
        const newInstance = new ImmutableList<T>(newList);
        return newInstance;
    }

    public remove(item: T, areEqual: (a: T, b: T) => boolean = (a, b) => a === b) {
        const newList = this._list.filter(i => !areEqual(item, i))
            .map(i => this._deepCloneItem(i));

        const newInstance = new ImmutableList<T>(newList);
        return newInstance;
    }

    public get(index: number): T | undefined {
        const item = this._list[index];
        return item ? this._deepCloneItem(item) : undefined
    }

    public find(filter: (item: T) => boolean){
        const item = this._list.find(filter);
        return item ? this._deepCloneItem(item) : undefined
    }
}