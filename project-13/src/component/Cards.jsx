import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation

const Card = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [sortItem, setSortItem] = useState("");

  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    try {
      let response = await axios.get('https://dummyjson.com/products');
      setData(response.data.products);
    } catch (error) {
      alert("Data not fetched");
    }
  };

  // Search Functionality
  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortItem === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setData(sortedData);
    setSortItem(sortItem === "asc" ? "desc" : "asc");
  };

  // Navigate to Product Details page
  const handleTitleClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to dynamic route
  };

  return (
    <div className="w-full h-full overflow-hidden p-4">
      <div className="w-full h-10 flex justify-around bg-gray-300">
        <input
          type="text"
          className="px-2 py-2 border border-gray-300"
          placeholder="Search Product"
          value={searchItem}
          onChange={handleChange}
        />

        <button
          className="px-2 py-2 border border-gray-500 hover:bg-gray-400 transition-all duration-300"
          value={sortItem}
          onClick={handleSort}
        >
          Sort By
        </button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-500">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-400 px-4 py-2">id</th>
            <th className="border border-gray-400 px-4 py-2">Title</th>
            <th className="border border-gray-400 px-4 py-2">Image</th>
            <th className="border border-gray-400 px-4 py-2">Brand</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100 transition-all">
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td
                className="border border-gray-300 px-4 py-2 cursor-pointer text-blue-500 hover:underline"
                onClick={() => handleTitleClick(product.id)} // Navigate on click
              >
                {product.title}
              </td>
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
  );
};

export default Card;
