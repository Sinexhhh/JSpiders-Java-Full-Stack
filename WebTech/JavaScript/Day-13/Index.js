
let data=document.getElementById("one")
console.log(data)
let data1=document.getElementsByClassName("cls")
console.log(data1)
let data2=document.getElementsByTagName("p")
console.log(data2)
let data3=document.querySelector(".cls")
console.log(data3)
let data4=document.querySelectorAll(".cls")
console.log(data4)

//accessing the attributes
let inp=document.querySelector("#inpTag")
console.log(inp)
console.log(inp.type)
console.log(inp.name)
console.log(inp.placeholder)

//~Updating the value of the Attributes
inp.type="password"

//~adding new Attributes
inp.minLength=100

//& getAttribute(): It is a method for accessing the HTML attributes.
console.log(inp.getAttribute("type"))
console.log(inp.getAttribute("placeholder"))
//& setAttribute(): It is a method for adding the HTML attributes.
inp.setAttribute("type","radio")

//~
//*innerHTML: It gives the the content as well as the tags in which the content is present.
//*inner.Text: It gives only the content.
//*textContent: It gives the content with the extra spaces, as it is written in the HTML.
let head=document.querySelector("#dii")
console.log(head.innerHTML)
console.log(head.innerText) 
console.log(head.textContent) 

head.style.color="red"
head.style.fontSize="50px"
head.style.fontFamily="Algerian"

head.style.cssText="color:green;fontSize:100px;fontFamily:Algerian"

//~Internal or External Styling

// classList.add() //used for adding the class
// classList.remove() //used for removing the class
// classList.toggle() //if class is already present, it removes the class, if class is not present, it adds the class.

lethead=document.querySelector("dii")
head.classList.add("heading")
head.classList.remove("heading")
head.classList.toggle("heading")