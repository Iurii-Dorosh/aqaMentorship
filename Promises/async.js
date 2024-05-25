// TASK
// Write a function that gets some (1, 3, 10, etc.) number of arguments (each argument is a function which returns some promise)
// Calls this promises in parallel
// Returns array of promises results (in the same order as order of arguments)

function timeout(time, text) {
    return new Promise((resolve) => setTimeout(() => resolve(text), time));
   }
   
   function first() {
    return timeout(100, 'first');
   }
   
   function second() {
    return timeout(200, 'second');
   }
   
   function third() {
    return timeout(300, 'third');
   }
   
   // your code here (modify FROM NEXT LINE):
   async function callInParallel(...args) {
    let promise = args.map((f) => f());
    console.log(promise);
    return Promise.all(promise);
   }
   // TO PREVIOUS LINE
   
   (async () => {
    const startTime = Date.now();
    console.log(await callInParallel(third, first, second)); // ['third', 'first', 'second']
    console.log(Date.now() - startTime < 400); // true
   })();



   