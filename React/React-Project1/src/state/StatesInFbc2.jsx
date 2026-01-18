import {useState} from 'react'
export const StatesInFbc2=()=>{
    let[count, setCount]=useState(0)
    function increament(){
        setCount(++count)
    }

    function decrement(){
        setCount(--count)
    }
   return(
    <div>
        <h1>{count}</h1>
        <button onClick={increament}>Increament</button>
        <button onClick={decrement}>Decreament</button>
        <button onClick={()=>setCount(0)}>Reset</button>

    </div>
   ) }