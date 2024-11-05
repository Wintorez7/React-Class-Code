import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const AboutCourse = () => {
    let {course} = useParams()
    let result = useLocation()
    console.log(result)
  return (
    <div>{course}</div>
  )
}

export default AboutCourse