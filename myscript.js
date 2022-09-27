// console.log("hello")
// var z = "hello world";
// z= "wow"
// z = 85
// console.log(z)
// var first, second
// first =45
// console.log(first)

// let firstname = "yahoo"
// firstname ="baba"
// console.log(firstname)

// const second = "hello"
// second = "world"
// console.log(second)

// datatype
// var x = ["ctml","css","js"];
// // x=undefined
// var z
// console.log(x)
// console.log(typeof x)

// x={
//     name : "yahoo",
//     country : "india"
// }
// x="34"
// console.log(x)
// console.log(typeof x)


// var a=10;
// var b=3;
// a**=b;
// console.log(a)

// var x=10;
// var y="10";
// console.log(null===undefined)

// if

// var a = "40";
// var b = "40";
// if(a===b){
//     console.log("juju")
// }

// logical operators

// var a = 10;
// var b = 10;
// console.log(!(a >=18))
// if (!a >=18){
//     console.log("you are eligible")
// }

// if else statement

// var name = "juju";
// var gender = "male"

// if(gender == "female"){
//     console.log("hello mr. " + name)
// }else{
//     console.log("helo miss. " + name)
//} 

// if elseif statement

// var per = 40;

// if(per>=80 && per<100){
//     console.log("1st division")
// }else if(per>=60 && per<80){
//     console.log("2nd division")
// }else if(per>=45 && per<60){
//     console.log("3rd division")
// }else if(per>=33 && per<45){
//     console.log("1st division")
// }else if(per<33){
//     console.log("1st division")
// }else{
//     console.log("put a valid per")
// }

// ternary operator

// var a=109;
// var b;
// (a==100)?b="true":b="false"
// console.log(b)

// var a=100;
// var b;
// b=(a==100)?"true":"false"
// console.log(b)

// var a=79;
// var b;
// b="value is " +(a>100?"true":"false")
// console.log(b)

// switch statement

// var day=5;
// switch(day){
//         case 0:
//         console.log("monday")
//         break;

//         case 1:
//         console.log("tuesday")
//         break;

//         case 2:
//         console.log("wednesday")
//         break;

//         case 3:
//         console.log("thursday")
//         break;

//         case 4:
//         console.log("friday")
//         break;

//         case 5:
//         console.log("saturday")
//         break;

//         case 6:
//         console.log("sunday")
//         break;
// }

// var day=2;
// switch(day){
//         case 0: case 1: case 2: case 3:
//         console.log("monday")
//         console.log("monday2")
//         break;

//         case 4:
//         console.log("friday")
//         break;

//         case 5:
//         console.log("saturday")
//         break;

//         case 6:
//         console.log("sunday")
//         break;
// }

// var age=25;
// switch(true){
        
//         case (age>=20 && age<30):
//         console.log("you are eligible")
//         break;

//         case (age>=30 && age<40):
//         console.log("you are not eligible")
//         break;

//         default: 
//         console.log("enter a valid date")
// }

// alert box

// var a=30
// var b=20
// if(a>b){
//     alert("value of a: "+a)
// }else{
// alert("value of a: "+b)
// }

// var a=30
// var b=20
// if(a>b){
//     alert(a+b)
// }else{
// alert("value of a: "+b)
// }

// confirm box

// var a=confirm("do you like our website")
// if(a){
//     alert("thanks")
// }else{
//     alert("sorry")
// }

// prompt box

// var a=prompt("what is your name")
// console.log(a)

// var per = prompt("enter your per:");

// if(per>=80 && per<100){
//     console.log("1st division")
// }else if(per>=60 && per<80){
//     console.log("2nd division")
// }else if(per>=45 && per<60){
//     console.log("3rd division")
// }else if(per>=33 && per<45){
//     console.log("1st division")
// }else if(per<33){
//     console.log("1st division")
// }else{
//     console.log("put a valid per")
// }

// functions

// function hello(){
//     console.log("hello everyone")
// }
// function yahoo(){
//     console.log("hello juju")
// }
// hello();
// hello();
// yahoo();
// yahoo();

// functions with parameter

// function hello(fname="mindu",lname="mani"){
//     console.log("hello "+fname+" "+lname)
// }
// function sum(a,b){
//     console.log(a+b)
// }
// sum(4.9,6)
// hello("juju","baba")
// hello("jsalu","baba")

// functions with return value

// function fullname(fname,lname){
//     var a = fname +" "+lname
//     return a;
// }
// var fn = fullname("ram","singh")
// console.log(fn)

// function sum(math,eng,sci){
//     var a = math+eng+sci
//     return a;
// }
// function percentage(tt){
//     var per = tt/300 *100;
//     console.log(per)
// } 
// var fn = sum(65,76,86)
// console.log(fn)
// percentage(fn)

// Global and local variable

// function hello(){
//     var a="yahoo baba"
// console.log(a)
// }
// hello()

// while loop

// var a=10;
// while(a>=1){
//     console.log(a +" juju")
//     a=a-1
// }

// do while loop

// var a=1;
// do{
//     console.log( a +" juju bro")
//     a++;
// }while(a<=10)

// for loop

// for(var a=1;a<=10;a++){
//     console.log("hello juju")
// }

// continue and break

// for(let a=1;a<=10;a++){
//     if(a==3){
//         console.log("how are you doing "+ a)
//         continue;
//     }
//     console.log("hello "+ a)
// }

// for(let a=1;a<=10;a++){
//     if(a==3){
//         console.log("how are you doing "+ a)
//         break;
//     }
//     console.log("hello "+ a)
// }

// even and odd number

// for(let a=1;a<=10;a++){
//     if(a%2==0){
//         console.log(a)
//     }
// }

// for(let a=1;a<=10;a++){
//     if(a%2!=0){
//         console.log(a)
//     }
// }

// nested loop

// for(let a=1;a<=100;a+=10){
//     for(let b=a;b<a+10;b++){
//         console.log(b)
//     }
// }

// for(let a=1;a<=5;a++){
//     for(let b=1;b<=a;b++){
//         console.log(b)
//     }
// }

// for(let a=1;a<=5;a++){
//     for(let b=1;b<=a;b++){
//         console.log(a)
//     }
// }

// for(let a=5;a>=1;a--){
//     for(let b=1;b<=a;b++){
//         console.log(a)
//     }
// }

// for(let a=5;a>=1;a--){
//     for(let b=a;b>=1;b--)
//     console.log(b)
// }

