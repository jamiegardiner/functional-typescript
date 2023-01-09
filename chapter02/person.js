"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    Person.prototype.greet = function () {
        var message = "Hi! my name is ".concat(this.name, " ").concat(this.surname, "\n");
        message += "I'm ".concat(this.age);
        return message;
    };
    return Person;
}());
exports.Person = Person;
