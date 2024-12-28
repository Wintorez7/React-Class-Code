import { Outlet } from 'react-router-dom'
import './App.css'
import Menu from './component/Menu'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {
  return (
    <>   
      <div className='flex min-h-screen w-screen'>
        {/* Left Sidebar */}
        <div className='w-[20%] sm:w-[16%] md:w-[12%] lg:w-[10%] bg-slate-100'>
          <Menu />
        </div>
        {/* Right Content */}
        <div className='w-[80%] sm:w-[84%] md:w-[88%] lg:w-[90%] bg-green-400 flex flex-col relative'>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
