import React, { useState } from 'react'
// import Form from '../FormModal/Form'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Enroll from '../Enroll/Enroll'
import Lottie from "lottie-react";
import confuse from '../../assets/confuse.json'
function Home() {
    const [FormActive, setFormActive] = useState(false)
    return (

        <>
            <Navbar />
            <Enroll/>
            {/* <Lottie animationData={confuse} style={{ width: "10%", height: "10%" }} />
            <div>Hello</div> */}
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