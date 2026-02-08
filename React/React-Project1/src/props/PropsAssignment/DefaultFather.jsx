import React from 'react'
import DefaultChild from './DefaultChild'

const DefaultFather = () => {
    let str="Data from Parent Component"
  return (
    <div>
      <h1>Default Father</h1>
      <DefaultChild str={str}/>    
      <DefaultChild />
    </div>
  )
}

export default DefaultFather
