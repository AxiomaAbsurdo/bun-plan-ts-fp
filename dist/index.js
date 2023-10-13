"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHelloWorld = void 0;
function sayHelloWorld(world) {
    return console.log(`Hello ${world}`);
}
exports.sayHelloWorld = sayHelloWorld;
const hi = sayHelloWorld("Maty");
function meow(cat) {
    return "Meow! I am a " + cat.color + " " + cat.breed + " cat.";
}
const myCat = {
    color: "Verde",
    breed: "Pepino",
};
console.log(meow(myCat));
//# sourceMappingURL=index.js.map