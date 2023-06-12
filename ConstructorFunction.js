function Alien(name, tech) {
    this.name = name;
    this.tech = tech;

    this.work = function(){
        console.log("Solving bugs from 12 hrs");
    }
    
}
let alien1 = new Alien('Lily', 'JS');
let alien2 = new Alien('Niko', 'Node');


alien1.tech = 'Blockchain';

console.log(alien1);

alien1.work();

