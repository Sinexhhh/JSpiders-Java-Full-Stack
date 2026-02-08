import ReactMemoChild from "./ReactMemoChild";
import React, { useState } from "react";
const ReactMemoParent=()=>{
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>Parent, count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
            <ReactMemoChild/>
        </div>
    )
}
export default ReactMemoParent;