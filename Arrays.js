//arrays

// var ary = [10,20,30,40,60];
// console.log(ary)

// var ary = [10,20,30,40,60];
// console.log(ary[5])

// var ary = [10,20,30,40,60];
// for(let a=0;a<=4;a++){
//     console.log(ary[a])
// }

// var ary = [10,20,30,40,60];
// var sum=0;
// for(let a=0;a<=4;a++){
//     console.log(ary[a])
//     sum += ary[a]
// }
// console.log(sum)

// var ary = [10,"juju",true,null,60];

// for(let a=0;a<=4;a++){
//     console.log(ary[a])
// }

// arrays2

// var ary = new Array();
// ary[0]=10;
// ary[1]="juju";
// ary[3]=true;
// for(let a=0;a<=5;a++){
//     console.log(ary[a]);
// }

// var ary = new Array(3);
// for(let g=0;g<=3;g++){
//     arr[g]=prompt("enter the value :")
// }
// for(let a=0;a<=3;a++){
//     console.log(ary[a]);
// }

// multidimensional arrays

// var ary = [["harry",18,"male","bcom"],
//            ["sunny",19,"male","bca"],
//            ["sarah",18,"male","bca"],
//            ["tom",17,"male","ba"]
//           ];
//           for(let a=0;a<4;a++){
//             for(let b=0;b<4;b++){
//                 console.log(ary[a][b]);
//             }

//           }   

// var ary = [["harry",18,"male","bcom"],
//            ["sunny",19,"male","bca"],
//            ["sarah",18,"male","bca"],
//            ["tom",17,"male","ba"]
//           ];
//           console.log(ary[2][3])
//           console.log(ary.length)

// var ary = [["harry",18,"male","bcom"],
//            ["sunny",19,"male","bca"],
//            ["sarah",18,"male","bca"],
//            ["sunny",19,"male","bca"],
//            ["tom",17,"male","ba"]
//           ];
//           for(let a=0;a<ary.length;a++){
//             for(let b=0;b<ary[a].length;b++){
//                 console.log(ary[a][b]);
//             }

//           }   

// modify array element

// var ary = ["harry",18,"male","bcom"];
// console.log(ary)
// ary[0]="juju"
// console.log(ary)
// delete ary[1]
// console.log(ary)
// console.log(ary[1])

// array sort reverse

// var a = ["sanjay","aman","rehman","karan"];
// console.log(a)
// a.sort();
// console.log(a)
// a.reverse();
// console.log(a)

// array pop() & push()

// var a = ["sanjay","aman","rehman","karan"];
// a.pop()
// console.log(a)
// a.push("rahul")
// console.log(a)

// shift & unshift

// let a = ["sanjay","aman","rehman","karan"];
// a.shift()
// console.log(a)
// a.unshift("rahul")
// console.log(a)

// concat()

// let a = ["sanjay","aman","rehman","karan"];
// let b = a.concat("rahul","karan")
// console.log(b)

// let a = ["sanjay","aman","rehman","karan"];
// let b = ["rahul","karan"]
// let c = a.concat(b)
// console.log(c)

// let a = ["sanjay","aman","rehman","karan"];
// let b = ["rahul","karan"]
// let c = ["neha","mahima"]
// let d = a.concat(b,c)
// console.log(d)

// join()

// let a = ["sanjay","aman","rehman","karan"];
// let b = ["rahul","karan"]
// let c = a.concat(b);
// console.log(c)
// let d = c.join("/ ")
// console.log(d)

// slice()

// let a = ["sanjay","aman","rehman","karan"];
// let b = a.slice(1,3)
// console.log(b)

// let a = ["sanjay", "aman", "rehman", "karan"];
// let b = a.slice(2)
// console.log(b)

// let a = ["sanjay","aman","rehman","karan"];
// let b = a.slice(-2)
// console.log(b)

// let a = ["sanjay","aman","rehman","karan"];
// let b = a.slice(-4,-2)
// console.log(b)

// Splice()

// let a = ["sanjay","aman","rehman","karan"];
// console.log(a)
// a.splice(2,0,"neha","karan")
// console.log(a)

// let a = ["sanjay","aman","rehman","karan"];
// console.log(a)
// a.splice(2,2,"neha","karan")
// console.log(a)

// let a = ["sanjay","aman","rehman","karan"];
// console.log(a)
// a.splice(-2,2,"neha","karan")
// console.log(a)

//let a = ["sanjay","aman","rehman","karan"];
// console.log(a)
// a.splice(2,2)
// console.log(a)

// isArray()

// let a = ["sanjay","aman","rehman","karan"];
// let a =20;
// let a ="hello";
// let b = Array.isArray(a)
// console.log(b)

// let a = ["sanjay","aman","rehman","karan"];
// let a =20;
// let a ="hello";
// if(Array.isArray(a)){
//     console.log("it is an array")
// }else{
//     console.log("it is not an array")
// }

// IndexOf

// let a = ["sanjay","aman","rehman","karan"];
// let b = a.indexOf("rehman");
// console.log(b)

//
// let a = ["sanjay","aman","rehman","karan"];
// let b = a.indexOf("rehman");
// console.log(b)

// lastIndexOf()

// let a = ["sanjay","aman","rehman","karan"];
// let b = a.lastIndexOf("aman")
// console.log(b)

// let a = ["sanjay","aman","rehman","karan"];
// let b = a.lastIndexOf("aman",2)
// console.log(b)

// includes()

// let a = ["sanjay","aman","rehman","karan"];
// let b = a.includes("karan")
// console.log(b)

// some()

// let ages = [10,13,15,20]
// let b = ages.some(checkAdult)
// console.log(b)
// function checkAdult(age){
//     return age>=18

// }

// every()

// let ages = [20,23,25,20]
// let b = ages.every(checkValue)
// console.log(b)
// function checkValue(age){
//      return age>=18
// }

// find()

// let ages = [20,19,28,23]
// let b = ages.find(checkAdult)
// console.log(b)
// function checkAdult(age){
//     return age>=18
// }

// findIndex()

// let ages = [20,19,28,23]
// let b = ages.findIndex(checkAdult)
// console.log(b)
// function checkAdult(age){
//    return age>=21
// }

// filter()

// let ages = [20,19,28,23]
// let b = ages.filter(checkAdult)
// console.log(b)
// function checkAdult(age){
//     return age>=22
// }

// tostring

// let a = ["sanjay","aman","rehman","karan"];
// let b = a.toString()
// console.log(b)

// valueOf()

// let a = ["sanjay","aman","rehman","karan"];
// let b = a.valueOf()
// console.log(b)

// fill()

// let a = ["sanjay","aman","rehman","karan"];
// let b = a.fill("ram")
// console.log(b)

// forEach

// let a = ["sanjay","aman","rehman","karan"];
// a.forEach(function(value,index){
//     console.log(value +" "+ index)
// });

// let a = ["sanjay","aman","rehman","karan"];
// a.forEach(check);

// function check(value,index){
//     console.log(value +" "+ index)
// }