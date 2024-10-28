import React, { useState } from 'react'

const FilterData = (props) => {
    let courses = props.courses
    let [selectCourse, setSelectCourse] = useState("")

    const getCourse = () => {
        let allcourse = []
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allcourse.push(course)
            })
        })
        return allcourse;
    }
    
    const sendDataHandler = (course) => {
        setSelectCourse(course); 
    };
  return (
    <div className='flex w-full h-full'>  
        <div className='w-full h-full'>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Course Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {getCourse().map((course) => (
                        <tr key={course.id} style={{ borderBottom: '1px solid #ddd' }}>
                          <td onClick={() => sendDataHandler(course)} style={{ border: '1px solid #ddd', padding: '8px', cursor:'pointer' }}>{course.title}</td>
                          <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.description.substr(0,90)}</td>                
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> 
        <div className='bg-green-500 w-[70%] flex justify-center '>
             <div className='w-[300px] text-white rounded-lg bg-black mt-[10rem] h-[300px]'>
                    {selectCourse ? (
                            <div className='px-3 py-2'>
                                <h3 className='text-2xl font-semibold'>{selectCourse.title}</h3>
                                <p className='mt-2'>{selectCourse.description}</p>
                            </div>
                        ) : (
                            <p className='text-xl px-3 py-2 font-semibold'>Select a course to view details</p>
                        )
                    }
                    
             </div>      
        </div>      
    </div>
  )
}

export default FilterData