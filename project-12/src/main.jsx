import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
   <>
     <App />
     <ToastContainer/>
   </>
  
)