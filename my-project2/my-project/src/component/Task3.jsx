import React, { useState } from 'react'

const Task3 = () => {

    const [circles, setCircles ]= useState([])
    function createcircle(){
        let obj ={
            isSelected : false,
            id:Math.trunc(Math.random()*100000)
        }
       setCircles([...circles,obj])
    }

    function selectCircle(id){
        let updatedCircles = circles.map((ele) => {
            if(ele.id == id ){
                ele.isSelected = !ele.isSelected
            }
            return ele
        })
        setCircles(updatedCircles)
    }

    function deleteCircle(){
        let updatetedCirlce = circles.filter(ele => !ele.isSelected)
        setCircles(updatetedCirlce)
    }


  return (
    <div className='w-full h-screen bg-green-400'>
        <div className='w-full flex justify-center bg-red-300 px-2 py-2 space-x-4'>
            <button onClick={createcircle} className='bg-blue-500 text-white px-3 py-1 rounded-lg'>Create</button>
            <button onClick={deleteCircle} className='bg-blue-500 text-white px-3 py-1 rounded-lg'>Delete</button>
        </div>

        <div className='flex justify-center space-x-4'>
            <div className='space-x-9 px-2 py-2'>
                <b>No of Circles :</b><b>No of selected Circle: </b>
            </div>
        </div>

        <div className='w-full h-screen py-3 px-3 flex-wrap flex flex-row space-x-5 bg-violet-400'>
           {
            circles.map(ele => {
                return  <div style={{background:ele.isSelected ? "red":"green"}} onClick={() => selectCircle(ele.id)} className='w-[100px] h-[100px] rounded-full bg-red-500'>
                        </div>
            })
           }
        </div>
           
    </div>
  )
}

export default Task3