import React, { useState } from 'react'
// import Form from '../FormModal/Form'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Enroll from '../Enroll/Enroll'
import Lottie from "lottie-react";
import confuse from '../../assets/confuse.json'
import Mission from '../../components/Mission&Vision/Mission';
import VIsion from '../../components/Mission&Vision/VIsion';
import Landing from '../../components/landing/Landing';
import ProblemStatement from '../../components/ProblemStatement/ProblemStatement';
function Home() {
    const [FormActive, setFormActive] = useState(false)
    return (

        <>
            <Navbar />
            <Landing />
            {/* <Enroll/> */}
            <Mission />
            <VIsion />

            <ProblemStatement />
            {/* // <div className='HomeMainDiv'>
        //     {
        //         FormActive ?
        //             // <Form /> : null

        //     }
        // </div> */}

        </>
    )
}

export default Home