import { useMemo } from "react";
import React, { useState } from "react";
const UseMemo=()=>{
    let[count, setCount]= useState(0);
    let[displayCount, setDisplay]= useState(0);
    console.log("Display Count is ${displayCount}")
    let expensiveFn=()=>{
        console.log("Function is executed")
        let res=0;
        for(let i=0;i<1000000000;i++){
            res=count;
        }
        return res;[]
    }
    useMemo(expensiveFn, [count])
    return(
        <div>
            <h1>Use Memo Hook</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
            <h2>Display Count: {displayCount}</h2>  
            <button onClick={()=>setDisplay(displayCount+1)}>Increment Display Count</button>
        </div>
    )
}
export default UseMemo(UseMemo);