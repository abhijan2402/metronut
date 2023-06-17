import React from 'react'
import './CarrerMentorship.css'
import Session from '../../components/Session/Session'
import Navbar from '../../components/navbar/Navbar'

const CarrerMentorship = () => {
  return (
    <>
    <Navbar />
    <div className='container-fluid mt-5'>

        <Session/>
    </div>
    </>
  )
}

export default CarrerMentorship
