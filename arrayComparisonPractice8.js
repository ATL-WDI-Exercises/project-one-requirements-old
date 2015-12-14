function test (){

  [1,2,3].every(function(x) { return x <5; }  ) ;

  if (test = true) {
    console.log("true");
  } else {
    console.log("false");
  }
}
// => true: all elts are < 5