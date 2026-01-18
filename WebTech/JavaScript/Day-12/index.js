//! Map(Callback)
// Call a defined callback function on each element of an array, and return an array
// It doesn't change the original array

// let arr =[10,20,50,100,200,250]

//? Example-1
// let res=RTCRtpReceiver.map((m)=>{
//     return m=50
// })
// console.log(res)

//? Example-2
// console.log(arr)

// function cb(m){
//     return m+"JavaScript"
// }
// let res2=arr.map(cb)
// console.log(res2)

// console.log(arr)


// !Filter() :-Returns the elements of an array that meet the condition specified in a callback function.

//Example-1
// let marks=[58,35,23,88,91,65]
// let passingMarks=marks.filter((m)=>{
//     return m>40
// })
// console.log(passingMarks)

//Example-2
// let no=[3,54,12,8,33,92]
// console.log(no)
// let even=no.filter((m)=>{
//     return m%2===0
// })
// console.log(even)
// console.log(no)

//reduce() Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// Example=1
// let no=[1,2,5,7,10]
// let res=no.reduce((acc,currVal)=>{
//     return acc+currVal
// },10 //accumulator
// )
//  console.log(res)

// Example=2
// let no=[1,2,5,7,10]
// let res=no.reduce((acc,currVal)=>{
//     return acc*currVal
// },10 //accumulator
// )
// console.log(res)


//!sort() Sorts an array in place. This method mutates the array and returns a reference to the same array.

// let arr3=[10,20,11,30,23,50,29]
// Ascending Order
// let res=arr3.sort((a,b)=>{
//     return a-b
// })
// console.log(res)

// Descending Order
// let res1=arr3.sort((a,b)=>{
//     return b-a
// })
// console.log(res1)


// Object It's a Non-Primitive datatype it stores the data in the form of key and     value pairs. Key and Value pair are seperated by colons.
// Keys and Value pairs together it's known as a property
// two property are seperated by comma(,)
// let empDetails={
//     empId:1,
//     empName:"Sinexhhh",
//     age:22,
//     isMarried:false,
//     skills:["HTML","CSS","JS","React"],
//     address:{
//         pinCode:125055,
//         hNo:1138,
//         street:23,
//         details:[{details:()=>{
//             console.log("Mujhe Ghar Jana Hai")
//         }}]
//     },
//     printName:()=>{
//         console.log("My Name is Sinexhhh")
//     }
// }
// console.log(empDetails)
// console.log(empDetails.skills)
// console.log(empDetails.skills[3])

// console.log(empDetails.address.hNo)
// empDetails.printName()
// console.log(empDetails.address.details[0].details//Function call will never executes the function it will only print the function
//     )
// empDetails.address.details[0].details()//Function call will never executes the function it will only print the function

// Updation in Array    
// console.log(empDetails.empName)
// empDetails.empName=null
// console.log(empDetails.empName)

// Deletion in Array    
// console.log(empDetails)
// delete empDetails.address
// console.log(empDetails)

//~ object literal way
// let obj={
//     name:"John",    
//     age:30,
//     city:"New York"
// };
// console.log(obj)

// Constructor Way
// let obj2=new Object({sal:12345,address:"xyz"})
// console.log(obj2)

// Object.create():creates and Object that has the specified prototype 
// let obj3= Object.create(obj2)
// obj3.age=15;
// console.log(obj3)
// console.log(obj3.age)
// console.log(obj3.sal)

// Prototype:-It is an object.In JavaScript, every object has an internal link to another object called its prototype.
//Prototype Inheritence:Prototypal Inheritance is a feature in JavaScript where objects inherit Properties and methods directly from other objects, forming a "Prototype chain"

// console.log(String.prototype)
// console.log(Object.prototype)
// console.log(Array.prototype)

// let obj=new Object({id:1})
// console.log(obj.__proto__)

// let str=new String("Qwerty")

// function constructorFn(id,name,add){
//     console.log(this)
//     this.no=id
//     this.eName=name
//     this.address=add
// }
// let obj=new constructorFn(101,"sinesh","zyx")
// console.log(obj)

// ! use-strict: The purpose of "use-strict" is to indicate that the code should be executed in "strict mode".
// ! this: pointing mechanism, it will point to the object.

// Under non-strict, inside the function, it will point to the window
// Under strict mode, inside the function, it will point to the undefined.

// *use strict*
// console.log(this)

// function abc(){
//     console.log(this)
// }
// abc()

// let obj={
//     id: 1,
//     print:function(){
//         console.log(this)//obj
//     },
//     print2:()=>{
//         console.log(this)//window
//     }
// }

//obj.print()
// obj.print2()

//Define Property
// let obj={}
// Object.defineProperty(obj,"name",{
//     value:"abc"
// })
// console.log(obj)

//Define Properties
// let obj2={}
// Object.defineProperties(obj2,{
//     "name":{value:"xyz"},
//     "age":{value:100},
//     "sal":{value:1234}
// })
// console.log(obj2)

//~Object.keys():it returns all the keys present inside the obj in the form of array.
// console.log(Object.keys(obj))

//~Object.values():it returns all the values present inside the obj in the form of array.
// console.log(Object.values(obj))

//~Object.entries():it returns all the keys as well as values, in the form of nested array.
// console.log(Object.entries(obj))

//~Object.entries() :Returns an array of key/values of the enumerable own properties of an object
// let arr=[["id",1],["name","abc"],["age",21]]


// let obj={
//     name:"John",    
//     age:30,
//     city:"New York"
// }
// console.log(Object.entries(obj))

// Object.freeze(obj):Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

// console.log(obj)
// obj.skills="HTML"
// obj.name="xyz"
// delete obj.city
// console.log(obj)

// Object.isFrozen() :Returns Boolean value, Returns True if the obj is Freezed and False when the obj is not freezed.
// console.log(Object.isFrozen(obj))

// Object.seal(obj): The modification of attributes of existing properties is allowed, and prevents the addition of new properties, and deletion of existing properties.

//Updation of existing property --> Allowed
// obj.age=21

//Addition of existing property --> Allowed
// obj.newProp="abc"

//Deletion of existing property --> Allowed
// delete obj.skills

// Object.isSealed() :Returns Boolean value, Returns True if the obj is Seal and False when the obj is not Seal.

// console.log(Object.isSealed(obj))

// Object.assign(target, source):Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// let obj={
//     id:1,
//     name:"A"
// }

// let obj2=Object.assign({}, obj)
// console.log(obj2)
// let arr=Object.assign([],obj)
// console.log(obj2)


// Advance Loops

//!for-in
// let obj={
//     id:"9",
//     ename:"hvhj",
//     age:56,
//     sal:876,
//     skills:"js"
// }

// for(let key in obj){
//     console.log(key,":",obj[key])
// }

//for-of

// //Array
// let arr=[1,"A",true,null,"Qwerty"]
// for(let element of arr){
//     console.log(element)
// }

// //String
// let str="Qwertyyyy"
// for(let abc of str){
//     console.log(abc)
// }

//set

// let newSet=newSet([1,2,3,3,2,1,5,7])
// for(let data of newSet){
//     console.log(data)
// }

//forEach()

// let arr1=["A","B","C","D","E"]
// arr1.forEach((val,index,element)=>{
//     console.log(val,index,element)
// })

//DeStructuring 
//~DeStructuring in Array

// let arr=["A",1,true,null,["HTML"],12n]

// let[a,b,c,...spreadingData]=arr //Can Create 
//  console.log(a)
//  console.log(b)
//  console.log(c)
//  console.log(spreadingData)

// let[ , ,a,b]=arr
// console.log(a)
// console.log(b)

//~DeStructuring in Object

// let obj={
//     id:"1",
//     eName:"A",
//     age:12,
//     sal:12345,
//     skills:"CSS"
// }

// let{id,eName,sal,remainingData}=obj; //Same Key name will be used as defined in the Object
// console.log(id)
// console.log(eName)
// console.log(remainingData)

//~DeStructuring in Function
// let obj={id:"3",
//     eName:"E",
//     age:12
// }
// function fun(data){
//     let{obj}=data
//     let{age}=obj
//     console.log(age)
// }
// fun({obj})

// function rest(...obj){
//     console.log(obj)
// }
// rest(obj)

//Shallow copy Deep Copy
//& In JavaScript, Shallow copy creates a new object but shares refrences 
// let obj={
//     id:1,
//     eName:"Sinexhhh",
//     skills:"HTML",
//     companyDetails:{
//         cName:"XYZ",
//         cId:3,
//         cLocation:"def"
//     }

// }

//Way-1
//let newObj=Object.assign({},obj)
// //Way-2
// let newObj={...obj}

// newObj.eName="smg"
// newObj.companyDetails.cName="Qspiders"
// console.log("name :",obj.eName)
// console.log("name :",newObj.eName)
// console.log("name :",newObj.eName)
// console.log("cName :",obj.companyDetails.cName)
// console.log("cName :",newObj.companyDetails.cName)

//Way-3
// let newObj={}
// for(let keys in obj){
//     newObj[keys]=obj[keys]
// }

//Deep Copy
//Way-1
// let newObj=structuredClone(obj)
//Way-2
// let newObj=JSON.parse(JSON.stringify(obj))
// newObj.eName="smg"
// newObj.companyDetails.cName="Qspiders"
// console.log("name :",obj.eName)
// console.log("===================")
// console.log("name :",newObj.eName)
// console.log("cName :",obj.companyDetails.cName)
// console.log("cName :",newObj.companyDetails.cName)


//Make Bill
// let person1={
//     eName:"Rohit"
// }
// let person2={
//     eName:"Ritik"
// }
// let person3={
//     eName:"Arun"
// }
// function makeBill(sal, address){
//     console.log(`Name is ${this.eName} and sal is ${sal} and address is ${address}`)
// }
// //! Call
// makeBill.call(person1,50,"abc")
// makeBill.call(person2,1500,"abc")
// makeBill.call(person3,150,"abc")


//! Apply
// makeBill.apply(person1,[50,"abc"])
// makeBill.apply(person2,[150,"abc"])
// makeBill.apply(person3,[1500,"abc"])

//!Bind
// let p1=makeBill.apply.bind(person1,[50,"abc"])
// p1()
// let p2=makeBill.apply.bind(person2,[150,"abc"])
// p2()
// let p3=makeBill.apply.bind(person3,[1500,"abc"])
// p3()

// let d1=new Date()
// console.log(d1)
// console.log(d1.getDate())
// console.log(d1.getSeconds())
// console.log(d1.getMinutes())
// console.log(d1.getMonth())
// console.log(d1.getMilliseconds())
// console.log(d1.getFullYear())
// console.log(d1.getDay())

// let d2=new Date()
// let d3=new Date("2004-08-15")
// let d4=new Date(0)

// console.log(d2)
// console.log(d3)
// console.log(d4)

// console.log(d2.getTime())

// let d5=new Date("2004-08-15")
// let d6=new Date("2005-01-12")
// console.log(d6-d5)

//Math Object
console.log(Math.PI)
console.log(Math.E)
console.log(Math.pow(2,10))
console.log(Math.sqrt(4))
console.log(Math.cbrt(27))
//~ Math.floor :Returns the Smallest integer
console.log(Math.floor(3.7))
console.log(Math.floor(4.2))
console.log(Math.floor(1.8))
//~ Math.ceil :Returns the Greatest integer
console.log(Math.ceil(9.7))
console.log(Math.ceil(2.1))
console.log(Math.ceil(4.7))
//~ Math.abs() :Returns the absolute value of a number(also convert negative to positive)
console.log(Math.abs(-100))
//~ Math.trunc() :Removes any Fractional Value
console.log(Math.trunc(-100.99))
//~
console.log(Math.min(10,20,32,54,12))
console.log(Math.max(10,20,32,54,12))
//~ Math.random() :Returns a pseudorandom number between 0 and 1.
console.log(Math.floor(Math.random()*900000)+1000)

//~ Get a pseudorandom number between 0 and 6.


