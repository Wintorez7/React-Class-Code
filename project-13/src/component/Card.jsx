import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [sortItem, setSortItem] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    
    dataFetch()
      
  },[])

  const dataFetch = async() => {
    try {
      let response = await axios.get('https://dummyjson.com/products')
      setData(response.data.products)
    } catch (error) {
        alert("Data not fetch")
    }
  }

  //Handel search Functionality
  const handelChange = (event) => {
    setSearchItem(event.target.value)
  }

  const filterdata = data.filter((product) => {
   return  product.title.toLowerCase().includes(searchItem.toLowerCase())
  });


  const handleSort = () => {
    const sortData = [...data].sort((a,b) => {
      if(sortItem === "asc"){
        return a.title.localeCompare(b.title);
      }else{
        return b.title.localeCompare(a.title);
      }
    });
    setData(sortData)
    setSortItem(sortItem === "asc" ? "desc":"asc")
  }

  return (
    <div className='w-full h-full overflow-hidden p-4'>
         <div className='w-full h-10 flex justify-around bg-gray-300'>
              <input type="text" 
               className='px-2 py-2 border border-gray-300'
               placeholder='Search Product'
               value={searchItem}
               onChange={handelChange}
               />

              <button className='px-2 py-2 border border-gray-500 hover:bg-gray-400 
              transition-all duration-300'
              value={sortItem}
              onClick={handleSort}
              >Sort By</button>
         </div>
        <table className=' table-auto w-full border-collapse border border-gray-500'>
            <thead>
              <tr className='bg-gray-300 '>
              <th className="border border-gray-400 px-4 py-2">id</th>
              <th className="border border-gray-400 px-4 py-2">Title</th>
              <th className="border border-gray-400 px-4 py-2">Image</th>
              <th className="border border-gray-400 px-4 py-2">Brand</th>
              <th className="border border-gray-400 px-4 py-2">Price</th>   
              </tr>
            </thead>

            <tbody>
              {filterdata.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100 transition-all">
                <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                <td className="border border-gray-300 px-4 py-2 cursor-pointer">{product.title}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">{product.brand}</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">
                  ${product.price}
                </td>            
            </tr>
          ))}
            </tbody>
        </table>
    </div>
  )
}

export default Card