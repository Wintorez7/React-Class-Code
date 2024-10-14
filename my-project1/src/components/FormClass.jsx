import React, { Component } from 'react'

export class FormClass extends Component {

    constructor(){
        super();
        this.state={
          text:""
        }
    }
    Changetext = (event) => {
        this.setState({text:event.target.value})
    }

  render() {
    return (
      <div className=" flex justify-center items-center bg-[linear-gradient(90deg,_rgba(61,80,203,1)_24%,_rgba(219,11,205,1)_57%)] w-full h-screen">
        <div className='w-[500px] h-[400px] rounded-xl px-2  bg-white'>

            <h1 className='text-black mt-2 text-2xl font-semibold'>Classbased Form Component</h1>
            
            <input className='mb-[2rem] border-solid border-2 border-black px-2 py-1 rounded-lg'
             onChange={this.Changetext} type="text" value={this.state.text}/>
            <h2>{this.state.text}</h2>
        </div>
      </div>
    )
  }
}

export default FormClass
