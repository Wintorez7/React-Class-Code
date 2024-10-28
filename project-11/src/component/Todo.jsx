import React, { useState } from 'react'
import {toast} from "react-toastify"

const Todo = () => {

    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("")
    const [editId, setEditId] = useState(null)

    const addTask = () => {
        if(task.trim()){
            let obj = {
                task: task,
                id: Math.trunc(Math.random()* 1000)
            }
            setTodos([...todos,obj])
        }
        else{
           
            toast.warning("write task before adding")
        }
    }

    const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const editTask = (id) => {
        setEditId(id)
        let task = todos.find(ele => ele.id === id)?.task
        setTask(task)
        
    }

  return (
    <div className='bg-gray-500 w-full flex justify-center  h-screen'>
        <div className='bg-green-400 w-[50%] rounded-lg mt-5 h-[90%]'>
           <div className='px-4 py-5 flex flex-row'>
                <input className='w-[100%] h-[40px] px-3 py-2 rounded-lg' type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <button className='bg-blue-500 ml-5 px-4 py-2 text-white rounded-lg hover:bg-blue-600 transition-all duration-300'  onClick={addTask}>{editId ? "Update":"Add" }</button>            
           </div>

           <div>
                { todos.map(ele => {
                        return <div key={ele.id}>
                            <div  className='w-[95%] px-3 py-2 mx-auto mt-4 rounded-lg bg-white'>
                                <h1 className='text-xl'>{ele.task}</h1>
                            </div>
                            <div className='ml-3'>
                                <button className='ml-1 bg-blue-500 mt-2 px-4 py-2 text-white rounded-lg hover:bg-blue-600 transition-all duration-300' onClick={() => editTask(ele.id)}>
                                    {editId ? "Update":"EDIT"}
                                </button>
                                <button className='ml-2 bg-blue-500 mt-2 px-4 py-2 text-white rounded-lg hover:bg-blue-600 transition-all duration-300'
                                onClick={() => deleteTask(ele.id)}>Delete</button>
                            </div>

                        </div>
                    })
                }
           </div>
           
        </div>
    </div>
  )
}

export default Todo