//Nested Function

function GrandPar(){
    console.log("Grand Parent")
    function Parent(){
        console.log("Parent")
    function Child(){
        console.log("Child")

    }
    Child()
    }

Parent()
}
GrandPar()

//When a function is returning another function is known as JavaScript Currying
//Clouser: in the nested function when the child/inner function trying to get the data then the clouser will 


function* genfun(){
    yield "100",
    yield 101,
    yield 102
}

let res=genfun()
console.log(res.next())
console.log(res.next()) 
console.log(res.next())                         
console.log(res.next())

function fz(){
                   
}
//The generative function has the next method it is object which stores 2 values.
// The value which is yielded by the generative function  
//It returns a boolean value which represents weather the generative function has completed its execution or not