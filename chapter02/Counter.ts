var Counter = (function () {
    // closure context

    let _COUNTER = 0;

    function changeBy(val: number) {
        _COUNTER += val;
    }

    interface Counter {
        increment(): void;
        decrement(): void;
        value: () => number;
    }

    interface CounterConstructor {
        new(): Counter;
    }

    function Counter() { };

    Counter.prototype.increment = function () {
        changeBy(1);
    }

    Counter.prototype.decrement = function () {
        changeBy(-1);
    }

    Counter.prototype.value = function () {
        return _COUNTER;
    }

    return (Counter as unknown as CounterConstructor)
})();

let counter1 = new Counter();
let counter2 = new Counter();

console.log(counter1.value()); // 0
console.log(counter2.value()); // 0
counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2
console.log(counter2.value()); // 2 (expected 0)
counter1.decrement();
console.log(counter1.value()); // 1
console.log(counter2.value()); // 1 (expected 0)