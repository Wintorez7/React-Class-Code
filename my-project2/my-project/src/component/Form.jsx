import React, { useRef } from 'react'

const Form = () => {

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    function handleSubmit(event){
        event.preventDefault()
        let username = usernameRef.current.value
        let password = passwordRef.current.value
        console.log(username,password)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="username">UserName</label></td>
                        <td><input className='border-2 border-black' type="text" name="username" ref={usernameRef} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password</label></td>
                        <td><input className='border-2 border-black' type="password" name="username" ref={passwordRef} /></td>
                    </tr>
                    <tr>
                        <td><input className='bg-blue-400 px-3 py-1 ml-3 mt-3 rounded-lg'  type="submit" value="Login" /></td>
                    </tr> 
                </tbody>
            </table>
        </form>
    </div>
  )
}

export default Form