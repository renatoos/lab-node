// setTimeout( function(){
//   console.log('Hello World');
// }, 3000);

// setTimeout( () => console.log('Hello World'), 3000);

let getUserById = ( id, callback ) => {
  let user = {
    name: 'Renato',
    id
  }

  if(id === 20){
    callback(`User ${id} not found` );
  }else{
      callback(null, user);
  }
}

getUserById(20, (err, user) => {

  if(err){
    return console.log(err);
  }

  console.log('User from database', user);
});
