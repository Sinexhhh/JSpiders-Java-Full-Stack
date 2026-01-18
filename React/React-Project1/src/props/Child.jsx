import React from 'react'

const Child = ({str,isDev,obj}) => {
  return (

    <div>
        <h1>Child</h1>
        <h2>{str}</h2> 
        <h2>{isDev}</h2> 
        <h2>{obj}</h2>    
    </div>
  )
}

export default Child
