// function sumar(a,b){
//   return a+b;
// }

// let sumar = (a, b) => {
//   return a + b;
// }

let sumar = (a, b) =>  a + b;

let greetings = () => 'Hello World';

let greetings2 = name => `Hello World ${name}`;

let greetings3 = name => {
  return `Hello World ${name}`;
}

console.log(sumar(123,567));
console.log(greetings());
console.log(greetings2('Renato'));
console.log(greetings2('Tito'));
