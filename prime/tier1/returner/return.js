function logger() {
  console.log('in logger');
}

function returner(){

  return true;
}

logger();
returner();
console.log('runner returner', returner());

console.log('running returner')
