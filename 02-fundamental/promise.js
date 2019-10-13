let users = [
  {id: 1,
  name: 'Renato'
},{
  id: 2,
  name: 'Jose'
},{
  id: 3,
  name: 'Marco'
}];

let salarys = [{
  id: 1,
  value: 10000
},{
  id:2,
  value: 35000
}];


let getUser = (id) => {

  return new Promise ( (resolve, reject) => {
      let userDB = users.find ( user => user.id === id);
      if(!userDB){
        reject(`User ${id} not found`);
      }else{
        resolve(userDB);
      }
  });
}

let getSalary = (user) => {
  return new Promise( (resolve, reject) => {
    let salaryDB = salarys.find (salary => salary.id === user.id);

    if (!salaryDB){
      reject(`Salary for ${user.name} not found`);
    }else{
      resolve(salaryDB);
    }
  })
};

// getSalary({id: 2, name: 'Renato'}).then(salary => {
//   console.log(salary);
// },(err) => {
//   console.log(err);
// });

getUser(3).then( user => {
  getSalary(user).then( salary =>{
    console.log(`The salary for  ${user.name} is ${salary.value}$`)
  }, (err) => console.log(err))
}, (err) => console.log(err));

//
// getUser(22).then( user => {
//   console.log(user);
// }, (err) => {
//   console.log(err);
// });
