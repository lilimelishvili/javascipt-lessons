

function getFastLaptop(laptop1, laptop2)
{
    if (laptop1.cpu > laptop2.cpu) {
        console.log(laptop1);
     }
     else{
        console.log(laptop2);
     }
}
 
let laptop1 = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',

    getConfig: function(){
       
        console.log(laptop1.cpu);
    }
}
let laptop2 = {
    cpu: 'i7',
    ram: 17,
    brand: 'Apple',

    compare: function(laptop1)
    {
        if (this.cpu > other.cpu) 
            console.log(this);
         
         else
            console.log(other);
         
    },

    getConfig: function(){
       
        console.log(this.cpu);
    }
}



getFastLaptop(laptop1, laptop2);

laptop1.compare(laptop2)
