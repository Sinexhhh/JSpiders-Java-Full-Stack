import React from 'react'
import Child from './Child'
const Parent = (props) => {
           let {str,isDev,obj}=props
  return (
    <div>
        <h1>Parent</h1>
        <h2>{str}</h2>
        <h2>{obj.id}</h2>
        <h2></h2>
      
        <Child str={str} isDev={isDev} obj={obj}/>
    </div>
  )
}

export default Parent
