// class employee{
//     constructor(name){
//         console.log("constructor : employee  "+ name)
//     }
// }
// class manager extends employee{

// }
// let a = new manager("yahoo baba")


class employee{
    constructor(name){
        console.log("constructor : employee  "+ name)
    }
}
class manager extends employee{
    constructor(name){
        super();
        console.log("constructor : employee  "+ name)
    }
}
let a = new manager("yahoo baba")