export function sayHelloWorld(world: string) {
  return console.log(`Hello ${world}`);
}
const hi = sayHelloWorld("Maty");

type Cat = {
  color: string;
  breed: string;
};

function meow(cat: Cat): string {
  return "Meow! I am a " + cat.color + " " + cat.breed + " cat.";
}

const myCat: Cat = {
  color: "Verde",
  breed: "Pepino",
};

console.log(meow(myCat));
