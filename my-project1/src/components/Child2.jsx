import React, { Component } from 'react'

export class Child2 extends Component {

    constructor(){
        super();
        this.count = 0
        this.state={
          count:1
        }
    }
    increment=() => {
      this.setState({count:this.state.count + 1})//async
      console.log(this.state.count)
    }

    decrement=() => {
        // this.count = this.count - 1
        this.setState({count:this.state.count - 1})//async
        console.log(this.state.count)
    }

  render() {
    console.log(this);
    
    return (
      <>
        <div>
            <div className=''>Class component</div>
            <div  className='bg-red-400 px-2 py-2 w-full space-x-4'>
                <button className='bg-green-400 px-3 py-1 rounded-lg' onClick={this.increment}>+</button>
                <b>{this.state.count}</b>
                <button className='bg-green-400 px-3 py-1 rounded-lg' onClick={this.decrement}>-</button>
            </div>
        </div>
      </>
    )
  }
}

export default Child2
