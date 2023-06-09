import React, { useState } from 'react'
// import Form from '../FormModal/Form'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
function Home() {
    const [FormActive, setFormActive] = useState(false)
    return (

        <>
        <Navbar />
        <div>Hello</div>
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