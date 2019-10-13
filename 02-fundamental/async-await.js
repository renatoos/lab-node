let getName = async () => {
  return new Promise( (resolve, reject) => {
    setTimeout ( () => {
      resolve('Renato');
    }, 3000);
  });
}

let greeting = async () => {
  let name = await getName();
  return `Hello ${name}`;
}

greeting().then( msg => {
    console.log(msg);
}).catch(err => {
    console.log('Error Async: ', err);
})
