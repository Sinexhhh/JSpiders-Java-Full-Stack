import React, { Component } from 'react'

export default class Cbc extends Component {
    state={
        count:0
    }
    Increament=()=>{
        this.setState({count:this.state.count+1})
        console.log(this.state.count)
    }
    decreament=()=>{
        this.setState({count:this.state.count-1})
        console.log(this.state.count)
    }
    Reset=()=>{
        this.setState({count:0})
        console.log(this.state.count)
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increament}>Increament</button>
        <button onClick={this.decreament}>Decreament</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    )
  }
}
