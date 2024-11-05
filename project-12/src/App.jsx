import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Blog from './component/Blog'
import Youtube from './Pages/Youtube'
import Navbar from './component/Navbar'
import Instagram from './Pages/Instagram'
import AboutCourse from './component/AboutCourse'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/about/:course' element={<AboutCourse/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/Blog' element={<Blog/>}>
            <Route path='Youtube' element={<Youtube/>}></Route>
            <Route path='Instagram' element={<Instagram/>}></Route>
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
