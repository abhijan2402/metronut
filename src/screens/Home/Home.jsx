import React, { useEffect, useState } from 'react'
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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000); // Delay before opening the spinner (in milliseconds)
    
        return () => clearTimeout(timer);
      }, []);

      if(isLoading) (
        <div>Loading...</div>
      )
    return (

        <>
            
            <Landing />
            {/* <Enroll/> */}
            <Mission />
            <VIsion />

            <ProblemStatement />
            {/* <Footer /> */}
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