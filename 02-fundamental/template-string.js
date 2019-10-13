let name = 'Batman';
let real = 'Jose';

console.log(name + " is " + real);
console.log(`${name} is ${real}`);

let fullName = name + ' ' + real;
let templateName = `${name} ${real}`;

console.log(fullName === templateName);

function getName(){
  return `${name} is ${real}`;
}

console.log(`The name de: ${ getName() } `);
