
let map = new Map

map.set("Lily", "Java" );
map.set("Kiran", "Android" );
map.set("Chirag", "ML" );
map.set("Lily", "Blockchain")

//console.log(map.has("Chirag"));

map.forEach((k,v) => {
    console.log(k, ":", v);
} )