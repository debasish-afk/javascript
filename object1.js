let a = {
    fname : "debasosh",
    lname : "behera",
    age : 23,
    email : "hello@yahoo.com",
    favmovies : ['grey','avenger','civil war'],
    living : {
        'city' : 'baripada',
        'country' : 'india'
    },
    salary : function(){
        return 25000
    },
    fullname : function(){
        return this.fname +" "+ this.lname;
    }
}
// console.log(a)
// console.log(a.favmovies[2])
// console.log(a.salary())
console.log(a.fullname())
// console.log(a.living.country)