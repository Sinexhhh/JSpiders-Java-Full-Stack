import React from 'react'
import Parent from './Parent'
const GrandParent = () => {
     let str = "Data from GrandParent"
    let obj={
        id : 1,
        objName : "obj"
            }
    let isDev=true        
  return (
    <div>
      <h1>GrandParent</h1>
        <h2>{str}</h2>
        <h2>{obj.id}</h2>
        <h2></h2>
      <Parent str={str} isDev={isDev} obj={obj}/>
    </div>
  )
}

export default GrandParent
