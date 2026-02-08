import React from 'react'
import { useContext } from 'react'
import MyContext from './Context'
const ContextChild2 = () => {
    let ContextData=useContext(MyContext);
  return (
    <div>
      Context Child 2:{ContextData}
    </div>
  )
}

export default ContextChild2
