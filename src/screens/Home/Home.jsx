import React, { useEffect, useState } from 'react'
// import Form from '../FormModal/Form'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Mission from '../../components/Mission&Vision/Mission';
import VIsion from '../../components/Mission&Vision/VIsion';
import Landing from '../../components/landing/Landing';
import ProblemStatement from '../../components/ProblemStatement/ProblemStatement';
import Works from '../../components/works/Works';
import Faq from '../../components/FAQ/Faq';
import FounderDesk from '../../components/FounderDesk/FounderDesk';
import CheckList from '../../components/CheckList/CheckList';
import VideoContent from '../../components/YouTubeSection/VideoContent';
import OurMentor from '../../components/OurMentor/OurMentor'
import Meente from '../../components/Meente/Mentee'
import Testimonial from '../../components/Testimonial/Testimonial';

function Home() {
  const [FormActive, setFormActive] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Delay before opening the spinner (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) (
    <div>Loading...</div>
  )
  return (

    <>
      <Navbar />
      <Landing />
      <Meente/>
      <Mission />
      <VIsion />
      <CheckList />
      <ProblemStatement />
      <Works />
      <VideoContent />
      <OurMentor/>
      <Testimonial />
      <div style={{ display: 'flex', justifyContent: 'center' }}>

        <Faq />
      </div>

      <FounderDesk />
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