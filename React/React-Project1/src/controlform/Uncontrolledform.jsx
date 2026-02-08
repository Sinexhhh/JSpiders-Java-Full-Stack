import React, { useRef } from "react";
const Uncontrolledform = () => {
    let userNameRef=useRef();
    let EmailRef=useRef();

    function handleSubmit(e){
        e.preventDefault();
        let formData={
            name:userNameRef.current.value,
            email:EmailRef.current.value
        }
        console.log(formData);
       
    }
    return (    
        <div>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={userNameRef}/>
            <input type="email" ref={EmailRef} />
            <button type="submit">Submit</button>
        </form>
        </div>

);
}
export default Uncontrolledform;