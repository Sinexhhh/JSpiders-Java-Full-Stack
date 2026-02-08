import React, { createContext } from 'react'

export let MyContext3=createContext()
const ContextAPI3 = (props) => {
    console.log(props.children)
    let data="Global Data"
  return (
    <div>
      <h1>Context API3</h1>
      <MyContext3.Provider value={data}>
        {props.children}
      </MyContext3.Provider>
    </div>
  )
}

export default ContextAPI3
