import React, { useState } from 'react'

const FbcState = () => {
    let a=10;
    useState
    let Increament=()=>{
        a=a+1
        console.log(a);
    }

  return (
    <div>
       <h1>{a}</h1> 
       <button onClick={Increament}>Increament</button>
      FBC State Comp
    </div>
  )
}

export default FbcState
