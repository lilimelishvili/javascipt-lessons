


function fact(n){


    if(n==0)
         return 1;
    else
         return n*fact(n-1);

}

let num = 171
let result = fact(num);
console.log(result);