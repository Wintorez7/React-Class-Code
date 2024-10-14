import logo from '../assets/Amazon-logo.jpg'

const Aside = () => {
  return (
    <div className="flex flex-row w-full h-screen">
        <aside className="bg-orange-500 flex flex-col w-[20rem]">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="h-screen flex flex-col justify-end text-2xl font-semibold items-center 
             space-y-10 mb-[2rem] text-white">
               <p>School Name</p>
               <p>Place</p>
               <p>Course</p> 
            </div>
            
        </aside>
        <div className="bg-violet-500 w-full">

        </div>
        
     
    </div>
 
  )
}

export default Aside