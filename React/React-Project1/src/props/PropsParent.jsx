import React from 'react'
import PropsChild from './PropsChild'

const PropsParent = () => {
    let data=[
        {id:1, name:"abc", sal:1234},
        {id:2, name:"adc", sal:8234},
        {id:3, name:"fbc", sal:3234},
        {id:4, name:"tbc", sal:7234},
        
    ]
  return (
    <>
    <h1>jjnfkj</h1>
    <h2>jfnefq</h2> 
    <h3>f33f3fq</h3>
    <PropsChild data={data}/>
    </>
  )
}

export default PropsParent
