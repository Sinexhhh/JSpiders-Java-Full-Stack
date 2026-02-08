import React, { createContext } from 'react'
import ContChild1 from './ContChild1';

export let MyContext2=createContext()
const ContParent = () => {
    let data="Data-1";
    let data2="Data-2"
  return (
    <div>
      <h1>Context Parent</h1>
    {/* Step-2 */}
    <MyContext2.Provider value={{data,data2}}>
        <ContChild1/>
    </MyContext2.Provider>
    </div>
  )
}

export default ContParent
