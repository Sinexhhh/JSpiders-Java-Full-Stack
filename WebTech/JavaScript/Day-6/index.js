//When we store a function inside a variable it is called a function with expression
//the stored function that is passed to the variable it is known as first class function or first citizen function
console.log("Sinexhhh")
let fun=()=>{
    console.log("function with expression")
}
fun()

//IIFE: Immidiate Invoke Function Expression
(()=>{
    console.log("IIFE Function")
})()

/*(function(){
    console.log("IIFE Function-2")
})()*/

//Higher Order Function: Higher order function accepts a function and return a function
//Call Back Function: a fucntion which is passed as an argument to another function

function HOF(a,b, callback){
    console.log(callback)
    return callback(a,b)
}
HOF(119,20,(a,b)=>{
    console.log(a+b)
})

function HOF(a,b){
    return callback(a,b)
}

function callback(){
    console.log(a+b)
}
HOF(10,20,callback)

//Default Parameter: