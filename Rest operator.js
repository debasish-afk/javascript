// function sum(){
//     console.log(arguments)
//     let a = 0;
//     for(let i in arguments){
//         a += arguments[i];
//     }
//     console.log(a)
// }

// sum(20,40,56)


function sum(name,...args){
    console.log(arguments)
    let a = 0;
    for(let i in args){
        a += args[i];
    }
    console.log(a)
}

sum("juju",20,40,56)
