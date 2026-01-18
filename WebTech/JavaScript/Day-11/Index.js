// ~ 3. slice() to extract a portion of an array
// let newArr = arr.slice(1, 4); //* extract elements from index 1 to 3
// console.log(newArr); //* [25, 30, 45]


// ! 4. slice() to remove elements at a specific index
// ~Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// *it does not affect the original Array
// *it is used to reove the element from the
//* 
// let arr=['10','20','30','40','50']
// console.log(arr);
// let res=arr.slice(1,4)
// console.log(res);
// console.log(arr);
// let res2=arr.slice(3); //* If we are not passing the ending endes then it take the all length fro that passed index  for to slice
// console.log(res2);

//! 5.splice 
//* it is used for adding and removing and adding the element

//^Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//let arr=['10','20','30','40','50']

//let res=arr.splice(0,1,'hello');
//document.writeln(res);
//document.writeln(arr);

//! Flat method
// * Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//  let arr=[[[[[[[[1,3,4]]]]]]]]

//  let res=arr.flat(7);
//  console.log(res);
//  console.log(arr);


 //! Reverse methods in array
 //* Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
//*  it affects the original araray
// let arr =[1,2,3,4,4,4,5,6,6,66]
// let res=arr.reverse()
// console.log(res);
// console.log(arr); 

//Advance Array Functions
//find(callback): it returns the first matching element.
// if the element is not found, it returns undefined, it doesn't affect the original array.

// let arr=[10,20,30,40,50,60]
// console.log(arr)
// let res=arr.find((m)=>{
//     return m>28
// })
// console.log(res)
// console.log(arr)

//Que Reverse the String
// let str="qwerty"
// console.log(str.split("").reverse().join(""))

//some(callback):whether the specified callback function returns true for any element of an array.
//if condition was not matched by any element, it return false.

// let arr=[10,20,30,40,50,60]
// let res=arr.some((m)=>{
//     return m>40
// })
// console.log(res)

//every(callback):if all the elements passed by the condition, then it return true, else if any one of the element failed to pass the condition, it return false.

let arr=[10,20,30,40,50,60]
let res=arr.every((m)=>{
    return m>1
})
console.log(res)

