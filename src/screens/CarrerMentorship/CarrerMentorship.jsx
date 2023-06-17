import React from 'react'
import './CarrerMentorship.css'
import Session from '../../components/Session/Session'
import Navbar from '../../components/navbar/Navbar'
import Works from '../../components/works/Works'
import Courses from '../../components/Courses/Courses'

const CarrerMentorship = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>

        <Session />
        <Works />
        <Courses />
      </div>
    </>
  )
}

export default CarrerMentorship
