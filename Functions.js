
let user = 'Lily'; // "user" is global variable 
function greet(u){

    let num = 5;  // "num" is local variable
    console.log(user);
    return `Hello ${u}!!`;
}

console.log("num value is " + num);
let str = greet(user); // 

console.log(str);

/* -------------------------------------------------------------------------- */

function greet2(a, b) {
   return `price = ${a * b} ლარი.`;
}

  
 console.log(greet2(5, 10));
/* -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------*/


function add (num1, num2, num3)
{
    console.log(num1, num2, num3);
  return num1 + num2 + num3;

}
 let result = add(5,6,9)
console.log(result);
