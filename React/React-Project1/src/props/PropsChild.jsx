import React, { Fragment } from 'react'

const PropsChild = (props) => {
    console.log(props)
    let {data}=props 
    console.log(data)
  return (
    <div>
      <h1>Props Child</h1>
      {
        data.map((data)=>{
            // console.log(data)
        let {id,name,sal}=data;
        console.log(id)
        console.log(name)
        console.log(sal)    
        return(
            <Fragment key={id}>
                <p>{id}</p>
                <p>{name}</p>
                <p>{sal}</p>
            </Fragment>
        )
        })
      }
    </div>

  )
}

export default PropsChild
