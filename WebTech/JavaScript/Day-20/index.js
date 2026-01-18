// There are two types for timing functions in javascript
// setTimeout(): It is a function which is used to call another function after some span of time. It will execute the functions only once set timeout function accepts two arguments where the first argument is the callback function. Which will be executed after some span of time and the second argument is the time in miliseconds to stop the set timeout function we use clearTimeout() function. clearTimeout accepts one argument where the argument is the refrence of the setTimeout().

let clear=setTimeout(()=>{
    console.log("Task-1")
},2000);
    console.log("Task-2")
    console.log("Task-3")

let btn=document.querySelector("button")
btn.addEventListener("click",()=>{
    clearTimeout(clear)
})


// setInterval(): It is the function which is used to call another function after every span of time it accepts two argument where the first argument is the callback function which will be executed after every span of time. To stop the setInterval Function we use clear interval. The clear interval function accepts one arguement where the argument is refrence of setInterval function.

let i=0
let clear1=setInterval(()=>{
    i++
    console.log("Task Completed",i)
},1000);

let btn1=document.querySelector("button")
btn.addEventListener("click",()=>{
    clearInterval(clear1)
})

// callback hell: It refers to the situation in javascript where multiple nested callback create complex deeply intended code often called as the pyramid of doom. This structure makes the code difficult to read and maintain code quality and stability.

setTimeout(()=>{
    console.log("User Logged In")
    setTimeout(()=>{
    console.log("User's Profile fetched")
    setTimeout(()=>{
    console.log("User's placed an order")
    setTimeout(()=>{
    console.log("Payment Successful")
    setTimeout(()=>{
    console.log("Order Received")
},200);
},200);
},200);
},200);
},200);

// Promises: It is an object. It tells about the eventual completion or failure of an asynchronus task. It accepts one callback function which accepts two arguments resolve and  rejected.

let pro=new Promise((resolve, reject) => {
    setTimeout(()=>{
        let result=true;

    if(result){
        resolve("Promise is resolved")
    }else{
        reject("Promise is rejected")
    }
    },2000)
    
})
console.log(pro)

// Promises Instance Methods: 
// Then: It will execute when the promises is fullfilled.
// Catch: It will execute when the promises is rejected.
// Finally: It will execute in both conditions, either the promises is fullfilled or rejected.

let party=new Promise((res, rej)=>{
    setTimeout(()=>{
        let partyStatus=true;
    if(partyStatus){
        res("You will give the Party")
    }else{
        res("You will not give the Party")
    }
    },5000) 
})

party
    .then((res)=>console.log(res))
    .catch((rej)=>console.log(res))
    .finally(console.log("First get the Placement"))