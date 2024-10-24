import React, { Component } from 'react'

export class ErrorBounding extends Component {
    constructor(){
        super()
        this.state = {
            hasError:false
        }
    }
    static getDerivedStateFormProps(){
        console.log("getDerivedStateFormProps()");
        if(error){
            return {hasError:true}
        }
    }
    componentDidCatch(error,errorInfo){
        console.log("componentDidCatch()");
        console.log(error,errorInfo);
    }
  render() {
    return (
      <div>
        {
            this.state.hasError ? <h1>Something went wrong in application</h1>
                : this.props.children
        }
      </div>
    )
  }
}

export default ErrorBounding
