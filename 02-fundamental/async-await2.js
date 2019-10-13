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


let getUser = async (id) => {

      let userDB = users.find ( user => user.id === id);

      if(!userDB){
        throw new Error(`User ${id} not found`);
      }else{
        return(userDB);
      }
}

let getSalary = (user) => {
    let salaryDB = salarys.find (salary => salary.id === user.id);

    if (!salaryDB){
      throw new Error(`Salary for ${user.name} not found`);
    }else{
      return salaryDB;
    }
};


let getInfo = async (id) => {
  let user = await getUser(id);
  let salary = await getSalary(user);

  // console.log(user);
  // console.log(salary);

  return `${user.name} have a salary ${salary.value}$`;
}


getInfo(3)
  .then(msg =>  console.log(msg))
  .catch(err => console.log(err.message));
