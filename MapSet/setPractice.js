const set = new Set();
set.add(1)
   .add(2)
   .add(1)
   .add(true)

   // console.log(set);

   for (let key of set) {
    //console.log(key);
   }

//set.forEach(value => console.log(value))


function unique(arr) {
    const set = new Set()
    arr.forEach(data => set.add(data));
    return set;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O