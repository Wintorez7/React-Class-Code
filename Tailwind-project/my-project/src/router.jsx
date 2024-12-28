import { createBrowserRouter } from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup';
import App from './App'
import Admin from './pages/Admin'
import Student from './pages/Student'
import Teacher from './pages/Teacher'

const  router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<h1>404 !! Page Not Found</h1>,
        children:[
            {
                path:"admin",
               element:<Admin></Admin>
            },
            {
                path:"/student",
                element:<Student/>,
                
            },
            {
                path:"/teacher",
                element:<Teacher/>,
                
            },
            {
                path:"/login",
                element:<Login/>,
                
            },
            
        ]
    } 
])

export default router;
