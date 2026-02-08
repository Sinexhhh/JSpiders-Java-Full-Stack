import React from 'react'
import ContParent from "./ContParent"
import ContChild from "./ContChild"
import ContextAPI3 from "./ContextAPI3"
const ContGrandParent = () => {
  return (
    <div>
      <h1>Grand Parent</h1>
      <ContextAPI3>
        <ContParent/>
        <ContChild/>
      </ContextAPI3>
    </div>
  )
}

export default ContGrandParent
