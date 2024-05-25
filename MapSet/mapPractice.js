const personObject = {
    name: String,
    age: Number,
    isAdmin: Boolean
}

const personDesc = {
    name: 'Iurii',
    age: 20,
    isAdmin: true
}

const mapExpr = new Map([
    [personDesc, 1],
    [personObject, 2],
    [true, 3],
]);

let mapFromObject = new Map(Object.entries(personDesc));
console.log(mapFromObject.get('name'));

// for ... of

for ( let keys of mapExpr.keys()){
    // console.log(keys)
}
for ( let val of mapExpr.values()){
    // console.log(val)
}
for ( let entries of mapExpr.entries()){
    //console.log(entries)
}

//console.log(mapExpr);



// --------------------

const map = new Map();
map.set(personObject, personDesc)
   .set('personObject', 'personDesc');

let copyMap = map.get(personObject);

map.forEach((value, key, map) => {
    //console.log(`${key}: ${value}`)
})

// console.log(map.get('personObject'));
// console.log(map.size);

//console.log(map.has(personObject));
//console.log(map.has('NotExsist'));
//console.log(copyMap);

const newObj = {
    [personObject]: [personDesc]
}
//console.log(newObj);
