import React,{useState} from 'react'


const Task2 = () => {
    const [red,setRed] = useState("")
    const [green,setGreen] = useState("")
    const [blue,setBlue] = useState("")
    const [color,setColor] = useState("")

   const generateColor = () => {
    if(red <= 255 && green <= 255 && blue<=255){
        setColor(`rgb(${red},${green},${blue})`)
    }
    else{
        alert("Values Cant't be more than 255")
    }
   } 



  return (
    <div  className='w-[50%] h-[50%] space-x-3 px-2 py-4 bg-green-400'>
        <div>
            <label>Red</label>
            <input type="number" value={red}
          onChange={(e) => setRed(e.target.value)} />
            <label>Green</label>
            <input type="number" value={green} placeholder='0-255'onChange={(e) => {e.target.value}} />
            <label>Blue</label>
            <input type="number" value={blue} placeholder='0-255'onChange={(e) => {e.target.value}} />
        </div>
        <div className='mt-4 space-x-4'>
            <button onClick={generateColor} className='bg-blue-500 text-white px-3 py-1 rounded-lg'>Show Color</button>
            <button  className='bg-blue-500 text-white px-3 py-1 rounded-lg'>Show Ramdom Color</button>
        </div>
        <div className='w-[40%] mt-5 h-[40%] bg-white' style={{backgroundColor:color}}>
        
        </div>
    </div>
  )
}

export default Task2