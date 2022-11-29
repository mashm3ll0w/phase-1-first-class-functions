function receivesAFunction(cb){
  return cb()
}

function answered (){
  return `Named function`;
}

function returnsANamedFunction(){
  // return function answered(){
  //   return;
  // }
  return answered;
}


function returnsAnAnonymousFunction(){
  return function(){
    return;
  }
}
