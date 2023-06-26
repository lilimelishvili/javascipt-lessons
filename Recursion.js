let num = 1 

function show(){
    console.log("Hi", num);
    num++;
    if(num<=11299)
     show();
}


show();