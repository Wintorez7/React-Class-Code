import React from 'react'
import { useState } from 'react';

const FilterData = (props) => {
    let countryData = props.countryData;
    const [selectedCountry, setSelectedCountry] = useState("");
    const[selectedCity, setSelectedCity] = useState("")


    function handleCountryChange(event){
        const selected = countryData.find((country) => country.name === event.target.value)
        setSelectedCountry(selected || null)
        setSelectedCity("")

    }
    function handleCityChange(event){
        setSelectedCity(event.target.value)
    }
  return (
    <div>
        <label className='bg-green-400 px-2 py-1 '>Choose Country</label>
        
            <select onChange={handleCountryChange}>
                <option>select your country</option>
                {
                    countryData.map((data) => {
                        return(
                            
                              <option key={data.name} >{data.name}</option>
                            
                        )
                    })
                }
            </select>
            {selectedCountry && (
                 <div>
                 <label>Choose City</label>
                 <select onChange={handleCityChange}>
                     <option >Select your city</option>
                     {selectedCountry.cities.map((city) => (
                         <option key={city} value={city}>{city}</option>
                     ))}
                 </select>
             </div>
            
            )}
            {selectedCountry && (
                <h1 className='text-2xl font-semibold'>Welcome to {selectedCity},{selectedCountry.name}</h1>
            )}
             
           
           
        
    </div>
  )
}

export default FilterData