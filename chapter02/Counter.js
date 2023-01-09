var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.prototype.increment = function () {
        this._changeBy(1);
    };
    Counter.prototype.decrement = function () {
        this._changeBy(-1);
    };
    Counter.prototype.value = function () {
        return Counter._COUNTER;
    };
    Counter.prototype._changeBy = function (val) {
        Counter._COUNTER += val;
    };
    Counter._COUNTER = 0;
    return Counter;
}());
