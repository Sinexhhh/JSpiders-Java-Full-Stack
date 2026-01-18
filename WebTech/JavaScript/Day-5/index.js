for(let i=0;i<=10;i++){
    document.writeln(i)
}
console.log("\n");
i=0
while(i<=10){
    document.writeln(i)
    i++;
}
j=0
do{
    document.writeln(j)
    j++;
}
while(j<=10);

//Function:It is a reusable block of code it follows DRY Principle.DRY-Do Not Repeat Yourself.
//Function Calling Function Invoking

function barfidevi(){
    i=0
   while(i<=100){
    document.writeln("Sorry")
    i++;
} 
}
barfidevi()
// Arguments: The values that are passed, while calling the function, it is called arguments.

//Parameter: The values that are accepted by the function, inside the paranthesis, is is called Parameters. 

function sum(a,b){
   document.writeln(a+b)
} 
sum(10,29)
sum(100,200)

//Argument: It is object. it stores the data that are passed while calling the function.
function sum(a,b){
   document.writeln(a+b)
} 
sum(10,29)
sum(100,200)