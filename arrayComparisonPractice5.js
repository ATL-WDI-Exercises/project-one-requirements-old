function isBigEnough(value) {
  return value = "10" ;
}
var filtered = [12, 5,10, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
console.log(filtered);