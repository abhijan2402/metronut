import React from 'react'
import './CarrerMentorship.css'
import Session from '../../components/Session/Session'
import Navbar from '../../components/navbar/Navbar'
import Works from '../../components/works/Works'
import Courses from '../../components/Courses/Courses'
import Works1 from '../../components/works/Works1'

const CarrerMentorship1 = () => {
    return (
        <>
            <Navbar />
            <div className='container-fluid mt-5'>

                <Session />
                <Works1 />
                <Courses />
            </div>
        </>
    )
}

export default CarrerMentorship1
