
export const Nav = () => {
  return (
    // Navbar
    <div className="w-full h-[5rem] bg-black items-center flex flex-row justify-between" >
        <div className="bg-blue-600 flex justify-center items-center text-lg rounded-xl h-[50px] ml-5 w-[100px]">
            <p className="text-white">Logo</p>
        </div>

        <div className=" space-x-10 text-white font-semibold">
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Our Services</a>
            <a href="">Our Products</a>
        </div>

        <div className="mr-5 bg-blue-600 rounded-xl text-white hover:bg-blue-800 transition-all duration-300 font-semibold px-5 py-3 space-x-">
            <button>Login / Signup</button>
            
        </div>
    </div>
  )
}
