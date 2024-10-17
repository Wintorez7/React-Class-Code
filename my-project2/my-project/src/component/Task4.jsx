import React, { useRef } from 'react'

const Task4 = () => {

   // const data = useRef("hello world")
    // console.log(data)
    const h1Tag = useRef(null)
    function changeHandler(){
        // data.current = "Hello JSpider";
        // console.log(data);
        h1Tag.current.innerHTML = "Good Evening"
        h1Tag.current.style.color = "white"
        h1Tag.current.style.padding = "10px"
        h1Tag.current.style.background = "green"     
        
    }
    const imgTag = useRef(null)
    function changeImage(){
    

        if(imgTag.current.id=="a"){ 
            imgTag.current.scr="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600"
            imgTag.current.id="b"
        }else{
            imgTag.current.scr="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600"
            imgTag.current.id="a"
        }
        
    }
    
  
    function DeleteImage(){
        imgTag.current.src = " ";
       
    }

  return (
    <div className='w-full h-full bg-green-300'>
        <h1 className='text-2xl px-3 py-3'>useRef() Hook</h1>
        <h2  className='text-2xl px-3 py-3' ref={h1Tag}>Good AfterNoon</h2>
        <button className='bg-blue-400 px-3 py-1 mb-[1rem] ml-3 mt-3 rounded-lg' onClick={changeHandler}>Click</button>

       <div>
          <img ref={imgTag} src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" id="a"/>
       </div>
        <div>
            <button className='bg-blue-400 px-3 py-1 ml-3 mt-3 rounded-lg' onClick={changeImage}>Click</button>
            <button  className='bg-blue-400 px-3 py-1 ml-3 mt-3 rounded-lg' onClick={DeleteImage}>Delete</button>
        </div>
    </div>
  )
}

export default Task4