import React, { Component } from 'react'

export default class LifeCycleCbc extends Component {
    state={count:0}

    componentDidMount(){
        console.log("Component is Mounted")
    }
    componentDidUpdate(){
        console.log("Component is Updated")
    }  
    componentWillUnmount(){
        console.log("Component is Removed")
    }
  render() {
    return (
      <div>
        <h1>LifeCycleCbc:{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
      </div>
    )
  }
}
