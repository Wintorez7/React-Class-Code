import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
         <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/product/' element={<Product/>}></Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
