console.log('Start exec');

setTimeout (  function(){
  console.log('First timeout1');
}, 3000 );


setTimeout (  function(){
  console.log('Second timeout');
}, 0 );

setTimeout (  function(){
  console.log('Third timeout');
}, 0 );

console.log('Finish');
