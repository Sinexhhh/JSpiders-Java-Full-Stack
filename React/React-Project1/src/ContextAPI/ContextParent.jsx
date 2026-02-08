import React from 'react'
import ContextChild1 from './ContextChild1'
import MyContext from './Context'

const ContextParent = () => {
    let data="Global Data from Context Parent"
  return (
    <div>
      <h1>Context Parent</h1>
      <MyContext.Provider value={data}>
        <ContextChild1/>
      </MyContext.Provider>
    </div>
  )
}

export default ContextParent
