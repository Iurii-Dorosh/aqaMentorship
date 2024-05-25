const promise1 = new Promise((resolve, reject) => {
    resolve('Promise 1')
})

const promise2 = new Promise((resolve, reject) => {
    resolve('Promise 2')
})

const promise3 = new Promise((resolve, reject) => {
    resolve('Promise 3')
})

const promise0 = new Promise((resolve, reject) => {
    reject('Error ')
})

Promise.all([
    promise1,
    promise2,
    promise3
]).then(message => console.log(message))
.catch(error => console.log(error))

Promise.allSettled([
    promise1,
    promise2,
    promise0
]).then(message => console.log(message))
.catch(error => console.log(error))

Promise.race([
    promise0,
    promise2,
    promise0
]).then(message => console.log(message))
.catch(error => console.log(error))

Promise.any([
    promise0,
    promise2,
    promise0
]).then(message => console.log(message))


fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(resp => resp.json())
    .then(data => { console.log(data); return data})
    .then(dataCompleted => {
        dataCompleted.completed = true;
        console.log(dataCompleted)
        return dataCompleted;
    }).catch((error) => console.log(error))


console.log(1)
setTimeout(() => console.log(2), 0)
console.log(3)

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello World"), 2000)
})

promise
.then(data => { console.log(data); return (`${data} Modified`)})
.then(data2 => console.log(data2))


const promiseP = new Promise((resolve) => {
    setTimeout(() => resolve(console.log(1)), 2000)
})

console.log(promise1);