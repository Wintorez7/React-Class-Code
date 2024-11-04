import React from 'react'
import Child from './Child'

function HOC (CallBack){
    const NewComponent = (props) => {
        let additionalprops = {}
        if(props.name == "start"){
            additionalprops.bg = "red";
            additionalprops.color = "white"
        }
        if(props.name == "Stop"){
            additionalprops.bg = "yellow"
            additionalprops.color = "Black"
        }
        return (
            <>
                <CallBack {...props} {...additionalprops}/>
                
            </>
        )
    }
    return NewComponent
}

export const MyButton = HOC(Child)