import React, { useState } from 'react'

const Task1 = () => {

  const[text,setText] = useState("");
  const countWords = () =>{
    let words = 0;
    let myText = text.trim()
    if(myText){
      for(let i=0; i < myText.length; i++){
        if(myText[i] == " "){
          words++;
        }
      }
      words = words + 1
    }
    return words
  }

  const removeLastWord = () => {
    let array = text.trim().split(" ")
    let updatedText = array.slice(0,array.length - 1).join(" ")
    setText(updatedText)
  }

  const removeLastChar = () => {
    setText(text.slice(0, -1))
  }

  return (
    <div>
        <div>
          <textarea className=' border-2 w-full h-[200px]' value={text} name="" id=""
          onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className='bg-green-400 py-4 px-2 text-2xl space-y-3'>
          <h1>No of Character: {text.trim().length}</h1>
          <h1>No of Word: {countWords()}</h1>
        </div>

        <div className='mt-2 space-x-3'>
          <button onClick={() => setText("")} className='bg-blue-500 text-white px-3 py-1 rounded-lg'>Remove Text</button>
          <button onClick={removeLastWord} className='bg-blue-500 px-3 py-1 text-white rounded-lg'>Remove Last Word</button>
          <button onClick={removeLastChar} className='bg-blue-500 px-3 py-1 text-white rounded-lg'>Remove First Word</button>
        </div>
    </div>
  )
}

export default Task1