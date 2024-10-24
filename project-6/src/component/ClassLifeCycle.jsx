import React, { Component } from 'react'

export class ClassLifeCycle extends Component {

    constructor(){
        super()
        this.state = {
            name:"Virat",
            count:0
        }
    }
    static getDerivedStateFormProps(props, state){
        // this is the second method of mounting phase
        //used to change the state by using props values
        console.log("This is getDerivedStateFormProp");
        return {name:props.name}
    }

    componentDidMount(){
        //the last or final method of mounting phase
        //use to handle the component's side effect after initail render
        //this this method execute only for oce in component life cycle
        console.log("this is componentDidMount() ");
    }
    shouldComponentUpdate(){
        //this is 2nd mthod of updating phase
        //this method returns a boolean value which define the component re render
        console.log("this is shouldComponentUpdate()");
        return true
    }
    getSnapshotBeforeUpdate(){
        //the 4th method of updating phase
        //has the access to previous props and state after updation
    }

    componentDidUpdate(){
      // the last method of updating phase
      // hanle the side effects of the component after updation
      console.log("This is componentDidUpdate")
    }

    componentWillUnmount(){
      //this is method of unmounting phase
      //this method executes right before the component is going to remove from DOM
      console.log("componentWillUnmount()")
    }

  render() {
    console.log("this is Render()")
    return (
      <div className='bg-red-400 text-2xl space-y-5 font-semibold px-2 py-2'>
        <h1>Class component LifeCycle method</h1>
        <h2>name:{this.state.name}</h2>
        <h2>Count:{this.state.count}</h2>
        <h2>props Name: {this.props.name}</h2>
        <button className='bg-green-500 px-2 py-1 rounded-lg' onClick={() => this.setState({count: this.state.count + 1})}>Change Count</button>
      </div>
    )
  }
}

export default ClassLifeCycle
