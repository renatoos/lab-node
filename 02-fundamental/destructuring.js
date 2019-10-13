let deadpool = {
  name: 'Wade',
  surname: 'Winston',
  power: 'Regenerate',
  getName: function(){
    return `${this.name} ${this.surname} - Power: ${this.power}`
  }
};

// console.log(deadpool.getName());

let {name, surname, power} = deadpool;
let {name: firstName, surname: lastName, power: bigPower} = deadpool;
console.log(`${name} ${surname} ${power}`);
console.log(`${firstName} ${lastName} ${bigPower}`);
