import React from 'react'

const DefaultChild = ({str="default Data"}) => {
  return (
    <div>
      <h1>DefaultChild:{str || "Default Data"}</h1>
    </div>
  )
}

export default DefaultChild
