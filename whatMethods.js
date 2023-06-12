
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
    brand: 'lenovo',

    getConfig: function(){
       
        console.log(this.cpu);
    }
}
laptop2.getConfig();

//'this'  is an object
//add