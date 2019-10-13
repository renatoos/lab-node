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

let getSalary = (user, callback) => {
  let salaryDB = salarys.find( salary => salary.id === user.id );

    if(!salaryDB){
      callback(`Salary not found for ${user.name}`);
    }else{
      let message ={
        user: user.name,
        salary: salaryDB.value
      }
      callback(null, message);
    }
}


let getUser = (id, callback) => {

  let userDB = users.find ( user => user.id === id);

  if(!userDB){
    callback(`User ${id} not found`);
  }else{
    callback(null, userDB);
  }

}



getUser(2, (err, user) => {
  if(err){
    return console.log(err)
    }

    getSalary(user, (err, salary) => {
      if(err){
        return console.log(err);
      }
      console.log(salary);
    });

});
