import "react-toastify/dist/ReactToastify.css";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'//provide component to connect store
import store from "./redux/store.js"; // store reference

createRoot(document.getElementById('root')).render(
 
   <>
      <Provider store={store}>
        <App />
      </Provider>
      
   </>
  
)
