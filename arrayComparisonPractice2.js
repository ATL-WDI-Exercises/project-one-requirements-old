var a1 = [1,2,3]
var a2 = [3,1,2]

var a1String = a1.toString() // "1,2,3"
var a2String = a2.toString() // "1,2,3"

a1String == a2String // true

if (a1String == a2String) {
  console.log(true);
} else {
  console.log(false);
}