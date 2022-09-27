// let arr = [20,50,45];
// let b = arr.map(test)
// console.log(b)
// function test(x){
//     return x * 10;
// }

// Array of objects

let arr = [
    {fname : "yahoo" , lname : "baba"},
    {fname : "juju" , lname : "behera"},
    {fname : "rahul" , lname : "kumar"}
]

let b = arr.map(test)
console.log(b)

function test(x){
    return x.fname+" "+x.lname;
}