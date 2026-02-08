import React, { useState } from "react";
let data=["Notification","Notification2","Notification3","Notification4"];
const ConditionRendering2=()=>{
    let[message,setMessage]=useState(data);
    console.log(message.length)
    return <div>
    {/* //!Ternary Operator */}
    {message.length > 1 ? <sup>{message.length}</sup>:""}
    {/* //!Short-Circuit Operator */}
    {message.length>1 && <sup>{message.length}</sup>}
    </div>;
};
export default ConditionRendering2;