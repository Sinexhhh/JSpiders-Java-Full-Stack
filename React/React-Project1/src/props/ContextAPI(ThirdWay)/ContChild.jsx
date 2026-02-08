import React, { useContext } from 'react'
import { MyContext3 } from './ContextAPI3'

const ContChild = () => {
    let globalData=useContext(MyContext3)
  return (
    <div>
      Context Child: {globalData}
    </div>
  )
}

export default ContChild
