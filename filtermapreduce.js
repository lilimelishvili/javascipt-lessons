let nums = [42,51,24,98,65,12];
let result = nums.filter(n => n%2===0)
//console.log(nums.filter(n => n%2===0));
  .map(n => n*2 )
  .reduce((a,b) => a+b);

  console.log(result);
