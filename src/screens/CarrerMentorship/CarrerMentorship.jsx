import React from 'react'
import './CarrerMentorship.css'
import Session from '../../components/Session/Session'
import Navbar from '../../components/navbar/Navbar'
import Works from '../../components/works/Works'
import Courses from '../../components/Courses/Courses'
import Courses1 from '../../components/Courses/Courses1'

const CarrerMentorship = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid mt-5'>

        <Session />
        <Works />
        <Courses1 />
      </div>
    </>
  )
}

export default CarrerMentorship
