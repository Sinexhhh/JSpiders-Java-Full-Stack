import React, { useContext } from 'react'
import {MyContext2} from './ContParent'

const ContChild2 = () => {
    let {data,data2}=useContext(MyContext2)
  return (
    <div>
      <h1>Context Child 2</h1>
      <p>data:{data}</p>
      <p>data2:{data2}</p>

    </div>
  )
}

export default ContChild2

